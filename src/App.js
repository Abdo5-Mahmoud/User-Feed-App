import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  let [data, updateData] = useState([""]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((resp) => {
        const data = resp;
        updateData(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(data);
  }, []);
  // console.log(data);
  return (
    <div className="d-flex flex-column bg-black justify-content-evenly p-2 my-5">
      <div className="col-5 d-flex flex-column m-2 justify-content-center">
        <h3 className="text-warning">REACT30 - project3</h3>
        <h1 className="text-light">User Feed App</h1>
        <h5 className="text-info">LEARNINGS</h5>
        <p className="text-info">
          HOW TO MAKE API CALLS USING USEEFFECT HOW TO ITERATE OVER JSON ARRAYS
          IN REACT
        </p>
      </div>
      <div className=" row bg-dark p-4 rounde my-5 text-light d-flex justify-content-center ">
        <p className="h3 text-light text-center">User Feed App</p>
        {data == "" ? (
          <div className="spinner-border spinner-border-xl text-success"></div>
        ) : (
          data.map((ele, index) => {
            if (ele) {
              return (
                <div
                  key={index}
                  className={
                    ele.gender == "female"
                      ? "bg-danger m-2   col  rounded"
                      : "bg-primary m-2  col  rounded"
                  }
                >
                  {console.log(ele)}
                  <p className="h3 text-center">
                    {" "}
                    {ele.name.title} {ele.name.first} {ele.name.last}{" "}
                  </p>
                  <div className="d-flex justify-content-evenly">
                    <div>
                      <p>
                        <span className="fw-bold">Email :</span>
                        {ele.email}
                      </p>
                      <p>User For {ele.registered.age} Years</p>
                      <p>
                        <span className="fw-bold">Age :</span>
                        {ele.dob.age}
                      </p>
                      <p>
                        <span className="fw-bold">Nationality :</span>
                        {ele.nat}
                      </p>
                      <p>
                        <span className="fw-bold">Phone :</span>
                        {ele.phone}
                      </p>
                    </div>
                    <div className="text-center">
                      <img src={ele.picture.large} />
                      <p>
                        <span className="fw-bold">Address :</span>
                        {ele.location.street.number}
                        {ele.location.street.name},<br />
                        {ele.location.city},{ele.location.country},
                        {ele.location.postcode},
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
}

export default App;
