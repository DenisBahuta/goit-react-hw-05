const ErrorMessage = ({ message = "" }) => {
  return (
    <p>
      {message.length > 0
        ? message
        : "❌ Whoops, something went wrong! Please try reloading this page!"}
    </p>
  );
};

export default ErrorMessage;
