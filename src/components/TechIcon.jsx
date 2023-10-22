import PropTypes from "prop-types";
import { motion } from "framer-motion";

const TechIcon = (props) => {
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      initial={{ opacity: 0, y: props.size === 85 ? 100 : 20 }}
      transition={{ duration: props.duration }}
    >
      <props.icon
        style={{ height: props.size + "px", width: props.size + "px" }}
        title={props.title}
      />
    </motion.div>
  );
};

TechIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default TechIcon;
