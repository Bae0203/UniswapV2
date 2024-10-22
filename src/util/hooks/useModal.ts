import { useAtom } from "jotai";
import { isModalActiveAtom, modalIndexAtom } from "../../store/ActiveState";

const useModal = () => {
  const [activeModal, setActiveModal] = useAtom<boolean>(isModalActiveAtom);
  const [modalIndex, setModalIndex] = useAtom<number>(modalIndexAtom);
  return { activeModal, setActiveModal, modalIndex, setModalIndex };
};

export default useModal;
