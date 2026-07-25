function Welcome() {
    const studentName = "Darshil";
    const course = "Bachelor of Engineering";
    const institute = "S.S.A.S.I.T.";
    const currentDate = new Date().toLocaleDateString();

    return (
        <>
            <div className="card">
                

                <p>
                <strong>Student Name:</strong> {studentName}
                </p>
                <p>
                <strong>Course:</strong> {course}
                </p>
                <p>
                <strong>Institute Name:</strong> {institute}
                </p>
                <p>
                <strong>Current Date:</strong> {currentDate}
                </p>

                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_67PLnCGP6Q-IWbNGgKjorAXAH0JDwmipQKS2qfcrMBK_mkTLqKj0YKSN&s=10"
                alt="Student"
                />
            </div>
        </>
    );
  
}

export default Welcome;