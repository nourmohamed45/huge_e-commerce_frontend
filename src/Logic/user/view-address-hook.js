import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotification";
import { getAllAddressUser } from "../../Redux/actions/userAddressAction";

const ViewAddressHook = () => {
  const allAddress = useSelector(state => state.userAddressReducer.allAddresses)
  const dispatch = useDispatch()
  // Get All Coupons from Database
  useEffect(() => {
    const allAddressAction = async () => {
      try {
        await dispatch(getAllAddressUser());
      } catch (e) {
        notify(e.response.data.message, "error");

        if (e?.response.status === 400) {
          notify(e.response.data.errors[0].msg, "error");
        }
      }
    };
    allAddressAction();
  }, [dispatch]);

  return [allAddress]
}

export default ViewAddressHook