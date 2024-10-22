import { useAtom } from "jotai";
import { isModalActiveAtom } from "../../store/ActiveState";

const useModal = () => {
  const [activeModal, setActiveModal] = useAtom<boolean>(isModalActiveAtom);
  return { activeModal, setActiveModal };
};

export default useModal;
