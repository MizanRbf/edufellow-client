import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import Marquee from "react-fast-marquee";

const StudentSuccessStories = () => {
  const [students, setStudents] = useState([]);

  // fetch Students
  useEffect(() => {
    fetch("student.json")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .then((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <Marquee>
        {students.map((student) => (
          <div className="mr-8">
            <StudentCard student={student} key={student.id}></StudentCard>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default StudentSuccessStories;
