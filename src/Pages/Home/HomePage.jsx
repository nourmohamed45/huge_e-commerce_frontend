import Slider from "../../Components/Home/Slider"
import HomeCategory from "../../Components/Home/HomeCategory"
import ProductCardContainer from "../../Components/Products/ProductCardContainer"
import DiscountSection from "../../Components/Home/DiscountSection"
import BrandCardContainer from "../../Components/Brand/BrandCardContainer"


const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <div className="my-5"></div>
      <HomeCategory />
      <div className="my-5"></div>
      <ProductCardContainer
        subtitle={"الأكثر مبيعا"}
        subtitlebtn={"المزيد"}
        path={"products"}
      />
      <div className="my-5"></div>
      <DiscountSection discountTitle={"خصم يصل حتي 30% علي اجهزو اللاب توب"} />
      <div className="my-5"></div>
      <ProductCardContainer
        subtitle={"أحدث الأزياء"}
        subtitlebtn={"المزيد"}
        path={"products"}
      />
      <div className="my-5"></div>
      <BrandCardContainer subtitle={"أشهر الماركات"} subtitlebtn={"المزيد"} />
    </div>
  );
}

export default HomePage


