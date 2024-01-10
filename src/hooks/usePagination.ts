import { useEffect, useState } from 'react';
import { PostSnippet } from '@/components/Main/PostCard/PostCardProps';

export const usePagination = (postList: PostSnippet[], limit: number = 12) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [postList.length]);

  const paginationedPostList: PostSnippet[] = postList.slice(
    (page - 1) * limit,
    page * limit,
  );

  const totalPage = Math.ceil(postList.length / limit);

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
