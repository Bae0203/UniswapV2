import React, { useState } from "react";

const useModal = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  return { activeModal, setActiveModal };
};

export default useModal;
