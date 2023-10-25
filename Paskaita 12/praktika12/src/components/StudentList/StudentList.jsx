import React, { useMemo } from "react";
import StudentItem from "../Studentas/Studentas";

import styles from "./StudentList.module.css";
import { useState } from "react";

export default function StudentList() {
  const students = [
    {
      name: "Ridas Marciulionis",
      age: 30,
      id: 1,
    },
    {
      name: "Pimpis Vatinis",
      age: 22,
      id: 2,
    },
    {
      name: "Jonas Skatikas",
      age: 40,
      id: 3,
    },
    {
      name: "Aukse Kvietkaite",
      age: 20,
      id: 4,
    },
    {
      name: "Agne Leikute",
      age: 33,
      id: 5,
    },
    {
      name: "Tomis Lee Dzonsas",
      age: 27,
      id: 6,
    },
    {
      name: "Karina Krisko",
      age: 22,
      id: 7,
    },
    {
      name: "Stano Milano",
      age: 21,
      id: 8,
    },
    {
      name: "Baikeris Kietas",
      age: 17,
      id: 9,
    },
    {
      name: "Janina Padruske",
      age: 25,
      id: 10,
    },
  ];
  const byAge = (a, b) => b.age - a.age;
  const byName = (a, b) => a.name.localeCompare(b.name);
  const [order, setOrder] = useState("ID");

  const studentList = useMemo(() => {
    if (order === "age")
      return students
        .sort(byAge)
        .map((student) => (
          <StudentItem
            key={student.id}
            name={student.name}
            age={student.age}
            id={student.id}
          />
        ));
    if (order === "name")
      return students
        .sort(byName)
        .map((student) => (
          <StudentItem
            key={student.id}
            name={student.name}
            age={student.age}
            id={student.id}
          />
        ));
    if (order === "random")
      return students
        .sort((a, b) => a.id - Math.floor(Math.random() * 6 - 3))
        .map((student) => (
          <StudentItem
            key={student.id}
            name={student.name}
            age={student.age}
            id={student.id}
          />
        ));
    if (order === "ID")
      return students
        .sort((a, b) => a.id - b.id)
        .map((student) => (
          <StudentItem
            key={student.id}
            name={student.name}
            age={student.age}
            id={student.id}
          />
        ));
  });

  return (
    <div className={styles.studentListContainer}>
      <h1>Student List</h1>
      <div className={styles.sortButtons}>
        <button onClick={() => setOrder("age")}>Sort by age</button>
        <button onClick={() => setOrder("name")}>Sort by name</button>
        <button onClick={() => setOrder("random")}>Sort random</button>
        <button onClick={() => setOrder("ID")}>Sort by ID</button>
      </div>

      <div className={styles.studentList}>{studentList}</div>
    </div>
  );
}
