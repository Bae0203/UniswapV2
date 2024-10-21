import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.personal.personal70};
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.font.normal};
  margin: 4px 0;
  width: 200px;
  &::placeholder {
    color: ${({ theme }) => theme.font.placeholder1};
  }
`;

export const PriceContext = styled.p<{ isRight?: boolean }>`
  font-size: 10px;
  color: ${({ theme }) => theme.font.placeholder2};
  text-align: ${({ isRight }) => (isRight ? "right" : "left")};
`;

export const TokenBtn = styled.div`
  padding: 4px;
  height: 16px;
  margin: 4px 0;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.personal.personal50};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TokenImg = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 20px;
  background-color: blue;
`;

export const TokenName = styled.p`
  margin: 0 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.font.normal};
`;
