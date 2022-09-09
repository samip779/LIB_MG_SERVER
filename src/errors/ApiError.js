class ApiError extends Error {
  constructor(message, name, code) {
    super(message);
    this.message = message;
    this.name = name;
    this.code = code;
  }

  static badRequest(message) {
    return new ApiError(message, "BAD_REQUEST", 400);
  }

  static internal(message) {
    return new ApiError(message, "INTERNAL", 500);
  }
}

export default ApiError;
