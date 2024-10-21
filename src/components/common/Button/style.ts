import styled, { css } from "styled-components";

const activeButtonStyle = css`
  color: ${({ theme }) => theme.font.normal};
  background-color: ${({ theme }) => theme.personal.etc};
`;

const disableButtonStyle = css`
  color: ${({ theme }) => theme.font.disabled};
  background-color: ${({ theme }) => theme.personal.personal70};
`;

export const Button = styled.button<{ isActive: boolean }>`
  ${({ isActive }) => (isActive ? activeButtonStyle : disableButtonStyle)}
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  box-shadow: none;
  border-radius: 10px;
`;
