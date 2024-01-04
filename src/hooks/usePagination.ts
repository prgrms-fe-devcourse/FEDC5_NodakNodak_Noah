import { useState } from 'react';
import { PostSnippet } from '@/components/PostCard/PostCardTypes';

export const usePagination = (postList: PostSnippet[], limit: number = 12) => {
  const [page, setPage] = useState(1);

  const paginationedPostList: PostSnippet[] = postList.slice(
    (page - 1) * limit,
    page * limit,
  );

  const totalPage = Math.ceil(paginationedPostList.length / limit);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPage) return;
    setPage(page);
  };

  return {
    paginationedPostList,
    totalPage,
    currentPage: page,
    handlePageChange,
  };
};
