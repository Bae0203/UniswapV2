import styled from "styled-components";
import BackIcon from "../../asset/backIcon.png";

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalForm = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.personal.personal100};
`;

export const Head = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.font.normal};
  font-size: 12px;
`;

export const BackBtn = styled.div`
  background-image: url(${BackIcon});
  background-size: cover;
  width: 10px;
  height: 10px;
`;

export const TokenListManageBtn = styled.div`
  background-color: ${({ theme }) => theme.personal.personal70};
  border-top: 1px solid ${({ theme }) => theme.personal.personal50};
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.personal.etc};
  font-size: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.personal.personal100};
    color: ${({ theme }) => theme.personal.etcHover};
  }
`;
