export function onError(error) {
  let message = error.toString();

  // Auth errors, as they are not normal "Error" objects
  if (!(error instanceof Error) && error.message) {
    message = error.message;
  }

  alert(message);
}
