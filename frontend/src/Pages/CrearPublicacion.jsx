// src/Pages/CrearPublicacion.jsx
import { useState } from "react";
import axios from "axios";

function CrearPublicacion() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [envio, setEnvio] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleImagenesChange = (e) => {
    setImagenes(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("precio", precio);
    formData.append("opciones_envio", envio);

    Array.from(imagenes).forEach((img, index) => {
      formData.append(`imagen${index + 1}`, img);
    });

    try {
      const response = await axios.post("http://localhost:8000/api/publicaciones/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMensaje("✅ Publicación creada exitosamente.");
    } catch (error) {
        console.error("Detalles del error:", error.response?.data);
      setMensaje("❌ Error al crear la publicación.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Crear Publicación</h2>

      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="mb-4 w-full border p-2 rounded" required />
      <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="mb-4 w-full border p-2 rounded" required />
      <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} className="mb-4 w-full border p-2 rounded" required />
      <input type="file" multiple accept="image/*" onChange={handleImagenesChange} className="mb-4 w-full" required />

      <select value={envio} onChange={(e) => setEnvio(e.target.value)} className="mb-4 w-full border p-2 rounded" required>
        <option value="">Seleccione opción de envío</option>
        <option value="envio gratis">Envío gratis</option>
        <option value="envio a cargo del comprador">A cargo del comprador</option>
        <option value="entrega presencial">Entrega presencial</option>
      </select>

      <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
        Publicar
      </button>

      {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
    </form>
  );
}

export default CrearPublicacion;
