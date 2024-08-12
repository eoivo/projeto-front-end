import React, { useState } from "react";
import "./style.css";
import { AiOutlineWarning, AiOutlineCheckCircle } from 'react-icons/ai';

export default function Register() {
    const [fullName, setFullName] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [notification, setNotification] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleRegistration = (e) => {
        e.preventDefault();
        if (!fullName || !idNumber || !userEmail || !phoneNumber) {
            setNotification("Please fill in all fields.");
            setHasError(true);
        } else {
            setNotification("Registration successful!");
            setHasError(false);
        }
    };

    return (
        <div className="gradient-register">
            <form className="registration-form" onSubmit={handleRegistration}>
                <h1 className="create-account">Crie sua conta</h1>

                <label>Nome completo: </label>
                <input
                    className="input-register"
                    placeholder="Seu nome completo"
                    required
                    type='text'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <label>Seu CPF: </label>
                <input
                    className="input-register"
                    placeholder="000.000.000-00"
                    type='text'
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                />

                <label>Email: </label>
                <input
                    className="input-register"
                    placeholder="example@email.com"
                    type='email'
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />

                <label>Seu numero: </label>
                <input
                    className="input-register"
                    placeholder="(00) 00000-0000"
                    type='tel'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <div className="button-container">
                    <button className="button-submit" type="submit">Enviar</button>
                    {notification && (
                        <p className="notification">
                            {hasError ? (
                                <AiOutlineWarning className="alert-icon" />
                            ) : (
                                <AiOutlineCheckCircle className="success-icon" />
                            )}
                            {notification}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
