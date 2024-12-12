"use client"; // Ensure this is a Client Component

import { useState, useEffect } from "react";
import Modal from "./Modal";

export default function ModalWrapper({ error }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
  }, [error]);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}
