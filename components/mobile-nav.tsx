"use client";

import { useEffect, useState } from "react";
import { useResizeObserver } from "@/hooks/useResizeObserver";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "./ui/sheet";

import { Github, Linkedin, Menu, SquareArrowOutUpRight } from 'lucide-react';
import Link from "next/link";
import { SITE_LINKS } from "@/config";

const MobileNav = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [width] = useResizeObserver();

  const handleSheetToggle = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    if(width > 640) {
      setIsOpen(false)
    }
  }, [width])

  return (
    <Sheet open={isOpen} onOpenChange={handleSheetToggle}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-full">
      <div className="space-y-6 mt-6">
        <Link className="flex gap-2 items-center" href={SITE_LINKS.LINKED_IN} target="_blank">
          <Linkedin />
          <p className="font-bold">LinkedIn</p>
          <SquareArrowOutUpRight size={12} />
        </Link>
        <Link className="flex gap-2 items-center" href={SITE_LINKS.GITHUB} target="_blank">
          <Github size={18}/>
          <p className="font-bold pl-[5px]">Github</p>
          <SquareArrowOutUpRight size={12} />
        </Link>
      </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav