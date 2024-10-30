"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


async function deleteUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });
    // Ensure the function returns an object with a status property
    return { status: response.status }; 
  } catch (error) {
    console.error('Error deleting user:', error);
    return { status: null }; // Return null status in case of error
  }
}

module.exports = deleteUser;
