import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import localFont from 'next/font/local'

const circularStd = localFont({ src: '../../static/circularStd.ttf' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Startupz</title>
        <meta name="description" content="Startupz fictional startup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${circularStd.className}`}>
        <div className={styles.header}>
          <Image
            src="/companyLogo.svg"
            alt="company logo"
            className={styles.companyLogo}
            width={199}
            height={47}
            priority
          />

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
              We Create Startups. We are startup studio that develops and
              launches new companies.
            </div>
            <button className={styles.workWithUsButton}>See our works</button>
          </div>
          <Image
            src="/artwork.png"
            alt="artwork"
            className={styles.seeOurWorksImage}
            width={705}
            height={507}
            priority
          />
        </div>

        <div className={styles.whoWeAre}>
          <span className={styles.whoWeAreText1}>Who we are</span>
          <span className={styles.whoWeAreText2}>
            We create products that have innovation and technology at their
            core. <br />
            We value working with talented people that understand the
            possibilities of today.
          </span>
          <Image
            src="/artworkQuestion.png"
            alt="artwork question"
            className={styles.artworkQuestion}
            width={75}
            height={88}
            loading="lazy"
          />
          <div className={styles.whoWeArePoints}>
            <div className={styles.whoWeArePoint1}>
              <span className={styles.whoWeArePointNumber}>01</span>
              <span className={styles.whoWeArePointText}>
                We develop innovative <br /> products, systems and <br />{" "}
                services
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
            src="/thumb.png"
            alt="Vercel Logo"
            width={59}
            height={66}
            loading="lazy"
          />
          <span className={styles.solvingProblemText}>
            We love solving problems!
          </span>
          <Image
            src="/thumb.png"
            alt="Vercel Logo"
            className={styles.solvingProblemRightImage}
            width={59}
            height={66}
            loading="lazy"
          />
        </div>

        <div className={styles.whoWeAre}>
          <span className={styles.ourCoreValuesText}>Our core values</span>
          <Image
            src="/artworkBulb.png"
            alt="Vercel Logo"
            className={styles.artworkQuestion}
            width={75}
            height={88}
            loading="lazy"
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
                Talent is what enable us <br /> to create great <br />{" "}
                companies.
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
                src="/macbookMockupOne.svg"
                alt="Vercel Logo"
                className={styles.macbookMockup}
                width={448}
                height={294}
                loading="lazy"
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
                src="/macbookMockupTwo.svg"
                alt="Vercel Logo"
                className={styles.macbookMockup}
                width={448}
                height={294}
                loading="lazy"
              />
              <button className={styles.ourWorksButton}>More</button>
            </div>
            <div className={styles.ourWork}>
              <span className={styles.ourWorkTitle3}>Codekeeper</span>
              <span className={styles.ourWorkText}>
                Codekeeper is an all-in-one solution for software <br />{" "}
                developers and publishers to provide source code escrow <br />{" "}
                as part of service level and license agreements.
              </span>
              <Image
                src="/macbookMockupThree.svg"
                alt="Vercel Logo"
                className={styles.macbookMockup}
                width={448}
                height={294}
                loading="lazy"
              />
              <button className={styles.ourWorksButton}>More</button>
            </div>
            <div className={styles.ourWork}>
              <span className={styles.ourWorkTitle4}>LegalSite</span>
              <span className={styles.ourWorkText}>
                Protected against legal risks, privacy compliant and <br />{" "}
                always up-to-date with the latest regulatory <br />{" "}
                developments.
              </span>
              <Image
                src="/macbookMockupFour.svg"
                alt="Vercel Logo"
                className={styles.macbookMockup}
                width={448}
                height={294}
                loading="lazy"
              />
              <button className={styles.ourWorksButton}>More</button>
            </div>
          </div>
        </div>
        <div className={styles.solvingProblemWidget}>
          <div className={styles.solvingProblem}>
            <Image
              src="/thumb.png"
              alt="Vercel Logo"
              className={styles.solvingProblemImage}
              width={59}
              height={66}
              loading="lazy"
            />
            <span className={styles.solvingProblemText}>
              Startups create a world that actually is better. <br /> Any
              problem that can be solved , will be solved <br /> by a startup,
              and that is a huge opportunity.
            </span>
            <Image
              src="/thumb.png"
              alt="Vercel Logo"
              className={styles.solvingProblemImageRight}
              width={59}
              height={66}
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.weAreHiring}>
          <Image
            src="/frame4.png"
            alt="Vercel Logo"
            className={styles.weAreHiringImageLeft}
            width={291}
            height={319}
            loading="lazy"
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
            src="/frame5.png"
            alt="Vercel Logo"
            className={styles.weAreHiringImageRight}
            width={291}
            height={319}
            loading="lazy"
          />
        </div>

        <div className={styles.areYouReady}>
          <span className={styles.areYouReadyTitle}>
            Are you ready <br /> to board this rocket ship?
          </span>
          <div className={styles.areYouReadyText}>
            Share your excitement with us.
          </div>
          <div className={styles.areYouReadyCard}>
            <div className={styles.areYouReadyMessageCard}>
              <input
                className={styles.areYouReadyMessageCardInputName}
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                required
                minLength="4"
                maxLength="15"
                size="10"
              />
              <input
                className={styles.areYouReadyMessageCardInputEmail}
                type="text"
                id="email"
                name="email"
                placeholder="Email*"
                required
                minLength="4"
                maxLength="15"
                size="10"
              />
              <textarea
                className={styles.areYouReadyMessageCardInputMessage}
                type="text"
                id="message"
                name="message"
                placeholder="Message*"
                required
                minLength="4"
                maxLength="999"
                size="10"
              />
              <button className={styles.areYouReadyMessageCardButton}>
                See current openings
              </button>
            </div>
          </div>
          <Image
            src="/rocket.svg"
            alt="Vercel Logo"
            className={styles.areYouReadyImageRocket}
            width={667}
            height={544}
            loading="lazy"
          />
        </div>

        <div className={styles.footer}>
          <div className={styles.footerLogo}>
            <Image
              src="/companyLogo.svg"
              alt="Vercel Logo"
              className={styles.companyLogoFooter}
              width={178}
              height={42}
              loading="lazy"
            />
            <span className={styles.footerText}>
              © 2020 Startupz. <br /> All rights reserved.
            </span>
          </div>
          <div className={styles.footerCompany}>
            <span className={styles.footerTitle}>Companies</span>
            <span className={styles.footerCompanyItems}>Tolq</span>
            <span className={styles.footerCompanyItems}>Codekeeper</span>
            <span className={styles.footerCompanyItems}>Feedback</span>
            <span className={styles.footerCompanyItems}>Labs</span>
          </div>
          <div className={styles.footerCotact}>
            <span className={styles.footerTitle}>Contact</span>

            <span className={styles.footerCotactText}>
              World Trade Center - The Hague <br /> Prinses Margrietplantsoen 33{" "}
              <br /> 2595 AM The Hague <br />
              The Netherlands
            </span>
            <span className={styles.footerCotactButton}>Send us an email</span>
          </div>
          <div className={styles.footerFollowUs}>
            <span className={styles.footerTitle}> Follow us</span>
            <Image
              src="/twitter.svg"
              alt="Twitter"
              className={styles.footerFollowUsIcon}
              width={23}
              height={23}
              loading="lazy"
            />
            <Image
              src="/linkedin.svg"
              alt="Linkedin"
              className={styles.footerFollowUsIcon}
              width={23}
              height={23}
              loading="lazy"
            />
            <Image
              src="/instagram.svg"
              alt="Instagram"
              className={styles.footerFollowUsIcon}
              width={23}
              height={23}
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </>
  );
}
