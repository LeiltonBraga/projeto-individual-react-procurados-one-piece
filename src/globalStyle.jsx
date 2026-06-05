import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #2c3e50; /* Mantém o seu fundo azul escuro */
    font-family: sans-serif;
    color: white;
  }
`;

export const ContainerPagina = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;

  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`;

export const TituloPagina = styled.h1`
  color: white;
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 2px solid white;
  font-size: 22px;
  margin-bottom: 25px;
  padding-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
    padding-bottom: 10px;
  }
`;

export const LogoMarinha = styled.img`
  width: 150px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 200px;
    margin-bottom: 20px;
  }
`;

export const BotaoContato = styled.button`
  background-color: #d32f2f;
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 12px;
`;