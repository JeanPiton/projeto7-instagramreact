import { useState } from "react";
export default function User() {
    const [user,setUser] = useState("catanacomics");
    function handleClick(){
        let name = prompt("user:");
        name?setUser(name):"";
    }
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{user}</strong>
                    <ion-icon name="pencil" onClick={handleClick}></ion-icon>
                </span>
            </div>
        </div>
    );
}