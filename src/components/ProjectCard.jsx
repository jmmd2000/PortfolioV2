import { BiLinkAlt } from "react-icons/bi";
import PropTypes from "prop-types";

// Card component to display projects
const ProjectCard = (props) => {
  return (
    <div
      className={`flex ${
        props.vertical ? "flex-row" : "flex-col"
      } items-stretch gap-2 min-w-full max-w-full md:min-w-[450px] md:max-w-[450px] h-[400px] md:h-[500px] p-4 bg-zinc-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10`}
    >
      {props.vertical ? (
        <img
          src={props.imgSrc}
          alt={"Image of " + props.title}
          className="rounded-l-[8px] h-full"
        />
      ) : (
        <img
          src={props.imgSrc}
          alt={"Image of " + props.title}
          className="rounded-t-[8px]"
        />
      )}
      <div className="flex flex-col h-full">
        <div className={`p-2 ${props.vertical ? "" : ""}`}>
          <h1 className="text-lg md:text-2xl font-bold text-zinc-200 mb-3">
            {props.title}
          </h1>
          <p className="text-zinc-200 text-sm md:text-base">
            {props.description}
          </p>
        </div>
        <div className="flex gap-1 md:gap-2 justify-start w-full mt-auto">
          {props.children}
          <a
            href={props.link}
            className="bg-purple-600 p-1 ml-auto rounded-full hover:bg-purple-700 transition duration-200 cursor-pointer"
          >
            <BiLinkAlt size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ProjectCard;
