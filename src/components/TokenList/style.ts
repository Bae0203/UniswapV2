import styled from "styled-components";
import Empty from "../../asset/empty.png";

export const MainWrap = styled.div`
  overflow: auto;
  width: 100%;
  height: 260px;
`;

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

export const TokenImg = styled.div`
  //background-image : url();
  background-color: blue;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-right: 8px;
`;

export const NormalText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.font.normal};
  margin-bottom: 2px;
`;

export const SubText = styled.p`
  font-size: 8px;
  color: ${({ theme }) => theme.font.placeholder2};
`;

export const EmptyListWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.font.normal};
  font-size: 12px;
  flex-direction: column;
`;

export const EmptyImg = styled.div`
  background-image: url(${Empty});
  width: 80px;
  height: 80px;
  background-size: cover;
  margin-bottom: 10px;
`;
