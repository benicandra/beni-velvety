"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/config/navigation";
import { pagesDropdown } from "@/config/navigation";
import { ArrowDownIcon } from "./ArrowDownIcon";

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const pathname = usePathname();

  const allDropdownItems = [...pagesDropdown.col1, ...pagesDropdown.col2];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-t border-border/40 overflow-hidden"
        >
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  className="w-full flex items-center justify-between py-4 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => {
                    if (link.hasDropdown) {
                      setIsPagesOpen(!isPagesOpen);
                    } else {
                      onClose();
                    }
                  }}
                >
                  {link.hasDropdown ? (
                    <span>{link.label}</span>
                  ) : (
                    <Link href={link.href} className="w-full text-left">
                      {link.label}
                    </Link>
                  )}

                  {link.hasDropdown && (
                    <ArrowDownIcon
                      className={`w-4 h-4 transition-transform duration-200 ${isPagesOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {link.hasDropdown && isPagesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 pl-4 pb-4 border-l-2 border-border/50 ml-2 mt-2">
                        {allDropdownItems.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              className={`text-sm py-2 px-3 rounded-lg ${isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                              onClick={onClose}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { MobileMenu };
