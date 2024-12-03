import React from "react";
import "./DepartmentModule.css";
import axios from "axios";
import DepartmentView from "./DepartmentView";

const DepartmentModule = ({departmentid,departmentname}) => {
    const [showDepartmentView, setShowDepartmentView] = React.useState(false);
    const [showEdit, setShowEdit] = React.useState(false);
    const [departmentData, setDepartmentData] = React.useState({})

    function getDepartmentView(){
        setShowDepartmentView(true)
    }
    function closeDepartmentView(){
        setShowDepartmentView(false)
    }
    const handleEdit = () => {
        setShowEdit(true)
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/departments/${departmentid}`, config)
        .then(response => {
            alert("Department deleted successfully", response.data)
        })
        .catch(error => {
            alert("Error deleting department", error)
        });
    };

    React.useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/departments/${departmentid}`, config);
                setDepartmentData(response.data.data)
            } catch(error){
                alert(error)
            }
        };
        fetchData()
    }, [departmentid, config])

    return(
        <div className="departmentinfo">
            <p>{departmentid}</p>
            <p>{departmentname}</p>
            <div>
            <button className="view" onClick={getDepartmentView}>View</button>
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
            </div>

        {showDepartmentView && <DepartmentView closeDepartmentView={closeDepartmentView} department={departmentData}/>}
        {showEdit && <EditModel 
        setShow={setShowEdit}
        departmentid={departmentid}
        departmentname= {departmentname}
        config={config}/>}
        </div>
    );
};