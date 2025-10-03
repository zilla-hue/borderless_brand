"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import logo from "/public/images/borderless-brand-logo.png";

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  // { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [mobileMenuOpen]);

  return (
    <div
      className={cn(
        "lg:hidden fixed inset-0 z-50",
        mobileMenuOpen ? "opacity-100 bg-background" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm shadow-lg transition-all duration-300 ease-in-out"
        style={{
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          opacity: mobileMenuOpen ? "1" : "0",
        }}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src={logo}
              alt="Borderless Brand Logo"
              width={40}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
          <Button
            variant="ghost"
            className="-m-2.5 rounded-md p-2.5 hover:bg-accent/50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-border">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-accent/50",
                    pathname === item.href
                      ? "text-primary bg-accent/50"
                      : "text-foreground hover:text-primary"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6 flex justify-between items-center">
              <Button className="w-full" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
