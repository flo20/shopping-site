import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/order">Orders</Link>
      <Link href="/accounts">Account</Link>
    </nav>
  );
}
