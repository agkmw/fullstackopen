import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Display from "./components/Display";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [failedMessage, setFailedMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  const deletePerson = (id) => () => {
    const person = persons.find((p) => p.id === id);

    if (window.confirm(`Delete '${person.name}'?`)) {
      personService
        .destroy(id)
        .then((deletedPerson) =>
          setPersons(persons.filter((p) => p.id !== deletedPerson.id))
        )
        .catch((error) => {
          handleError(person);
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const personExists = persons.some((p) => p.name === newName);
    if (personExists) {
      if (
        window.confirm(
          `'${newName}' is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((p) => p.name === newName);
        const updatedPerson = { ...person, number: newNumber };
        personService
          .update(updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) =>
                p.id === returnedPerson.id ? returnedPerson : p
              )
            );
            setSuccessMessage(`Updated ${returnedPerson.name}'s number`);
          })
          .catch((error) => {
            handleError(person);
          });
      }
    } else {
      const person = { name: newName, number: newNumber };
      personService.create(person).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setSuccessMessage(`Added ${returnedPerson.name}`);
      });
    }

    setTimeout(() => {
      setSuccessMessage(null);
    }, 4000);
    setNewName("");
    setNewNumber("");
  };

  const handleError = (person) => {
    setPersons(persons.filter((p) => p.id !== person.id));
    setFailedMessage(
      `Information of '${person.name}' has already been removed from server`
    );
    setTimeout(() => {
      setFailedMessage(null);
    }, 4000);
  };

  const personsToDisplay = filterName
    ? persons.filter((p) =>
        p.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : persons;

  return (
    <div>
      <Notification isSuccess={true} message={successMessage} />
      <Notification isSuccess={false} message={failedMessage} />

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
      <Display persons={personsToDisplay} onDelete={deletePerson} />
    </div>
  );
};

export default App;
