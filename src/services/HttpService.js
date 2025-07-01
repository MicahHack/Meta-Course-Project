export async function httpGet(url)  {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

export async function httpPost(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    let responseData = await response.json();
    return responseData;
}