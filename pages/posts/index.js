import React from 'react'
import Link from 'next/link'

export default function Posts({ userName }) {
    return (
        <div>
            <h1>POSTS to {userName}</h1>
            <Link href="/"><a>Go Home</a></Link>
        </div>
    )
}

Posts.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(response => response.json())
        .then(response => {
            console.log('response', response)
            const { name } = response;
            return { userName: name }
        });
} 