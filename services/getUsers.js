export default async function getUsers() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  return data.json();
}
