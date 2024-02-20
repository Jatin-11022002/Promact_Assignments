import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast({ success, message }) {
  const notify = () => {
    console.log(success);
    if (success) {
      return toast.success(message);
    } else {
      return toast.error(message);
    }
  };

  return (
    <div>
      {notify()}
      {alert("hello")}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
  //   const notify = () => {
  //     console.log("hi");
  //     toast("Hello there", {
  //       onOpen: () => window.alert("Called when I open"),
  //       onClose: () => window.alert("Called when I close"),
  //     });
  //   };

  //   return (
  //     <div>
  //       <button onClick={notify}>Notify</button>;
  //       <ToastContainer
  //         position="top-right"
  //         autoClose={3000}
  //         hideProgressBar={false}
  //         newestOnTop
  //         closeOnClick
  //         rtl={false}
  //         draggable
  //         pauseOnHover
  //         theme="dark"
  //       />
  //     </div>
  //   );
}

export default Toast;
