import PropTypes from "prop-types";
import prev from "../../assets/images/prev.png";

const RightButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: `url(${prev}) no-repeat center center`,
        backgroundSize: "contain",
        border: "none",
        width: "35px",
        height: "35px",
        float: "right",
        marginTop: "220px",
        cursor: "pointer",
        outline: "none",
      }}
      aria-label="Next"
    />
  );
};

RightButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default RightButton;
