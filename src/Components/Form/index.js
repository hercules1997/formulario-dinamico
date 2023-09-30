//* Importar Módulos
import React from "react";
// Importação dos estilos
import { Divisor, FormStyle } from "./style";

//* Função de renderização o formulário
export const Form = ({
  btnCadastrar,
  setName,
  setDate,
  setPhone,
  setNumero,
  setAddress,
  setGenero,
  setCidade,
  setEstado,
  cadastrar,
  editar,
  excluir,
  cancelar,
  name,
  date,
  phone,
  address,
  numero,
  cidade,
  estado,
  genero
}) => {
  return (
    <FormStyle>

      {/* Divisor para distribuir os inputs */}
      <Divisor>
      {/* Input de NOME */}
      <span className="container-input">
        <i class="bi bi-person"></i>
        <input
          className="form-control input"
          type="text"
          placeholder="Nome completo"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </span>
        {/* Input de IDADE */}
        <span className="container-input">
          <i class="bi bi-cake"></i>
          <input
            className="form-control input"
            type="text"
            placeholder="Data de nacimento"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </span>
        {/* Input de TELEFONE */}
        <span className="container-input">
          <i class="bi bi-phone"></i>
          <input
            className="form-control input"
            type="text"
            placeholder="Telefone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </span>
      </Divisor>

      {/* Input de ENDEREÇO */}
      <span className="container-input">
        <i class="bi bi-geo-alt"></i>
        <input
          className="form-control input"
          type="text"
          placeholder="Endereço"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </span>
      <Divisor>
        {/* Input de Número da RESIDÊCIA */}
        <span className="container-input">
          <i class="bi bi-123"></i>
          <input
            className="form-control input"
            type="text"
            placeholder="n°"
            onChange={(e) => setNumero(e.target.value)}
            value={numero}
          />
        </span>

        {/* Input da CIDADE */}
        <span className="container-input">
          <i class="bi bi-geo-fill"></i>
          <input
            className="form-control input"
            type="text"
            placeholder="Cidade"
            onChange={(e) => setCidade(e.target.value)}
            value={cidade}
          />
        </span>
      </Divisor>

      <Divisor>
        {/* Input dO ESTADO */}
        <span className="container-input">
          <i class="bi bi-signpost"></i>
          <input
            className="form-control input"
            type="text"
            placeholder="Estado"
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
          />
        </span>

        {/* Seleção de GÊNERO */}
        <span className="container-input">
          <i class="bi bi-gender-ambiguous"></i>
          <input
            className="form-control input"
            type="text"
            placeholder="Gênero"
            onChange={(e) => setGenero(e.target.value)}
            value={genero}
          />
        </span>
      </Divisor>

      {btnCadastrar ? (
        <button
          type="button"
          value="Cadastrar"
          class="btn btn-outline-primary"
          onClick={cadastrar}
        >
          Registrar
        </button>
      ) : (
        <div class="buttons" aria-label="Basic outlined example">
          <button
            type="button"
            value="Alterar"
            class="btn btn-outline-secondary"
            onClick={editar}
          >
            Editar
          </button>
          <button
            type="button"
            value="Excluir"
            class="btn btn-outline-danger"
            onClick={excluir}
          >
            Excluir
          </button>
          <button
            type="button"
            value="Cancelar"
            class="btn btn-outline-warning"
            onClick={cancelar}
          >
            Cancelar
          </button>
        </div>
      )}
    </FormStyle>
  );
};