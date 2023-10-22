import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectCard from "./components/ProjectCard";
import TechIcon from "./components/TechIcon";

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
  BiLogoFirebase,
  BiLogoFlutter,
  BiLogoWordpress,
  BiLogoLinkedinSquare,
  BiLogoCodepen,
  BiLogoGithub,
} from "react-icons/bi";
import {
  SiHelm,
  SiLinux,
  SiVercel,
  SiTrpc,
  SiPrisma,
  SiDart,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import JobCard from "./components/JobCard";

function App() {
  return (
    <>
      <NavBar />
      <PortfolioSection svg="wavy">
        <div className="flex flex-col md:flex-row gap-16 justify-center align-middle h-full items-center">
          <img
            src="/src/assets/me.webp"
            alt="Image of me."
            className="rounded-full w-64 h-64 object-cover object-center border-4 border-purple-600 drop-shadow-[0_3px_0px_#3B0764]"
          />
          <div className="flex flex-col max-w-[50ch]">
            <h2 className="text-2xl font-medium text-zinc-200">Hey there!</h2>
            <h1 className="text-5xl text-[#9333EA] font-extrabold drop-shadow-[0_3px_0px_#3B0764] tracking-wider mb-4">
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
          <div className="flex flex-row justify-evenly gap-4 mb-16">
            <TechIcon
              icon={BiLogoKubernetes}
              title="Kubernetes"
              duration={1.16}
              size={85}
            />
            <TechIcon
              icon={SiHelm}
              title="Helm"
              duration={1.33}
              size={85}
            />
            <TechIcon
              icon={SiLinux}
              title="Linux"
              duration={1.5}
              size={85}
            />
            <TechIcon
              icon={BiLogoPostgresql}
              title="PostgreSQL"
              duration={1.66}
              size={85}
            />
            <TechIcon
              icon={BiLogoPython}
              title="Python"
              duration={1.83}
              size={85}
            />
            <TechIcon
              icon={BiLogoJava}
              title="Java"
              duration={2}
              size={85}
            />
          </div>
          <p className="text-zinc-200 text-2xl">
            The tech I use in personal projects includes:
          </p>
          <div className="flex flex-row justify-evenly gap-4">
            <TechIcon
              icon={BiLogoHtml5}
              title="HTML"
              duration={1.14}
              size={85}
            />
            <TechIcon
              icon={BiLogoCss3}
              title="CSS"
              duration={1.28}
              size={85}
            />
            <TechIcon
              icon={BiLogoJavascript}
              title="Javascript"
              duration={1.42}
              size={85}
            />
            <TechIcon
              icon={BiLogoTypescript}
              title="Typescript"
              duration={1.56}
              size={85}
            />
            <TechIcon
              icon={BiLogoReact}
              title="React"
              duration={1.7}
              size={85}
            />
            <TechIcon
              icon={BiLogoTailwindCss}
              title="TailwindCSS"
              duration={1.84}
              size={85}
            />
            <TechIcon
              icon={TbBrandNextjs}
              title="NextJS"
              duration={2}
              size={85}
            />
          </div>
        </div>
      </PortfolioSection>
      <PortfolioSection
        svg="maze"
        title="My stuff."
        subtitle="projects"
      >
        <p className="text-zinc-200 text-2xl mb-8">
          All my projects can be found on my Github, and some other things on my
          CodePen.
        </p>
        <div className="flex gap-8 overflow-x-scroll pb-8">
          <ProjectCard
            title="JamesReviewsMusic v2"
            description="This site allows me to review my favourite albums and track the ratings for each song, album and artist."
            imgSrc="/src/assets/reviews.png"
            link="http://jamesreviewsmusic.online/"
          >
            <TechIcon
              icon={BiLogoTypescript}
              title="Typescript"
              duration={0.16}
              size={30}
            />
            <TechIcon
              icon={TbBrandNextjs}
              title="NextJS"
              duration={0.33}
              size={30}
            />
            <TechIcon
              icon={BiLogoTailwindCss}
              title="TailwindCSS"
              duration={0.5}
              size={30}
            />
            <TechIcon
              icon={SiVercel}
              title="Vercel"
              duration={0.66}
              size={30}
            />
            <TechIcon
              icon={SiTrpc}
              title="tRPC"
              duration={0.83}
              size={30}
            />
            <TechIcon
              icon={SiPrisma}
              title="Prisma"
              duration={1}
              size={30}
            />
          </ProjectCard>
          <ProjectCard
            title="Vintage Recreations"
            description="My CodePen hosts a collection of recreations of vintage documents. Anything from bingo cards to time sheets!"
            imgSrc="/src/assets/docs.png"
            link="https://codepen.io/jmmd2000"
          >
            <TechIcon
              icon={BiLogoHtml5}
              title="HTML"
              duration={0.16}
              size={30}
            />
            <TechIcon
              icon={BiLogoCss3}
              title="CSS"
              duration={0.33}
              size={30}
            />
          </ProjectCard>
          <ProjectCard
            title="RateFlix"
            description="This app was my final project in Maynooth. It allows users to sign up, search for movies, add them to their watchlist, and give them a rating."
            imgSrc="/src/assets/movies.png"
            link="https://codepen.io/jmmd2000"
            vertical
          >
            <TechIcon
              icon={BiLogoFlutter}
              title="Flutter"
              duration={0.33}
              size={30}
            />
            <TechIcon
              icon={SiDart}
              title="Dart"
              duration={0.66}
              size={30}
            />
            <TechIcon
              icon={BiLogoFirebase}
              title="Firebase"
              duration={1}
              size={30}
            />
          </ProjectCard>
          <ProjectCard
            title="Sorting Visualiser"
            description="This allows users to modify an array of bars and sort with different sorting algorithms. Can also modify the size of the array and speed of sorting."
            imgSrc="/src/assets/sort.png"
            link="https://jamesmddoyle.com/project/sorting-visualiser/"
          >
            <TechIcon
              icon={BiLogoReact}
              title="HTML"
              duration={0.33}
              size={30}
            />
            <TechIcon
              icon={BiLogoCss3}
              title="CSS"
              duration={0.66}
              size={30}
            />
          </ProjectCard>
          <ProjectCard
            title="JamesReviewsMusic v1"
            description="This is the first iteration of the review site. Built with React and Firebase, it was a great learning experience."
            imgSrc="/src/assets/reviews.png"
            link="https://github.com/jmmd2000/AlbumReviews"
          >
            <TechIcon
              icon={BiLogoReact}
              title="HTML"
              duration={0.33}
              size={30}
            />
            <TechIcon
              icon={BiLogoCss3}
              title="CSS"
              duration={0.66}
              size={30}
            />
            <TechIcon
              icon={BiLogoFirebase}
              title="Firebase"
              duration={1}
              size={30}
            />
          </ProjectCard>
        </div>
      </PortfolioSection>
      <PortfolioSection
        svg="streaks"
        title="The professional stuff."
        subtitle="experience"
      >
        <div className="flex gap-8 overflow-hidden">
          <JobCard
            title="Software Engineer"
            imgSrc="/src/assets/ericsson.png"
            company="Ericsson"
            date="July 2023 - Present"
            description="This position involves management of a Kubernetes clusters containing PostgreSQL databases via Helm charts."
          >
            <TechIcon
              icon={BiLogoKubernetes}
              title="Kubernetes"
              duration={1.16}
              size={30}
            />
            <TechIcon
              icon={SiHelm}
              title="Helm"
              duration={1.33}
              size={30}
            />
            <TechIcon
              icon={SiLinux}
              title="Linux"
              duration={1.5}
              size={30}
            />
            <TechIcon
              icon={BiLogoPostgresql}
              title="PostgreSQL"
              duration={1.66}
              size={30}
            />
            <TechIcon
              icon={BiLogoPython}
              title="Python"
              duration={1.83}
              size={30}
            />
            <TechIcon
              icon={BiLogoJava}
              title="Java"
              duration={2}
              size={30}
            />
          </JobCard>
          <JobCard
            title="Frontend Intern"
            imgSrc="/src/assets/fusio.png"
            company="Fusio"
            date="Jan 2022 - July 2022"
            description="This internship was front-end based and used HTML, CSS, JavaScript and WordPress. Each day I could be doing any number of things. I could be designing a UI element for a webpage or taking content from a client, formatting it and adding it to their site. I could also be testing pages and code snippets."
          >
            <TechIcon
              icon={BiLogoHtml5}
              title="HTML"
              duration={1.16}
              size={30}
            />
            <TechIcon
              icon={BiLogoCss3}
              title="CSS"
              duration={1.33}
              size={30}
            />
            <TechIcon
              icon={BiLogoJavascript}
              title="Javascript"
              duration={1.5}
              size={30}
            />
            <TechIcon
              icon={BiLogoWordpress}
              title="Wordpress"
              duration={1.66}
              size={30}
            />
          </JobCard>
        </div>
      </PortfolioSection>
      <PortfolioSection
        svg="spiral"
        title="The important stuff."
        subtitle="contact"
      >
        <div className="p-6">
          <p className="text-zinc-200 text-2xl my-12">
            Thanks for giving me your time.
          </p>
          <p className="text-zinc-200 text-2xl mb-8">
            If you would like to get in touch, see more of my work, or learn
            more about me, my links are below!
          </p>
          <div className="flex flex-row gap-8">
            <a
              href="
            https://www.linkedin.com/in/james-doyle-4b47ba245/"
            >
              <BiLogoLinkedinSquare size={50} />
            </a>
            <a href="https://codepen.io/jmmd2000">
              <BiLogoCodepen size={50} />
            </a>
            <a href="https://github.com/jmmd2000">
              <BiLogoGithub size={50} />
            </a>
          </div>
        </div>
      </PortfolioSection>
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // bg-wavy bg-dots bg-scribbles bg-maze bg-streaks bg-spiral

  return (
    <div
      className={`bg-zinc-900 text-white max-w-full h-screen max-h-screen p-28 overflow-hidden bg-${props.svg}`}
      id={props.subtitle === "about me" ? "about-me" : props.subtitle}
    >
      {props.title && props.subtitle && (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.h2
            className="text-xl font-bold text-zinc-200 uppercase"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
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
        href="#about-me"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        About
      </a>
      <a
        href="#skills"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        Projects
      </a>
      <a
        href="#experience"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        Experience
      </a>
      <a
        href="#contact"
        className="text-xl font-semibold uppercase p-4 text-[#9333EA] drop-shadow-[0_3px_0px_#3B0764] hover:drop-shadow-none hover:text-white transition duration-200"
      >
        Contact
      </a>
    </motion.nav>
  );
};
