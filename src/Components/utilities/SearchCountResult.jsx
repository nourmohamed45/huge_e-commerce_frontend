import UnopDropdown from "unop-react-dropdown";


// proptypes import
import PropTypes from "prop-types";

// import images
import sort from "../../assets/images/sort.png"

const SearchCountResult = ({title}) => {

  const handler = () => {
  };

  return (
    <div>
      <div className="d-flex justify-content-between pt-3 px-2">
        <div className="sub-title">{title}</div>
        <div className="search-count-text d-flex">
          <UnopDropdown
            onAppear={handler}
            onDisappear={handler}
            trigger={
              <p className="mx-1">
                <img
                  src={sort}
                  alt="sort img"
                  width={"20px"}
                  height={"20px"}
                  className="ms-1"
                /> {" "}
                ترتيب حسب
              </p>
            }
            delay={0}
            align="CENTER"
            hover
            closeOnClickOut
          >
            <div className="card-filter">
              <div className="border-bottom card-filter-item">الاكثر مبيعا</div>
              <div className="border-bottom card-filter-item">
                الاعلي تقييما
              </div>
              <div className="border-bottom card-filter-item">
                السعر من الاقل للاعلي
              </div>
              <div className="card-filter-item">السعر من الاعلي للاقل</div>
            </div>
          </UnopDropdown>
        </div>
      </div>
    </div>
  );
};

export default SearchCountResult;

SearchCountResult.propTypes = {
  title: PropTypes.string,
};