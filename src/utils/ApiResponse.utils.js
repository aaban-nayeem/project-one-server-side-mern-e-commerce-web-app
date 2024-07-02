class ApiResponse {
  constructor(statusCode, date, message = "Successfully respond") {
    this.statusCode = statusCode;
    this.date = date;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
