import "../../App.css";


function FormsHome() {
  return (
    <div className="formulario-consulta">
      <h2>Agende sua consulta</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />
        <br/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <button type="submit">Enviar</button>
      </form>
    </div>
   
  );
}

export default FormsHome;