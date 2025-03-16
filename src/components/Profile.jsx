import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/profile")
        .then(response => response.json())
        .then(data => {
            console.log("Полученные данные:", data);
            setUser(data); 
        })
        .catch(error => console.error("Ошибка запроса:", error));
    }, []);

    if (!user) {
        return (
            <p>
                You are not logged in! 
                <Link to="/login">Войти</Link>
            </p>
        );
    }

    return (
        <div className="profile">
            <h2 className="title">Profile</h2>
            <p className="text">Name: {user.name}</p>
            <p className="text">Email: {user.email}</p>
            <button className="button" onClick={() => setUser(null)}>Exit</button>
        </div>
    );
}

export default Profile;