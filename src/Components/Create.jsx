import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TopBar from "./TopBar";
import { API_URL } from "../App";

function Create() {
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

  let navigate = useNavigate();

  const handleCreate = async () => {
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
      let res = await axios.post(API_URL, data);
      if (res.status === 201) {
        navigate("/");
        toast.success("Data created successfully");
      }
    } catch (error) {
      toast.danger("Data failed");
    }
  };

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
            <Button size="lg" variant="success" onClick={() => handleCreate()}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Create;
