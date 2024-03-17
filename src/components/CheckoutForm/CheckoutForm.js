import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();

        const userData = {
            name, phone, email
        }

        onConfirm(userData);
    }

    return(                                    
                <form onSubmit={handleConfirm}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            className="form-control"
                            type="text"
                            value={name}
                            placeholder="Nombre"
                            onChange={({ target }) => setName(target.value)}
                        />
                    </div>                    
                    <div className="mb-3">
                        <label className="form-label">Telefono</label>
                        <input
                            className="form-control"
                            type="tel"
                            value={phone}
                            placeholder="Telefono"
                            onChange={({ target }) => setPhone(target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Crear Orden</button>
                </form>              
    )
}

export default CheckoutForm;