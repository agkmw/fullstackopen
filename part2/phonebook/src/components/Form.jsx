const Form = ({
  handleSubmit,
  newName,
  handleNewNameChange,
  newNumber,
  handleNewNumberChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNewNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
