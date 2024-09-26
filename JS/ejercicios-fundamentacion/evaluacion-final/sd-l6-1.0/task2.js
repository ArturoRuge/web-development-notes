// Task 2: listUsers()
export async function listUsers() {

  const url = 'http://localhost:3000/users';

  const response = await fetch(url);

  const users = await response.json();

  const formattedUsers = users.map(formatUser);

  const output = `[\n${formattedUsers.join(",\n")}\n]`;

  console.log(output);
}

function formatUser(user) {
  return `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`;
}