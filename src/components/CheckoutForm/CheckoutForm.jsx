import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";
import { db } from "../../main";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const [buyerData, setBuyerData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await Promise.all(
        cartItems.map(async (item) => {
          const productRef = doc(db, "products", item.id);
          const productsSnapshot = await getDoc(productRef);
          const productData = productsSnapshot.data();

          if (productData.stock >= item.quantity) {
            await updateDoc(productRef, {
              stock: productData.stock - item.quantity,
            });
          } else {
            throw new Error(`No hay suficiente stock de ${item.name}.`);
          }
        })
      );

      clearCart();
      alert(
        "Gracias por tu compra! Los productos serán enviados a la dirección ingresada."
      );
      navigate("/");
    } catch (error) {
      alert(`Error al procesar la compra: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { label: "Nombre", name: "name", pattern: "[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]+" },
    {
      label: "Apellido",
      name: "lastName",
      pattern: "[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]+",
    },
    {
      label: "Email",
      name: "email",
      pattern: "[a-zA-Z0-9._%+-]+@(gmail\\.com|hotmail\\.com|outlook\\.com)",
    },
    { label: "Teléfono", name: "phone", pattern: "[0-9]+" },
    {
      label: "Provincia",
      name: "province",
      pattern: "[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]+",
    },
    { label: "Ciudad", name: "city", pattern: "[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ\\s]+" },
    {
      label: "Dirección",
      name: "address",
      pattern: "[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ\\s]+",
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Datos del Comprador</h2>
      {fields.map(({ label, name, pattern }) => (
        <div className="form-field" key={name}>
          <label htmlFor={name}>{label}:</label>
          <input
            type="text"
            id={name}
            name={name}
            value={buyerData[name]}
            onChange={handleChange}
            required
            pattern={pattern}
            title={`El ${label.toLowerCase()} solo debe contener letras.`}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-warning" disabled={loading}>
        {loading ? "Cargando..." : "Confirmar Compra"}
      </button>
    </form>
  );
};

export default CheckoutForm;
