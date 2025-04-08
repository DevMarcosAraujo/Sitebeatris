import imagemBeatriz from '../assets/CONVITE-00239.jpg';
import imagemBeatriz2 from '../assets/CONVITE-00238.jpg';
function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-conteudo">

        {/* Imagem no canto superior esquerdo */}
        <div className="imagem-superior">
          <img src={imagemBeatriz} alt="Doutora Beatriz" />
        </div>

        <div className="texto-sobre">
          <h1>Sobre a Doutora Beatriz</h1>
          <p>
            Você está em busca de uma médica que escute de verdade, olhe nos olhos e enxergue além dos sintomas?{" "}
              Sou médica formada em 2024 pela Universidade Federal de Jataí (UFJ), em Goiás, e quero te contar um pouco da
            minha história — não só como profissional, mas como alguém que tem verdadeira paixão por cuidar.
          </p>
          <p>
          Desde sempre, senti dentro de mim um chamado para acolher o outro. Cuidar nunca foi apenas uma escolha profissional,
            mas uma expressão natural de quem eu sou. Entendo que ser médica vai muito além da técnica: é estar presente com
            empatia, ouvir com atenção e tratar cada pessoa como única.
            Durante a graduação, descobri um amor ainda maior pela Medicina ao me aprofundar nas Práticas Integrativas e Complementares
            (PICS) e no papel da espiritualidade na saúde. Acredito que corpo, mente, alma e emoções estão profundamente conectados — e que
            a verdadeira cura nasce dessa visão integral do ser humano.
          </p>
          <p>
            Hoje, atuo com foco em uma medicina mais humana, sensível e respeitosa. Nos meus atendimentos, procuro enxergar o paciente como um todo: 
            suas dores, suas histórias, suas crenças e esperanças. Sigo em constante aprendizado, com a ciência, com a prática, e com cada 
            pessoa que confia em mim.
          </p>

          {/* Imagem no canto inferior direito */}
          <div className="imagem-inferior">
            <img src={imagemBeatriz2} alt="Doutora Beatriz" />
          </div>

          <p>
            Se você busca um cuidado acolhedor e personalizado, saiba que estou pronta para caminhar ao seu lado com escuta, presença e dedicação.
              Vamos conversar? Estou disponível para consultas presenciais e online. É só me chamar!
          <p>
            
         </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
