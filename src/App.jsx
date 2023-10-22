import "./App.css";

import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoJava,
  BiLogoKubernetes,
  BiLogoPostgresql,
  BiLogoPython,
} from "react-icons/bi";
import { SiHelm, SiLinux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function App() {
  return (
    <>
      <NavBar />
      <PortfolioSection svg="wavy">
        <div className="flex flex-row gap-16 justify-center align-middle h-full items-center">
          <img
            src="/src/assets/me.webp"
            alt="Image of me."
            className="rounded-full w-64 h-64 object-cover object-center border-4 border-purple-600 drop-shadow-[0_3px_0px_#3B0764]"
          />
          <div className="flex flex-col max-w-[50ch]">
            <h2 className="text-2xl font-medium text-zinc-200">Hey there!</h2>
            <h1 className="text-5xl text-[#9333EA] font-bold drop-shadow-[0_3px_0px_#3B0764] tracking-wider mb-4">
              I&rsquo;m James,
            </h1>
            <h2 className="text-2xl font-medium text-zinc-200 tracking-wide">
              a passionate frontend developer based in Dublin, Ireland.
            </h2>
          </div>
        </div>
      </PortfolioSection>
      <PortfolioSection
        svg="dots"
        title="The personal stuff."
        subtitle="about me"
      >
        <div className="max-w-[80%] p-6 mt-8 flex flex-col gap-8 font-light">
          <p className="text-zinc-200 text-2xl">
            I have loved web development since my dad brought me to CoderDojo as
            a kid. I was instantly hooked and knew it was what I wanted to do. I
            studied Computer Systems and Networks in Dunboyne College, and moved
            onto Computer Science and Software Engineering in Maynooth
            University where I recently graduated with a 2.1.
          </p>

          <p className="text-zinc-200 text-2xl">
            I spend a lot of time listening to music, sometimes I write small
            reviews. I enjoy movies when they&rsquo;re good. If I&rsquo;m not
            programming, I&rsquo;m probably playing video-games or spending time
            with my partner.
          </p>

          <p className="text-zinc-200 text-2xl">
            I have a weird hobby where I try to recreate old forms and documents
            with HTML and CSS. It&apos;s great practice, and can be found on my
            CodePen.
          </p>
        </div>
      </PortfolioSection>
      <PortfolioSection
        svg="scribbles"
        title="The knowledge stuff."
        subtitle="skills"
      >
        <div className="p-6 mt-8 flex flex-col gap-4">
          <p className="text-zinc-200 text-2xl">
            The tech I currently use professionally includes:
          </p>
          <div className="flex flex-row justify-evenly gap-4 mb-8">
            <BiLogoKubernetes style={{ height: "85px", width: "85px" }} />
            <SiHelm style={{ height: "85px", width: "85px" }} />
            <SiLinux style={{ height: "85px", width: "85px" }} />
            <BiLogoPostgresql style={{ height: "85px", width: "85px" }} />
            <BiLogoPython style={{ height: "85px", width: "85px" }} />
            <BiLogoJava style={{ height: "85px", width: "85px" }} />
          </div>
          <p className="text-zinc-200 text-2xl">
            The tech I use in personal projects includes:
          </p>
          <div className="flex flex-row justify-evenly gap-4 mb-8">
            <BiLogoHtml5 style={{ height: "85px", width: "85px" }} />
            <BiLogoCss3 style={{ height: "85px", width: "85px" }} />
            <BiLogoJavascript style={{ height: "85px", width: "85px" }} />
            <BiLogoTypescript style={{ height: "85px", width: "85px" }} />
            <BiLogoReact style={{ height: "85px", width: "85px" }} />
            <BiLogoTailwindCss style={{ height: "85px", width: "85px" }} />
            <TbBrandNextjs style={{ height: "85px", width: "85px" }} />
          </div>
        </div>
      </PortfolioSection>
      <PortfolioSection
        svg="maze"
        title="My stuff."
        subtitle="projects"
      ></PortfolioSection>
      <PortfolioSection
        svg="streaks"
        title="The professional stuff."
        subtitle="experience"
      ></PortfolioSection>
      <PortfolioSection
        svg="spiral"
        title="The important stuff."
        subtitle="contact"
      ></PortfolioSection>
    </>
  );
}

export default App;

const PortfolioSection = (props) => {
  // This makes the animation when the element enters the viewport for the first time.
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  // bg-wavy bg-dots bg-scribbles bg-maze bg-streaks bg-spiral

  return (
    <div
      className={`bg-zinc-900 text-white h-screen max-h-screen p-28 bg-${props.svg}`}
      id={props.svg}
    >
      {props.title && props.subtitle && (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-xl font-bold text-zinc-200 uppercase"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.1 }}
          >
            {props.subtitle}
          </motion.h2>
          <h1 className="text-5xl text-[#9333EA] font-bold drop-shadow-[0_3px_0px_#3B0764] ">
            {props.title}
          </h1>
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

const NavBar = () => {
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    // Scroll event listener
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition - lastScrollPosition > 0) {
        // Scrolling down, hide the navbar
        controls.start({ y: -100 });
      } else {
        // Scrolling up and hovering, show the navbar
        controls.start({ y: 0 });
      }
      lastScrollPosition = currentScrollPosition;
    };

    // Mouse event listener
    const handleMouse = (e) => {
      const mouseY = e.clientY;
      if (mouseY <= 64) {
        controls.start({ y: 0 });
      }
    };

    // Add the mouse event and scroll event listeners
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [controls]);

  return (
    <motion.nav
      className="flex flex-row fixed top-0 h-16 w-full p-0 m-0 bg-slate-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10
    "
      initial={{ y: 0 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <a
        href="#dots"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        About
      </a>
      <a
        href="#scribbles"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        Skills
      </a>
      <a
        href="#maze"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        Projects
      </a>
      <a
        href="#streaks"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        Experience
      </a>
      <a
        href="#spiral"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        Contact
      </a>
    </motion.nav>
  );
};
