import styled from "styled-components";
import Empty from "../../asset/empty.png";

export const MainWrap = styled.div`
  overflow: auto;
  width: 100%;
  height: 260px;
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
