import { typesActions } from "./types"

export const favoritePerson = (dispatch , item) => {
    return dispatch(
        {type: typesActions.addFavorite , payload: item}
    )
}

export const removeFavorite = (dispatch , item) => {
    return dispatch(
        {type: typesActions.removeFavorite , payload: item}
    )
}