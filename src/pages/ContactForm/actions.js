export function updateName(name) {
  return {
    type: 'UPDATE_NAME',
    name,
  };
}

export function updateEmail(email) {
  return {
    type: 'UPDATE_EMAIL',
    email,
  };
}

export function updateMessage(message) {
  return {
    type: 'UPDATE_MESSAGE',
    message,
  };
}
