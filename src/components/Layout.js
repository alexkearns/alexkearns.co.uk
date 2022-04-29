import React from 'react'
import {Link} from 'gatsby'

const Layout = ({children}) => {
    const linkStyle = `
     font-regular
     text-gray-900
    `
    return (
        <div className={"min-h-screen flex flex-col"}>
            <nav className="container flex justify-between items-center py-10">
                <div className={"text-2xl font-regular"}>Alex Kearns</div>
                <ul className="flex leading-5">
                    <li className={linkStyle}><Link to="/">Blog</Link></li>
                </ul>
            </nav>

            <main>
              {children}
            </main>

            <div className={"flex-grow"} />

            <footer className="text-center py-8 text-gray-700">
              &copy; {new Date().getUTCFullYear()} &bull; Alex Kearns
            </footer>
        </div>
    )
}

export default Layout