"use client";

import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Link from "next/link";

const dataFooter = [
  { id: 1, name: "Sobre Nosotros", link: "/" },
  { id: 2, name: "Productos", link: "/" },
  { id: 3, name: "Mi Cuenta", link: "/" },
  { id: 4, name: "Politicas de Privacidad", link: "/" },
];
const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center">
        <p>
          <span className="font-bold">GusDev</span>E-commerce
        </p>
        <ul className="flex flex-wrap items-center font-medium mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          {dataFooter.map((item) => (
            <li key={item.id} className="mr-4 hover:underline">
              <Link href={item.link} className="hover:underline me-4 md:me-6">
                {item.name}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Separator className="my-6 border-gray-800 border-t-2" />

      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        &copy; {year || ""} <Link href={"/"}>GusDev</Link>. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
