import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Sickfits</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      I am a header
      <Nav />
    </header>
  );
}