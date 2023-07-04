import { useEffect, useRef, useState } from "react"
import  axios  from "axios"
import { motion  } from "framer-motion"
import {  
    slider_container_item,
    slider_container_item_caroulsel,
    slider_container_item_caroulsel_inner,
    item_slider,
    item_slider_image,
    item_slider_title
} from './index.module.scss'

export const MapsComponent = () => {

    const [maps , setMap] = useState([])
    const referenceMap = useRef();
    const [width , setWidth] = useState(0);

    useEffect(() => {
        setWidth(referenceMap.current?.scrollWidth - referenceMap.current?.offsetWidth)
    }, [])


    async function fetchDataMap(){
        try{

            const response = await axios.get('https://valorant-api.com/v1/maps')
            if(response.status === 200){
                setMap(response.data.data)
            }


        }catch(e){
            console.log(e)
        }
    }


  

    useEffect(() => {
        fetchDataMap()
       
    } , [])


    return (
        <div className={slider_container_item}> 

        <motion.div className={slider_container_item_caroulsel} ref={referenceMap} whileTap={{ cursor: 'grabbing'}}>
            <motion.div className={slider_container_item_caroulsel_inner} drag="x" dragConstraints={{
                right: 0,
                left: -width
            }}
            initial={{
                x: 100
            }}
            animate={{
                x: 0
            }}
            transition={{
                duration: 0.8
            }}
            > 


            {maps && maps.map(ma => (
                <div key={ma.uuid} className={item_slider}>
                    <img src={ma.splash} alt={ma.displayName} className={item_slider_image} />
                    <h2 className={item_slider_title}> {ma.displayName} </h2>
                </div>
            ))}


            </motion.div>
        </motion.div>

          
        </div>
    )
}