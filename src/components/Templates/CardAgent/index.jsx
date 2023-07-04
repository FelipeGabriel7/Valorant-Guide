import { useEffect, useState } from 'react'
import {card , card_image , card_name , abilities , abilities_image , card_buttons , 
    card_buttons_details , card_buttons_favorites , error_card} from './index.module.scss'
import axios from 'axios'
import { Modal } from '../Modal'
import { useDispatch, useSelector } from 'react-redux'
import { favoritePerson } from '../../../reducers/favoriteReducer/actions'

export const CardAgent = ({ agent }) => {

    const [modal , setModal] = useState(false)
    const [data , setData] = useState([])
    const { favorites , error } = useSelector((rootReducer) => rootReducer.favoriteReducer)
    const [message , setMessage] = useState({
        status: error ? true : false,
        messageText: error
    })
    const audio = useState(new Audio())
    console.log(favorites)

    const dispatch = useDispatch();


    async function handleAgent(uuid){
        setModal(prevModal => !prevModal)

        try {
            const request = await axios.get('https://valorant-api.com/v1/agents/' + uuid)
            setData(request.data.data)
            audio.src = request.data.data.voiceLine.mediaList[0].wave
        }catch(e){
            console.log(e)
        }
    }


    function handleAdd(item){
        handleMessage()
        favoritePerson(dispatch , item)
    }

   
    function handleMessage(){


        setMessage(prevMessage => ({...prevMessage , status: !message.status}))

        setTimeout(() => {
            setMessage(prevMessage => ({...prevMessage , status: false}))
        } , 3000)

    }



    return (

        <>

        {message.status && (
            <div className={error_card} 
            style={{
                display: 'flex',
                background: `${error ? '#000' : '#f14'}`    
            }}> 
            {error ? error : ' Personagem Adicionado com sucesso '} </div>
        )}

       

       

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
                <button className={card_buttons_favorites}  onClick={() => handleAdd(agent)} > Adicionar aos favoritos </button>
            </div>
    
        </div>

        {modal &&  (
            <Modal data={agent} modalState={setModal} audio={audio}/> 
        )}
        
        </>

      
      
    )
}

