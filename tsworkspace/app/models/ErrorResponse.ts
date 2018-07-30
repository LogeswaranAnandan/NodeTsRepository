export class ErrorResponse {
    private errorKey: string;
    private errorMessage: string;
    
    constructor(errorKey: string, errorMessage: string) {
        this.errorKey = errorKey;
        this.errorMessage = errorMessage;
    }
}