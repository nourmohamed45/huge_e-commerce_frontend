import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import notify from "../useNotification";
import {  useParams } from "react-router-dom";
import { deleteSpecificReview, getAllReviewsProduct } from "../../Redux/actions/reviewAction";
import { getProductDetails } from "../../Redux/actions/productActions";

const DeleteRateHook = (review) => {
  const {id} = useParams();
  // states
  const [showDelete, setShowDelete] = useState(false);
  const [userCheckExist, setUserCheckExist] = useState(false);
  const [loading, setLoading] = useState(false);

  // dispatche and navigate
  const dispatch = useDispatch();

  // functions
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  // Variables
  let userID = JSON.parse(localStorage.getItem("user"))?._id;

  // check if user exists to show delete and edit icons
  useEffect(() => {
    if (userID === review.user._id) setUserCheckExist(true);
  }, []);

  const handleDelete = useCallback(
    async (reviewId) => {
      try {
        setLoading(true);
        await dispatch(deleteSpecificReview(reviewId));
        notify("تم عملية الحذف بنجاح", "success");

        // Close the modal immediately after successful deletion
        setShowDelete(false);

        // Delay the products refresh to allow the notification to be visible
        setTimeout(async () => {
          await dispatch(getAllReviewsProduct(id, 1, 4));
          await dispatch(getProductDetails(id));
        }, 1000); // 3 seconds delay, adjust as needed
      } catch (error) {
        notify(error.response.data.message, "error");
        if (error?.response.status === 400) {
          notify(error.response.data.errors[0].msg, "error");
        }
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
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
