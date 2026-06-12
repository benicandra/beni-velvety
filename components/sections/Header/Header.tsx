"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/app/assets/Logo.svg";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center">
        <div className="w-1/2 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-[120px] h-10 text-gray-0" />
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
