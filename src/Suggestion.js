export default function Suggestion() {
    const itens = [
        <>
            <img src="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg" />
            <div class="texto">
                <div class="nome">bad.vibes.memes</div>
                <div class="razao">Segue você</div>
            </div>
        </>
        ,
        <>
            <img src="assets/img/chibirdart.svg" alt="chibirdart" />
            <div class="texto">
                <div class="nome">chibirdart</div>
                <div class="razao">Segue você</div>
            </div>
        </>
        ,
        <>
            <img src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
            <div class="texto">
                <div class="nome">razoesparaacreditar</div>
                <div class="razao">Novo no Instagram</div>
            </div>
        </>
        ,
        <>
            <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
            <div class="texto">
                <div class="nome">adorable_animals</div>
                <div class="razao">Segue você</div>
            </div>
        </>
        ,
        <>
            <img src="assets/img/smallcutecats.svg" alt="smallcutecats" />
            <div class="texto">
                <div class="nome">smallcutecats</div>
                <div class="razao">Segue você</div>
            </div>
        </>
    ]
    return (
        <>
            hello
            {itens.map((item) => 
                <div class="sugestao">
                    <div class="usuario">
                        {item}
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            )}
        </>
    );
}