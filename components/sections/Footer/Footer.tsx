import Link from "next/link";
import { footerNav } from "@/config/navigation";
import FbIcon from "@/app/assets/icons/facebook-logo.svg";
import IgIcon from "@/app/assets/icons/instagram-logo.svg";
import TwIcon from "@/app/assets/icons/twitter-logo.svg";
import Logo from "@/app/assets/Logo.svg";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 border-b border-border/40">
          <div className="flex flex-col gap-6 py-10 border-b lg:border-b-0 lg:border-r border-border/40 items-center">
            <Logo className="w-[120px] h-10 text-gray-100" />
            <div className="flex flex-col text-gray-40 mt-4 items-center">
              <p className="font-medium text-sm mb-1">Opening hours</p>
              <p className="text-gray-100 text-lg">Monday to Saturday:</p>
              <p className="text-gray-100 text-lg">10:30 a.m. to 7 p.m.</p>
            </div>
            <div className="flex items-center gap-4 mt-auto pt-8">
              <a
                href="#"
                className="text-primary transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <IgIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary transition-opacity hover:opacity-80"
                aria-label="Twitter"
              >
                <TwIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-primary transition-opacity hover:opacity-80"
                aria-label="Facebook"
              >
                <FbIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col py-10 border-b lg:border-b-0 lg:border-r border-border/40 px-8 items-center">
            <h3 className="text-2xl text-gray-40 font-heading mb-6">Shop</h3>
            <ul className="flex flex-col gap-4 items-center">
              {footerNav.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-primary transition-colors text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col py-10 border-b lg:border-b-0 lg:border-r border-border/40 px-8 items-center">
            <h3 className="text-2xl text-gray-40 font-heading mb-6">
              Help Desk
            </h3>
            <ul className="flex flex-col gap-4 items-center">
              {footerNav.helpDesk.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-primary transition-colors text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col py-10 items-center relative overflow-hidden">
            <h3 className="text-2xl text-gray-40 font-heading mb-6">Stores</h3>
            <ul className="flex flex-col gap-4 items-center">
              {footerNav.stores.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-100 hover:text-primary transition-colors text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="absolute right-0 translate-x-[40px] top-1/2 -translate-y-1/2 rotate-90 text-[10px] tracking-[0.2em] text-gray-80 font-bold whitespace-nowrap hidden origin-center">
              SITE CREDITS &nbsp; &nbsp; &nbsp; ©2023 VELVETY
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-center text-base text-gray-80 font-medium">
            © Designed by{" "}
            <span className="text-gray-100 font-bold">DhuhaCreative</span>.
            Powered by <span className="text-gray-100 font-bold">UI8</span>.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.bottom.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
