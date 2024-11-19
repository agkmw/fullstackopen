import { useState } from "react";

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const Anecdote = ({ anecdote }) => {
  return <p>{anecdote}</p>;
};

const VoteCount = ({ count }) => {
  return <p>has {count} votes</p>;
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.from({ length: anecdotes.length }, () => 0)
  );

  const handleNextClick = (event) => {
    let updatedSelected = selected;
    do {
      updatedSelected = generateRandomIndex(anecdotes.length);
    } while (updatedSelected === selected);
    setSelected(updatedSelected);
  };

  const generateRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleVoteClick = (event) => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  const mostVotedAnecdotes = anecdotes[votes.indexOf(Math.max(...votes))];

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <VoteCount count={votes[selected]} />

      <Button text="vote" onClick={handleVoteClick} />
      <Button text="next anecdote" onClick={handleNextClick} />

      <Title text="Anecdote with most votes" />
      <Anecdote anecdote={mostVotedAnecdotes} />
    </div>
  );
};

export default App;
