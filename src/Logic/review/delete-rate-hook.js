import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../useNotification";
import { useParams } from "react-router-dom";
import { deleteSpecificReview, getAllReviewsProduct } from "../../Redux/actions/reviewAction";
import { getProductDetails } from "../../Redux/actions/productActions";

const DeleteRateHook = (review) => {
  const { id } = useParams();
  const [showDelete, setShowDelete] = useState(false);
  const [userCheckExist, setUserCheckExist] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  // Get user ID safely
  const getUserId = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user._id : null;
  };

  // Check if user exists to show delete and edit icons
  useEffect(() => {
    const userID = getUserId();
    if (review && review.user && userID === review.user._id) {
      setUserCheckExist(true);
    }
  }, [review]);

  const handleDelete = useCallback(
    async (reviewId) => {
      if (!reviewId) {
        notify("Invalid review ID", "error");
        return;
      }

      try {
        setLoading(true);
        await dispatch(deleteSpecificReview(reviewId));
        notify("تم عملية الحذف بنجاح", "success");
        setShowDelete(false);
        setTimeout(async () => {
          await dispatch(getAllReviewsProduct(id, 1, 4));
          await dispatch(getProductDetails(id));
        }, 1000);
      } catch (error) {
        notify(error.response?.data?.message || "An error occurred", "error");
        if (error?.response?.status === 400) {
          notify(error.response.data.errors[0].msg, "error");
        }
      } finally {
        setLoading(false);
      }
    },
    [dispatch, id]
  );

  return [
    showDelete,
    userCheckExist,
    loading,
    handleClose,
    handleShow,
    handleDelete,
  ];
};

export default DeleteRateHook;