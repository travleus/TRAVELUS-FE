import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getAllRegion, getRegionById, getRegionOrderByUseCount, Region } from '@apis/region';
import { Page } from '@utils/types';
import {
  getAllPlaceOrderByUseCount,
  getPlaceById,
  getPlaceByRegionOrderByUseCount,
  getPlaceByRegionWithTag,
  Place,
} from '@apis/place';

/*
REGION QUERY
 */

export const useFetchRegion = (
  id: number,
  options?: UseQueryOptions<Region, AxiosError, Region, ['region', number]>
) => {
  const region: UseQueryResult<Region, AxiosError> = useQuery(['region', id], () => getRegionById(id), {
    enabled: !isNaN(id),
    ...options,
  });

  return region;
};

export const useFetchRegionOrdered = (
  size: number,
  page: number,
  options?: UseQueryOptions<Page<Region>, AxiosError, Page<Region>, ['regionOrdered']>
) => {
  const regionOrdered: UseQueryResult<Page<Region>, AxiosError> = useQuery(
    ['regionOrdered'],
    () => getRegionOrderByUseCount(size, page),
    {
      ...options,
    }
  );

  return regionOrdered;
};

export const useFetchAllRegion = (
  options?: UseQueryOptions<Array<Region>, AxiosError, Array<Region>, ['regionList']>
) => {
  const allRegion: UseQueryResult<Array<Region>, AxiosError> = useQuery(['regionList'], () => getAllRegion(), {
    ...options,
  });

  return allRegion;
};

/*
PLACE QUERY
 */

export const useFetchPlace = (
  place: string,
  id: number,
  options?: UseQueryOptions<Place, AxiosError, Place, [string, number]>
) => {
  const placeInfo: UseQueryResult<Place, AxiosError> = useQuery([place, id], () => getPlaceById(place, id), {
    enabled: !isNaN(id),
    ...options,
  });

  return placeInfo;
};

export const useFetchPlaceOrdered = (
  place: string,
  size: number,
  page: number,
  options?: UseQueryOptions<Page<Place>, AxiosError, Page<Place>, [string]>
) => {
  const placeOrdered: UseQueryResult<Page<Place>, AxiosError> = useQuery(
    [`${place}Ordered`],
    () => getAllPlaceOrderByUseCount(place, size, page),
    {
      ...options,
    }
  );

  return placeOrdered;
};

export const useFetchPlaceOrderedByRegion = (
  place: string,
  regionId: number,
  size: number,
  page: number,
  options?: UseQueryOptions<Page<Place>, AxiosError, Page<Place>, [string, number, number]>
) => {
  const placeOrderedByRegion: UseQueryResult<Page<Place>, AxiosError> = useQuery(
    [`${place}Ordered`, regionId, size],
    () => getPlaceByRegionOrderByUseCount(place, regionId, size, page),
    {
      enabled: !isNaN(regionId),
      ...options,
    }
  );

  return placeOrderedByRegion;
};

export const useFetchPlaceWithTag = (
  place: string,
  regionId: number,
  tag: string,
  options?: UseQueryOptions<Array<Place>, AxiosError, Array<Place>, [string, number, string]>
) => {
  const placeWithTag: UseQueryResult<Array<Place>, AxiosError> = useQuery(
    [`${place}List`, regionId, tag],
    () => getPlaceByRegionWithTag(place, regionId, tag),
    {
      enabled: !isNaN(regionId),
      ...options,
    }
  );

  return placeWithTag;
};
