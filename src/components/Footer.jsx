import Link from 'next/link'
import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container>
        <div className="border-t pt-10 pb-16 border-zinc-700/40">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-6 text-sm font-medium text-zinc-200">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/articles">Articles</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/speaking">Speaking</NavLink>
            </div>
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Alex Kearns. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
