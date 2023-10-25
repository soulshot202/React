import React, { useMemo } from "react";
import StudentItem from "../Studentas/Studentas";

import styles from "./StudentList.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function StudentList() {
  const students = [
    {
      name: "John Doe",
      age: 30,
      id: 1,
    },
    {
      name: "Pimpis Vatinis",
      age: 22,
      id: 2,
    },
    {
      name: "John Doe",
      age: 40,
      id: 3,
    },
    {
      name: "John Doe",
      age: 20,
      id: 4,
    },
    {
      name: "John Doe",
      age: 33,
      id: 5,
    },
    {
      name: "John Doe",
      age: 27,
      id: 6,
    },
    {
      name: "John Doe",
      age: 22,
      id: 7,
    },
    {
      name: "John Doe",
      age: 21,
      id: 8,
    },
    {
      name: "John Doe",
      age: 17,
      id: 9,
    },
    {
      name: "John Doe",
      age: 25,
      id: 10,
    },
  ];
  const byAge = (a, b) => b.age - a.age;
  const byName = (a, b) => a.name.localeCompare(b.name);
  const [order, setOrder] = useState();

  const studentList = useMemo(() => {
    return (
      students
        //   .sort(order)
        .map((student) => (
          <StudentItem
            key={student.id}
            name={student.name}
            age={student.age}
            id={student.id}
          />
        ))
    );
  });
  useEffect(() => {
    if (order === 1) studentList.sort((a, b) => b.age - a.age);
  }, [studentList, order]);
  return (
    <div className={styles.studentListContainer}>
      <h1>Student List</h1>
      <button onClick={() => studentList.sort(byAge)}>Sort by age</button>
      <button onClick={() => setOrder("1")}>Sort by name</button>
      <button>Sort random</button>
      <div className={styles.studentList}>{studentList}</div>
    </div>
  );
}
