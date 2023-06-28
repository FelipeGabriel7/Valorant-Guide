

import { 
    Description,
    Description_txt,
    Description_txt_title,
    Description_txt_text,
    Description_card,
    Description_card_title,
    Description_card_btn,
} from './index.module.scss' 

export const DescriptionComponent = () => {
    return (
        <>
            <div className={Description}>

                <div className={Description_txt}>
                    <h2 className={Description_txt_title}> Como funciona o valorant ? </h2>
                    <p className={Description_txt_text}>
                        Valorant é um jogo competitivo e multiplataforma desenvolvido e publicado pela Riot Games 5v5 onde cada <br />
                        jogador seleciona o seu personagem e dessa forma consegue utilizar as habilidades de cada personagem disponível.
                    </p>
                </div>

                <div className={Description_card}>
                    <p className={Description_card_title}> Realize o download e comece a jogar </p>
                    <button className={Description_card_btn}> <a href="https://playvalorant.com/" target='_blank'> Baixe o Jogo </a> </button>
                </div>

            </div>

        </>
    )
}