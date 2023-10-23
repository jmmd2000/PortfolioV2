import PropTypes from "prop-types";

const JobCard = (props) => {
  return (
    <div className="min-w-[90%] max-w-[90%] m-auto md:m-0 md:min-w-[400px] md:max-w-[400px] h-[300px] max-h-[300px] md:h-[350px] md:max-h-[350px] p-2 md:p-4 bg-zinc-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="flex gap-4">
        <img
          src={props.imgSrc}
          alt={"Image of " + props.title}
          className="rounded-2xl w-12 md:w-16 aspect-square"
        />
        <div className="flex-col">
          <h1 className="text-white font-semibold text-lg md:text-2xl">
            {props.title}
          </h1>
          <div className="flex gap-2 md:gap-4 text-zinc-400 font-medium text-sm md:text-base">
            <span>{props.company}</span>
            <span>
              <b>•</b>
            </span>
            <span>{props.date}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-fullmd:content-evenly gap-8 md:gap-12">
        <p className="m-2 md:m-4 mt-8 font-medium h-[120px] text-sm">
          {props.description}
        </p>
        <div className="flex gap-2 justify-start w-full">{props.children}</div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default JobCard;
