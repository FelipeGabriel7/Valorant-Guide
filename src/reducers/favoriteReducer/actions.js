import { typesActions } from "./types"

export const errorPerson = (dispatch) => {
    return dispatch({
        type: typesActions.error
    })
}

export const LoadingPerson = (dispatch) => {
    return dispatch({
        type: typesActions.loading
    })
}

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

export const sucessPerson = (dispatch) => {
    return dispatch(
        {type: typesActions.success}
    )
}