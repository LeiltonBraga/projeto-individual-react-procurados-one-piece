
import styled from "styled-components";

export const DenDenMushi = styled.img`
  width: 200px;
  cursor: pointer;
  transition: transform 0.2s;
  margin-top: 20px;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const BalaoDenuncia = styled.div`
  background-color: #f4e4bc;
  border-radius: 15px;
  padding: 20px;
  margin-top: 25px;
  width: 90%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.5);

  input {
    padding: 10px;
    border: 2px solid #5a3a22;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
    background-color: #d32f2f;
    color: white;
    font-weight: bold;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      background-color: #b71c1c;
    }
  }
`;

export const TituloBalao = styled.h3`
  color: #3e2723;
  text-align: center;
  margin: 0;
`;

export const TextoBalao = styled.p`
  color: #3e2723;
  font-size: 14px;
  margin: 0;
`;