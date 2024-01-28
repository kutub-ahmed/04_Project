import React, { useState } from 'react'

const useDisclose = () => {

    const [isOpen, setOpen] = useState();

    // Function to open the Modal
    const onOpen = () => {
      setOpen(true);
    };
    // Function to close the Modal
    const onClose = () => {
      setOpen(false);
    };
  return (
    {isOpen, onClose, onOpen}
  )
}

export default useDisclose