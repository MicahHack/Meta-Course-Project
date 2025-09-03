import { httpGet } from './../services/HttpService';

export async function getIpv4Country() {
    // Retrieve all IP information and extract country string if fetch status is successful
    const response = await httpGet("https://free.freeipapi.com/api/json/");
    if (response.success) {
        let ipApiCountry = response.data.countryName;
        if (ipApiCountry.length > 0) {
            return ipApiCountry;
        }
        else {
            return null;
        }
    }
    return null;
}
