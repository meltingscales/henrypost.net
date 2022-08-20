//https://www.credly.com/users/henry-post/badges?sort=most_popular&page=1

export async function getThatCredlyData() {
    const url = 'https://www.credly.com/users/henry-post/badges?sort=most_popular&page=1'

    var resp = await fetch(url)


    var data = await resp.json()

    console.log('credly data:')
    console.log(data)

    return data
}

await getThatCredlyData()