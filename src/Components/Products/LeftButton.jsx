import PropTypes from "prop-types";
import next from "../../assets/images/next.png";

const LeftButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: `url(${next}) no-repeat center center`,
        backgroundSize: "contain",
        border: "none",
        width: "35px",
        height: "35px",
        float: "left",
        marginTop: "220px",
        cursor: "pointer",
        outline: "none",
      }}
      aria-label="Previous"
    />
  );
};

LeftButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default LeftButton;
