import { Row, Col } from "react-bootstrap";
import avatar from "../../assets/images/avatar.png";
import add from "../../assets/images/add.png";
import Multiselect from "multiselect-react-dropdown";

const AdminAddProducts = () => {
  const options = [
    { name: "التصنيف الاول", id: 1 },
    { name: "التصنيف الثاني", id: 2 },
  ];

  const onSelect = (selectedList, selectedItem) => {};
  const onRemove = (selectedList, removedItem) => {};

  return (
    <section>
      <h2 className="admin-content-text pb-4">اضافه منتج جديد</h2>
      <Row className="justify-content-start">
        <Col sm="8">
          <label htmlFor="product-images" className="sr-only">
            صور للمنتج
          </label>
          <img
            src={avatar}
            alt="Product"
            height="100px"
            width="120px"
            id="product-images"
          />

          <label htmlFor="product-name" className="sr-only">
            اسم المنتج
          </label>
          <input
            type="text"
            id="product-name"
            className="input-form d-block mt-3 px-3 "
            placeholder="اسم المنتج"
            aria-label="اسم المنتج"
          />

          <label htmlFor="product-description" className="sr-only">
            وصف المنتج
          </label>
          <textarea
            id="product-description"
            className="input-form-area p-2 mt-3"
            rows="4"
            placeholder="وصف المنتج"
            aria-label="وصف المنتج"
          />

          <label htmlFor="price-before-discount" className="sr-only">
            السعر قبل الخصم
          </label>
          <input
            type="number"
            id="price-before-discount"
            className="input-form d-block mt-3 px-3"
            placeholder="السعر قبل الخصم"
            aria-label="السعر قبل الخصم"
          />

          <label htmlFor="product-price" className="sr-only">
            سعر المنتج
          </label>
          <input
            type="number"
            id="product-price"
            className="input-form d-block mt-3 px-3"
            placeholder="سعر المنتج"
            aria-label="سعر المنتج"
          />

          <label htmlFor="main-category" className="sr-only">
            التصنيف الرئيسي
          </label>
          <select
            name="main-category"
            id="main-category"
            className="select input-form-area mt-3 px-2"
            aria-label="التصنيف الرئيسي"
          >
            <option value="val">التصنيف الرئيسي</option>
            <option value="val1">التصنيف الاول</option>
            <option value="val2">التصنيف الثاني</option>
            <option value="val3">التصنيف الثالث</option>
            <option value="val4">التصنيف الرابع</option>
          </select>

          <label htmlFor="sub-category" className="sr-only">
            التصنيف الفرعي
          </label>
          <Multiselect
            id="sub-category"
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            aria-label="التصنيف الفرعي"
          />

          <label htmlFor="brand" className="sr-only">
            الماركة
          </label>
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2"
            aria-label="الماركة"
          >
            <option value="val">الماركة</option>
            <option value="val1">الماركة الاولي</option>
            <option value="val2">الماركة الثانيه</option>
            <option value="val3">الماركة الثالثه</option>
            <option value="val4">الماركة الرابعه</option>
          </select>

          <label htmlFor="product-colors" className="text-form mt-3">
            الالوان المتاحه للمنتج
          </label>
          <div id="product-colors" className="mt-1 d-flex">
            <div
              className="color ms-2 border mt-1"
              style={{ backgroundColor: "#E52C2C" }}
              aria-label="Red color"
            ></div>
            <div
              className="color ms-2 border mt-1"
              style={{ backgroundColor: "white" }}
              aria-label="White color"
            ></div>
            <div
              className="color ms-2 border mt-1"
              style={{ backgroundColor: "black" }}
              aria-label="Black color"
            ></div>
            <img
              src={add}
              alt="Add color"
              width="30px"
              height="35px"
              className="ms-2"
              aria-label="Add new color"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save d-inline mt-2">حفظ التعديلات</button>
        </Col>
      </Row>
    </section>
  );
};

export default AdminAddProducts;
