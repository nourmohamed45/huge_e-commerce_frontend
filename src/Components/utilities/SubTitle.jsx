import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SubTitle = ({ subtitle, subtitlebtn, path }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className="sub-title">{subtitle}</div>
      {subtitlebtn ? (
        <Link to={`/${path}`} className="text-decoration-none">
          <div className="shopping-now">{subtitlebtn}</div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubTitle;

SubTitle.propTypes = {
  subtitle: PropTypes.string,
  subtitlebtn: PropTypes.string,
  path: PropTypes.string,
};
