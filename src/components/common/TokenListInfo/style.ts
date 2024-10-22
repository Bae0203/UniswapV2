import styled from "styled-components";

export const TokenBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.personal.personal100};
  box-sizing: border-box;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.personal.personal50};
  }
`;

export const TokenInfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const TokenImg = styled.div<{ isActive: boolean }>`
  //background-image : url();
  background-color: blue;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-right: 8px;
  ${({ isActive }) => isActive && `filter: grayscale(50%);`}
`;

export const NormalText = styled.p<{ isActive: boolean }>`
  font-size: 12px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.font.disabled1 : theme.font.normal};
  margin-bottom: 2px;
`;

export const SubText = styled.p<{ isActive: boolean }>`
  font-size: 8px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.font.disabled2 : theme.font.placeholder2};
`;
