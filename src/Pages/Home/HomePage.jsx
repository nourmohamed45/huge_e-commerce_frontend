import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import ProductCardContainer from "../../Components/Products/ProductCardContainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandCardContainer from "../../Components/Brand/BrandCardContainer";
import HomeProductHook from "../../Logic/product/home-product-hook";

const HomePage = () => {
  // Reciving Products Data from HomeProductHook.jsx logic file
  const [items] = HomeProductHook(4);

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <div className="my-5"></div>
      <HomeCategory />
      <div className="my-5"></div>
      <ProductCardContainer
        productsData={items.data}
        subtitle={"الأكثر مبيعا"}
        subtitlebtn={"المزيد"}
        path={"products"}
      />
      <div className="my-5"></div>
      <DiscountSection discountTitle={"خصم يصل حتي 30% علي اجهزو اللاب توب"} />
      <div className="my-5"></div>
      <ProductCardContainer
        productsData={items.data}
        subtitle={"أحدث المنتجات"}
        subtitlebtn={"المزيد"}
        path={"products"}
      />
      <div className="my-5"></div>
      <BrandCardContainer subtitle={"أشهر الماركات"} subtitlebtn={"المزيد"} />
    </div>
  );
};

export default HomePage;
