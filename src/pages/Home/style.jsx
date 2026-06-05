import styled from "styled-components";

export const ListaCartazes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;
