"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/app/assets/Logo.svg";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "absolute top-0 left-0 right-0 z-50 w-full transition-colors duration-300",
          isMobileMenuOpen ? "bg-background border-b border-border/40" : "",
        )}
      >
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="lg:w-1/2 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Logo
                className={cn(
                  "w-[120px] h-10 transition-colors duration-300",
                  isMobileMenuOpen ? "text-primary" : "text-gray-0",
                )}
              />
            </Link>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <DesktopNav />
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <Link
              href="/shop"
              className={cn(
                "text-sm tracking-wide transition-colors duration-300",
                isMobileMenuOpen ? "text-primary" : "text-gray-0",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              href="/checkout"
              className={cn(
                "text-sm tracking-wide transition-colors duration-300",
                isMobileMenuOpen ? "text-primary" : "text-gray-0",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CART (0)
            </Link>
            <button
              className={cn(
                "w-9 h-9 ml-1 rounded-full flex items-center justify-center transition-colors duration-300",
                isMobileMenuOpen
                  ? "bg-gray-40 text-gray-0"
                  : "bg-background text-primary",
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
