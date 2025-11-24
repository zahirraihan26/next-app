export default async function getAllcourse() {
    const result = await fetch('https://movie-master-pro-server-tau.vercel.app/movies');
    return result.json(); 
}