import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData();
    return (
        <div className='flex flex-wrap justify-center gap-3'>
            <div>
                Github Followers : {data.followers}
            </div>
            <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}
export default GitHub;

export const getGithubInfo = async() => {
    const response = await fetch('https://api.github.com/users/harish-bendale');
    return response.json();
}