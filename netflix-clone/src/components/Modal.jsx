// src/Modal.jsx
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const Modal = ({ isOpen, onClose, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setTimeout(() => setShow(false), 300); // Match the duration of the animation
    }
  }, [isOpen]);

  return (
    <Transition show={show}>
      <div
        className="fixed  inset-0 flex items-center overflow-y-scroll scrollbar-hide justify-center z-50"
        onClick={onClose}
      >
        <span className="text-black font-semibold z-50">X</span>

        <Transition.Child
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-80"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-80"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black"></div>
        </Transition.Child>

        <Transition.Child
          enter="transition-transform transition-opacity duration-300"
          enterFrom="scale-75 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition-transform transition-opacity duration-300"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-75 opacity-0"
        >
          <div
            className="bg-black border border-white p-3 rounded shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black bg-opacity-40 text-gray-500 hover:text-gray-700 flex items-center justify-center"
              onClick={onClose}
            ></button>
            {children}
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default Modal;
