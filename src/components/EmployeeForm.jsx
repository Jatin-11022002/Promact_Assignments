import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "../store/employeeSlice";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styling/employeeForm.css";
import Modal from "./Modal";

const EmployeeForm = () => {
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id: employeeId } = useParams();
  const records = useSelector((state) => state.records);

  const dispatch = useDispatch();
  const resetInputFields = () => {
    setFullName("");
    setBirthdate("");
    setDepartment("");
    setExperience("");
  };

  const handleFullNameChange = useCallback((e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/gi, "");
    setFullName(value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeId) {
      dispatch(addEmployee({ fullName, birthdate, department, experience }));
      resetInputFields();
    } else {
      dispatch(
        updateEmployee({
          employeeId,
          fullName,
          birthdate,
          department,
          experience,
        })
      );
    }
    setShowModal(true);
  };

  //For prefilling data in case of Editing record
  useEffect(() => {
    if (employeeId) {
      let employeeData = records.find((employee) => employee.id === employeeId);
      if (employeeData) {
        setFullName(employeeData.fullName);
        setBirthdate(employeeData.birthdate);
        setDepartment(employeeData.department);
        setExperience(employeeData.experience);
      }
    } else {
      resetInputFields();
    }
  }, [employeeId]);

  return (
    <div className="form-container">
      {showModal && (
        <Modal
          message={
            employeeId
              ? "Record Updated Successfully"
              : "Record Added Successfully"
          }
          closeModal={() => setShowModal(false)}
        />
      )}
      <h1 className="form-heading">
        {employeeId ? "Edit Employee" : "Add Employee"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate" className="form-label">
            Birthdate:
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department" className="form-label">
            Department:
          </label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience" className="form-label">
            Experience (in years):
          </label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-submit">
          {employeeId ? "Save Changes" : "Insert Record"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
