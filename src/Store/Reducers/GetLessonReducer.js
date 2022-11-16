const INITIAL_VALUE = {
    lessons: []
}

export default function GetLessonsReducer(state = INITIAL_VALUE, Action) {
    switch (Action.type) {
        case "GET_LESSONS":
            return {
                ...state,
                lessons: Action.payload
            }
        case "ADD_LESSON":
            let les = [...state.lessons];
            les.push(Action.payload);
            return {
                ...state,
                lessons: les
            }
        case "EDITE_LESSON":
            let less = [...state.lessons];
            let index = less.findIndex(ele => ele._id === Action.payload._id);
            less[index] = Action.payload;
            return {
                ...state,
                lessons: less
            }
        case "DELETE_LESSON":
            let lessons = state.lessons.filter(ele => ele._id !== Action.payload);
            return {
                ...state,
                lessons: lessons
            }
        default:
            return state
    }
}