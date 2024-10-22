import { useSetAtom } from "jotai";
import { isAlertActiveAtom } from "../../store/ActiveState";
import useModal from "../../util/hooks/useModal";
import Input from "../common/Input/Input";
import TokenList from "../TokenList";
import * as S from "./style";

const Modal = () => {
  const { setActiveModal } = useModal();
  const setAlertActive = useSetAtom(isAlertActiveAtom);
  return (
    <S.ModalBackground>
      <S.ModalForm>
        <S.Header>
          <S.Head>
            <S.Title>토큰 선택</S.Title>
            <S.BackBtn
              onClick={() => {
                setActiveModal(false);
              }}
            />
          </S.Head>
          <Input placeholder="이름 검색 또는 주소 붙여 넣기" />
          <div>tag</div>
        </S.Header>
        <div>
          <TokenList />
        </div>
        <S.TokenListManageBtn onClick={() => setAlertActive(true)}>
          토큰 목록 관리
        </S.TokenListManageBtn>
      </S.ModalForm>
    </S.ModalBackground>
  );
};

export default Modal;
