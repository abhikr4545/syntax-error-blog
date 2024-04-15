"use client";

import Logo from "@/assets/logo.png";
import MobileLogo from "@/assets/logo_mobile.png";
import { SITE_LINKS } from "@/config";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DynamicMobileNav = dynamic(() => import('./mobile-nav'), { ssr: false });

export function Navbar() {

  const pathname = usePathname()

  return (
    <nav className="sticky top-0 px-4 bg-[#F8F8FF] h-[75px] flex justify-center items-center  border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between space-x-4 lg:space-x-6 w-full max-w-[1400px] mx-auto">
        <div className="flex items-center gap-8">
          <div className="sm:inline-block hidden">
            <Link href="/">
              <Image 
                src={Logo}
                height={256}
                width={256}
                alt="Logo"
                priority={true}
              />
            </Link>
          </div>
          <div className="sm:hidden inline-block">
            <Link href="/">
              <Image 
                src={MobileLogo}
                height={56}
                width={56}
                alt="Logo"
                priority={true}
              />
            </Link>
          </div>
          <div>
            <Link href="/blogs" className={cn("text-gray-500 text-xl hover:text-black", 
              pathname === "/blogs" ? "text-black" : ""
            )}>
              Blogs
            </Link>
          </div>
        </div>
        <div className="hidden sm:flex justify-center items-center gap-4">
          <Link href={SITE_LINKS.LINKED_IN} target="_blank">
            <Linkedin />
          </Link>
          <Link href={SITE_LINKS.GITHUB} target="_blank">
            <Github />
          </Link>
        </div>
      </div>
      <div className="sm:hidden inline-block">
        <DynamicMobileNav />
      </div>
    </nav>
  )
}

{/*
  <div>
    <Link href="/blogs" className={cn("text-gray-500 text-xl hover:text-black", 
      pathname === "/blogs" ? "text-black" : ""
    )}>
      Blogs
    </Link>
  </div>
*/}