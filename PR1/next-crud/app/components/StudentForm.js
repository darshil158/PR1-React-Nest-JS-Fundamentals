"use client";

export default function StudentForm(props) {
  const { name, setName, city, setCity, state, setState, country, setCountry, course, setCourse, editIndex, handleSubmit } = props;
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <div className="card shadow border-0 p-5">
          <h2 className="text-center fw-bold display-5 pb-5 my-3">Student Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fs-4 fw-bolder">Name : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fs-4 fw-bolder">City : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fs-4 fw-bolder">State : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fs-4 fw-bolder">Country : </label>
              <input
                type="text" 
                className="form-control"
                placeholder="Enter Your Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fs-4 fw-bolder">Course : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>

            <div className="mb-3 text-center fs-5 text-uppercase fw-bolder">
              <button type="submit" className="submit-btn fw-bold">
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
