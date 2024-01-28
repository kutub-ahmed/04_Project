import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddandUpdate = ({ isUpdate, details, onClose }) => {
  // AddContact Function
  const addContact = async (details) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, details);
      toast.success("🦄 Contact Added Succesfully");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (details, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, details);
      toast.success("🦄 Contact Updated Succesfully");
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="f-wrapper">
      <Formik
        validationSchema={contactValidationSchema}
        initialValues={
          isUpdate
            ? {
                name: details.name,
                email: details.email,
              }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          console.log(values);
          isUpdate ? updateContact(values, details.id) : addContact(values);
        }}
      >
        <Form>
          <div className="flex flex-col gap-2 ">
            <div className="form flex flex-col gap-1 self-center ">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                className="border h-8 w-[250px] "
              />
              <div className="text-[#e33d3d] text-xs font-medium">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="form flex flex-col gap-1 self-center">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="border h-8 w-[250px]"
              />
              <div className="text-[#e33d3d] text-xs font-medium">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="flex flex-col p-3 ">
              <button className="bg-orange rounded self-end px-3 py-1 cursor-pointer transition-all ease-in-out duration-400  hover:scale-105">
                {isUpdate ? "Update " : "Add"} Contact
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default AddandUpdate;
