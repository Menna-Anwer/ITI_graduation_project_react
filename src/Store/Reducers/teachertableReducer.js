const INITIAL_VALUE = {
    list: {
        timeTable: []
    }
}

export default function teacherTableReducer(state = INITIAL_VALUE, Action) {
    switch (Action.type) {
        case "GET_TEACHERTABLE_DATA":
            return {
                ...state,
                list: Action.payload
            }
        default:
            return state
    }
}