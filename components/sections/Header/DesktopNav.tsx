"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, actionLinks } from "@/config/navigation";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { DropdownColumn } from "./PagesDropdown";
import { pagesDropdown } from "@/config/navigation";

function DesktopNav() {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center justify-between h-full">
      <div className="flex items-center gap-8 h-full">
        {navLinks.map((link) => (
          <div
            key={link.label}
            className="relative h-full flex items-center"
            onMouseEnter={() => link.hasDropdown && setIsPagesOpen(true)}
            onMouseLeave={() => link.hasDropdown && setIsPagesOpen(false)}
          >
            <Link
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-0 hover:text-primary transition-colors tracking-wide h-full"
            >
              {link.label}
              {link.hasDropdown && (
                <ArrowDownIcon
                  className={`w-4 h-4 transition-transform duration-200 ${isPagesOpen ? "rotate-180" : ""}`}
                />
              )}
            </Link>

            {link.hasDropdown && (
              <AnimatePresence>
                {isPagesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 bg-background border border-border/40 shadow-xl overflow-hidden min-w-[440px] mt-2"
                  >
                    <div className="flex p-6 gap-6">
                      <DropdownColumn
                        items={pagesDropdown.col1}
                        pathname={pathname}
                      />
                      <DropdownColumn
                        items={pagesDropdown.col2}
                        pathname={pathname}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 h-full">
        {actionLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-gray-0 hover:text-primary transition-colors tracking-wide"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export { DesktopNav };
