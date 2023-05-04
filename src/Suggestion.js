export default function Suggestion() {
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
        <>
            {itens.map((item) =>
                <div class="sugestao">
                    <div class="usuario">
                        <img src={item.src} alt={item.alt} />
                        <div class="texto">
                            <div class="nome">{item.nome}</div>
                            <div class="razao">{item.razao}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            )}
        </>
    );
}