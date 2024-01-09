export interface PaginationProps {
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}
