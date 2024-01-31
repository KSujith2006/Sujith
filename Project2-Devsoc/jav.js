function fetchUserData() {
    const username = document.getElementById('usernameInput').value.trim();

    if (username === '') {
        alert('Please enter a GitHub username.');
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            displayUserInfo(data);
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
        });
}

function displayUserInfo(user) {
    const userInfoDiv = document.getElementById('userInfo');
    userInfoDiv.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}" style="width: 100px; border-radius: 50%;">
        <h2>${user.login}</h2>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        <p>Public Repositories: ${user.public_repos}</p>
    `;
    
    userInfoDiv.classList.remove('hidden');
}

