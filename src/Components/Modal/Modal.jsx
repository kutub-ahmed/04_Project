import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import AddandUpdate from "../AddandUpdate/AddandUpdate";



const Modal = ({ isOpen, onClose, isUpdate, details }) => {
  return createPortal(
    <>
      {isOpen && (
        <section className="m-wrapper flex items-center justify-center mx-auto z-[100] mt-[-20rem]">
          <div className="m-conatiner relative z-50 bg-white min-h-[200px] w-[350px] ">
            <div className="cross flex justify-end  p-4">
              <AiOutlineCloseCircle
                onClick={onClose}
                className="text-4xl cursor-pointer text-orange"
              />
            </div>
            
            {/* Form */}
            <div className="f-container">
               <AddandUpdate details={details} isUpdate={isUpdate} onClose={onClose} />
            </div>
          </div>

          <div className="absolute backdrop-blur top-0 z-80 h-screen w-screen" onClick={onClose}  />
        </section>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
