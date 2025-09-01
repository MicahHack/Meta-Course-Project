import { httpGet } from './../services/HttpService';
import HttpResponse from './../models/HttpResponse';

export async function getIpv4Country() {
    try {
        // Retrieve all IP information and extract country string if fetch status is successful
        const response = await httpGet("http://ip-api.com/json");
        if (response.success) {
            let ipApiStatus = response.data.status;
            if (ipApiStatus === "success") {
                return response;
            }
            else {
                return new HttpResponse(false, null);
            }
        }
        return new HttpResponse(false, null);
    }
    catch (error) {
        return new HttpResponse(false, error);
    }
}