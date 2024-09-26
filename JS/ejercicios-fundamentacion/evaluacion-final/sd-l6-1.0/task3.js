// Task 3: addUser(first_name, last_name, email)
export function addUser(first_name, last_name, email) {
    const url = "http://localhost:3000/users";

    fetch(url)
        .then(response => response.json())
        .then(users => {
            const highestId = users.reduce((maxId, user) => Math.max(maxId, parseInt(user.id)), 0);
            const newUser = {
                id: highestId + 1,
                first_name: first_name,
                last_name: last_name,
                email: email
            };
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
        })
        .then(response => response.json())
        .then(data => {
            console.log("Nuevo usuario agregado:", data);
        })
       
}
