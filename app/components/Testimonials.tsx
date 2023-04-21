import { Fraunces } from 'next/font/google';
import ClientCard from './ClientCard';
import styles from './Testimonials.module.css';

const fraunces = Fraunces({ subsets: ['latin'] });

const testimonials = [
  {
    name: 'Emily R.',
    position: 'Marketing Director',
    msg: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    pic: '/image-emily.jpg',
    id: 1,
  },
  {
    name: 'Thomas S.',
    position: 'Chief Operating Officer',
    msg: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    pic: '/image-thomas.jpg',
    id: 2,
  },
  {
    name: 'Jennie F.',
    position: 'Business Owner',
    msg: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    pic: '/image-jennie.jpg',
    id: 3,
  },
];

export default function Testimonials() {
  return (
    <div className={`${styles.div} ${fraunces.className}`}>
      <p>Client Testimonials</p>
      <div className={styles.clients}>
        {testimonials.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  );
}
