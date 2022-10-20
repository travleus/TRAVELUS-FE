export interface Hash<V> {
  [key: string]: V;
}

export interface Page<T> {
  content: Array<T>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    sort: object;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
}

export const TargetTypeHash: Hash<string> = {
  HOTEL: 'hotel',
  HOT_PLACE: 'sights',
  RESTAURANT: 'restaurant',
  CAFE: 'cafe',
};
