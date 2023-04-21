import { Barlow } from 'next/font/google';
import Image from 'next/image';
import styles from './ClientCard.module.css';

const barlow = Barlow({ weight: '600', subsets: ['latin'] });

type Client = {
  name: string;
  position: string;
  msg: string;
  pic: string;
};

export default function ClientCard({ client }: { client: Client }) {
  const {
    name, position, msg, pic,
  } = client;
  return (
    <div className={styles.card}>
      <Image src={pic} width={144} height={144} quality={100} alt="" />
      <p className={`${styles.msg} ${barlow.className}`}>{msg}</p>
      <p className={styles.name}>{name}</p>
      <p className={`${styles.position} ${barlow.className}`}>{position}</p>
    </div>
  );
}
