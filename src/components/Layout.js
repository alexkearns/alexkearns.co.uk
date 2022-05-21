import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  const linkStyle = `
     font-regular
     text-gray-900
     ml-8
    `;
  return (
    <div className={"min-h-screen flex flex-col"}>
      <nav className="container flex justify-between items-center py-10">
        <div className={"p-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-orange-700"}>
          <Link to="/">Alex Kearns</Link>
        </div>
        <ul className="flex leading-5">
          <li className={linkStyle}><Link to="/posts">All posts</Link></li>
        </ul>
      </nav>

      <main>
        {children}
      </main>

      <div className={"flex-grow"} />

      <footer className="text-center py-8 text-gray-700">
        &copy; {new Date().getUTCFullYear()} &bull; All rights reserved
      </footer>
    </div>
  );
};

export default Layout;