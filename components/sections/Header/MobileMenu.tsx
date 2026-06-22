"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { pagesDropdown } from "@/config/navigation";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { cn } from "@/lib/utils";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isPagesOpen, setIsPagesOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-background lg:hidden pt-20 flex flex-col"
        >
          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col">
            <button
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              className="flex items-center justify-between w-full pb-6"
            >
              <span className="text-[34px] font-heading font-light text-primary tracking-wide">
                Pages
              </span>
              <ArrowDownIcon
                className={cn(
                  "w-6 h-6 text-primary transition-transform duration-300",
                  isPagesOpen ? "rotate-180" : "",
                )}
              />
            </button>

            <AnimatePresence>
              {isPagesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-x-2 gap-y-6 pb-10">
                    <div className="flex flex-col gap-5">
                      {pagesDropdown.col1.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={onClose}
                          className="text-[15px] text-primary/80 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col gap-5">
                      {pagesDropdown.col2.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={onClose}
                          className="text-[15px] text-primary/80 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-6 pb-8">
              <Link
                href="/shop"
                onClick={onClose}
                className="text-[34px] font-heading font-light text-primary tracking-wide"
              >
                Shop
              </Link>
              <Link
                href="/about"
                onClick={onClose}
                className="text-[34px] font-heading font-light text-primary tracking-wide"
              >
                About
              </Link>
              <Link
                href="/checkout"
                onClick={onClose}
                className="text-[34px] font-heading font-light text-primary tracking-wide"
              >
                Cart(0)
              </Link>
            </div>

            <div className="flex-1" />

            <div className="mt-6 mb-4">
              <Link
                href="/login"
                onClick={onClose}
                className="flex items-center justify-center w-full py-3.5 border border-primary text-primary text-[15px] transition-colors hover:bg-primary hover:text-background"
              >
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
