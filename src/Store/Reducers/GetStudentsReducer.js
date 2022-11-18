const INITIAL_VALUE = {
    students: []
}
export default function GetStudentReducer(state = INITIAL_VALUE, Action) {
    switch (Action.type) {
        case "GET_STUDENT":
            const id = localStorage.getItem('id')
            const subject = localStorage.getItem('subject')

            Action.payload.forEach(element => {
                const filters = element.results.filter(ele => ele.teacherId === id)
                if(filters.length > 0){
                    element.results = filters
                }else{
                    element.results = [{
                        points:'',
                        feadback: '',
                        subject: subject
                    }]
                }
            });
            return {
                ...state,
                students: Action.payload
            }
        case "UPDATE_RESULT":
            let old = [...state.students];
            const index = old.findIndex(ele => ele._id === Action.payload._id);
            old[index] = Action.payload;
            return {
                ...state,
                students: old
            }
        default:
            return state
    }
}