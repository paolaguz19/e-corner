import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Ripple, initTWE } from "tw-elements";
import axios from "axios";

function Ingresar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    initTWE({ Input, Ripple });
  }, []);

  const handleLogin = async () => {
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccess("✅ Usuario ingresado exitosamente.");
        setTimeout(() => navigate("/"), 2000); 
      } else {
        setError("❌ Error al ingresar el usuario.");
      }
    } catch (err) {
      setError("❌ Error en la conexión con el servidor.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-500">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Ingresar</h2>
        <form onSubmit={(e) => e.preventDefault()}>
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
            onClick={handleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
          >
            Ingresar
          </button>
        </form>
        {success && <p className="text-green-600 mt-4">{success}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Ingresar; 