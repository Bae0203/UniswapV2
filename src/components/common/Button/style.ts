import styled, { css } from "styled-components";

const activeButtonStyle = css`
  color: ${({ theme }) => theme.font.normal};
  background-color: ${({ theme }) => theme.personal.etc};

  &:hover {
    background-color: ${({ theme }) => theme.personal.etcHover};
  }
`;

const disableButtonStyle = css`
  color: ${({ theme }) => theme.font.disabled1};
  background-color: ${({ theme }) => theme.personal.personal70};
`;

export const Button = styled.button<{ isActive: boolean }>`
  ${({ isActive }) => (isActive ? activeButtonStyle : disableButtonStyle)}
  width: 100%;
  min-width: 100px;
  padding: 1rem 0rem;
  font-size: 14px;
  text-align: center;
  border: none;
  box-shadow: none;
  border-radius: 14px;
`;
