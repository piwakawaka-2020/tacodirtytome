import request from 'superagent'

export function getAllTacos() {
    return request.get('v1/taco')
        .then(req => {
            return req.body
        })
}

export function addTaco(taco) {
    return request.post('/v1/taco')
    .post(taco)
    .then(req => {
        return req.body
    })
}

export function getTacoById(id) {
    return request.get('/v1/taco/' + id)
    .then(req => {
        return req.body
    })
}


