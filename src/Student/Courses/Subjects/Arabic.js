import CardForLessons from "./CardForLessons"

function Arabic() {
    return (
        <>
            <h1 className="text-center text-primary"> Arabic Lessons</h1>
            <div className="row">
                <CardForLessons name="Lesson one" about="Alphabetics" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456472.jpg" />
                <CardForLessons name="Lesson Two" about="Alphabetics" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456473.jpg" />
                <CardForLessons name="Lesson Three" about="Alphabetics" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456480.jpg" />
                <CardForLessons name="Lesson Four" about="Alphabetics" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456475.jpg" />
            </div>


        </>
    )

}
export default Arabic