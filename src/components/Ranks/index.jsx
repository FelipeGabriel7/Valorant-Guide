import { useEffect, useState } from 'react'
import {
    container, container_ranks, container_card_ranks
} from './index.module.scss'
import axios from 'axios'

export const RankComponent = () => {

    const [ranks, setRanks] = useState([])

    function getRanks() {
        axios.get('https://valorant-api.com/v1/competitivetiers')
            .then(
                res => {
                    setRanks(res.data.data[4].tiers)
                }





            )
            .catch(e => {
                console.log(e)
            })

    }

    console.log(' Cheguei aqui ')
    console.log(ranks)

    useEffect(() => {
        getRanks()
    }, [])

    return (
        <>
            <div className={container}>
                <div className={container_ranks}>

                    {ranks && ranks.map((rank, id) => {
                        if(id <= 2) return;
                        return (
                            <div key={id} className={container_card_ranks} style={{

                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2em',
                                fontWeight: '500',
                                backgroundColor: `${rank.tierName === 'RADIANT' ? 'rgb(255, 166, 0)' :  `#${rank.color}` } `

                            }}>

                                {rank.largeIcon && (
                                    <img src={rank.largeIcon} alt={rank.divisionName} style={{

                                    }} />
                                )}
                                <span style={{
                                  
                                }}
                                > {rank.tierName} </span>
                            </div>



                        )
                    }

                    )



                    }




                </div>
            </div>
        </>
    )
}