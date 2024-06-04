import { Row } from "react-bootstrap";

const SideFilter = () => {
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <h2 className="filter-title">الفئة</h2>
          <ul className="pe-0">
            <li>
              <input type="checkbox" id="all-category" value="" />
              <label htmlFor="all-category" className="filter-sub me-2">
                الكل
              </label>
            </li>
            <li>
              <input type="checkbox" id="home-appliances" value="" />
              <label htmlFor="home-appliances" className="filter-sub me-2">
                اجهزة منزلية
              </label>
            </li>
            {/* Repeat the li elements for each category */}
          </ul>
        </div>

        <div className="d-flex flex-column mt-2">
          <h2 className="filter-title mt-3">الماركة</h2>
          <ul className="pe-0">
            <li>
              <input type="checkbox" id="all-brand" value="" />
              <label htmlFor="all-brand" className="filter-sub me-2">
                الكل
              </label>
            </li>
            <li>
              <input type="checkbox" id="apple" value="" />
              <label htmlFor="apple" className="filter-sub me-2">
                ابل
              </label>
            </li>
            <li>
              <input type="checkbox" id="samsung" value="" />
              <label htmlFor="samsung" className="filter-sub me-2">
                سامسونج
              </label>
            </li>
          </ul>
        </div>

        <h2 className="filter-title my-3">السعر</h2>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
            aria-label="Price from"
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
            aria-label="Price to"
          />
        </div>
      </Row>
    </div>
  );
};

export default SideFilter;
