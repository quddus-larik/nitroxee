"use client";
import React from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Use module-level flag (still global but safer, no re-renders)
let played = false;

const MyAnimatedText = () => {
  const textRef = React.useRef(null);

  React.useEffect(() => {
    if (!textRef.current || played) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(textRef.current, { type: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        y: 2,
        duration: 1,
        ease: "elastic.out(1,0.3)",
        stagger: 0.03,
        delay: 0.01,
        onComplete: () => {
          played = true;
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={textRef}
      className="text-3xl font-semibold text-center md:font-extrabold text-slate-200 font-clash md:text-5xl lg:text-7xl"
    >
      Delivering <span className="text-lime-300">full-stack solutions</span>
      <br />
      that inspire <span className="text-lime-300">interaction</span> and
      <br />
      drive digital growth.
    </h1>
  );
};

export default MyAnimatedText;
