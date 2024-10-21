import styled from "styled-components";
import SttingImg from "../../asset/settingIcon.png";

export const MainForm = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.personal.personal100};
  width: 300px;
  height: 600px;
  padding: 4px;
`;

export const Head = styled.nav`
  width: 94%;
  height: 30px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.font.normal};
  font-size: 12px;
`;

export const SettingBtn = styled.div`
  background-image: url(${SttingImg});
  background-size: cover;
  width: 14px;
  height: 14px;
`;
