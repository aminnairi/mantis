module http

import mantis.console

pub struct ErrorHandler {
    pub:
        report fn(app App, err IError)
        render fn(app App, err IError) Response
}

pub fn default_error_handler() ErrorHandler {
    return ErrorHandler{
        report: fn (app App, err IError) {
            console.error(err.msg())
        }
        render: fn (app App, err IError) Response {
            accept := app.request.headers['Accept'] or { ['text/html'] }

            status := match err {
                HttpError { err.code }
                else { Status.server_error }
            }

            if accept[0].contains('application/json') {
                return Response{
                    content: ''
                    status: status
                    headers: {
                        'Content-Type': ['application/json']
                    }
                }
            }

            return Response{
                content: ''
                status: status
                headers: {
                    'Content-Type': ['text/html']
                }
            }
        }
    }
}
