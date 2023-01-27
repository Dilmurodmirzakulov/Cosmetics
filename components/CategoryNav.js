import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { Container } from "react-bootstrap";
import MakeUpCategory from "./MakeUpCategory";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function CategoryNav() {
  let [groups, setGroups] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://142.93.237.244:9090/v1/groups-by-filter?all=true&enabled=true"
      )
      .then((res) => {
        setGroups(res.data);
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("error in request", err);
      });
  }, []);

  return (
    <Navbar
      expand="lg"
      className="category-nav position-relative d-none d-lg-block"
    >
      <Container className="h-100">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ background: "transparent" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-start w-100 me-auto me-lg-none gap-5 align-items-center">
            {groups.map((x) => {
              return (
                <Link
                  key={x.id}
                  href="/category/[id]"
                  as={`/category/${x.url}`}
                  className="category-link text-decoration-none"
                >
                  {x.nameUz}
                </Link>
              );
            })}
            {/* <Nav.Link href="#" className="category-link parent-category-link">
              makeup{" "}
              <Image src={require("/public/img/dropdown-ic.svg")} alt="arrow" />
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              skin care
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              hair care
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              fragrance
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              foot, hand & nail care
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              tool & accessories
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              shave & hair removal
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              personal care
            </Nav.Link>
            <Nav.Link href="#" className="category-link">
              buy nov!{" "}
              <Image src={require("/public/img/dropdown-ic.svg")} alt="arrow" />
            </Nav.Link> */}
            <MakeUpCategory className="position-absolute makeup-categories" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CategoryNav;
