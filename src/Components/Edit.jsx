import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import TopBar from "./TopBar";
import { API_URL } from "../App";

function Edit() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [compName, setCompName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");

  let { id } = useParams();
  let navigate = useNavigate();

  const handleEdit = async () => {
    try {
      let data = {
        name,
        username,
        email,
        street,
        suite,
        city,
        zipcode,
        phone,
        website,
        compName,
        catchPhrase,
        bs,
        status: false,
      };
      let res = await axios.put(`${API_URL}/${id}`, data);
      if (res.status === 200) {
        navigate("/");
        toast.success("Data edited successfully");
      }
    } catch (error) {
      toast.danger("Data edit failed");
    }
  };
  const getUserdataById = async () => {
    try {
      let res = await axios.get(`${API_URL}/${id}`);
      if (res.status === 200) {
        setName(res.data.name);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setStreet(res.data.street);
        setSuite(res.data.suite);
        setCity(res.data.city);
        setZipcode(res.data.zipcode);
        setPhone(res.data.phone);
        setWebsite(res.data.website);
        setCompName(res.data.compName);
        setCatchPhrase(res.data.catchPhrase);
        setBs(res.data.bs);
      }
    } catch (error) {
      toast.error("Internal error");
    }
  };
  useEffect(() => {
    getUserdataById();
  }, []);

  return (
    <>
      <TopBar />
      <br />
      <div className="container-fluid ">
        <Form>
          <Form.Group className="mb-3 ">
            <Form.Label className="fw-bold">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
          <br />
          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <br />

          <Row className="mb-3">
            <Form.Label className="fw-bold">Address</Form.Label>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Enter Suite"
                onChange={(e) => {
                  setSuite(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Enter Street"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Enter City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Enter Zipcode"
                onChange={(e) => {
                  setZipcode(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label className="fw-bold">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold">Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Website"
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Label className="fw-bold">Company</Form.Label>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                onChange={(e) => {
                  setCompName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Enter Catch-Phrase"
                onChange={(e) => {
                  setCatchPhrase(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Enter bs"
                onChange={(e) => {
                  setBs(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <div className="text-center">
            <Button size="lg" variant="success" onClick={() => handleEdit()}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Edit;
