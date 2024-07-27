import noImageAvailable from "../../assets/images/no-image-available.jpg";
// import mobile1 from "../../assets/images/mobile1.png";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "../../Logic/product/view-product-details-hook";
import { Spinner } from "react-bootstrap";

const ProductGallery = () => {
  const { id } = useParams();
  const [, images, loading] = ViewProductDetailsHook(id);

  return (
    <div className="product-gallary-card">
      {!loading ? (
        <ImageGallery
          items={images}
          defaultImage={noImageAvailable}
          showThumbnails={false}
          isRTL={true}
          showPlayButton={false}
          renderRightNav={(onClick, disabled) => (
            <RightButton onClick={onClick} disabled={disabled} />
          )}
          renderLeftNav={(onClick, disabled) => (
            <LeftButton onClick={onClick} disabled={disabled} />
          )}
          showFullscreenButton={false}
        />
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
};

export default ProductGallery;
