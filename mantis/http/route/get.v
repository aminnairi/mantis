module route

import mantis.http { Route }

pub fn get(parameters Route) Route {
    return Route{
        ...parameters
        method: .get
    }
}
