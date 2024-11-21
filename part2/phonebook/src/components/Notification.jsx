const generalStyle = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "0.5rem 1rem",
  borderRadius: "1rem",
  fontSize: "1.5rem",
  fontFamily: "sans-serif",
};

const successStyle = {
  border: "2px solid chartreuse",
  color: "chartreuse",
};

const failedStyle = {
  border: "2px solid crimson",
  color: "crimson",
};

const Notification = ({ isSuccess, message }) => {
  if (message === null) return null;

  return (
    <div
      style={{ ...generalStyle, ...(isSuccess ? successStyle : failedStyle) }}
    >
      {message}
    </div>
  );
};

export default Notification;
