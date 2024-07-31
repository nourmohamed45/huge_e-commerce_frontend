import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import notify from '../useNotification';
import { deleteAddress, getAllAddressUser } from '../../Redux/actions/userAddressAction';

const DeleteAddressHook = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = useCallback(
    async (id) => {
      try {
        await dispatch(deleteAddress(id));
        notify("تم عملية الحذف بنجاح", "success");

        // Close the modal immediately after successful deletion
        setShow(false);

        // Delay the products refresh to allow the notification to be visible
        setTimeout(async () => {
          await dispatch(getAllAddressUser());
        }, 500); // 3 seconds delay, adjust as needed
      } catch (error) {
        notify(error.response.data.message, "error");
        if (error?.response.status === 400) {
          notify(error.response.data.errors[0].msg, "error");
        }
      }
    },
    [dispatch]
  );

  return [show, handleClose, handleShow, handleDelete];
}

export default DeleteAddressHook