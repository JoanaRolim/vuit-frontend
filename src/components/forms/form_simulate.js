import React from "react";

const FormSimulate = ({
  nomeInput,
  CEPInput,
  emailInput,
  interest,
  handleChange,
  handleSubmit,
  message,
  categories,
  buttonText,
}) => {
  // This line destrucutres the props object to gain access to the values
  return (
    <form>
      <p>
        Preencha o formulário para receber o contato de um corretor especialista
      </p>

      <div id="formDiv">
        <input
          type="text"
          name="nomeInput"
          value={nomeInput}
          onChange={handleChange}
          placeholder="Nome"
        />

        <input
          type="text"
          name="emailInput"
          value={emailInput}
          onChange={handleChange}
          placeholder="Email"
        />
        <select
          name="interest"
          className="minimal"
          value={interest}
          onChange={handleChange}
          style={{width: '150px;'}}
        >
          <option value="" disabled defaultValue>
            Melhor horário para atendimento
          </option>
          {categories.map((interest, idx) => (
            <option key={idx} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>

      {message ? <p className="error"> {message} </p> : ""}

      <input
        type="submit"
        className="buttonForm"
        onClick={handleSubmit}
        value={buttonText}
      />
    </form>
  );
};

export default FormSimulate;
