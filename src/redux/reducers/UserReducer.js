let userReducer = (prevState = {
    user: null,
}, action) => {
    console.log("INSIDE USER REDUCER");
    switch (action.type) {
        case "LOGIN":
            return {
                ...prevState,
                user: action.payload
            }
        case "LOGOUT":
            return {
                ...prevState,
                user: null
            }
        default:
            return prevState;
    }
};
export default userReducer;