// Functional middleware

export function ExceptionMiddleware(req, res, next) {
    console.log('exception-middleware');
    next();
}
