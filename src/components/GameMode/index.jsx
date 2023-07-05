import { useEffect, useState } from "react"
import axios from 'axios'
import { BiTimer } from 'react-icons/bi'
import {
    container,
    container_gamemode,
    container_gamemode_card
} from './index.module.scss'
import imageCard from '../../utils/images/valorant-logo-0.png'


export const ComponentGameMode = () => {

    const [game , setGame] = useState([])

    async function fetchData(){
        const api = await axios.get('https://valorant-api.com/v1/gamemodes')

        if(api.status === 200){
            setGame(api.data.data)
        }
    }

    console.log(game)


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <section className={container}>

            <div className={container_gamemode}>

            {game && game.map(gm => (
                <div key={gm.uuid} className={container_gamemode_card}>
                     
                            <img src={imageCard} alt={gm.displayName} style={{
                                padding: '1em'
                            }}/> 
                        
                       
                        
                        <h2> {gm.displayName} </h2>

                        {gm.duration && (
                            <span> {gm.duration}  <BiTimer style={{
                                fontSize: '1.4em'
                            }}/> </span>
                        )}
                </div>
            ))}

            </div>

         
        </section>
    )
}