import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessons } from "../../Store/Actions/lessonsAction";
import MediaCard from './../../Components/CardLessone/CardLessone';

function Courses() {
  const lessons = useSelector((state) => state.lessons.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLessons());
  }, []);

  return (
     <div className="container">
        <div className="row justify-content-evenly">
                  {lessons.map((ele) => (
                    <MediaCard
                      title={ele.lessonTitle}
                      video={ele.lessonURL}
                      subject={ele.lessonSubj}
                      grade={ele.lessonGrade}
                      hidden={true}
                      key={ele._id}
                    />
                  ))}
        </div>
     </div>
     
  );
}

export default Courses;
