"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // prevent modal SSR
  useEffect(() => {
    // client side
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // server side
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
