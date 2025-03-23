"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "/public/images/borderless-brand-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  // { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-background/95 supports-[backdrop-filter]:bg-background/60 backdrop-blur" 
          : "bg-transparent border-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src={logo}
              alt="Borderless Brand Logo"
              width={48}
              height={48}
              priority
              className="h-12 w-auto md:h-14"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:bg-accent/50 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors duration-200",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary hover:scale-105"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-50",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
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
              <div className="py-6">
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
