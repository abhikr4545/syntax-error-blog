"use client";

import { posts } from "#site/content";
import BlogCard from "@/components/blog-card";
import usePagination from "@/hooks/usePagination";
import { usePathname, useSearchParams } from "next/navigation";
import { getSortedPosts } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination"
import { Suspense } from "react";

const SearchParamsComponent = () => {

  const pathname  = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { currentData, previous, next } = usePagination(getSortedPosts(posts), 5, currentPage);
  
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="max-w-4xl px-4 py-6 lg:py-10 mx-auto mt-4">
      {
        currentData?.map((post: any) => {
          return (
            <BlogCard key={post.title} title={post.title} description={post.description} date={post.date} slug={post.slug} />
          )
        })
      }
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={createPageUrl(previous())} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={createPageUrl(next())} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

const Blog = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsComponent />
    </Suspense>
  )
}

export default Blog