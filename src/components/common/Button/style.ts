import styled, { css } from "styled-components";

const activeButtonStyle = css`
  font-color: ${({ theme }) => theme.font.normal};
  background-color: ${({ theme }) => theme.personal.etc};
`;

const disableButtonStyle = css`
  font-color: ${({ theme }) => theme.font.disabled};
  background-color: ${({ theme }) => theme.personal.personal70};
`;

export const Button = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  text-align: center;
  ${({ isActive }) => (isActive ? activeButtonStyle : disableButtonStyle)}
`;
