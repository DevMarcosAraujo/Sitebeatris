import '../App.css'
function Contatos() {
  return (
    <div className="contato-container">
      <h1 className="contato-titulo">📞 Contatos</h1>
      <p className="contato-subtitulo">Envie uma mensagem ou anexe uma imagem</p>

      <form className="formulario">
        <div className="campo">
          <label>Nome</label>
          <input type="text" placeholder="Seu nome" required />
        </div>

        <div className="campo">
          <label>E-mail</label>
          <input type="email" placeholder="seu@email.com" required />
        </div>

        <div className="campo">
          <label>Telefone</label>
          <input type="tel" placeholder="(XX) XXXXX-XXXX" />
        </div>

        <div className="campo">
          <label>Mensagem</label>
          <textarea rows="5" placeholder="Escreva sua mensagem aqui..." required />
        </div>

        <div className="campo">
          <label>Enviar Foto ou Documento</label>
          <input type="file" />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contatos;
