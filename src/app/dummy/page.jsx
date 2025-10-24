import React from "react";
import "./bootstrap.min.css";
import "./main.css";
import Image from "next/image";
import Link from "next/link"; // Import Link

async function fetchProducts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      console.error("Response not OK:", response.status, response.statusText);
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in fetchProducts:", error);
    throw error;
  }
}

const ProductPage = async () => {
  const { products } = await fetchProducts();

  return (
    <div id="page-top">
      <header className="page-section masthead2">
        <div className="container h-50">
          <h1 className="section-header text-white font-weight-bold">
            Products
          </h1>
          <p className="main-menu text-white-75 font-weight-light mb-5">
            <Link className="link-menu" href="/">
              InnoTech3D--&gt; <span style={{ color: "white" }}>Products</span>
            </Link>
          </p>
        </div>
      </header>

      <section className="page-section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 blog-form p-4"
              style={{ backgroundColor: "#000", color: "#fff" }}
            >
              <h2 className="blog-sidebar-title">
                <b>Cart</b>
              </h2>
              <hr />
              <p className="blog-sidebar-text">No products in the cart...</p>
              <h2 className="blog-sidebar-title">
                <b>Categories</b>
              </h2>
              <hr />
              {[
                "3D Printing",
                "3D Scanning",
                "FDM 3D Printing",
                "SLS 3D Printing",
                "SLA 3D Printing",
              ].map((category, index) => (
                <p key={index} className="blog-sidebar-list">
                  <b>
                    <span className="list-icon"> </span> {category}
                  </b>
                </p>
              ))}
              <h2 className="blog-sidebar-title">
                <b>Filter</b>
              </h2>
              <hr />
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ color: "#fff", backgroundColor: "#333" }}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    style={{ color: "#fff", backgroundColor: "#333" }}
                  >
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <p className="tags">Price ₹4 - ₹25</p>
              <button type="button" className="btn btn-dark btn-lg">
                Filter
              </button>
            </div>

            <div
              className="col-lg-9"
              style={{
                paddingLeft: "30px",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              <div className="row">
                {products.map((product) => (
                  <div key={product._id} className="col-sm-3 col-md-6 col-lg-4">
                    <div
                      className="card"
                      style={{ backgroundColor: "#272727", color: "#fff" }}
                    >
                      <div className="card-body text-center">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="product-image"
                        />
                        <h5 className="card-title">
                          <b>{product.name}</b>
                        </h5>
                        <p className="card-text small">{product.description}</p>
                        <p className="tags">Price: ₹{product.price}</p>
                        <Link
                          href={{
                            pathname: `/product/${product._id}`,
                            query: {
                              name: product.name,
                              price: product.price,
                              imageUrl: product.imageUrl,
                              description: product.description,
                            },
                          }}
                          className="btn btn-white"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
