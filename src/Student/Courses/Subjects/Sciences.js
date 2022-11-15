import CardForLessons from "./CardForLessons"

function Sciences() {
    return (
        <>
            <h1 className="text-center text-primary"> Sciences Lessons</h1>
            <div className="row">
                <CardForLessons name="Lesson one" about="Sciences" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456472.jpg" />
                <CardForLessons name="Lesson Two" about="Sciences" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456473.jpg" />
                <CardForLessons name="Lesson Three" about="Sciences" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456480.jpg" />
                <CardForLessons name="Lesson Four" about="Sciences" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456475.jpg" />
                <CardForLessons name="Lesson Five" about="Sciences" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456476.jpg" />
            </div>


        </>
    )

}
export default Sciences