import { useDispatch, useSelector } from "react-redux"
import { rootReducer } from "../../reducers/rootReducer"
import { BsFillTrashFill} from 'react-icons/bs'
import { container, container_title, container_favorite, card_favorite, card , container_search } from './index.module.scss'
import { removeFavorite } from "../../reducers/favoriteReducer/actions"
import { useCallback, useEffect, useRef, useState } from "react"

export const FavoriteComponents = () => {

    const { favorites: items } = useSelector((rootReducer) => rootReducer.favoriteReducer)
    const dispatch = useDispatch()
    const [favorites , setFavorites] = useState(items)
    const [search , setSearch] = useState('')
    const [itemFilter , setItemFilter] = useState(false)

         
    const handleDelete = (item) => {
        removeFavorite(dispatch , item)
    }

    useEffect(() => {
        setFavorites(items)
    }, [items])

    const handleFilterItem = useCallback(() => {
  

        const favoriteExist = favorites.filter(fav => {
            if(fav.displayName.toLowerCase().includes(search.toLowerCase())){
                return fav
            }

            return false
        })


        setItemFilter(favoriteExist)
    }, [search , favorites])


    useEffect(() => { 
        handleFilterItem()
    }, [search , handleFilterItem])
 

  
    return (

        <>
            <div className={container_favorite}>

                <div className={container}>
                    <h1 className={container_title}> Veja seus personagens favoritos  </h1>


                    {favorites.length > 0 && (

                        <div className={container_search}>


                        <label>
                            Busque seu personagem favorito
                            <input type="search" placeholder="informe o nome do personagem" onChange={(e) => setSearch(e.target.value)} />
                          
                        </label>

                        </div>


                    )}
                   

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

                        {/* {!!itemFilter && (
                            <p style={{
                                width: '100%',
                                height: '50vh',
                                textAlign: 'center',
                                fontSize: '2em '

                            }}> Esse personagem não existe nos seus favoritos </p>
                        )} */}


                   
                        {(itemFilter && search !== '') && (
                             <div className={card_favorite}>

                             <img src={itemFilter[0]?.displayIcon}
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

                             }}> {itemFilter[0]?.displayName} </h2>
                         </div>
                        )}


                        {(favorites && search === '') && favorites.map(fav => (
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