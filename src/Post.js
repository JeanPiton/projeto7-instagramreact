import { useState } from "react";
export default function Post(props) {
    const [animation, setAnimation] = useState("false");
    const [save, setSave] = useState("bookmark-outline");
    const [like, setLike] = useState("heart-outline");
    const [likes, setLikes] = useState(Number(props.likeCount));
    function handleClickSave() {
        save === "bookmark" ? setSave("bookmark-outline") : setSave("bookmark");
    }
    function handleClickLike() {
        let x = likes.toString();
        x = x.replace(".", "");
        let count = x;
        if (like === "heart") {
            count--;
            setLike("heart-outline");
            setAnimation("false");
        } else {
            count++;
            setLike("heart");
        }
        count = count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
        setLikes(count);
    }
    function handleClickImage(event) {
        if (like === "heart-outline" && event.detail === 2) {
            let x = likes.toString();
            x = x.replace(".", "");
            let count = x;
            count++;
            setLike("heart");
            count = count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
            setLikes(count);
            setAnimation("true");
        }
    }
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImg} alt={props.userAlt} />
                    {props.userAlt}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" anim={animation}>
                <img src={props.postImg} alt={props.postAlt} onClick={handleClickImage} />
                <div class="instagram-heart">
                </div>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={like} onClick={handleClickLike}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={save} onClick={handleClickSave}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likeImg} alt={props.likeAlt} />
                    <div class="texto">
                        Curtido por <strong>{props.likeAlt}</strong> e <strong>outras {likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}