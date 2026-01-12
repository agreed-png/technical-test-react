import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    ageYear: "",
    ageMonth: "",
    student: "",
    school: "",
  });

  console.log(userInfo);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="column">
        <div className="container">
          <h1>Form In React</h1>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="name"> Name*</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  maxLength={100}
                  minLength={1}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="age">Age*</label>
                <select name="age" id="age" onChange={handleInput}>
                  <option value="Default" selected disabled hidden>
                    Age
                  </option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
              </div>
              <div>
                <label htmlFor="ageMonth"> Age*</label>
                <input
                  type="text"
                  placeholder="Enter Age"
                  name="ageMonth"
                  //figure out way to make limited to 1-11
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="ageYear"> Age*</label>
                <input
                  type="text"
                  placeholder="Enter Age"
                  name="ageYear"
                  //figure out way to make limited to 1-125
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="student">Student*</label>
                <input type="radio" name="student" onChange={handleInput} /> Yes
                <input type="radio" name="student" onChange={handleInput} /> No
              </div>
              <div>
                <label htmlFor="school"> School</label>
                <input
                  type="text"
                  placeholder="Enter School"
                  name="school"
                  maxLength={200}
                  minLength={1}
                  onChange={handleInput}
                />
              </div>
              <div>
                <button type="submit">Add</button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="force-break"></div>
        <div>
          <ListGroup user={userInfo} />
        </div>
      </div>
    </>
  );
}

export default App;
