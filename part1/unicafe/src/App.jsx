import { useState } from "react";

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={`${positive} %`} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleFeedbackClick = (feedback) => () => {
    const updatedGood = feedback === "good" ? good + 1 : good;
    const updatedNeutral = feedback === "neutral" ? neutral + 1 : neutral;
    const updatedBad = feedback === "bad" ? bad + 1 : bad;

    if (feedback === "good") setGood(updatedGood);
    else if (feedback === "neutral") setNeutral(updatedNeutral);
    else if (feedback === "bad") setBad(updatedBad);

    const updatedAll = all + 1;
    setAll(updatedAll);

    setAverage((updatedGood - updatedBad) / updatedAll);
    setPositive((updatedGood / updatedAll) * 100);
  };

  return (
    <div>
      <Title text="give feedback" />

      <Button text="good" onClick={handleFeedbackClick("good")} />
      <Button text="neutral" onClick={handleFeedbackClick("neutral")} />
      <Button text="bad" onClick={handleFeedbackClick("bad")} />

      <Title text="statistics" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
