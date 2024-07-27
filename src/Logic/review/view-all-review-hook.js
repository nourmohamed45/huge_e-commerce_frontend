import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviewsProduct } from "../../Redux/actions/reviewAction";
import { useParams } from "react-router-dom";
import notify from "../useNotification";

const ViewAllReviewHook = () => {
  const limit = 4;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // selector
  const reviews = useSelector((state) => state.reviewReducer.allReviews);

  if (reviews) {
    console.log(reviews);
  }

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        await dispatch(getAllReviewsProduct(id, 1, limit));
      } catch (error) {
        notify(error.response.data.message, "error");
        if (error?.response.status === 400) {
          notify(error.response.data.errors[0].msg, "error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [dispatch, id, limit]);

  const onPress = async (page) => {
    setLoading(true);

    try {
      // Your form submission logic here
      await dispatch(getAllReviewsProduct(id, page, limit));
    } catch (error) {
      notify(error.response.data.message, "error");
      if (error?.response.status === 400) {
        notify(error.response.data.errors[0].msg, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return [loading, reviews, onPress];
};

export default ViewAllReviewHook;
