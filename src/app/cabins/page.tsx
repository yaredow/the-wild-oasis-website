export default async function page() {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await result.json();
  console.log(users);

  return (
    <div className=' flex items-center justify-center flex-col gap-4'>
      <h1>List of dummy users</h1>
      <ul className='flex flex-col gap-2 list-disc'>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
