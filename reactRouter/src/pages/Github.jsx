// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
function Github() {
    const data = useLoaderData()

    // useEffect(() => {
    //     fetch("https://api.github.com/users/yashgarg05")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <>
            <div className="text-center m-4 bg-amber-400 text-white p-4 text-4xl">
                Github followers: {data.followers}
            </div>
            <img src={data.avatar_url} alt="Avatar" width="200" height="200" />
        </>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/yashgarg05")
    return response.json()
}