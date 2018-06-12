const initialState = {
    playlist: [],
    artists: [],
    albums: [],
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
                results: action.payload
            }
        case 'TAB_ARTIST_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'TAB_ARTIST_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                artists: action.payload.data
            }
        case 'TAB_ARTIST_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                artists: action.payload
            }
            case 'TAB_ALBUMS_PENDING':
                return {
                    ...state,
                    isLoading: true,
                    isError: false,
                    isSuccess: false
                }
            case 'TAB_ALBUMS_FULFILLED':
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                    albums: action.payload.data
                }
            case 'TAB_ALBUMS_REJECTED':
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                    isSuccess: false,
                    albums: action.payload
                }
        default:
            return state
    }

}

export default tabPlaylistReducer