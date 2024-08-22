import React from "react";
import { Link } from "react-router-dom";
const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row mt-4 justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
