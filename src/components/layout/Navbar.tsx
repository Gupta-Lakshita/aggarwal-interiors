"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { primaryNav } from "@/data/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-surface/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className={cn(
            "focus-ring rounded font-heading text-xl tracking-tight transition-colors",
            solid ? "text-espresso-950" : "text-ivory-50"
          )}
        >
          {company.name}
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring rounded text-sm font-medium tracking-wide transition-colors",
                  solid
                    ? active
                      ? "text-terracotta-600"
                      : "text-espresso-950 hover:text-terracotta-600"
                    : active
                      ? "text-terracotta-400"
                      : "text-ivory-100 hover:text-terracotta-400"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="sm" variant={solid ? "primary" : "secondary"}>
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "focus-ring rounded-full p-2 md:hidden",
            solid ? "text-espresso-950" : "text-ivory-50"
          )}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-surface md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring rounded-lg px-2 py-3 text-base font-medium text-espresso-950 hover:bg-ivory-300"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-3 w-full">
                Get a Quote
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
