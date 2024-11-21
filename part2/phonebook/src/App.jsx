import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const person = { name: newName, number: newNumber };

    const personExists = persons.find((p) => p.name === newName);

    if (personExists) {
      alert(`${person.name} is already added to phonebook`);
      return null;
    }

    const updatedPersons = [...persons];
    updatedPersons.push(person);
    setPersons(updatedPersons);

    setNewName("");
    setNewNumber("");
  };

  const personsToDisplay = filterName
    ? persons.filter((p) =>
        p.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filterName} onChange={handleFilterNameChange} />

      <h2>add a new</h2>

      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        handleNewNumberChange={handleNewNumberChange}
      />

      <h2>Numbers</h2>

      <Display persons={personsToDisplay} />
    </div>
  );
};

export default App;
