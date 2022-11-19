import { useEffect, useState } from "react"
import { axiosinstance } from "../../Network/axiosinstance";
import ExamsResultTable from "./ExamsResultTable"

function ExamsResult() {
    const [user, setUser] = useState({
        results: []
    });
    useEffect(() => {
        const id = localStorage.getItem('id');
        axiosinstance.get('/student/id/', {
            params: {
                id: id
            }
        }).then(res => {
            setUser(res.data)
        }).catch(e => console.log(e))
        //   }

    }, [])
    return (
        <div className="d-flex justify-content-center align-items-center vh-80">
            <ExamsResultTable results={user.results} />
        </div>
    )
}
export default ExamsResult