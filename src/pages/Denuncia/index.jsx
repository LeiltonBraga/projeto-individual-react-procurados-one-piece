import { useState } from "react";
import { ContainerPagina, TituloPagina, LogoMarinha, BotaoContato } from "../../globalStyle.jsx";
import { DenDenMushi, BalaoDenuncia, TituloBalao, TextoBalao } from "./style.jsx";
import logoMarinhaImg from "../../assets/marine.png";
import denDenMushiImg from "../../assets/denden.png"; 

export function Denuncia() {
  const [mostrarBalao, setMostrarBalao] = useState(false);
  const [pirata, setPirata] = useState("");

  const abrirComunicacao = () => {
    setMostrarBalao(!mostrarBalao);
  };

  const enviarDenuncia = () => {
    alert(`Puru puru puru... Gacha! Mensagem recebida! A Marinha está enviando uma frota atrás de: ${pirata}`);
    setPirata(""); 
    setMostrarBalao(false); 
  };

  return (
    <ContainerPagina>
      <LogoMarinha src={logoMarinhaImg} alt="Logo da Marinha" />
      <TituloPagina>Central de Comunicações</TituloPagina>
      <BotaoContato> Voltar aos Cartazes </BotaoContato>
      <DenDenMushi 
        src={denDenMushiImg} 
        alt="Den Den Mushi" 
        onClick={abrirComunicacao} 
      />

      {mostrarBalao && (
        <BalaoDenuncia>
          <TituloBalao>Alô, Marinha?</TituloBalao>
          <TextoBalao>Qual pirata você quer reportar?</TextoBalao>
          
          <input 
            type="text" 
            placeholder="Nome do pirata..." 
            value={pirata}
            onChange={(e) => setPirata(e.target.value)}
          />
          
          <button onClick={enviarDenuncia}>Enviar Frota!</button>
        </BalaoDenuncia>
      )}

    </ContainerPagina>
  );
}