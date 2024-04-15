import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "#site/content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFormattedDate(date: string | number): string {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-US",{
    month: "long",
    day: "numeric",
    year: "numeric"
  })
}

export function getSortedPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if(a.date > b.date) return -1;
    if(a.date < b.date) return 1;
    return 0;
  })
}