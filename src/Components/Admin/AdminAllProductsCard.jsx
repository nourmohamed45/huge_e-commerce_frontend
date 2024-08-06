// Import React Bootstrap Components
import { Card, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// Import React Router Components
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// import images
import rate from "../../assets/images/rate.png";

import { ToastContainer } from "react-toastify";
import AdminAllProductCardsHook from "../../Logic/product/admin-all-product-cards-hook";

const AdminAllProductsCard = ({ productCardData }) => {
  const [show, handleClose, handleShow, handleDelete] =
    AdminAllProductCardsHook();

  return (
    <Col className="d-flex" xs="10" sm="6" md="4" lg="4">
      {/* Start Modal Compoennt */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>هل تريد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          سيتم حذف المنتج{" "}
          <span style={{ color: "green" }}>{`(${productCardData.title})`}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDelete(productCardData._id)}
          >
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Modal Compoennt */}

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: " 370px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151, 151, 151, 0.5",
        }}
      >
        <Row className="d-flex justify-content-center p-2">
          <Col className=" d-flex justify-content-between">
            <button
              onClick={handleShow}
              className="d-inline item-delete-edit"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              إزالة
            </button>
            <Link to={`/admin/editproducts/${productCardData._id}`}>
              <button
                className="d-inline item-delete-edit"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                تعديل
              </button>
            </Link>
          </Col>
        </Row>
        <Link
          to={`/product/${productCardData._id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            variant="top"
            src={productCardData.imageCover}
            style={{ height: "228px", width: "100%" }}
          />
          <Card.Body>
            <Card.Title>
              <div className="card-title mb-3">{productCardData.title}</div>
            </Card.Title>
            <Card.Text as={"div"}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    className=""
                    src={rate}
                    alt=""
                    height="16px"
                    width="16px"
                  />
                  <div className="card-rate mx-2">
                    {productCardData.ratingsQuantity}
                  </div>
                </div>
                <div className="d-flex">
                  <div className="card-price">
                  {productCardData.priceAfterDiscount >= 1 ? (
                    <>
                      <span style={{ textDecoration: "line-through", fontSize:"16px" }}>
                        {productCardData.price}
                      </span>
                      {" "}
                      {productCardData.priceAfterDiscount}
                    </>
                  ) : (
                    productCardData.price
                  )}
                  </div>
                  <div className="card-currency mx-1">جنيه</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
      {/* Notification */}
      <ToastContainer />
    </Col>
  );
};

export default AdminAllProductsCard;

AdminAllProductsCard.propTypes = {
  productCardData: PropTypes.object,
};
