import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "../../Logic/subCategory/add-sub-category-hook";

const AdminAddSubCategory = () => {
  const [
    isPress,
    loading,
    subCategoryName,
    onChangeSubCategoryName,
    handleChangeSelection,
    categoryData,
    handleSubmit,
  ] = AddSubCategoryHook();

  return (
    <section>
      <h2 className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</h2>
      {isPress ? (
        loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          ""
        )
      ) : (
        <>
          <Row className="justify-content-start">
            <Col sm="8">
              <label htmlFor="sub-category-name" className="sr-only">
                اسم التصنيف الفرعي
              </label>
              <input
                type="text"
                id="sub-category-name"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم التصنيف الفرعي"
                aria-label="اسم التصنيف الفرعي"
                value={subCategoryName}
                onChange={(e) => onChangeSubCategoryName(e.target.value)}
              />
              <label htmlFor="category-select" className="sr-only">
                إختر التصنيف الرئيسي
              </label>
              <select
                id="category-select"
                name="category"
                className="select mt-3 px-2"
                aria-label="إختر التصنيف الرئيسي"
                onChange={handleChangeSelection}
                defaultValue={"default"}
              >
                <option value="default" disabled>
                  إختر التصنيف الرئيسي
                </option>
                { categoryData?.data?.length > 0 ? (
                  categoryData.data.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))
                ) : (
                  <option disabled>لا توجد تصنيفات متاحة</option>
                )}
              </select>
            </Col>
          </Row>
          <Row>
            <Col sm="8" className="d-flex justify-content-end">
              <button onClick={handleSubmit} className="btn-save d-inline mt-2">
                حفظ التعديلات
              </button>
            </Col>
          </Row>
        </>
      )}
      {/* Notifications */}
      <ToastContainer autoClose={2000} />
    </section>
  );
};

export default AdminAddSubCategory;
