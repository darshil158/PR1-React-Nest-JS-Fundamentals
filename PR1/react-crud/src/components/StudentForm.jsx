function StudentForm(props) {
  const {
    name,
    setName,
    city,
    setCity,
    state,
    setState,
    country,
    setCountry,
    course,
    setCourse,
    editIndex,
    handleSubmit,
  } = props;

  return (
    <div className="row justify-content-center mb-5 pb-5">
      <div className="col-8">
        <div className="card shadow border-0 p-5">
          <h2 className="text-center display-6 fw-bold py-5">
            Student Registration Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bolder fs-4">Name : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bolder fs-4">City : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bolder fs-4">State : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bolder fs-4">Country : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bolder fs-4">Course : </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </div>

            <div className="my-5 text-center">
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

export default StudentForm;
