const INITIAL_VALUE = {
    students: []
}
export default function GetStudentReducer(state = INITIAL_VALUE, Action) {
    switch (Action.type) {
        case "GET_STUDENT":
            Action.payload.forEach(element => {
                const filters = element.results.filter(ele => ele.teacherId === '637490d138026d6dce0f3abc')
                if(filters.length > 0){
                    element.results = filters
                }else{
                    element.results = [{
                        points:'',
                        feadback: '',
                        subject:'arabic'
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