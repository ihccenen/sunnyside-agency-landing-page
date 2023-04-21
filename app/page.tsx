import { Fraunces } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import styles from './page.module.css';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const fraunces = Fraunces({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.transform}>
          <div className={styles.text}>
            <p className={`${styles.title} ${fraunces.className}`}>
              Transform your brand
            </p>
            <p className={styles.desc}>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <Link
              className={`${styles['learn-more']} ${styles.yellow} ${fraunces.className}`}
              href="/"
            >
              Learn more
            </Link>
          </div>
          <picture className={`${styles.picture} ${styles.yellow}`}>
            <source
              media="(min-width: 750px)"
              srcSet="/desktop/image-transform.jpg"
              width={720}
              height={600}
            />
            <Image
              src="/mobile/image-transform.jpg"
              width={750}
              height={624}
              quality={100}
              alt=""
            />
          </picture>
        </div>
        <div className={styles['stand-out']}>
          <picture className={`${styles.picture} ${styles.red}`}>
            <source
              media="(min-width: 750px)"
              srcSet="/desktop/image-stand-out.jpg"
              width={720}
              height={600}
            />
            <Image
              src="/mobile/image-stand-out.jpg"
              width={750}
              height={624}
              quality={100}
              alt=""
            />
          </picture>
          <div className={styles.text}>
            <p className={`${styles.title} ${fraunces.className}`}>
              Stand out to the right audience
            </p>
            <p className={styles.desc}>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <Link
              className={`${styles['learn-more']} ${styles.red} ${fraunces.className}`}
              href="/"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.wrapper}>
            <div className={`${styles.graphic} ${styles.text}`}>
              <p className={`${fraunces.className}`}>Graphic design</p>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
            <picture className={`${styles.picture} `}>
              <source
                media="(min-width: 750px)"
                srcSet="/desktop/image-graphic-design.jpg"
                width={720}
                height={600}
              />
              <Image
                src="/mobile/image-graphic-design.jpg"
                width={750}
                height={624}
                quality={100}
                alt=""
              />
            </picture>
          </div>
          <div className={styles.wrapper}>
            <div className={`${styles.photography} ${styles.text}`}>
              <p className={`${fraunces.className}`}>Photography</p>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
            <picture className={`${styles.picture} `}>
              <source
                media="(min-width: 750px)"
                srcSet="/desktop/image-photography.jpg"
                width={720}
                height={600}
              />
              <Image
                src="/mobile/image-photography.jpg"
                width={750}
                height={624}
                quality={100}
                alt=""
              />
            </picture>
          </div>
        </div>
        <Testimonials />
        <div className={styles.images}>
          <picture className={styles.picture}>
            <source
              media="(min-width: 750px)"
              srcSet="/desktop/image-gallery-milkbottles.jpg"
              width={720}
              height={894}
            />
            <Image
              src="/mobile/image-gallery-milkbottles.jpg"
              width={376}
              height={376}
              quality={100}
              alt=""
            />
          </picture>
          <picture className={styles.picture}>
            <source
              media="(min-width: 750px)"
              srcSet="/desktop/image-gallery-orange.jpg"
              width={720}
              height={894}
            />
            <Image
              src="/mobile/image-gallery-orange.jpg"
              width={376}
              height={376}
              quality={100}
              alt=""
            />
          </picture>
          <picture className={styles.picture}>
            <source
              media="(min-width: 750px)"
              srcSet="/desktop/image-gallery-cone.jpg"
              width={720}
              height={894}
            />
            <Image
              src="/mobile/image-gallery-cone.jpg"
              width={376}
              height={376}
              quality={100}
              alt=""
            />
          </picture>
          <picture className={styles.picture}>
            <source
              media="(min-width: 750px)"
              srcSet="/desktop/image-gallery-sugarcubes.jpg"
              width={720}
              height={894}
            />
            <Image
              src="/mobile/image-gallery-sugar-cubes.jpg"
              width={376}
              height={376}
              quality={100}
              alt=""
            />
          </picture>
        </div>
      </main>
      <Footer />
    </>
  );
}
