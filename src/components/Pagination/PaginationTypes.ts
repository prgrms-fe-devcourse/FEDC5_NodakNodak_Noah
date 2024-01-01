export interface PaginationProps {
  page: number;
  totalPage: number;
  handlePageChange: (page: number) => void;
}
