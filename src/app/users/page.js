import Link from "next/link";
import getUsers from "../../../services/getUsers";

export default async function Page() {
  const getUserslist = getUsers();
  const users = await getUserslist;
  console.log(users);

  return (
    <div>
      <h1>users</h1>
      {users.map((item) => (
        <div key={item.id}>
          <Link href={`/users/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
