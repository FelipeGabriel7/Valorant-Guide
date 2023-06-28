import { CardComponent } from '../Templates/Card'
import { container, container_card, container_title } from './index.module.scss'


export const Requeriments = () => {
    return (
        <>

            <div className={container}>
                <h1 className={container_title}> Requisitos de Sistemas para jogar o Valorant </h1>
                <div className={container_card}>
                    <CardComponent text="minimo - 30 FPS" 
                        processor="Intel i3-370M" 
                        gpu="Intel Hd 3000 (1 GB)" 
                        size="7.99 GB" 
                        ram="4 GB" />
                    <CardComponent text="Recomendado - 60 FPS" 
                                   processor="Intel i3-4150" 
                                   gpu="GeForce GT 730" 
                                   size="7.99 GB" 
                                   ram="4 GB" />
                    <CardComponent text="Alto - 144 + FPS" 
                                   processor="Intel i5-4460 3.2 Ghz" 
                                   gpu="GTX 1050 Ti" 
                                   size="7.99 GB" 
                                   ram="8 GB" />
                </div>
            </div>


        </>

    )
}