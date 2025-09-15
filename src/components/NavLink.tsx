"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className="inline px-2 md:px-3 py-2">
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={`text:md sm:text-lg md:text-xl ${
          isActive ? "text-brand" : "text-gray-300 hover:text-underline"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
