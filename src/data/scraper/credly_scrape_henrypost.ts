//https://www.credly.com/users/henry-post/badges?sort=most_popular&page=1


//TODO: damn you CORS!!!! But I can still just copy the JSON from the response.
export async function getThatCredlyData() {
    const url = 'https://www.credly.com/users/henry-post/badges?sort=most_popular&page=1'

    var resp = await fetch(url, {mode: 'no-cors'})


    var data = await resp.json()

    console.log('credly data:')
    console.log(data)

    return data
}