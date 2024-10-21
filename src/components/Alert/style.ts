import styled from "styled-components";

export const Label = styled.p`
  font-size: 1rem;
  width: 200px;
  text-align: center;
  margin: auto;
  color: ${({ theme }) => theme.font.normal};
`;

export const AlertForm = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 14px;
  padding: 10px;
  background-color: ${({ theme }) => theme.personal.personal50};

  display: flex;
  flex-direction: column;
`;

export const AlertBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
