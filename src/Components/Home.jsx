import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../App";

function Home() {
  let [userData, setUserData] = useState([]);

  const getUserData = async () => {
    try {
      let res = await axios.get(API_URL);
      console.log(res);
      if (res.status === 200) {
        toast.success("Data fetched successfully");
        setUserData(res.data.filter((e) => e.status));
      }
    } catch (error) {
      toast.error("Data fetch failed");
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <TopBar />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>S.No</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.username}</td>
                  <td>{e.email}</td>
                  <td>
                    {e.suite},{e.street},{e.city},{e.zipcode}
                  </td>
                  <td>{e.phone}</td>
                  <td>{e.website}</td>
                  <td>
                    {e.compName},{e.catchPhrase},{e.bs}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Home;
