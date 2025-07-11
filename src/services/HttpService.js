import HttpResponse from "../models/HttpResponse";

export async function httpGet(url) {
    const abortController = new AbortController();
    let timeoutSignal = setTimeout(() => {
        abortController.abort();
    }, 5000);
    try {
        let response = await fetch(url, { signal: abortController.signal });
        clearTimeout(timeoutSignal);
        if (response.ok) {
            let data = await response.json();
            let returnData = new HttpResponse(true, data);
            return returnData;
        }
        else {
            return new HttpResponse(false, null);
        }
    }
    catch (error) {
        let response = new HttpResponse(false, error);
        return response;
    }
}

// httpPost function not updated to use HttpResponse class as function exists simply as a guideline if required in the future.
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