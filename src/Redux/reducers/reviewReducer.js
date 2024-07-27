import { ALL_REVIEWS_PRODUCT, CREATE_REVIEW, DELETE_SPECIFIC_REVIEW } from "../type";

const initialState = {
  createReview: [],
  allReviews: [],
  deleteReview: [],
  loading: true,
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createReview: action.payload,
        loading: false,
      };
    case ALL_REVIEWS_PRODUCT:
      return {
        ...state,
        allReviews: action.payload,
        loading: false,
      }
    case DELETE_SPECIFIC_REVIEW:
      return {
        ...state,
        deleteReview: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};


export default reviewReducer;