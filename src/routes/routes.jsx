
import { BrowserRouter as Container , Routes , Route } from "react-router-dom";
import  NavbarComponent   from "../components/Templates/Navbar/Navbar";
import { Home } from "../components/Home";
import { Footer } from "../components/Templates/Footer/Footer";
import { AgentsComponent } from "../components/Agents";



export const RoutesProject = () => {
    return(
        <>
               <Container>
                    <NavbarComponent/>
                    <Routes>
                        <Route path="/" exact element={<Home /> }/>
                        <Route path="/agents" element={ <AgentsComponent/> }/>
                        <Route path="/ranks" element={{}}/>
                        <Route path="/maps" element={{}}/>
                        <Route path="/weapons" element={{}}/>
                        <Route path="/gamemode" element={{}} />
                    </Routes>    
                    <Footer/>
            </Container>
        </>
    )
}