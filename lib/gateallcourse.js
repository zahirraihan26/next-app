export default async function getAllcourse() {
    const result = await fetch('https://my-fast-next-server.vercel.app/courses');
    return result.json();
}