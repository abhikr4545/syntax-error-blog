import { posts } from "#site/content";
import TrendingBlog from "@/components/trending-blog";
import { Button } from "@/components/ui/button";
import { getFormattedDate, getSortedPosts } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/assets/hero.png";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-2">
      <div className="flex items-center h-[400px] sm:h-[600px] justify-between w-full border-b">
        <div>
          <p className="heading-font">Stay Curious.</p>
          <p className="heading-font">Discover Stories.</p>
          <p className="heading-font">Explore Thinking.</p>
          <p className="heading-font">Uncover Expertise.</p>
          <Link href="/blogs">
            <Button className="w-56 mt-6 flex items-center gap-8 rounded-3xl px-[8px] py-[20px]">
              <p className="text-xl">Start reading</p>
            </Button>
          </Link>
        </div>
        <div className="hidden sm:inline-block">
          <Image 
            src={Hero}
            width={500}
            height={500}
            alt="hero image"
            className="w-auto"
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <TrendingUp size={18} />
          <p className="font-bold">
            Trending
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-3">
          {
            getSortedPosts(posts)?.slice(0, 3)?.map((post: any) => {
              return (
                <TrendingBlog key={post.title} title={post.title} description={post.description} slug={post.slug} date={getFormattedDate(post.date)} />
              )
            })
          }
        </div>
      </div>
    </main>
  );
}
