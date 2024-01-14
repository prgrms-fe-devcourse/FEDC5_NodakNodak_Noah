import { useEffect, useState } from 'react';
import { SearchedPost } from '@/slices/searchedData/type';
import { Post } from '@/types/APIResponseTypes';

export const usePagination = (
  postList: Array<SearchedPost | Post>,
  limit: number = 12,
) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [postList.length]);

  const paginatedPostList: Array<SearchedPost | Post> = postList.slice(
    (page - 1) * limit,
    page * limit,
  );

  const totalPage = Math.ceil(postList.length / limit);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPage) return;
    setPage(page);
  };

  return {
    paginatedPostList,
    totalPage,
    currentPage: page,
    handlePageChange,
  };
};
