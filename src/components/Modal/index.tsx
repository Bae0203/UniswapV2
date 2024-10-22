import { useSetAtom } from "jotai";
import { isAlertActiveAtom } from "../../store/ActiveState";
import useModal from "../../util/hooks/useModal";
import useTokenList from "../../util/hooks/useTokenList";
import Input from "../common/Input/Input";
import Tag from "../common/Tag";
import TokenList from "../TokenList";
import * as S from "./style";

const Modal = () => {
  const { setActiveModal } = useModal();
  const { searchResult, searchValue, setSearchValue } = useTokenList();
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
          <Input
            placeholder="이름 검색 또는 주소 붙여 넣기"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <S.TagWrap>
            <Tag name="AAVE" isActive={false} />
            <Tag name="USDT" isActive={true} />
            <Tag name="COMP" isActive={true} />
            <Tag name="AXS" isActive={false} />
            <Tag name="ETC" isActive={false} />
            <Tag name="DAI" isActive={false} />
            <Tag name="CRV" isActive={false} />
          </S.TagWrap>
        </S.Header>
        <div>
          <TokenList searchResult={searchResult} />
        </div>
        <S.TokenListManageBtn onClick={() => setAlertActive(true)}>
          토큰 목록 관리
        </S.TokenListManageBtn>
      </S.ModalForm>
    </S.ModalBackground>
  );
};

export default Modal;
