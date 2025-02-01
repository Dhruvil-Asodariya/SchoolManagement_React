import { Link } from 'react-router-dom'

const Dashboard = () => {

    const username = sessionStorage.getItem('role');

    if (username == "Admin") {
        return (
            <>
                <div>
                    <div className="inline dashboard-div">
                        <div className="main-div">
                            <Link className="link-title" to={"/student"}>
                                <div className="sub-div-1">
                                    <span className="title">Students</span>
                                </div>
                            </Link>
                            <div className="sub-div-2">
                                <span className="sub-title">Total: 250</span>
                            </div>
                        </div>
                    </div>
                    <div className="inline dashboard-div">
                        <div className="main-div">
                            <Link className="link-title" to={"/teacher"}>
                                <div className="sub-div-1">
                                    <span className="title">Teachers</span>
                                </div>
                            </Link>
                            <div className="sub-div-2">
                                <span className="sub-title">Total: 20</span>
                            </div>
                        </div>
                    </div>
                    <div className="inline dashboard-div">
                        <div className="main-div">
                            <Link className="link-title" to={"/parent"}>
                                <div className="sub-div-1">
                                    <span className="title">Parents</span>
                                </div>
                            </Link>
                            <div className="sub-div-2">
                                <span className="sub-title">Total: 250</span>
                            </div>
                        </div>
                    </div>
                    <div className="inline dashboard-div">
                        <div className="main-div">
                            <Link className="link-title" to={"/class"}>
                                <div className="sub-div-1">
                                    <span className="title">Class</span>
                                </div>
                            </Link>
                            <div className="sub-div-2">
                                <span className="sub-title">Total: 10</span>
                            </div>
                        </div>
                    </div>
                    <div className="inline dashboard-div">
                        <div className="main-div">
                            <Link className="link-title" to={"/subject"}>
                                <div className="sub-div-1">
                                    <span className="title">Subjects</span>
                                </div>
                            </Link>
                            <div className="sub-div-2">
                                <span className="sub-title">Total: 12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (username == "Student") {
        return (
            <>
                <div>
                    <div className="inline dashboard-div">
                        <div className="main-div">
                            <div className="sub-div-1">
                                <span className="title">Course</span>
                            </div>
                            <Link className="link-title" to={"/student"}>
                                <div className="sub-div-2">
                                    <span className="sub-title">Total: 4</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;