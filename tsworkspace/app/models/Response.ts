export class Response {
    public responseCode: number;
    public responseBody: any;

    constructor() {
        this.responseCode = 200;
        this.responseBody = null;
    }

    setResponseCode(responseCode: number) {
        this.responseCode = responseCode;
    }

    setResponseBody(body: any) {
        this.responseBody = body;
    }
}