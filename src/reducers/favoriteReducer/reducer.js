import { favoriteState } from "./data";
import { typesActions } from "./types";

export const favoriteReducer = (state = favoriteState , action) => {
    
    switch(action.type){

        case typesActions.addFavorite:

        
                    if(state.favorites.includes(action.payload)){
                        return {...state}
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

         

        default:
            return {...state}

    }

}