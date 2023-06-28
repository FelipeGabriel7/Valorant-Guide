import { DescriptionComponent } from "../Description";
import { Requeriments } from "../Requeriments";
import { home_container , home_container_image } from './index.module.scss'

export const Home = () => {
    return (
        <>

            <section className={home_container}>
                <div className={home_container_image}></div>
                <DescriptionComponent/>
                <Requeriments/>
            </section>
        
        </>
    )

}