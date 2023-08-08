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
            <span className={styles.whoWeArePointNumber}>01</span>
            <span className={styles.whoWeArePointText}>
              We develop innovative <br /> products, systems and <br /> services
            </span>
          </div>

          <div className={styles.whoWeArePoint2}>
            <span className={styles.whoWeArePointNumber}>02</span>
            <span className={styles.whoWeArePointText}>
              Next we build teams to <br /> scale them into <br /> companies
            </span>
          </div>

          <div className={styles.whoWeArePoint3}>
            <span className={styles.whoWeArePointNumber}>03</span>
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

      <div className={styles.whoWeAre}>
        <span className={styles.ourCoreValuesText}>Our core values</span>
        <Image
          src="/artworkBulb.svg"
          alt="Vercel Logo"
          className={styles.artworkQuestion}
          width={75}
          height={88}
          priority
        />
        <div className={styles.whoWeArePoints}>
          <div className={styles.whoWeArePoint1}>
            <span className={styles.whoWeArePointNumber}>01. Innovation</span>
            <span className={styles.whoWeArePointText}>
              Startupz operates where entrepreneurship <br /> and technology
              intersect. We design solutions <br /> and turn them into
              businesses models.
            </span>
          </div>

          <div className={styles.whoWeArePoint2}>
            <span className={styles.whoWeArePointNumber}>02. People</span>
            <span className={styles.whoWeArePointText}>
              Talent is what enable us <br /> to create great <br /> companies.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.ourWorks}>
        <span className={styles.ourWorksText}>Our works</span>
        <div className={styles.ourWorksGrid}>
          <div className={styles.ourWork}>
            <span className={styles.ourWorkTitle1}>Tolq</span>
            <span className={styles.ourWorkText}>
              Tolq is the translation solution built for e-commerce. <br /> It
              provides all pieces of the localization puzzle in one <br />{" "}
              single integrated solution.
            </span>
            <Image
              src="/macbookMockup1.svg"
              alt="Vercel Logo"
              className={styles.macbookMockup}
              width={448}
              height={294}
              priority
            />
            <button className={styles.ourWorksButton}>More</button>
          </div>
          <div className={styles.ourWork}>
            <span className={styles.ourWorkTitle2}>Feedback Labs</span>
            <span className={styles.ourWorkText}>
              Feedback Labs turns feedback into actionable insights <br /> for
              your team.
            </span>
            <Image
              src="/macbookMockup1.svg"
              alt="Vercel Logo"
              className={styles.macbookMockup}
              width={448}
              height={294}
              priority
            />
            <button className={styles.ourWorksButton}>More</button>
          </div>
          <div className={styles.ourWork}>
            <span className={styles.ourWorkTitle3}>Codekeeper</span>
            <span className={styles.ourWorkText}>
              Codekeeper is an all-in-one solution for software <br />{" "}
              developers and publishers to provide source code escrow <br /> as
              part of service level and license agreements.
            </span>
            <Image
              src="/macbookMockup1.svg"
              alt="Vercel Logo"
              className={styles.macbookMockup}
              width={448}
              height={294}
              priority
            />
            <button className={styles.ourWorksButton}>More</button>
          </div>
          <div className={styles.ourWork}>
            <span className={styles.ourWorkTitle4}>LegalSite</span>
            <span className={styles.ourWorkText}>
              Protected against legal risks, privacy compliant and <br /> always
              up-to-date with the latest regulatory <br /> developments.
            </span>
            <Image
              src="/macbookMockup1.svg"
              alt="Vercel Logo"
              className={styles.macbookMockup}
              width={448}
              height={294}
              priority
            />
            <button className={styles.ourWorksButton}>More</button>
          </div>
        </div>
      </div>
      <div className={styles.solvingProblemWidget}>
        <div className={styles.solvingProblem}>
          <Image
            src="/thumb.svg"
            alt="Vercel Logo"
            className={styles.solvingProblemImage}
            width={59}
            height={66}
            priority
          />
          <span className={styles.solvingProblemText}>
            Startups create a world that actually is better. <br /> Any problem
            that can be solved , will be solved <br /> by a startup, and that is
            a huge opportunity.
          </span>
          <Image
            src="/thumb.svg"
            alt="Vercel Logo"
            className={styles.solvingProblemImageRight}
            width={59}
            height={66}
            priority
          />
        </div>
      </div>
      <div className={styles.weAreHiring}>
        <Image
          src="/frame4.svg"
          alt="Vercel Logo"
          className={styles.weAreHiringImageLeft}
          width={291}
          height={319}
          priority
        />
        <div className={styles.weAreHiringMiddle}>
          <span className={styles.weAreHiringTittle}>We are hiring!</span>
          <span className={styles.weAreHiringText}>
            We're always looking for talented people <br /> to join and help
            build our startups.
            <br /> Check out our current openings
          </span>
          <button className={styles.weAreHiringButton}>
            See current openings
          </button>
        </div>
        <Image
          src="/frame5.svg"
          alt="Vercel Logo"
          className={styles.weAreHiringImageRight}
          width={291}
          height={319}
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
