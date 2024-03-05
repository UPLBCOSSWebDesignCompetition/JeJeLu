import React from "react";
import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GridContainer } from "./components/gridContainer.tsx";
import { TextGenerate } from "./components/textGenerate.tsx";
import { HeroParallaxContent } from "./components/heroMovingContainer.tsx";
import { DeveloperHover } from "./components/developer.tsx";
import { SparklesText } from "./components/sparklingText.tsx";
import { ThreeDeeCard } from "./components/3dCardContainer.tsx";
import { SDGTabs } from "./components/sdgTabs.tsx";

// import images locally
import image1 from "./assets/cardImages/Galina Nelyubova.jpg";
import image2 from "./assets/cardImages/Nina Zeynep Guler.png";
import image3 from "./assets/cardImages/17.png";
import image4 from "./assets/IBM.jpg";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {

  // Scroll effect
  const whySectionRef = useRef(null);
  const whySectionTextRef = useRef(null);
  const learnMoreSectionRef = useRef(null);
  
  useEffect(() => {
    const whySection = whySectionRef.current;
    const whySectionText = whySectionTextRef.current;
    const learnMoreSection = learnMoreSectionRef.current;

    gsap.to(whySection, {
      opacity: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: whySection,
        start: "center 80%",
        end: "center 20%",
        scrub: true,
      },
    });

    gsap.to(whySectionText, {
      opacity: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: whySectionText,
        start: "center 80%",
        end: "center 20%",
        scrub: true,
      },
    });

    gsap.to(learnMoreSection, {
      opacity: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: learnMoreSection,
        start: "center 80%",
        end: "center 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className="header-text">
          <p className="header-p">WELCOME TO</p>
          <p className="header-p">OUR COMMITMENT:</p>
          <h1 className="header-h1">AFFORDABLE AND</h1>
          <h1 className="header-h1">CLEAN ENERGY</h1>
          <h1 className="header-h1">FOR ALL</h1>
        </div>

        <Spline
          className="lightbulb"
          style={{ minHeight: "100vh", maxHeight: "100vh" }}
          scene="https://prod.spline.design/k94A5zIc9PZGnwrM/scene.splinecode"
        />
      </div>

      <div className="intro-section">
        <TextGenerate
          words="As university students, we believe in a sustainable future, and that's why we are dedicated to supporting the United Nations' Seventh Sustainable Development Goal (SDG): Affordable and Clean Energy. Our commitment is to provide accessible and sustainable energy solutions that empower communities, drive economic growth, and contribute to a cleaner, healthier planet."
          className="your-custom-class"
        />
      </div>

      <div className="why-main">
        <div className="why-section" ref={whySectionRef}>
          <h1>
            WHY AFFORDABLE AND
            <br />
            CLEAN ENERGY MATTERS
          </h1>
        </div>
        <div className="why-section-text" ref={whySectionTextRef}>
          <h3>
            Sustainable Development Goal 7 (SDG 7) addresses critical challenges
            that <br /> impact communities worldwide. Access to affordable and
            clean energy <br /> is not just a goal; it's a solution to pressing
            global issues. Let's delve into the <br /> problems SDG 7 aims to
            solve and understand the importance of our collective efforts.
          </h3>
        </div>
      </div>

      <div className="grid-main">
        <GridContainer />
      </div>

      <div className="givenParagraph max-w-2xl mx-auto antialiased pt-4 relative p-8 border border-solid border-white rounded-2xl">
        {/* <div className="max-w-2xl mx-auto antialiased pt-4 relative p-0"> */}
        <div key="content-0" className="mb-10">
          <p className="mb-3 text-lg text-justify">
            <h3>
              <strong>
                {"Ensuring Universal Energy Access and Sustainable Development"}
              </strong>
            </h3>
          </p>
          <div className="text-sm prose prose-sm dark:prose-invert">
            <img
              src={image4}
              alt="blog thumbnail"
              height="1000"
              width="1000"
              className="rounded-lg mb-10 object-cover"
            />
            {
              "Despite improvements in access to electricity and clean cooking fuels globally, significant challenges persist, with "
            }
            <strong>
              {"675 million people still lacking electricity access"}
            </strong>
            {" and "}
            <strong>{"2.3 billion relying on unsafe cooking fuels"}</strong>
            {"."}
            {
              " The war in Ukraine and economic uncertainty contribute to energy price volatility, prompting mixed responses with some countries investing more in renewables while others increase reliance on coal, jeopardizing the green transition. If current trends persist, millions will remain without electricity access and clean cooking fuels by 2030. Accelerating electrification, ramping up investments in renewables, and enhancing electricity grid infrastructure are essential to achieve universal energy access and mitigate climate impacts. However, decreasing international financial support for clean energy in developing countries poses a significant challenge, highlighting the need for concerted global efforts to ensure equitable energy access and sustainable development."
            }
          </div>
        </div>
      </div>

      <div className="parallax-main">
        <HeroParallaxContent />
      </div>

      <div className="three-cards">
        <ThreeDeeCard
          number="1"
          title="Supporting Sustainable Practices"
          description="Choose products and services that prioritize clean energy and sustainability."
          image={image1}
        />
        <ThreeDeeCard
          number="2"
          title="Advocating for Change"
          description="Raise awareness about the importance of affordable and clean energy in your community."
          image={image2}
        />
        <ThreeDeeCard
          number="3"
          title="Partnering for Impact"
          description="Providing support to organizations and groups that support the same cause"
          image={image3}
        />
      </div>

      <div className="why-section mt-12" ref={learnMoreSectionRef}>
          <h1>
            LEARN MORE
            <br />
            ABOUT THE 17 SDGs
          </h1>
      </div>

      <div className="sdg-flex">
        <div className="h-fit">
          <SDGTabs/>
        </div>
        <div className="tagline-main">
          Together, let's build a future championing
          <SparklesText />
        </div>
      </div>
      <DeveloperHover />
    </div>
  );
}

export default App;


/* 

Copyright © Jed Alain Silva, Jerico de Vega, Luis De Mesa 2024

All rights reserved. This web page code is submitted solely as an entry for a web design competition 
and may not be used, reproduced, or distributed in any form without the express written permission of the copyright holder.

*/
