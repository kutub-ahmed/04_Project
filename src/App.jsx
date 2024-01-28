import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/Firebase";
import ContactCard from "./Components/Contact/ContactCard";
import Modal from "./Components/Modal/Modal";
import useDisclose from "./Components/Hooks/useDisclose";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        onSnapshot(contactRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          setContacts(contactLists);
        });
      } catch (error) {}
    };
    getContacts();
  }, []);

  // Modal State Management

  const { isOpen, onClose, onOpen } = useDisclose(false);

  // useState for search filter
  const [filter, setFilter] = useState("");

  return (
    <section>
      <div className="app-container m-10">
        <div className="max-w-[370px] mx-auto flex flex-col px-2">
          <Navbar />
          <Search isOpen={onOpen} setFilter={setFilter} />
          <div className="mt-4 flex flex-col gap-3">
            {contacts 
            .filter((item) => {
              return filter.toLowerCase() === " "
                ? item
                : item.name.toLowerCase().includes(filter.toLowerCase());
            })
            .length <= 0 
            ? 
            (
              <NotFound />
            ) 
            : 
            (
            contacts
            
            .filter((item) => {
                  return filter.toLowerCase() === " "
                    ? item
                    : item.name.toLowerCase().includes(filter.toLowerCase());
                })
            .map((contact) => (
                  <ContactCard key={contact.id} details={contact} />
                ))
            )}
          </div>
          <Modal isOpen={isOpen} onClose={onClose} />
        </div>
        <ToastContainer position="bottom-center" autoClose={1500} />
      </div>
    </section>
  );
}

export default App;
