"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/sufis", label: "The Sufis" },
  { href: "/issues", label: "World Issues" },
  { href: "/blog", label: "Reflections" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-purple-100 shadow-sm sticky top-0 z-50">
      <div className="px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-black text-xl" style={{ color: "#6D28D9" }} onClick={() => setOpen(false)}>
          OurSufiWorld
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-white"
                  : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
              }`}
              style={pathname.startsWith(link.href) ? { backgroundColor: "#6D28D9" } : {}}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-purple-100 bg-white px-4 pb-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl font-bold text-sm transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-white"
                  : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
              }`}
              style={pathname.startsWith(link.href) ? { backgroundColor: "#6D28D9" } : {}}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
