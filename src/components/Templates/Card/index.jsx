import { card, card_title, card_information , card_information_icon , card_title_subtitle} from './index.module.scss'
import { RiComputerFill } from 'react-icons/ri'




export const CardComponent = ({ text , gpu  , ram , size , processor }) => {
    return (
        <>


            <div className={card}>
                <div className={card_title}>
                    <h2> Requisitos De Sistema </h2>
                    <span className={card_title_subtitle}> ( {text} ) </span>
                </div>

                <div className={card_information}>
                    <span className={card_information_icon}> <RiComputerFill/> Windows 7/8/10 64-bit </span>
                    <span className={card_information_icon}> <RiComputerFill/>  {gpu} </span>
                    <span className={card_information_icon}> <RiComputerFill/>  {ram} </span>
                    <span className={card_information_icon}> <RiComputerFill/> {size} </span>
                    <span className={card_information_icon}> <RiComputerFill/> {processor} </span>
                </div>


            </div>


        </>
    )
}