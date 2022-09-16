const getError = (error) => {
  let message;
  try {
    error.response && error.response.data.message
      ? (message = error.response.data.message)
      : (message = error.message);
  } catch (e) {
    message = error.message;
  }
  return message;
};
export default getError;
