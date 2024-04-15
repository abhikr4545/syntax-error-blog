import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

interface TrendingBlogProps {
  title: string;
  description: string;
  slug: string;
  date: string;
}

const TrendingBlog = ({ title, description, slug, date }: TrendingBlogProps) => {
  return (
    <article className="w-full sm:w-[400px] h-[100px] border-[1px] border-gray-200 p-2 rounded-lg">
      <div className="w-fit flex-shrink-0 overflow-ellipsis">
        <h4 className="line-clamp-1">{title}</h4>
      </div>
    <Link className="flex items-center" href={slug}>
      <div className="w-[200px] overflow-hidden">
        <p className="underline line-clamp-1">
          {description}
        </p>
      </div>
      <SquareArrowOutUpRight size={12} />
    </Link>
    <div className="space-x-2 flex h-5 items-center text-sm mt-3">
      <span>{date}</span>
    </div>
    </article>
  )
}

export default TrendingBlog;