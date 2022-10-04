import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="top z-20 p-4 w-full bg-white border-t border-gray-200 shadow shadow-cyan-500/50 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://flowbite.com/" class="hover:underline">
          Lucas Perata™
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 gap-5 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">Sobre nosotros</Link>
        </li>
      </ul>
    </footer>
  );
}
