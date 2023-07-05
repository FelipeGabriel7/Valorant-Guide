
import { BrowserRouter as Container , Routes , Route } from "react-router-dom";
import  NavbarComponent   from "../components/Templates/Navbar/Navbar";
import { Home } from "../components/Home";
import { Footer } from "../components/Templates/Footer/Footer";
import { AgentsComponent } from "../components/Agents";
import { FavoriteComponents } from "../components/Favorites";
import { RankComponent } from "../components/Ranks";
import { ArsenalComponent } from "../components/Arsenal";
import { MapsComponent } from "../components/Maps";
import { ComponentGameMode } from "../components/GameMode";



export const RoutesProject = () => {
    return(
        <>
               <Container>
                    <NavbarComponent/>
                    <Routes>
                        <Route path="/" exact element={<Home /> }/>
                        <Route path="/agents" element={ <AgentsComponent/> }/>
                        <Route path="/ranks" element={ <RankComponent /> }/>
                        <Route path="/maps" element={ <MapsComponent/> }/>
                        <Route path="/weapons" element={ <ArsenalComponent/> }/>
                        <Route path="/gamemode" element={ <ComponentGameMode/> } />
                        <Route path="/favorites" element={ <FavoriteComponents/> }/>
                    </Routes>    
                    <Footer/>
            </Container>
        </>
    )
}