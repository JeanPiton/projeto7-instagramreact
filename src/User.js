import { useState } from "react";
export default function User() {
    const [user,setUser] = useState("catanacomics");
    const [image,setImage] = useState("assets/img/catanacomics.svg");
    function handleClickImage(){
        let imag = prompt("image:");
        if(imag){
            setImage(imag);
        }
    }
    function handleClickName(){
        let name = prompt("user:");
        if(name){
            setUser(name);
        }
    }
    return (
        <div class="usuario">
            <img src={image} alt="imagem de perfil" onClick={handleClickImage} />
            <div class="texto">
                <span>
                    <strong>{user}</strong>
                    <ion-icon name="pencil" onClick={handleClickName}></ion-icon>
                </span>
            </div>
        </div>
    );
}