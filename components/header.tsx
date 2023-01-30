'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/magazine">Magazine</Link>
        </li>
      </ul>
    </header>
  )
}