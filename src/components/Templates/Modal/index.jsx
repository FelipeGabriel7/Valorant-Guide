import { AiFillCloseCircle } from 'react-icons/ai'
import {
    modal,
    closeModal,
    modal_image,
    container_modal,
    modal_desc,
    modal_desc_txt,
    modal_desc_abilitis,
    modal_desc_button
} from './index.module.scss'
import { AiFillSound} from 'react-icons/ai'
import { useRef, useState } from 'react'


export const Modal = ({ data, modalState , audio }) => {

    console.log(audio)


    function playAudio () {

        let ad = audio
        ad.play()
    }

    function handleClose() {
        modalState(false)
    }



    return (
        <div className={modal}>
            <AiFillCloseCircle className={closeModal} onClick={handleClose} />

            <div className={container_modal}
                // style={{ backgroundImage: `url(${data.background})` }}
            >
                <img src={data.fullPortrait} alt={data.displayName} className={modal_image} />

                <div className={modal_desc}>
                    <h2 className={modal_desc_txt}> {data.displayName} </h2>

                    <p> {data.description} </p>

                    <div className={modal_desc_abilitis}>

                        <span>  <img src={data.abilities[0].displayIcon} title={data.abilities[0].displayName} /> {data.abilities[0].displayName} </span>
                        <span>  <img src={data.abilities[1].displayIcon} title={data.abilities[1].displayName} /> {data.abilities[1].displayName} </span>
                        <span>  <img src={data.abilities[2].displayIcon} title={data.abilities[2].displayName} /> {data.abilities[2].displayName} </span>
                        <span>  <img src={data.abilities[3].displayIcon} title={data.abilities[3].displayName} /> {data.abilities[3].displayName} </span>

                    </div>
                  
                    <button 
                    className={modal_desc_button}
                    onClick={()=> playAudio()}>
                    <AiFillSound/>
                </button>

                </div>

            </div>

        </div>
    )
}