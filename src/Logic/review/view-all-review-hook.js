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
  const [reviews, setReviews] = useState([]);

  // selector
  const allReviews = useSelector((state) => state.reviewReducer.allReviews);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        await dispatch(getAllReviewsProduct(id, 1, limit));
      } catch (error) {
        notify(error.response?.data?.message || "An error occurred", "error");
        if (error?.response?.status === 400) {
          notify(error.response.data.errors[0]?.msg || "Invalid request", "error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [dispatch, id, limit]);

  useEffect(() => {
    if (!loading && allReviews) {
      setReviews(allReviews);
    }
  }, [loading, allReviews]);

  const onPress = async (page) => {
    setLoading(true);

    try {
      await dispatch(getAllReviewsProduct(id, page, limit));
    } catch (error) {
      notify(error.response?.data?.message || "An error occurred", "error");
      if (error?.response?.status === 400) {
        notify(error.response.data.errors[0]?.msg || "Invalid request", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return [loading, reviews, onPress];
};

export default ViewAllReviewHook;
