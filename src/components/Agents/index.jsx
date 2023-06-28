import { useEffect, useState } from 'react'
import { container } from './index.module.scss'
import axios from 'axios'
import { CardAgent } from '../Templates/CardAgent'

export const AgentsComponent = () => {
    const [agents , setAgents] = useState([])

    async function fetchData(){

        const request = await axios.get('https://valorant-api.com/v1/agents')

        setAgents(
                request.data.data
        )
    }

    useEffect(() => {
        fetchData()
    }, [])




    return (
        <>
          


            <div className={container}>
                {agents && agents.map(agent => {

                    if(agent.uuid == '320b2a48-4d9b-a075-30f1-1f93a9b638fa'){
                        return;
                    }
                    return (
                         <CardAgent agent={agent} key={agent.uuid}/>    
                    )
                })}

            </div>


            
          
        </>
    )
}