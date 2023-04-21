import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src="/logo.svg" height={24} width={124} quality={100} alt="" />
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
      </ul>
      <div className={styles.icons}>
        <Link href="/">
          <FaFacebookSquare />
        </Link>
        <Link href="/">
          <FaInstagramSquare />
        </Link>
        <Link href="/">
          <FaTwitter />
        </Link>
        <Link href="/">
          <FaPinterest />
        </Link>
      </div>
    </footer>
  );
}
