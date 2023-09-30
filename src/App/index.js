import { useState } from "react";
import { Container } from "./style";
import { Form, Table } from "../Components";
import { usePerson } from "../Hooks/PersonContext";

const App = () => {
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [indiceVetor, setIndiceVetor] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [numero, setNumero] = useState("");
  const [address, setAddress] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [genero, setGenero] = useState("");
  const { person, putPersonData } = usePerson();

  // Função limpar dados dos inputs
  const limpar = () => {
    setName("");
    setDate("");
    setPhone("");
    setNumero("");
    setAddress("");
    setCidade("");
    setEstado("");
    setGenero("");
  };

  //Função de cadastrar
  const cadastrar = () => {
    let objPerson = {
      name: name,
      date: date,
      phone: phone,
      address: address,
      number: numero,
      cidade: cidade,
      estado: estado,
      genero: genero,
    };

    putPersonData([...person, objPerson]);
    limpar();
  };

  // Função selecionar pessoa
  const selecionar = (indice) => {
    setIndiceVetor(indice);
    setName(person[indice].name);
    setDate(person[indice].date);
    setPhone(person[indice].phone);
    setNumero(person[indice].number);
    setAddress(person[indice].address);
    setCidade(person[indice].cidade);
    setEstado(person[indice].estado);
    setGenero(person[indice].genero);

    //Tornando a função do botão cadastrar em false para não ser exibido em tela
    setBtnCadastrar(false);
  };

  // Função de edição
  const editar = () => {
    let objPerson = {
      name: name,
      date: date,
      phone: phone,
      address: address,
      number: numero,
      cidade: cidade,
      estado: estado,
      genero: genero,
    };
    let copiaVetor = [...person];
    copiaVetor[indiceVetor] = objPerson;
    putPersonData(copiaVetor);

    limpar();
  };

  //Função para excluir
  const excluir = (indice) => {
    person.splice(indice, 1);

    putPersonData(person);
    limpar();
    setBtnCadastrar(true);
  };
  
  // Função excluir todos os registros
  const excluirAll = (indice) => {
    person.splice(indice, person.length);

    putPersonData([...person]);
  };

  const cancelar = () => {
    limpar();
    setBtnCadastrar(true);
  };

  // Retorno
  return (
    <Container className="App">
      {/* Dentro do Form passando as props do App para o componente de formulário */}
      <Form
        setName={setName}
        btnCadastrar={btnCadastrar}
        setAddress={setAddress}
        setCidade={setCidade}
        setEstado={setEstado}
        setPhone={setPhone}
        setGenero={setGenero}
        setDate={setDate}
        setNumero={setNumero}
        setBtn={setBtnCadastrar}
        cadastrar={cadastrar}
        editar={editar}
        excluir={excluir}
        cancelar={cancelar}
        person={person}
        indice={indiceVetor}
        name={name}
        address={address}
        phone={phone}
        date={date}
        numero={numero}
        cidade={cidade}
        estado={estado}
        genero={genero}
      />
      <Table selecionar={selecionar} excluirAll={excluirAll} />
    </Container>
  );
};

export default App;
