import styled from "styled-components";

export const TagWrap = styled.div<{ isActive: boolean }>`
  padding: 4px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.personal.disabled : theme.personal.personal100};
  border-radius: 8px;
  border: 1px solid
    ${({ isActive, theme }) =>
      isActive ? theme.personal.disabled : theme.personal.personal10};
  display: inline-block;
  color: ${({ isActive, theme }) =>
    isActive ? theme.font.active : theme.font.normal};
  font-size: 12px;
  margin-right: 4px;
  margin-bottom: 4px;

  cursor: pointer;
`;
export const SubTagWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TokenTmg = styled.div<{ isActive: boolean }>`
  width: 16px;
  height: 16px;
  background-color: blue;
  border-radius: 20px;
  margin-right: 6px;

  ${({ isActive }) => isActive && `filter: grayscale(100%);`}
`;
