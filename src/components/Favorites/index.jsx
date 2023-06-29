import { useDispatch, useSelector } from "react-redux"
import { rootReducer } from "../../reducers/rootReducer"
import { BsFillTrashFill} from 'react-icons/bs'
import { container, container_title, container_favorite, card_favorite, card } from './index.module.scss'
import { removeFavorite } from "../../reducers/favoriteReducer/actions"
import { useEffect, useState } from "react"

export const FavoriteComponents = () => {

    const { favorites: items } = useSelector((rootReducer) => rootReducer.favoriteReducer)
    const dispatch = useDispatch()
    const [favorites , setFavorites] = useState(items)

         
    const handleDelete = (item) => {
        removeFavorite(dispatch , item)
    }

    useEffect(() => {
        setFavorites(items)
    }, [items])
    return (

        <>
            <div className={container_favorite}>

                <div className={container}>
                    <h1 className={container_title}> Veja seus personagens favoritos  </h1>


                    <div className={card}>

                        {favorites.length <= 0 && (
                            <h1 style={{
                                width: '100%',
                                height: '80vh',
                                textAlign: 'center'
                            }}> 
                                Você não possui personagens favoritos 
                                
                            </h1>
                        )}

                        {favorites && favorites.map(fav => (
                            <div key={fav.uuid} className={card_favorite}>

                                <BsFillTrashFill
                                    style={{
                                        cursor: 'pointer',
                                        color: '#f14'
                                    }}

                                    onClick={() => handleDelete(fav)}
                                /> 

                                <img src={fav.displayIcon}
                                    style={{
                                        background: '#fff',
                                        padding: '0.2em',
                                        borderRadius: '50%',
                                        boxShadow: '0.1em 0.1em 0.4em #222'
                                    }}

                                />
                                <h2 style={{
                                    color: '#fff',
                                    background: '#f14',
                                    padding: '0.2em',
                                    borderRadius: '0.6em',
                                    fontWeight: '600'

                                }}> {fav.displayName} </h2>
                            </div>
                        ))}
                    </div>


                </div>

            </div>

        </>
    )


}