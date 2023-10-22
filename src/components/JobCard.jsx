import PropTypes from "prop-types";

const JobCard = (props) => {
  return (
    <div className="min-w-[400px] max-w-[400px] h-[350px] max-h-[350px] p-4 bg-zinc-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="flex gap-4">
        <img
          src={props.imgSrc}
          alt={"Image of " + props.title}
          className="rounded-2xl w-16 h-16"
        />
        <div className="flex-col">
          <h1 className="text-white font-semibold text-2xl">{props.title}</h1>
          <div className="flex gap-4 text-zinc-400 font-medium">
            <span>{props.company}</span>
            <span>
              <b>•</b>
            </span>
            <span>{props.date}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full content-evenly gap-12">
        <p className="m-4 mt-8 font-medium h-[120px] text-sm">
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
