import getUsers from "../../../../services/getUsers";

export default async function Page(props) {
  const getUserslist = getUsers();
  const users = await getUserslist;
  const currentId = props.params.userId;
  const userDetails = users[currentId - 1];
  // console.log(users[currentId - 1]);

  return (
    <div>
      <h1>Welcome to the users page</h1>
      <p>{currentId}</p>
      <p>{userDetails.name}</p>
      <p>{userDetails.email}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const getUserslist = getUsers();
  const users = await getUserslist;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
