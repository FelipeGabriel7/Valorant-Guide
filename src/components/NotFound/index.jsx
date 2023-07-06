import { Link } from 'react-router-dom'
import { NotFoundPage } from './index.module.scss'

export const NotFound = () => {
    return (
        <div className={NotFoundPage}>
            <h2> 404 </h2>
            <span> Ops... Parece que essa página não existe </span>
            <Link to="/" 
                style={{
                    textDecoration: 'none',
                    color: '#f14',
                    fontWeight: '500'
                }}
            > Retornar a página inicial  </Link>
        </div>
    )
}