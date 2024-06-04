import mobile from "../../assets/images/mobile.png";
import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
    },
    {
      original: `${mobile1}`,
    },
    {
      original: `${mobile2}`,
    },
    {
      original: `${mobile}`,
    },
  ];

  return (
    <div className="product-gallary-card">
      <ImageGallery
        items={images}
        defaultImage={mobile}
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
    </div>
  );
};

export default ProductGallery;
