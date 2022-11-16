import CardForLessons from "./CardForLessons"

function Mathematics() {
    return (
        <>
            <h1 className="text-center text-primary"> Mathematics Lessons</h1>
            <div className="row">
                <CardForLessons name="Lesson one" about="Numbers" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456472.jpg" />
                <CardForLessons name="Lesson Two" about="Numbers" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456473.jpg" />
                <CardForLessons name="Lesson Three" about="Numbers" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456480.jpg" />
                <CardForLessons name="Lesson Four" about="Numbers" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456475.jpg" />
                <CardForLessons name="Lesson Five" about="Numbers" img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456476.jpg" />
            </div>


        </>
    )

}
export default Mathematics