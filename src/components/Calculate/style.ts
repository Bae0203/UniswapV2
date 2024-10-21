import styled from "styled-components";
import DownArrowImg from "../../asset/downArrow.png";

export const InputWrap = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DownArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.personal.personal70};
  border: 3px solid ${({ theme }) => theme.personal.personal100};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DownArrowIcon = styled.div`
  width: 8px;
  height: 8px;
  background-image: url(${DownArrowImg});
  background-size: cover;
`;
