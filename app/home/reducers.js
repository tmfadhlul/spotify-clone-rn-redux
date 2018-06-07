const initialState = {
    results: [],
    isLoading: false,
    isError: false,
    isSuccess: false
}
  
const homeReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CONTACTS':
            return {...state, results: action.payload}
        default:
            return state
    }
}

export default contactsReducer