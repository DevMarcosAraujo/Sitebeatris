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
            A Doutora Beatriz é uma profissional dedicada e apaixonada pela área da saúde. Formou-se em medicina no ano passado, conquistando reconhecimento por sua excelência acadêmica e compromisso com os pacientes. Desde os primeiros anos da graduação, demonstrou grande interesse por pesquisas clínicas, tendo participado de diversos projetos que buscavam soluções inovadoras para doenças crônicas.{" "}
          </p>
          <p>
            Durante sua residência, especializou-se em clínica médica, com foco no atendimento humanizado. É conhecida por sua empatia, escuta ativa e habilidade de criar conexões com seus pacientes. Além de sua atuação exemplar nos hospitais, Beatriz também promove ações sociais voltadas para comunidades carentes, levando cuidados básicos de saúde a locais com difícil acesso.
          </p>
          <p>
            Mesmo com pouco tempo de formada, já publicou artigos científicos em revistas nacionais e internacionais, abordando temas como saúde preventiva, bem-estar emocional e terapias integrativas. Sua atuação combina conhecimento técnico com uma abordagem acolhedora e personalizada.
          </p>

          {/* Imagem no canto inferior direito */}
          <div className="imagem-inferior">
            <img src={imagemBeatriz2} alt="Doutora Beatriz" />
          </div>

          <p>
            Atualmente, Beatriz atua em um renomado centro médico, onde continua ampliando seus conhecimentos por meio de cursos de especialização e eventos científicos. Seu sonho é contribuir para a construção de um sistema de saúde mais justo, acessível e eficiente.
          </p>
          <p>
            Fora da medicina, ela é apaixonada por literatura, jardinagem e viagens culturais. Acredita que um bom médico é também alguém que conhece o mundo ao seu redor e se conecta com as histórias das pessoas. A trajetória da Doutora Beatriz é um exemplo inspirador de dedicação, amor pela profissão e vontade de transformar vidas através do cuidado e do conhecimento.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
