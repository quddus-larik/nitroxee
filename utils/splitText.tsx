import React from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Define a global flag outside the component
// This flag will persist across component mounts/unmounts
let hasAnimationPlayedGlobally = false;

const MyAnimatedText = () => {
  const textRef = React.useRef(null);

  React.useEffect(() => {
    // Only run the animation if it hasn't played globally yet
    if (textRef.current && !hasAnimationPlayedGlobally) {
      const split = new SplitText(textRef.current, { type: "chars" });

      gsap.fromTo(
        split.chars,
        { opacity: 0, y: 2 },
        {
          opacity: 1,
          y: 0,
          delay: 0.01,
          duration: 1,
          ease: "elastic.out(1,0.3)",
          stagger: 0.03,
          onComplete: () => {
            // Set the global flag to true after the animation completes
            hasAnimationPlayedGlobally = true;
            // split.revert();
          },
        }
      );
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <h1 className="text-3xl font-semibold text-center md:font-extrabold text-slate-200 font-clash md:text-5xl lg:text-7xl" ref={textRef}>
      Delivering <span className="text-lime-300">full-stack solutions</span> <br />that inspire <span className="text-lime-300">interaction</span> and
      <br />drive digital growth.
    </h1>
  );
};

export default MyAnimatedText;