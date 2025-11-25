export default async function postCourse() {
  const res = await fetch(`https://my-fast-next-server.vercel.app/courses`);
  const data = await res.json();
  return data;
}