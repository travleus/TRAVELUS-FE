import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getAllRegion, getRegionById, getRegionOrderByUseCount, Region } from '@apis/region';
import { Page } from '@utils/types';

export const useFetchRegion = (
  id: number,
  options?: UseQueryOptions<Region, AxiosError, Region, ['region', number]>
) => {
  const region: UseQueryResult<Region, AxiosError> = useQuery(['region', id], () => getRegionById(id), {
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
