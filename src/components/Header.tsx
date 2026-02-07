"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Method", href: "/method" },
    { name: "Programs", href: "/programs" },
    { name: "Master Playbook", href: "/playbook" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="bg-background border-b border-border">
      <nav className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-foreground tracking-tight">
          WISER<span className="text-accent">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground-muted hover:text-foreground transition-colors text-sm font-medium tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/programs"
            className="bg-accent text-white px-5 py-2 rounded-lg font-semibold hover:bg-accent-light transition-all text-sm tracking-wide"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border py-4 bg-background-alt">
          <div className="container-wide flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground-muted hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/programs"
              className="bg-accent text-white px-5 py-3 rounded-lg font-semibold hover:bg-accent-light transition-all text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
