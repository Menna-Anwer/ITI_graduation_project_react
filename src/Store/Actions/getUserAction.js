export const getUserAction = (payload) => {
    return{
        payload,
        type: "GET_USER"
    }
}
