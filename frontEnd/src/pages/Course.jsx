import { Link } from "react-router-dom"

const Course = () => {

    const role = sessionStorage.getItem('role');

    if (role == "Student") {
        return (
            <>
                <div>
                    <div className="inline course-div">
                        <div className="main-div">
                            <div className="course-sub-div-1">
                                <span className="course-title"></span>
                            </div>
                            <Link className="link-title" to={"/material"}>
                                <div className="course-sub-div-2">
                                    <span className="course-sub-title">React</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="inline course-div">
                        <div className="main-div">
                            <div className="course-sub-div-1">
                                <span className="course-title"></span>
                            </div>
                            <Link className="link-title" to={"#"}>
                                <div className="course-sub-div-2">
                                    <span className="course-sub-title">React</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="inline course-div">
                        <div className="main-div">
                            <div className="course-sub-div-1">
                                <span className="course-title"></span>
                            </div>
                            <Link className="link-title" to={"#"}>
                                <div className="course-sub-div-2">
                                    <span className="course-sub-title">React</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="inline course-div">
                        <div className="main-div">
                            <div className="course-sub-div-1">
                                <span className="course-title"></span>
                            </div>
                            <Link className="link-title" to={"#"}>
                                <div className="course-sub-div-2">
                                    <span className="course-sub-title">React</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (role == "Teacher") {
        return (
            <>
                <div>
                    <div className="inline course-div">
                        <div className="main-div">
                            <div className="course-sub-div-1">
                                <span className="course-title"></span>
                            </div>
                            <Link className="link-title" to={"/material"}>
                                <div className="course-sub-div-2">
                                    <span className="course-sub-title">React</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="inline course-div">
                        <div className="main-div">
                            <div className="course-sub-div-1">
                                <span className="course-title"></span>
                            </div>
                            <Link className="link-title" to={"#"}>
                                <div className="course-sub-div-2">
                                    <span className="course-sub-title">React</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="inline course-div">
                        <div className="main-div">
                            <div className="course-sub-div-1">
                                <span className="course-title"></span>
                            </div>
                            <Link className="link-title" to={"#"}>
                                <div className="course-sub-div-2">
                                    <span className="course-sub-title">React</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="inline course-div">
                        <div className="main-div">
                            <div className="course-sub-div-1">
                                <span className="course-title"></span>
                            </div>
                            <Link className="link-title" to={"#"}>
                                <div className="course-sub-div-2">
                                    <span className="course-sub-title">React</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Course;