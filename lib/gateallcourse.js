export default async function getAllcourse() {
    const result = await fetch('http://localhost:5000/courses');
    return result.json(); 
}