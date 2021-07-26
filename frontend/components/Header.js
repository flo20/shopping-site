import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: red;
  transform: skew(-7deg);
  background: red;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

// const HeaderStyles = styled.header`
//   .bar {
//     border-bottom: 10px solid var(--black, black);
//     display: grid;
//     grid-template-columns: auto 1fr;
//     justify-content: space-between;
//     align-items: center;
//   }
// `;

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Logo>
          <Link href="/">Sickfits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      I am a header
      <Nav />
    </header>
  );
}
