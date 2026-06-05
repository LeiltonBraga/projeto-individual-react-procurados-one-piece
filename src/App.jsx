import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyle.jsx";
import { Denuncia } from "./pages/Denuncia";
import { Home } from "./pages/Home";
import { Routers } from "./routes/Router.jsx";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle /> 
      <Routers />
    </BrowserRouter>
  );
}

export default App;