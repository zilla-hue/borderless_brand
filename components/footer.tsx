import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/borderless-brand-logo.png"
              alt="borderless-brand-logo.png"
              width={40}
              height={40}
              className="object-contain h-10 w-auto md:h-12"
            />
          </Link>

          <div className="flex justify-center space-x-6 md:order-2">
            <Link
              href="https://facebook.com"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/borderlessbrand_"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-primary"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Borderless Brand. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
