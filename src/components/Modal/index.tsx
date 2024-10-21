import useModal from "../../util/hooks/useModal";
import Input from "../common/Input/Input";
import * as S from "./style";

const Modal = () => {
  const { setActiveModal } = useModal();
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
        <div>list</div>
        <S.TokenListManageBtn>토큰 목록 관리</S.TokenListManageBtn>
      </S.ModalForm>
    </S.ModalBackground>
  );
};

export default Modal;
