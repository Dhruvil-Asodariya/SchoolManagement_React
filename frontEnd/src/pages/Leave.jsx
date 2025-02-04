import { useState } from "react";
import DataTable from "react-data-table-component";

const Leave = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [leaveData, setLeaveData] = useState([
    {
      id: 1,
      fullName: "Virani Jaydeep",
      email: "jvirani820@rku.ac.in",
      reason: "Leave Demo",
      days: 1,
      appliedOn: "2023-02-04",
      role: "Student",
      status: true,
    },
    {
      id: 2,
      fullName: "Virani Jaydeep",
      email: "jaydeepvirani677@gmail.com",
      reason: "Faculty Leave",
      days: 2,
      appliedOn: "2023-02-04",
      role: "Faculty",
      status: false,
    },
  ]);

  // Table Columns
  const columns = [
    { name: "#", selector: (row, index) => index + 1, sortable: true },
    { name: "Full Name", selector: (row) => row.fullName, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Leave Reason", selector: (row) => row.reason, sortable: true },
    { name: "Leave Days", selector: (row) => row.days, sortable: true },
    { name: "Applied On", selector: (row) => row.appliedOn, sortable: true },
    { name: "Role", selector: (row) => row.role, sortable: true },
    {
      name: "Status",
      cell: (row) => (
        <div className="d-flex align-items-center gap-2">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={row.status}
              onChange={() => {
                const updatedLeaveData = leaveData.map((item) =>
                  item.id === row.id ? { ...item, status: !item.status } : item
                );
                setLeaveData(updatedLeaveData);
              }}
            />
          </div>
          <span className={row.status ? "text-success" : "text-danger"}>
            {row.status ? "Active" : "Inactive"}
          </span>
        </div>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#2563F5",
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: "14px",
        textAlign: "left",
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        "&:hover": {
          backgroundColor: "#f3f4f6",
        },
      },
    },
  };

  // Filter Leave Data
  const filteredLeaves = leaveData.filter((leave) =>
    Object.values(leave).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <h2 className="fw-semibold">All Leave Requests</h2>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <DataTable
            columns={columns}
            data={filteredLeaves}
            pagination
            highlightOnHover
            striped
            responsive
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Leave;
