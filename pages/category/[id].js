import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Breadcrumbs from "../../components/Breadcrumbs";
import Product from "../../components/Product";
export default function DinamicPage() {
  let [group, setgroup] = useState([]);
  let [products, setproducts] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    axios
      .get(`http://142.93.237.244:9090/v1/groups-url/${id}`)
      .then((res) => {
        setgroup(res.data);
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("error in request", err);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `http://142.93.237.244:9090/v1/products-by-filter?groupUrl=${id}`
      )
      .then((res) => {
        setproducts(res.data.products);
        console.log("products", res.data.products);
      })
      .catch((err) => {
        console.log("error in request", err);
      });
  }, [id]);

  return (
    <div className="container">
      <Breadcrumbs />
      <h1>{group.nameUz}</h1>
      <div className="row">
        {products.map((x) => {
          return (
            <div className="col-6 col-md-4 col-lg-3">
              <Product productName={x.nameUz} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
