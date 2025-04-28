import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Ripple, initTWE } from "tw-elements";
import axios from "axios"; 

function Registrar() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [cedula, setCedula] = useState('');
  const [fecha_nacimiento, setFecha_Nacimiento] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    initTWE({ Input, Ripple });
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault(); 

    const userData = {
      nombre,
      apellido,
      email,
      cedula,
      fecha_nacimiento,
      password,
    };

    
    const jsonUserData = JSON.stringify(userData); 

    try {
      
      const response = await axios.post("http://localhost:8000/api/users/", jsonUserData, {
        headers: {
          "Content-Type": "application/json", 
        },
      });

      
      if (response.status === 201) {
        setSuccess("✅ Usuario registrado exitosamente.");
        setTimeout(() => navigate("/ingresar"), 2000); 
      } else {
        setError("❌ Error al registrar el usuario.");
      }
    } catch (err) {
     
      setError("❌ Error en la conexión con el servidor.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Registro</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded bg-gray-700 border-transparent text-white"
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded bg-gray-700 border-transparent text-white"
          />
          <input
            type="text"
            placeholder="ID o Documento"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded bg-gray-700 border-transparent text-white"
          />
          <input
            type="date"
            placeholder="Fecha de nacimiento"
            value={fecha_nacimiento}
            onChange={(e) => setFecha_Nacimiento(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded bg-gray-700 border-transparent text-gray-400"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded bg-gray-700 border-transparent text-white"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded bg-gray-700 border-transparent text-white"
          />
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
          >
            Registrarse
          </button>
        </form>
        {success && <p className="text-green-600 mt-4">{success}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Registrar;
