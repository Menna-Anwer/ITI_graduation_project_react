import { useState } from "react"
import MediaCard from "./MediaCard"


function Courses() {
    const [level, setLevel] = useState([{
        name: "Arabic",
        about: "Learn Arabic Primary 1",
        img: "https://www.noor-book.com/publice/covers_cache_jpg/2/0/1/c/81a4b776b201c1443c5ce614631fba8a.png.jpg",
        link: "/Arabicp1",
        grade: "p1"
    },
    {
        name: "Arabic",
        about: "Learn Arabic Primary 2",
        img: "https://www.noor-book.com/publice/covers_cache_jpg/2/0/1/c/81a4b776b201c1443c5ce614631fba8a.png.jpg",
        link: "/Arabicp2",
        grade: "p2"
    },
    {
        name: "Arabic",
        about: "Learn Arabic Primary 3",
        img: "https://www.noor-book.com/publice/covers_cache_jpg/2/0/1/c/81a4b776b201c1443c5ce614631fba8a.png.jpg",
        link: "/Arabicp3",
        grade: "p3"
    }
        ,
    {
        name: "Arabic",
        about: "Learn Arabic Primary 4",
        img: "https://www.noor-book.com/publice/covers_cache_jpg/2/0/1/c/81a4b776b201c1443c5ce614631fba8a.png.jpg",
        link: "/Arabicp4",
        grade: "p4"
    },
    {
        name: "Arabic",
        about: "Learn Arabic Primary 5",
        img: "https://www.noor-book.com/publice/covers_cache_jpg/2/0/1/c/81a4b776b201c1443c5ce614631fba8a.png.jpg",
        link: "/Arabicp5",
        grade: "p5"
    },
    {
        name: "Arabic",
        about: "Learn Arabic Primary 6",
        img: "https://www.noor-book.com/publice/covers_cache_jpg/2/0/1/c/81a4b776b201c1443c5ce614631fba8a.png.jpg",
        link: "/Arabicp6",
        grade: "p6"
    }
    ])

    return (
        <>

            <h3 className="text-primary text-center">All Subjects </h3>
            {/* <div className="row">
                {level.map((subject, index) => {
                    return (
                        <>
                            <MediaCard name={subject.name} about={subject.about} img={subject.img} link={subject.link} key={index} />
                        </>
                    )
                })}
            </div> */}

            <div className="row">
                <MediaCard name="Arabic " about="Learn Arabic" img="https://www.noor-book.com/publice/covers_cache_jpg/2/0/1/c/81a4b776b201c1443c5ce614631fba8a.png.jpg" link="/Arabic" />
                <MediaCard name="English " about="Learn English" img="https://talbonline.com/explain_images/2019/10/29/talb_online_20191029020904_9258_13.jpg" link="/English" />
                <MediaCard name="Mathematics " about="Learn Mathematics" img="https://image.isu.pub/131024231004-9d0baa6db2b7d5acfd9a2b1d5109ce93/jpg/page_1.jpg" link="/Mathematics" />
                <MediaCard name="sciences " about="Learn sciences" img="https://image.isu.pub/131024231004-9d0baa6db2b7d5acfd9a2b1d5109ce93/jpg/page_1.jpg" link="/Sciences" />

            </div>

        </>
    )

}

export default Courses