import Post from "./Post.js";
export default function Posts() {
    const itens = [
        {userImg:"assets/img/meowed.svg",userAlt:"meowed",postImg:"assets/img/gato-telefone.svg",postAlt:"gato-telefone",likeImg:"assets/img/respondeai.svg",likeAlt:"respondeai",likeCount:101.523},
        {userImg:"assets/img/barked.svg",userAlt:"barked",postImg:"assets/img/dog.svg",postAlt:"dog",likeImg:"assets/img/adorable_animals.svg",likeAlt:"adorable_animals",likeCount:99.159},
        {userImg:"assets/img/bad.vibes.memes.svg",userAlt:"bad.vibes.memes",postImg:"assets/img/cirno_bottle.jpg",postAlt:"cirno bottle",likeImg:"assets/img/chibirdart.svg",likeAlt:"chibirdart",likeCount:9.009}
    ]
    return (
        <div class="posts">
            {itens.map(item => <Post userImg={item.userImg} userAlt={item.userAlt} postImg={item.postImg} postAlt={item.postAlt} likeImg={item.likeImg} likeAlt={item.likeAlt} likeCount={item.likeCount}/>)}
        </div>
    );
}