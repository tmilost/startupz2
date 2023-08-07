import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div>
          <Image
            src="/companyLogo.svg"
            alt="Vercel Logo"
            className={styles.companyLogo}
            width={199}
            height={47}
            priority
          />
        </div>
        <div className={styles.rightSideHeader}>
          <button className={styles.startupsContactButton}>Startups</button>
          <button className={styles.startupsContactButton}>Contact</button>
          <button className={styles.workWithUsButton}>Work with us!</button>
        </div>
      </div>

      <div className={styles.seeOurWorks}>
        <div className={styles.seeOurWorksText}>
          <div className={styles.seeOurWorksTextOne}>We Create Startups.</div>
          <div className={styles.seeOurWorksTextTwo}>
            We Create Startups. We are startup studio that develops and launches
            new companies.
          </div>
          <button className={styles.workWithUsButton}>See our works</button>
        </div>
        <div className={styles.seeOurWorksImage}>
          <Image
            src="/artwork.svg"
            alt="Vercel Logo"
            width={704}
            height={507}
            priority
          />
        </div>
      </div>

      <div className={styles.whoWeAre}>
        <span className={styles.whoWeAreText1}>Who we are</span>
        <span className={styles.whoWeAreText2}>
          We create products that have innovation and technology at their core.{" "}
          <br />
          We value working with talented people that understand the
          possibilities of today.
        </span>
        <Image
          src="/artworkQuestion.svg"
          alt="Vercel Logo"
          className={styles.artworkQuestion}
          width={75}
          height={88}
          priority
        />
        <div className={styles.whoWeArePoints}>
          <div className={styles.whoWeArePoint1}>
            <span className={styles.whoWeArePointNumber}> 01</span>
            <span className={styles.whoWeArePointText}>
              We develop innovative <br /> products, systems and <br /> services
            </span>
          </div>

          <div className={styles.whoWeArePoint2}>
            <span className={styles.whoWeArePointNumber}> 02</span>
            <span className={styles.whoWeArePointText}>
              Next we build teams to <br /> scale them into <br /> companies
            </span>
          </div>

          <div className={styles.whoWeArePoint3}>
            <span className={styles.whoWeArePointNumber}> 03</span>
            <span className={styles.whoWeArePointText}>
              Each startup solving <br /> one problem <br /> at a time
            </span>
          </div>
        </div>
      </div>
      <div className={styles.solvingProblem}>
      <Image
          src="/thumb.svg"
          alt="Vercel Logo"
          width={59}
          height={66}
          priority
        />
        <span className={styles.solvingProblemText}>
        We love solving problems!
        </span>
        <Image
          src="/thumb.svg"
          alt="Vercel Logo"
          className={styles.solvingProblemRightImage}
          width={59}
          height={66}
          priority
        />

</div>

      {/* //////////////////////////////////////// */}
      <div className={styles.all}>
        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
