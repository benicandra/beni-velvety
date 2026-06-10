"use client";

import Link from "next/link";
import { pagesDropdown } from "@/config/navigation";

function DropdownColumn({
  items,
  pathname,
  onClickItem,
}: {
  items: { label: string; href: string }[];
  pathname: string;
  onClickItem?: () => void;
}) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`text-sm px-4 py-2.5 transition-all duration-200 ${isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
            onClick={onClickItem}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export { DropdownColumn, pagesDropdown };
