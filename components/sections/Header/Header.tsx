"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center">
        <div className="w-1/2 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/Logo.svg"
              alt="Velvety"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        <div className="w-1/2">
          <DesktopNav />
        </div>

        <button
          className="lg:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
