'use client';

import { Fraunces } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const fraunces = Fraunces({ subsets: ['latin'] });

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles['header-top']}>
          <Link href="/" aria-label="sunnyside">
            <Image
              className={styles.logo}
              src="/logo.svg"
              height={24}
              width={124}
              quality={100}
              alt=""
            />
          </Link>
          <button
            className={styles['menu-btn']}
            type="button"
            aria-label="menu"
            onClick={handleClick}
          >
            <Image
              src="/icon-hamburger.svg"
              width={24}
              height={18}
              quality={100}
              alt=""
            />
          </button>
          <nav className={`${styles.nav} ${open ? '' : styles.hidden}`}>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
              <li className={`${styles.contact} ${fraunces.className}`}>
                <Link href="/">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${styles.creative} ${fraunces.className}`}>
          WE ARE CREATIVES
        </div>
        <Image
          className={styles.arrow}
          src="/icon-arrow-down.svg"
          width={36}
          height={114}
          alt=""
          quality={100}
        />
      </header>
    </div>
  );
}
