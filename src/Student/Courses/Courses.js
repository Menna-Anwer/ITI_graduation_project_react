import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLessons } from "../../Store/Actions/lessonsAction";
import MediaCard from "./MediaCard"
import CardForLessons from "./Subjects/CardForLessons";


function Courses() {

    const lessons = useSelector((state) => state.lessons.list)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLessons())
    }, [])

    return (
        <>

            <div className="row">
                {/* <MediaCard name="Arabic " about="Learn Arabic" img="https://www.noor-book.com/publice/covers_cache_jpg/2/0/1/c/81a4b776b201c1443c5ce614631fba8a.png.jpg" link="/Arabic" />
                <MediaCard name="English " about="Learn English" img="https://talbonline.com/explain_images/2019/10/29/talb_online_20191029020904_9258_13.jpg" link="/English" />
                <MediaCard name="Mathematics " about="Learn Mathematics" img="https://image.isu.pub/131024231004-9d0baa6db2b7d5acfd9a2b1d5109ce93/jpg/page_1.jpg" link="/Mathematics" />
                <MediaCard name="sciences " about="Learn sciences" img="https://image.isu.pub/131024231004-9d0baa6db2b7d5acfd9a2b1d5109ce93/jpg/page_1.jpg" link="/Sciences" /> */}
            </div>

            {<div className="row">
                {lessons.map((lesson, index) => {
                    return (
                        <>
                            <CardForLessons subject={lesson.lessonSubj} title={lesson.lessonTitle} grade={lesson.lessonGrade} url={lesson.lessonURL} img="https://thumbs.dreamstime.com/b/lesson-hand-drawing-text-chalkboard-part-143456472.jpg" />
                        </>
                    )
                })}
            </div>
            }

        </>
    )

}

export default Courses