import { useEffect, useState } from 'react'
import { container } from './index.module.scss'
import axios from 'axios'
import { CardAgent } from '../Templates/CardAgent'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducer } from '../../reducers/rootReducer'
import { LoadingPerson, sucessPerson } from '../../reducers/favoriteReducer/actions'

export const AgentsComponent = () => {
    const [agents , setAgents] = useState([])
    const { loading } = useSelector(rootReducer => rootReducer.favoriteReducer);
    const dispatch = useDispatch()


    async function fetchData(){

        const request = await axios.get('https://valorant-api.com/v1/agents')

        if(request.status === 200){

            
                setAgents(
                    request.data.data
            )
         

        }

    }

    useEffect(() => {

        LoadingPerson(dispatch)
        fetchData()

        sucessPerson(dispatch)
    }, [dispatch])




    return (
        <>
          
           

            <div className={container}>

            {loading && (
                <h1> Carregando ,,,, </h1>
            )}

                {agents && agents.map(agent => {

                    if(agent.uuid == '320b2a48-4d9b-a075-30f1-1f93a9b638fa'){
                        return;
                    }
                    return (
                         <CardAgent agent={agent} key={agent.uuid} />    
                    )
                })}

            </div>


            
          
        </>
    )
}