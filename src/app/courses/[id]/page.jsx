import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}

// export default async function DetailPage({ params }) {

//     const { _id } = params

//     const res = await fetch(`https://movie-master-pro-server-tau.vercel.app/movies/${_id}`);
//     const data = await res.json();

//     console.log(data)

//     return (
//         <div>
//             <h2>Details</h2>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//     )
// }
