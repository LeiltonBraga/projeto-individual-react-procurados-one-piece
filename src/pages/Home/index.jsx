import { procurados } from "../../data/dados.jsx";
import { Card } from "../../components/CardProcurados/index.jsx"; 
import logoMarinha from "../../assets/marine.png"; 
import { ContainerPagina, TituloPagina, LogoMarinha, BotaoContato } from "../../globalStyle.jsx";
import { ListaCartazes } from "./style.jsx";

export function Home() {
  return (

    <ContainerPagina>
      <LogoMarinha src={logoMarinha} alt="Logo da Marinha" />
      <TituloPagina>Procurados pela Marinha</TituloPagina>
      <BotaoContato> Contatar a Marinha </BotaoContato> 
      
      <ListaCartazes>
        {procurados.map((pirata) => (
          <Card 
            key={pirata.id} 
            nome={pirata.nome}
            tripulacao={pirata.tripulacao}
            recompensa={pirata.recompensa}
            imagem={pirata.imagem}
            jaCapturado={pirata.jaCapturado}
          />
        ))}
      </ListaCartazes>
    </ContainerPagina>
  );
}