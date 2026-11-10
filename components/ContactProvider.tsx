"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ContactModal from "./ContactModal";

const ContactContext = createContext<{ openModal: () => void }>({
  openModal: () => {},
});

export const useContact = () => useContext(ContactContext);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContactContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactContext.Provider>
  );
}