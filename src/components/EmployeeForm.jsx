import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateEmployee } from "../store/employeeSlice";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styling/employeeForm.css";
import Modal from "./Modal";
import Toast from "./Toast";
import { ToastContainer, toast } from "react-toastify";

const EmployeeForm = () => {
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");

  const { id: employeeId } = useParams();
  const records = useSelector((state) => state.records);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setShowModal({ show: false, success: true, message: "" });
  // }, [showModal.show]);

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

  const handleExperienceChange = useCallback((e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setExperience(value);
  }, []);

  const checkForValidInputs = () => {
    console.log("in valid inputs");
    if (!fullName.trim()) {
      return "Please Enter Valid FullName";
    } else if (!birthdate) {
      return "Please Enter Valid BirthDate";
    } else if (!department.trim()) {
      return "Please Enter Valid Department";
    } else if (!experience) {
      return "Please Enter Valid Experience";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkForValidInputs();
    if (message !== "") {
      console.log(message);
      toast.error(message);
      return;
    }

    if (!employeeId) {
      dispatch(addEmployee({ fullName, birthdate, department, experience }));
      resetInputFields();

      toast.success("Record Added Successfully");
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
      toast.success("Record Updated Successfully");
    }
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="form-heading">
        {employeeId ? "Edit Employee" : "Add Employee"}
      </h1>
      <div onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate" className="form-label">
            Birthdate
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="form-input"
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="form-group">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="form-input"
            onInvalid={() => toast.error("date")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience" className="form-label">
            Experience (in years)
          </label>
          <input
            type="text"
            id="experience"
            value={experience}
            onChange={handleExperienceChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-submit" onClick={handleSubmit}>
          {employeeId ? "Save Changes" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default EmployeeForm;
