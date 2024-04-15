import { getFormattedDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
}

const BlogCard = ({ title, description, slug, date }: BlogCardProps) => {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <Link href={`/${slug}`}>
        <h1 className="font-extrabold text-xl">
          {title}
        </h1>
      </Link>
      <p className="max-w-none text-sm sm:text-base text-muted-foreground">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <time className="flex gap-2 items-center text-sm">
          <Calendar size={16} />
          {getFormattedDate(date)}
        </time>
        <Link className="text-sm underline pr-2 sm:pr-0" href={slug}>
          Read More
        </Link>
      </div>
    </article>
  )
}

export default BlogCard;