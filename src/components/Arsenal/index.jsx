import { useEffect, useState } from "react"
import  axios  from "axios"
import { useDispatch, useSelector } from "react-redux"
import { LoadingPerson, errorPerson, sucessPerson } from "../../reducers/favoriteReducer/actions"
import { container , card , content_container , card_info, card_stats , card_stats_icon} from './index.module.scss'
import { GiBullets } from 'react-icons/gi'
import { AiFillFire } from 'react-icons/ai'
import { BsCoin } from 'react-icons/bs'


export const ArsenalComponent = () => {

    const [equipaments , setEquipaments] = useState([])
    const { loading } = useSelector(rootReducer => rootReducer.favoriteReducer)
    const dispatch = useDispatch()


    const fetchData = (async () => {

        try{

            const request = await axios.get('https://valorant-api.com/v1/weapons')

            if(request.data.status === 200){
                setEquipaments(request.data.data)
            }

           
        }catch(e){
            errorPerson(dispatch)
        }
          
    })

    useEffect(() => {
        LoadingPerson(dispatch)
        fetchData()
        sucessPerson(dispatch)
    }, [dispatch])


    console.log(equipaments)


    return (
        <div className={content_container}>

                <section className={container}>

                    {loading && (
                        <h2> Carregando .... </h2>
                    )}

                    {equipaments && equipaments.map((eq , id) => (
                        <div key={eq.uuid} className={card}>
                               
                               <div className={card_info}>
                                    <h2> {eq.displayName} </h2>
                                    <img src={eq.displayIcon} alt={eq.displayName} />
                               </div>

                               {eq.weaponStats && (
                                    <div className={card_stats}>
                                        <span className={card_stats_icon}> <GiBullets/>  {eq.weaponStats.magazineSize} </span>
                                        <span className={card_stats_icon}> <AiFillFire/> {(eq.weaponStats.fireRate).toFixed(0)} </span>
                                        <span className={card_stats_icon}> <BsCoin/> {eq.shopData.cost} </span>
                                    </div>
                               )}

                        </div>
                    ))}

                </section> 

        </div>
    )
}