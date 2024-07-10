import { Row } from "react-bootstrap";
import SideFilterHook from "../../Logic/search/side-filter-hook";

const SideFilter = () => {
  const [
    category,
    brand,
    loading,
    handleCheckCategory,
    handleCheckBrand,
    categoryChecked,
    brandChecked,
    handlePriceFrom,
    handlePriceTo,
    priceFromStorage,
    priceToStorage,
  ] = SideFilterHook();

  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <h2 className="filter-title">الفئة</h2>
          <ul className="pe-0">
            <li>
              <input
                onChange={handleCheckCategory}
                type="checkbox"
                id="all-category"
                value="0"
                checked={categoryChecked.length === 0}
              />
              <label htmlFor="all-category" className="filter-sub me-2">
                الكل
              </label>
            </li>
            {/* Repeat the li elements for each category */}
            {category ? (
              category.map((cat) => {
                return (
                  <li key={cat._id}>
                    <input
                      onChange={handleCheckCategory}
                      type="checkbox"
                      id={cat._id}
                      value={cat._id}
                      checked={categoryChecked.includes(cat._id)}
                    />
                    <label htmlFor={cat._id} className="filter-sub me-2">
                      {cat.name}
                    </label>
                  </li>
                );
              })
            ) : (
              <h6>لا يوجد منتجات</h6>
            )}
          </ul>
        </div>

        <div className="d-flex flex-column mt-2">
          <h2 className="filter-title mt-3">الماركة</h2>
          <ul className="pe-0">
            <li>
              <input
                onChange={handleCheckBrand}
                type="checkbox"
                id="all-brand"
                value="0"
                checked={brandChecked.length === 0}
              />
              <label htmlFor="all-brand" className="filter-sub me-2">
                الكل
              </label>
            </li>
            {/* Repeat the li elements for each category */}
            {brand ? (
              brand.map((brand) => {
                return (
                  <li key={brand._id}>
                    <input
                      onChange={handleCheckBrand}
                      type="checkbox"
                      id={brand._id}
                      value={brand._id}
                      checked={brandChecked.includes(brand._id)}
                    />
                    <label htmlFor={brand._id} className="filter-sub me-2">
                      {brand.name}
                    </label>
                  </li>
                );
              })
            ) : (
              <h6>لا يوجد ماركات</h6>
            )}
          </ul>
        </div>

        <h2 className="filter-title my-3">السعر</h2>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            value={priceFromStorage}
            onChange={handlePriceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
            aria-label="Price from"
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            value={priceToStorage}
            onChange={handlePriceTo}
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
