import { Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Import images
import favoff from "../../assets/images/fav-off.png";
import favon from "../../assets/images/fav-on.png";
import rate from "../../assets/images/rate.png";
import AddRemoveFromWishlistHook from "../../Logic/wishlist/add-remove-from-wishlist-hook";
import { webBaseURL } from "../../Api/baseURL";

// Import constants

const ProductCard = ({
  id,
  title,
  price,
  priceAfterDiscount,
  img,
  rateAvg,
  wishListData,
}) => {
  const [isFavorite, handleFav] = AddRemoveFromWishlistHook(id, wishListData);

  return (
    <Col className="d-flex" xs="12" sm="6" md="4" lg="3">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151, 151, 151, 0.5)",
        }}
      >
        <Link to={`/product/${id}`}>
          <Card.Img
            variant="top"
            src={(() => {
              if (img.startsWith("http")) {
                return img;
              }
              return `${webBaseURL}/products/${img}`;
            })()}
            style={{ height: "228px", width: "100%" }}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={isFavorite ? favon : favoff}
            alt=""
            className="text-center"
            onClick={handleFav}
            style={{
              height: "24px",
              width: "26px",
              cursor: "pointer",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title mb-3">{title}</div>
          </Card.Title>
          <Card.Text as="div">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{rateAvg || 0}</div>
              </div>
              <div className="d-flex">
                <div className="card-price">
                  {priceAfterDiscount >= 1 ? (
                    <>
                      <span style={{ textDecoration: "line-through", fontSize:"16px" }}>
                        {price}
                      </span>
                      {" "}
                      {priceAfterDiscount}
                    </>
                  ) : (
                    price
                  )}
                </div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceAfterDiscount: PropTypes.number,
  img: PropTypes.string.isRequired,
  rateAvg: PropTypes.number,
  wishListData: PropTypes.array.isRequired,
};

export default ProductCard;
