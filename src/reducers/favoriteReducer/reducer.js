import { favoriteState } from "./data";
import { typesActions } from "./types";

export const favoriteReducer = (state = favoriteState , action) => {
    
    switch(action.type){

        case typesActions.addFavorite:

        
                    if(state.favorites.includes(action.payload)){
                        return {...state , error: 'Já existe esse personagem nos seus favoritos'}
                    }

                    return {...state ,
                        favorites: [
                            ...state.favorites,
                            action.payload
                        ],
                        count: state.count + 1
                    }
    
        case typesActions.removeFavorite:

        

                    const filteredItems = state.favorites.filter(st => {
                        if(st !== action.payload) return st
                    })

                    console.log(filteredItems)

                    return {...state , favorites: filteredItems , count: state.count <= 0 ? state.count : state.count - 1}

         

        case typesActions.loading:
            return {...state , loading: !state.loading}

        case typesActions.error:
            return {...state , loading: false , error: !state.error}

        case typesActions.success:
            return {...state , loading: false , error: false}

        default:
            return {...state}

    }

}