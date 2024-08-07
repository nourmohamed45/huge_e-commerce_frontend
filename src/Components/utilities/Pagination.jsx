import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

const Pagination = ({ pageCount, onPress }) => {

  // Ensure pageCount is a valid integer
  const validPageCount = Math.max(1, Math.ceil(pageCount || 1));

  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={validPageCount}
      previousLabel="السابق"
      containerClassName="pagination justify-content-center p-3 mt-5"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number, // Expecting a number instead of a string
  onPress: PropTypes.func,
};

export default Pagination;
