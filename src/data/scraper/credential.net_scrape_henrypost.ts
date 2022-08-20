//https://www.credly.com/users/henry-post/badges?sort=most_popular&page=1

export async function getThatCredentialDotNetData() {
    const url = 'https://api.accredible.com/v1/credential-net/users/henrypost/user_wallet'

    var resp = await fetch(url)


    var data = await resp.json()

    console.log(url + ' data')
    console.log(data)

    return data
}