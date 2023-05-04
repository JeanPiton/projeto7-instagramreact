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
            <img src={image} alt="imagem de perfil" onClick={handleClickImage} data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{user}</strong>
                    <ion-icon name="pencil" onClick={handleClickName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}