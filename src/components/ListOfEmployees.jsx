import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../styling/listofemployees.css";
import { deleteEmployee } from "../store/employeeSlice";
import Modal from "./Modal";

const ListOfEmployees = () => {
  let records = useSelector((state) => state.records);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="records-container">
      {records.length > 0 ? (
        <>
          {showModal && (
            <Modal
              message={"Record Deleted Successfully"}
              closeModal={() => setShowModal(false)}
            />
          )}
          <h2 className="page-heading">Employee Records</h2>
          <div className="table-wrapper">
            <table className="records-table">
              <thead className="table-head">
                <tr>
                  <th>Full Name</th>
                  <th>Birthdate</th>
                  <th>Department</th>
                  <th>Experience (in years)</th>
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
                    <td className="actions-cell">
                      <NavLink to={`/edit/${employee.id}`}>
                        <i className="fas fa-edit action-icon"></i>
                      </NavLink>
                      <i
                        className="fas fa-trash-alt action-icon"
                        onClick={() => {
                          setShowModal(true);
                          dispatch(deleteEmployee({ employeeId: employee.id }));
                        }}
                      ></i>
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
