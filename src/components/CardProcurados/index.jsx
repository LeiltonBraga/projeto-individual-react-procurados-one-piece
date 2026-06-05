import { useState } from "react";
import { 
  CardContainer, TituloProcurado, ImagemPersonagem, 
  Nome, Recompensa, BotaoCapturar 
} from "./style.jsx";

export function Card({ nome, tripulacao, recompensa, imagem, jaCapturado }) {
  const [capturado, setCapturado] = useState(jaCapturado ||false);

  const alternarCaptura = () => {
    setCapturado(!capturado);
  };

  return (
    <CardContainer $capturado={capturado}>
      <TituloProcurado>Wanted</TituloProcurado>
      <ImagemPersonagem src={imagem} alt={`Foto de ${nome}`} />
      
      <Nome>{nome}</Nome>
      <p style={{ fontSize: "14px", color: "#555", marginBottom: "5px" }}>
        {tripulacao}
      </p>
      
      <Recompensa>฿ {recompensa}</Recompensa>
      
      <BotaoCapturar onClick={alternarCaptura} $capturado={capturado}>
        {capturado ? "Capturado!" : "Capturar"}
      </BotaoCapturar>
    </CardContainer>
  );
}