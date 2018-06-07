const initialState = {
    results: [],
    isLoading: false,
    isError: false,
    isSuccess: false
}
  
const tabPlaylistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TAB_PLAYLIST_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'TAB_PLAYLIST_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                results: action.payload.data
            }
        case 'TAB_PLAYLIST_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                results: action.payload.data
            }
        default:
            return state
    }
}

export default contactsReducer