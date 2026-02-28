import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/style.css";
import { v4 as uuidv4 } from "uuid";
import PopUp from "../layout/PopUp";
import { toast } from "react-toastify";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user, setUser] = useState([]);
  const [getID, setID] = useState(null);

  function save(data) 
  {
    if (getID == null) 
    {
      const newData = 
      {
        ...data,
        id: uuidv4(),
      };
      console.log(newData);
      setUser([...user, newData]);
      PopUp("User Added Successfully");
      reset();
    }
    else
    {
      const newUser=[...user];
      const index=newUser.findIndex(user=>user.id==getID);
      console.log(data);
      newUser[index]=data;
      setUser(newUser);
      setID(null);
      PopUp("User Updated Successfully");
    }
    reset(
      {
        username:"",
        email:"",
        mobile:"",
        age:"",
        gender:"",
        gym:"",
        fitness:""
      }
    )    
    
  }
  useEffect(() => {
    console.log(user);
    if (user.length > 0) {
      localStorage.setItem("userList", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    if (userList.length > 0) {
      setUser(userList);
    }
  }, []);

  function trash(id) {
    // alert(id);
    if (confirm("Do you want to delete this user?")) {
      const filterData = user.filter((user) => user.id != id);
      setUser(filterData);

      if (filterData.length == 0) {
        localStorage.removeItem("userList");
      }
    }
    PopUp("User Deleted Successfully");
  }
  function edit(id) 
  {
    setID(id);
    const singleUser=user.find(user=>user.id===id)
    reset(singleUser);
  }
  return (
    <>
      <form
        action=""
        method="post"
        className="gym col-md-6 mx-auto p-5 shadow my-3"
        onSubmit={handleSubmit(save)}
      >
        <h1 className="text-center">Gymnastics Form</h1>
        <div className="mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Name"
            {...register("username", { required: true })}
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Mobile Number"
            {...register("mobile", { required: true })}
          />
        </div>
        <div className="mt-4">
          <input
            type="number"
            className="form-control"
            placeholder="Enter your Age"
            {...register("age", { required: true })}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="gender" className="">
            Gender:{" "}
          </label>
          <input
            type="radio"
            value="Male"
            {...register("gender", { required: true })}
            className="ms-2"
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            {...register("gender", { required: true })}
            className="ms-3"
          />{" "}
          Female
        </div>
        <div className="mt-4">
          <label htmlFor="me-3">Have you ever worked out before?</label> <br />
          <input
            type="radio"
            value="Yes"
            {...register("gym", { required: true })}
          />{" "}
          Yes
          <input
            type="radio"
            value="No"
            {...register("gym", { required: true })}
            className="ms-3"
          />{" "}
          No
        </div>
        <div className="mt-4">
          What's your fitness goal? <br />
          <input
            type="checkbox"
            value="To remain Fit"
            {...register("fitness", { required: true })}
          />{" "}
          To remain Fit
          <input
            type="checkbox"
            value="Strength Training"
            className="ms-3"
            {...register("fitness", { required: true })}
          />{" "}
          Strength Training
          <input
            type="checkbox"
            value="Functional Training"
            className="ms-3"
            {...register("fitness", { required: true })}
          />{" "}
          Functional Training
          <input
            type="checkbox"
            value="Cardio Training"
            className="ms-3"
            {...register("fitness", { required: true })}
          />{" "}
          Cardio Training
        </div>

        <div className="mt-4">
         {
            getID==null ?
             <button className="btn btn-success">Submit</button>
             :
             <button className="btn btn-warning">Update</button>
         }
        </div>
      </form>

      <div className="container my-5">
        <table className="table table-striped table-primary table-hover table-bordered text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Worked Out Before?</th>
              <th>Fitness Goal</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.gym}</td>
                <td>{Array.isArray(user.fitness) ? user.fitness.join(", ") : user.fitness}</td>
                <td>
                  <div className="btn-group">
                    <button
                      className="btn btn-danger"
                      onClick={() => trash(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => edit(user.id)}
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
