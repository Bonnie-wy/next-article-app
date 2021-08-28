import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const article = ({ article }) => {
    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    )

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}
export const getStaticPaths = async () => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
    )

    const articles = await res.json()

    // to get this object id in string paths 
    // {params: {id: '1', id: '2'}}
    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}) )

    return {
        paths,
        fallback: false
        
    }
}

export default article


// import {useRouter} from 'next/router'

// const article = () => {
//     const router = useRouter()
//     const {id} = router.query
//     return (
//         <div>
//             This is an article {id}
//         </div>
//     )
// }

// export default article