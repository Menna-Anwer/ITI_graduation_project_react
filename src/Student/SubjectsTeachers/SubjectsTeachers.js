import SubTeachCard from "./SubjectsTeachersCard"

function SubjectsTeacher() {

    return (
        <>
            <h1 className="text-center text-primary">Subject</h1>
            <div className="row ">
                <SubTeachCard subject="Arabic" name="Mr. Ahmed Mohamed" about="Experinced in teaching Arabic" />
                <SubTeachCard subject="English" name="Mr. Mohamed Ahmed" about="Experinced in teaching English" />
                <SubTeachCard subject="Mathematics" name="Mr. Mahmoud Ali" about="Experinced in teaching Mathematics" />
                <SubTeachCard subject="Sciences" name="Mr. Hamza Ali" about="Experinced in teaching Sciences" />

            </div>

        </>
    )
}

export default SubjectsTeacher