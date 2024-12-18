const Total = ({ parts }) => {
  const total = parts
    .map((p) => p.exercises)
    .reduce((prev, curr) => prev + curr, 0);
  return <b>total of {total} exercises</b>;
};

export default Total;
