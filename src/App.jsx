import "./App.css";

import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  return (
    <>
      <PortfolioSection svg="wavy"></PortfolioSection>
      <PortfolioSection svg="dots" title="The personal stuff." subtitle="about me"></PortfolioSection>
      <PortfolioSection svg="scribbles" title="The knowledge stuff." subtitle="skills"></PortfolioSection>
      <PortfolioSection svg="maze" title="My stuff." subtitle="projects"></PortfolioSection>
      <PortfolioSection svg="streaks" title="The professional stuff." subtitle="experience"></PortfolioSection>
      <PortfolioSection svg="spiral" title="The important stuff." subtitle="contact"></PortfolioSection>
    </>
  );
}

export default App;

const PortfolioSection = (props) => {
  // This makes the animation run only once when the element enters the viewport.
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={`bg-zinc-900 text-white h-screen max-h-screen p-16 bg-${props.svg}`}>
      {props.title && props.subtitle && (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={animationVariants} transition={{ duration: 1 }}>
          <h1 className="text-xl font-bold text-zinc-200 uppercase">{props.subtitle}</h1>
          <h1 className="text-5xl text-[#9333EA] font-bold drop-shadow-[0_3px_0px_#3B0764] ">{props.title}</h1>
        </motion.div>
      )}

      {props.children}
    </div>
  );
};

PortfolioSection.propTypes = {
  svg: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};
