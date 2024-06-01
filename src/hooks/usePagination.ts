import { useEffect, useState } from 'react';
import { Post, SearchedPost } from '@/apis/responseModel';

export const usePagination = (
  postList: Post[] | SearchedPost[],
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
