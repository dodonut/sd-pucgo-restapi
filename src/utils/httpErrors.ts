export abstract class HTTPClientError extends Error {
  readonly statusCode!: number;
  readonly name!: string;

  constructor(message: object | string) {
    if (message instanceof Object) {
      super(JSON.stringify(message));
    } else {
      super(message);
    }
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class HTTP422Error extends HTTPClientError {
  readonly statusCode = 422;

  constructor() {
    super({
      "code": "84689",
      "type": "Unprocessable entity",
      "message": "One or more request parameters are invalid."
    });
  }
}

export class HTTP400Error extends HTTPClientError {
  readonly statusCode = 400;

  constructor() {
    super({
      "code": "87566",
      "type": "Bad Request",
      "message": "Could not process request"
    });
  }
}

export class HTTP401Error extends HTTPClientError {
  readonly statusCode = 401;

  constructor(message: string | object = 'Unauthorized') {
    super(message);
  }
}

export class HTTP403Error extends HTTPClientError {
  readonly statusCode = 403;

  constructor(message: string | object = 'Forbidden') {
    super(message);
  }
}

export class HTTP404Error extends HTTPClientError {
  readonly statusCode = 404;

  constructor() {
    super({
      "code": "87566",
      "type": "Not Found",
      "message": "Item does not exist on database."
    });
  }
}
export class HTTP500Error extends HTTPClientError {
  readonly statusCode = 500;

  constructor() {
    super({
      "code": "45521",
      "type": "Internal server error",
      "message": "Could not retrieve data."
    });
  }
}