import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../styling/listofemployees.css";

const ListOfEmployees = () => {
  const records = useSelector((state) => state.records);
  console.log(records);
  return (
    <div className="records-container">
      {records.length > 0 ? (
        <>
          <h2 className="page-heading">Employee Records</h2>
          <div className="table-wrapper">
            <table className="records-table">
              <thead className="table-head">
                <tr>
                  <th>Full Name</th>
                  <th>Birthdate</th>
                  <th>Department</th>
                  <th>Experience (years)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {records.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.fullName}</td>
                    <td>{employee.birthdate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.experience}</td>
                    <td>
                      <NavLink to={`/edit/${employee.id}`}>
                        <button className="edit-button">Edit</button>
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h1 className="page-heading">No Records to Display</h1>
      )}
    </div>
  );
};

export default ListOfEmployees;
