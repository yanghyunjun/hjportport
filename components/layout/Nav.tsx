import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

interface NavProps {}

const Nav: NextPage<NavProps> = ({}) => {
  return (
    <>
      <nav className="nav_cont">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/diary">
          <a>Diary</a>
        </Link>
      </nav>
      <style jsx>{`
        .nav_cont {
          font-size: 20px;
        }
        a {
          margin-right: 5px;
        }
      `}</style>
    </>
  );
};

export default Nav;
