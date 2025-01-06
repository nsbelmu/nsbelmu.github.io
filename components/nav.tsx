"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { title: "About", href: "/", newTab: false },
  { title: "Calendar", href: "/calendar", newTab: false },
  { title: "E-Board", href: "/eboard", newTab: false },
  { title: "Contact", href: "/contact", newTab: false },
  { title: "Instagram", href: "https://instagram.com/nsbelmu", newTab: true },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/company/nsbelmu",
    newTab: true,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 lg:h-screen flex flex-row lg:flex-col items-start lg:items-center py-8 px-10 md:py-10 gap-8 h-full bg-white border-b-2 border-dashed lg:border-0">
      <Link href="/" className="flex mr-auto min-w-28">
        <h1 className="text-3xl lg:text-5xl font-bold transition-all">
          NSBE <br /> at <span className="text-lmucrimson">LMU</span>
        </h1>
      </Link>
      <nav className="font-medium gap-4 grid grid-rows-2 grid-cols-3 lg:grid-cols-2 w-full gap-y-2">
        {pages.map((page) => {
          const selected = pathname === page.href;
          return (
            <Link
              key={page.title}
              href={page.href}
              className={`text-xs sm:text-lg text-right lg:text-left decoration-lmublue decoration-2 underline-offset-2 hover:underline transition-all ${
                selected ? "underline" : ""
              }`}
              target={page.newTab ? "_blank" : undefined}
            >
              {page.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
