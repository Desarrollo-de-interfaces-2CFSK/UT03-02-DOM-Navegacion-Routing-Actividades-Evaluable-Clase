
import { useNavigate } from 'react-router-dom';


export default function Login() {
const nav = useNavigate();
const onSubmit = (e) => {
e.preventDefault();
// Simular login
nav('/admin');
};


return (
<section className="max-w-md mx-auto p-4">
<h2 className="text-xl font-semibold mb-4">Login</h2>
<form onSubmit={onSubmit} className="flex flex-col gap-3">
<label>
Usuario
<input aria-label="usuario" className="w-full border p-2 mt-1" />
</label>
<label>
Contraseña
<input type="password" aria-label="contraseña" className="w-full border p-2 mt-1" />
</label>
<button className="bg-blue-600 text-white p-2 rounded">Entrar</button>
</form>
</section>
);
}