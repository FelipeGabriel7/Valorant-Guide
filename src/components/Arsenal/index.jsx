import { useEffect, useState } from "react"
import  axios  from "axios"
import { useDispatch, useSelector } from "react-redux"
import { LoadingPerson, errorPerson, sucessPerson } from "../../reducers/favoriteReducer/actions"


export const ArsenalComponent = () => {

    const [equipaments , setEquipaments] = useState([])
    const { loading } = useSelector(rootReducer => rootReducer.favoriteReducer)
    const dispatch = useDispatch()


    const fetchData = (async () => {

        try{

            const request = await axios.get('https://valorant-api.com/v1/weapons')
            setEquipaments(request)

        }catch(e){
            errorPerson(dispatch)
        }
          
    })

    useEffect(() => {
        LoadingPerson(dispatch)
        fetchData()
        sucessPerson(dispatch)
    }, [dispatch])


    return (
        <div>


        </div>
    )
}