export default class HttpResponse {
    constructor(success = false, data = null) {
        this.success = success;
        this.data = data;
    }
}