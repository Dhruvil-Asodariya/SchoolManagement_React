import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";

const materials = [
    { id: 1, image: "pdf.png", title: "React Chapter 1" },
    { id: 2, image: "pdf.png", title: "React Chapter 2" },
    { id: 3, image: "pdf.png", title: "React Chapter 3" },
    { id: 4, image: "pdf.png", title: "React Chapter 4" },
    { id: 5, image: "pdf.png", title: "React Chapter 5" },
];

const Material = () => {
    return (
        <div>
            <div className="row g-4">
                {materials.map((material) => (
                    <div key={material.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body text-center">
                                <div className="mb-4 overflow-hidden">
                                    <img
                                        src={material.image}
                                        alt={material.title}
                                        className="material-img img-fluid"
                                        style={{
                                            maxHeight: "180px",
                                            objectFit: "contain",
                                            transition: "transform 0.1s ease-in-out",
                                        }}
                                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                                    />
                                </div>
                                <h5 className="card-title mb-3 text-truncate">{material.title}</h5>
                                <Link className="btn btn-link text-decoration-none text-primary position-absolute bottom-0 end-0 m-3">
                                    <FiDownload size={20}
                                        style={{
                                            maxHeight: "180px",
                                            objectFit: "contain",
                                            transition: "transform 0.1s ease-in-out",
                                        }}
                                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Material;
