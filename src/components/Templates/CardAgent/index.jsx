import {card , card_image , card_name , abilities , abilities_image , card_buttons , card_buttons_details , card_buttons_favorites} from './index.module.scss'
import axios from 'axios'

export const CardAgent = ({ agent }) => {

    console.log(agent)


    async function handleAgent(uuid){
        const request = await axios.get('https://valorant-api.com/v1/agents/' + uuid)

        console.log(request.data.data)
    }

    return (

      

        <div className={card}>
            <img className={card_image} src={agent.displayIcon} alt={agent.displayName} />
            <h2 className={card_name}> {agent.displayName}    </h2>

            <div className={abilities}>
                <img src={agent.abilities[0].displayIcon} className={abilities_image}  title={agent.abilities[0].displayName} />
                <img src={agent.abilities[1].displayIcon} className={abilities_image}  title={agent.abilities[1].displayName}/>
                <img src={agent.abilities[2].displayIcon} className={abilities_image}  title={agent.abilities[2].displayName}/>
                <img src={agent.abilities[3].displayIcon} className={abilities_image}  title={agent.abilities[3].displayName}/>
            </div>

            <div className={card_buttons}>
                <button className={card_buttons_details} onClick={() => handleAgent(agent.uuid)}> Ver detalhes </button>
                <button className={card_buttons_favorites}> Adicionar aos favoritos </button>
            </div>
    
        </div>
      
    )
}

