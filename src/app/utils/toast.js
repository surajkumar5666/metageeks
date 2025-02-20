import { toast } from "react-toastify";

const notifySuccess = (message) => {
  console.log("hello");
  return toast.success(message, {
    position: "bottom-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const notifyError = (message) =>
  toast.error(message, {
    position: "bottom-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifyWarn = (message) =>
  toast.warn(message, {
    position: "bottom-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
const notifyInfo = (message) =>
  toast.info(message, {
    position: "bottom-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export { notifySuccess, notifyError, notifyWarn, notifyInfo };
