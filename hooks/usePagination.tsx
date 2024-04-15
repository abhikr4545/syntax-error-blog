"use client";

import { useState } from "react";
import { Post } from "#site/content";

const usePagination = (data: Post[], itemsPerPage: number, page: number) => {
  const [currentPage, setCurrentPage] = useState<number>(page);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  const next = () => {
    return Math.min(currentPage + 1, maxPage);
  }

  const previous = () => {
    return Math.max(currentPage - 1, 1);
  }

  return {
    currentData: currentData(),
    currentPage,
    maxPage,
    next,
    previous
  }
}

export default usePagination;