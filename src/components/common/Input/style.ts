import styled from "styled-components";

export const Input = styled.input`
  background: none;
  width: 90%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.font.placeholder1};
  color: ${({ theme }) => theme.font.placeholder1};

  &:hover {
    border: 1px solid ${({ theme }) => theme.personal.etc};
  }

  &::placeholder {
    color: ${({ theme }) => theme.font.placeholder2};
  }
`;
