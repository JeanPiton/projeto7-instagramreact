import Suggestion from "./Suggestion";
export default function Suggestions() {
    const itens = [
        {src:"assets/img/bad.vibes.memes.svg",alt:"bad.vibes.memes.svg",nome:'bad.vibes.memes',razao:'Segue você'}
        ,
        {src:"assets/img/chibirdart.svg",alt:"chibirdart",nome:"chibirdart",razao:"Segue você"}
        ,
        {src:"assets/img/razoesparaacreditar.svg",alt:"razoesparaacreditar",nome:"razoesparaacreditar",razao:"Novo no Instagram"}
        ,
        {src:"assets/img/adorable_animals.svg",alt:"adorable_animals",nome:"adorable_animals",razao:"Segue você"}
        ,
        {src:"assets/img/smallcutecats.svg",alt:"smallcutecats",nome:"smallcutecats",razao:"Segue você"}
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {itens.map(item => <Suggestion src={item.src} alt={item.alt} nome={item.nome} razao={item.razao} />)}
        </div>
    );
}