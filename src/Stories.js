import Story from "./Story";
export default function Stories() {
    const itens = [
        {src:"assets/img/9gag.svg",alt:"9gag",user:"9gag"}
        ,
        {src:"assets/img/meowed.svg",alt:"meowed",user:"meowed"}
        ,
        {src:"assets/img/barked.svg",alt:"barked",user:"barked"}
        ,
        {src:"assets/img/nathanwpylestrangeplanet.svg",alt:"nathanwpylestrangeplanet",user:"nathanwpylestrangeplanet"}
        ,
        {src:"assets/img/wawawicomics.svg",alt:"wawawicomics",user:"wawawicomics"}
        ,
        {src:"assets/img/respondeai.svg",alt:"respondeai",user:"respondeai"}
        ,
        {src:"assets/img/filomoderna.svg",alt:"filomoderna",user:"filomoderna"}
        ,
        {src:"assets/img/memeriagourmet.svg",alt:"memeriagourmet",user:"memeriagourmet"}
    ]
    return (
        <div class="stories">
            {itens.map(item => <Story src={item.src} alt={item.alt} user={item.user} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}