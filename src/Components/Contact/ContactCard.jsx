import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/Firebase";
import useDisclose from "../Hooks/useDisclose";
import Modal from "../Modal/Modal";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ContactCard = ({ details }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error);
    }
  };


  const { isOpen, onClose, onOpen } = useDisclose(false);

  // Access the contact details from props and render them
  return (
    <div
      key={details.id}
      className="bg-yellow flex items-center justify-between p-1 rounded-lg"
    >
      <div>
        <HiOutlineUserCircle className="text-orange text-5xl" />
      </div>
      <div>
        <h2 className="font-medium ">{details.name}</h2>
        <p className="text-sm">{details.email}</p>
      </div>
      <div className="flex items-center gap-2 text-4xl cursor-pointer ">
        <RiEditCircleLine onClick={onOpen} className="" />
        <IoMdTrash
          onClick={() => deleteContact(details.id)}
          className="l text-orange"
        />
      </div>
      <Modal details={details} isUpdate isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default ContactCard;
