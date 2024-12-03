import React from "react";
import "./DepartmentView.css";

const DepartmentView = ({closeDepartmentView, department}) => {
return(
<div className="infocontainer">
    <div className="infobox">
        <div className="infoheader">
            <span className="close-btn" onClick={closeDepartmentView}>&times;</span>
            <div className="student-info">
                <h2>Department Information</h2>
                <div className="contentcontainer">
                    <p><strong>Department id:</strong>{department.department_id}</p>
                    <p><strong>Department name:</strong>{department.department_name}</p>
                </div>

            </div>
        </div>
    </div>
</div>
)
}

export default DepartmentView;