import React from "react";
import "./Department.css";
import axios from "axios";

const Department = ({config}) => {
    const headerName = "Department";
    const [departmentData, setDepartmentData] = React.useState([]);
    React.useEffect(()=>{
        const fetchDepartments = async () => {
            try {
                const response = await axios.get("http://localhost:3000/departments", config);
                setDepartmentData(response.data.data);
            } catch (error){
                alert(error)
            }
        };
        fetchDepartments();
    }, [config]);

    const hasDepartments = departmentData.length > 0;
    let departmentModule = hasDepartments && departmentData.map((depart) => (
        <DepartmentModule
        key={depart.department_id}
        departmentid={depart.department_id}
        departmentname={depart.department_name}
        config={config}/>
    ))
}