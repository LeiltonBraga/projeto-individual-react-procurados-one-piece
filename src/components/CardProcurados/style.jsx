import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => (props.$capturado ? "#d3c5ad" : "#f4e4bc")};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  filter: ${(props) => (props.$capturado ? "grayscale(80%)" : "none")};
  width: 100%;
  max-width: 300px;
  padding: 15px;

  @media (min-width: 768px) {
    width: 250px;
    padding: 20px;
    margin-top: 10px
  }
`;

export const TituloProcurado = styled.h2`
  font-family: "Times New Roman", serif;
  color: #3e2723;
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

export const ImagemPersonagem = styled.img`
  width: 100%;
  margin-bottom: 15px;
`;

export const Nome = styled.h3`
  font-family: "Times New Roman", serif;
  font-size: 20px;
  color: #3e2723;
  text-align: center;
  margin-bottom: 5px;
`;

export const Recompensa = styled.p`
  font-family: "Times New Roman", serif;
  font-size: 22px;
  font-weight: bold;
  color: #d32f2f;
  margin-bottom: 15px;
`;

export const BotaoCapturar = styled.button`
  background-color: ${(props) => (props.$capturado ? "#4caf50" : "#d32f2f")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;

  &:hover {
    opacity: 0.9;
  }
`;