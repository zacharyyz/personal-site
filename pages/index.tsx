import { useEffect, useRef } from "react";
import Head from "next/head";
import { gsap } from "gsap";
import LinkedIn from "react-ionicons/lib/LogoLinkedin";
import Github from "react-ionicons/lib/LogoGithub";
import CodePen from "react-ionicons/lib/LogoCodepen";
import Document from "react-ionicons/lib/IosDocument";
import { NAME } from "../lib/constants";

export default function Home() {
  const container = useRef(null);
  const loadingScreen = useRef(null);
  const logo = useRef(null);
  const contact = useRef(null);
  const bottomText = useRef(null);
  const media = useRef([]);
  const header = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);
  const ring1 = useRef(null);
  const ring2 = useRef(null);
  const cta = useRef(null);

  useEffect(() => {
    gsap.to(loadingScreen.current, {
      duration: 2.5,
      delay: 4.6,
      top: "-110%",
      ease: "expo.inOut",
    });

    gsap.from(logo.current, {
      duration: 3,
      delay: 5,
      opacity: 0,
      y: 40,
      ease: "expo.inOut",
    });

    gsap.from(contact.current, {
      duration: 3,
      delay: 5.2,
      opacity: 0,
      y: 40,
      ease: "expo.inOut",
    });

    gsap.from(bottomText.current, {
      duration: 3,
      delay: 5.6,
      opacity: 0,
      y: 40,
      ease: "expo.inOut",
    });

    gsap.from(media.current, {
      duration: 2,
      delay: 5.4,
      opacity: 0,
      y: 20,
      ease: "expo.inOut",
      stagger: {
        amount: 0.2,
      },
    });

    gsap.from(header.current, {
      duration: 1.5,
      delay: 6,
      opacity: 0,
      y: 40,
      ease: "power3.out",
    });

    gsap.from(p1.current, {
      duration: 1.5,
      delay: 6.2,
      opacity: 0,
      y: 40,
      ease: "power3.out",
    });

    gsap.from(p2.current, {
      duration: 1.5,
      delay: 6.4,
      opacity: 0,
      y: 40,
      ease: "power3.out",
    });

    gsap.from(cta.current, {
      duration: 1.5,
      delay: 6.6,
      opacity: 0,
      y: 40,
      ease: "power3.out",
    });

    const tl = gsap.timeline();

    tl.from(ring1.current, {
      duration: 3,
      delay: 0.4,
      opacity: 0,
      y: 40,
      ease: "expo.inOut",
    })
      .from(
        ring2.current,
        {
          duration: 3,
          delay: 0.9,
          opacity: 0,
          y: 40,
          ease: "expo.inOut",
        },
        "-=4"
      )
      .to(ring1.current, {
        duration: 3,
        delay: 0.4,
        x: 450,
        ease: "expo.inOut",
      })
      .to(
        ring2.current,
        {
          duration: 3,
          delay: 0.4,
          x: 450,
          ease: "expo.inOut",
        },
        "-=3.5"
      );
  }, []);

  return (
    <div ref={container} className="container">
      <Head>
        <title>{NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div ref={loadingScreen} className="loading-screen" />

      <div className="loader">
        <div ref={ring1} className="ring ring-one">
          <img src="/ring.png" alt="ring" />
        </div>
        <div ref={ring2} className="ring ring-two">
          <img src="/ring.png" alt="ring" />
        </div>
      </div>

      <div ref={logo} className="logo">
        <img src="/logo.png" />
      </div>

      <div ref={contact} className="contact">
        Get in touch
      </div>

      <header className="header">
        <h1 ref={header} className="ml7" id="title">
          <span className="text-wrapper">
            <span className="letters">Zachary Zhou</span>
          </span>
        </h1>
        <p ref={p1} id="tagline" className="p1">
          Visualise & Create
        </p>
        <br />
        <br />
        <p ref={p2} id="tagline" className="p2">
          I am a Frontend Web Developer based in Singapore. <br />
          Every tiny detail down to each pixel and my constant curiosity are the
          things driving me forward.
        </p>

        <div className="buttons">
          <a ref={cta} id="cta" href="mailto:avengyy@gmail.com">
            Contact Me
          </a>
        </div>
      </header>

      <div ref={bottomText} className="bottom-text">
        +0.00001db
      </div>

      <div className="media">
        <ul>
          <li ref={(el) => (media.current[0] = el)}>
            <a href="https://linkedin.com/in/zachary-zhou/" target="_blank">
              <LinkedIn color="grey" />
            </a>
          </li>
          <li ref={(el) => (media.current[1] = el)}>
            <a href="https://github.com/ardmcs" target="_blank">
              <Github color="grey" />
            </a>
          </li>
          <li ref={(el) => (media.current[2] = el)}>
            <a href="https://codepen.com/ardmcs" target="_blank">
              <CodePen color="grey" />
            </a>
          </li>
          <li ref={(el) => (media.current[3] = el)}>
            <a href="/resume.pdf" target="_blank">
              <Document color="grey" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
