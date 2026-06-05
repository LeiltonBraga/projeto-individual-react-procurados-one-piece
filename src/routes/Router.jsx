import { Route, Routes } from "react-router-dom"
import { Denuncia } from "../pages/Denuncia"
import { Home } from "../pages/Home"

export const Routers = () => {

    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/denuncia' element={<Denuncia />} />
            </Route>
        </Routes>
    )
}