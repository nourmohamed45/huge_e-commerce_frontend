import { Row } from "react-bootstrap";
import ProductCardContainer from "../Products/ProductCardContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductFromWishList } from "../../Redux/actions/wishlistAction";
import notify from "../../Logic/useNotification";

const UserFavoriteList = () => {
  const [loading, setLoading] = useState(false);
  const [wishListData, setWishListData] = useState([]);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.wishListReducer.getAllWishList);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const getAllWishListProduct = async () => {
        try {
          setLoading(true);
          await dispatch(getAllProductFromWishList());
        } catch (error) {
          notify(error.response.data.message, "error");
          if (error?.response.status === 400) {
            notify(error.response.data.errors[0].msg, "error");
          }
        } finally {
          setLoading(false);
        }
      };
      getAllWishListProduct();
    }
  }, []);

  useEffect(() => {
    if (!loading && res.data) {
      console.log(res.data);
      if (localStorage.getItem("token")) {
        setWishListData(res.data);
      }
    }
  }, [loading, res.data]);
  return (
    <section>
      <h2 className="admin-content-text"> قائمة المفضلة </h2>
      <Row className="justify-content-start">
        {
          wishListData.length > 0 ? (
            <ProductCardContainer productsData={wishListData} />
          ) : (
            <h4>لا يوجد منتجات مفضلة حاليا</h4>
          )
        }
      </Row>
    </section>
  );
};

export default UserFavoriteList;
