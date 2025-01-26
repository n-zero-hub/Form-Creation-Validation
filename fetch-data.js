// Define the asynchronous function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Data container
  
    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
      const users = await response.json();
  
      // Clear the loading message
      dataContainer.innerHTML = '';
  
      // Create and append user list
      const userList = document.createElement('ul');
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
      dataContainer.appendChild(userList);
    } catch (error) {
      // Handle errors
      dataContainer.innerHTML = 'Failed to load user data.';
      console.error('Error fetching user data:', error);
    }
  }
  
  // Run the fetchUserData function when DOMContentLoaded
  document.addEventListener('DOMContentLoaded', fetchUserData);
  