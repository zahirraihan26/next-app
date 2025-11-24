export default async function postCourse() {
  const res = await fetch(`http://localhost:5000/courses`);
  const data = await res.json();
  return data;
}