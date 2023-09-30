// Importação dos módulos
import React, { useState } from "react";

// Importando estilos da Tabela
import { Container } from "./style";
import { usePerson } from "../../Hooks/PersonContext";
export const Table = ({ selecionar, excluirAll }) => {
  const [termo, setTermo] = useState("");
  const { person } = usePerson();

  // Variáveis para buscas dos nomes
  const searchMaiusculas = termo.toUpperCase();
  const searchMinusculas = termo.toLocaleLowerCase()

  // Retorno
  return (
    <Container>
      <span>
        <i class="bi bi-search"></i>
        <input
          type="text"
          onChange={(e) => setTermo(e.target.value)}
          placeholder="Informe o nome..."
          className="form-control input"
        />
        <button type="button" className="btn btn-outline-danger" onClick={excluirAll}>
          Excluir todos
        </button>
      </span>

      {/* Tabela  */}
      <table class="tabela">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Data de nascimento</th>
            <th scope="col">Telefone</th>
            <th scope="col">Endereço</th>
            <th scope="col">n°</th>
            <th scope="col">Cidade</th>
            <th scope="col">Estado</th>
            <th scope="col">Gênero</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {   person && person
            ?.filter((objPerson) =>
              objPerson.name.includes(searchMaiusculas && searchMinusculas)
            )
            .map((objPerson, indice) => (
              <tr key={indice}>
                <th scope="row">{indice + 1}</th>
                <td>{objPerson.name}</td>
                <td>{objPerson.date}</td>
                <td>{objPerson.phone}</td>
                <td>{objPerson.address}</td>
                <td>{objPerson.number}</td>
                <td>{objPerson.cidade}</td>
                <td>{objPerson.estado}</td>
                <td>{objPerson.genero}</td>
                <td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => selecionar(indice)}
                  >
                    Selecionar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};
