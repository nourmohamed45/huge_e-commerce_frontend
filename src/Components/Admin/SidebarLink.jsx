import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarLink = ({ to, label }) => (
  <NavLink
    to={to}
    className="admin-side-text py-3 border-bottom p-2 mx-auto text-center fs-7"
    activeClassName="active-link"
    style={{ textDecoration: "none" }}
  >
    {label}
  </NavLink>
);

export default SidebarLink;


SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
