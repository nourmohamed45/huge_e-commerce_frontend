import { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import notify from "../useNotification";
import {
  getAllReviewsProduct,
  updateSpecificReview,
} from "../../Redux/actions/reviewAction";
import { getProductDetails } from "../../Redux/actions/productActions";

const EditRateHook = (initialReview) => {
  const { id } = useParams();
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const [reviewText, setReviewText] = useState(initialReview.review);
  const [reviewValueEdit, setReviewValueEdit] = useState(initialReview.rating);

  const dispatch = useDispatch();

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleReviewTextChange = (e) => setReviewText(e.target.value);
  const handleReviewValueChangeEdit = (value) => {
    setReviewValueEdit(value);
  };

  const handleEdit = useCallback(
    async (reviewId) => {
      try {
        setLoading(true);
        await dispatch(
          updateSpecificReview(reviewId, {
            review: reviewText,
            rating: reviewValueEdit,
          })
        );
        notify("تم عملية التعديل بنجاح", "success");
        setShowEdit(false);
        setTimeout(async () => {
          await dispatch(getAllReviewsProduct(id, 1, 4));
          await dispatch(getProductDetails(id));
        }, 1000);
      } catch (error) {
        notify(error.response.data.message, "error");
        if (error?.response.status === 400) {
          notify(error.response.data.errors[0].msg, "error");
        }
      } finally {
        setLoading(false);
      }
    },
    [dispatch, id, reviewText, reviewValueEdit]
  );

  useEffect(() => {
    setReviewText(initialReview.review);
    setReviewValueEdit(initialReview.rating);
  }, [initialReview]);

  return [
    showEdit,
    loading,
    handleCloseEdit,
    handleShowEdit,
    handleEdit,
    reviewText,
    reviewValueEdit,
    handleReviewTextChange,
    handleReviewValueChangeEdit,
  ];
};

export default EditRateHook;
