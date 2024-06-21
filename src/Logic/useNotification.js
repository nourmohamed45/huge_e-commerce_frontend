import { toast } from "react-toastify";

// For Notification to any Component
const notify = (msg, type) => {
  if(type === "warn") {
    toast.warn(msg);
  }  else if(type === "error") {
    toast.error(msg);
  } else if(type === "success") {
    toast.success(msg);
  }
};

export default notify;