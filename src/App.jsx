import { GlobalStyle } from "./globalStyle.jsx";
import { Denuncia } from "./pages/Denuncia";
import { Home } from "./pages/Home";


function App() {
  return (
    <div>
      <GlobalStyle /> 
      <Home />
      {/*<Denuncia />*/}
    </div>
  );
}

export default App;