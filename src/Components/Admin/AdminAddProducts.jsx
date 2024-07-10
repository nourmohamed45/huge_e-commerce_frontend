// import External Libraries
import Multiselect from "multiselect-react-dropdown";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";

// import React bootstrap components
import { Row, Col, Spinner } from "react-bootstrap";

// import images
import avatar from "../../assets/images/avatar.png";
import add from "../../assets/images/add.png";
import remove from "../../assets/images/delete.png";

// import Custom hook for logic
import AddProductHook from "../../Logic/product/add-product-hook";

const AdminAddProducts = () => {
  const [
    categoryData,
    subCategoryByCategoryData,
    brandData,
    priceAfterDiscount,
    showColorPicker,
    loading,
    handleImageChange,
    renderPhotos,
    handleChangeCategorySelection,
    onSelectSubCategory,
    onRemoveSubCategory,
    handleChangeBrandSelection,
    handleShowColorPicker,
    handleChangeColorComplete,
    handleRemoveColor,
    handleSubmitProduct,
    selectedImages,
    productName,
    setProductName,
    productDescription,
    setProductDescription,
    priceBeforeDiscount,
    setPriceBeforeDiscount,
    setPriceAfterDiscount,
    quantityAvailable,
    setQuantityAvailable,
    colors,
  ] = AddProductHook();
  return (
    <section>
      <Row className="justify-content-start">
        <Col sm="8">
          {/* Uploading Images */}
          <div>
            <label htmlFor="upload-photo" style={{ cursor: "pointer" }}>
              {selectedImages.length > 0 ? (
                <div className="result">{renderPhotos(selectedImages)}</div>
              ) : (
                <img
                  src={avatar}
                  alt="Product"
                  id="product-image"
                  height="100px"
                  width="120px"
                />
              )}
              <input
                type="file"
                id="upload-photo"
                placeholder="صورة المنتج"
                aria-label="صورة المنتج"
                className="sr-only"
                onChange={handleImageChange}
                multiple
              />
            </label>
          </div>
          {/* ======================== product Details ======================== */}
          {/* Name */}
          <label htmlFor="product-name" className="sr-only">
            اسم المنتج
          </label>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            id="product-name"
            className="input-form d-block mt-3 px-3 "
            placeholder="اسم المنتج"
            aria-label="اسم المنتج"
          />
          {/* Description */}
          <label htmlFor="product-description" className="sr-only">
            وصف المنتج
          </label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            id="product-description"
            className="input-form-area p-2 mt-3"
            rows="4"
            placeholder="وصف المنتج"
            aria-label="وصف المنتج"
          />

          {/* Discount */}
          <label htmlFor="price-before-discount" className="sr-only">
            السعر قبل الخصم
          </label>
          <input
            value={priceBeforeDiscount}
            onChange={(e) => setPriceBeforeDiscount(e.target.value)}
            type="number"
            id="price-before-discount"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            aria-label="السعر قبل الخصم"
          />

          {/* Price */}
          <label htmlFor="product-price" className="sr-only">
            سعر المنتج
          </label>
          <input
            value={priceAfterDiscount}
            onChange={(e) => setPriceAfterDiscount(e.target.value)}
            type="number"
            id="product-price"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر بعد الخصم"
            aria-label="السعر بعد الخصم"
          />
          {/* Quantity */}
          <label htmlFor="product-quantity" className="sr-only">
            الكمية المتاحة
          </label>
          <input
            value={quantityAvailable}
            onChange={(e) => setQuantityAvailable(e.target.value)}
            type="number"
            id="product-quantity"
            className="input-form d-block mt-3 px-3"
            placeholder="الكمية المتاحة"
            aria-label="الكمية المتاحة"
          />

          {/* Main Cateogry */}
          <label htmlFor="main-category" className="sr-only">
            التصنيف الرئيسي
          </label>
          <select
            defaultValue={"default"}
            onChange={handleChangeCategorySelection}
            name="main-category"
            id="main-category"
            className="select input-form-area mt-3 px-2"
            aria-label="التصنيف الرئيسي"
          >
            <option value="default" disabled>
              التصنيف الرئيسي
            </option>
            {categoryData?.data?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          {/* Sub Category */}
          <label htmlFor="sub-category" className="sr-only">
            التصنيف الفرعي
          </label>
          <Multiselect
            id="sub-category"
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={subCategoryByCategoryData.data}
            onSelect={onSelectSubCategory}
            onRemove={onRemoveSubCategory}
            displayValue="name"
            aria-label="التصنيف الفرعي"
          />

          {/* Brand */}
          <label htmlFor="brand" className="sr-only">
            الماركة
          </label>
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2"
            aria-label="الماركة"
            defaultValue={"default"}
            onChange={handleChangeBrandSelection}
          >
            <option value="default" disabled>
              {" "}
              أختر الماركة{" "}
            </option>
            {brandData && brandData.data && brandData.data.length > 0 ? (
              brandData?.data?.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))
            ) : (
              <option disabled>لاتوجد ماركات متاحة</option>
            )}
          </select>

          {/* Colors */}
          <label htmlFor="product-colors" className="text-form mt-3">
            الالوان المتاحه للمنتج
          </label>
          <div id="product-colors" className="mt-1 d-flex">
            {colors.length > 0 &&
              colors.map((color, index) => (
                <div
                  key={index}
                  id="show_color_div"
                  className="color ms-2 border mt-1 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: color }}
                  aria-label={`Color ${index + 1}`}
                  onClick={() => handleRemoveColor(index)}
                >
                  <img
                    id="remove_color_icon"
                    src={remove}
                    alt="delete-icon"
                    style={{
                      width: "18px",
                      height: "18px",
                      margin: "auto",
                    }}
                  />
                </div>
              ))}
            <img
              src={add}
              alt="Add color"
              width="30px"
              height="35px"
              className="ms-2"
              aria-label="Add new color"
              style={{ cursor: "pointer" }}
              onClick={handleShowColorPicker}
            />
            {showColorPicker && (
              <CompactPicker onChangeComplete={handleChangeColorComplete} />
            )}
          </div>
        </Col>
      </Row>

      <h2 className="admin-content-text pb-4">اضافه منتج جديد</h2>

      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button
            onClick={handleSubmitProduct}
            className="btn-save d-inline mt-2"
          >
            {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              "حفظ التعديلات"
            )}
          </button>
        </Col>
      </Row>
      {/* Notification */}
      <ToastContainer />
    </section>
  );
};

export default AdminAddProducts;
