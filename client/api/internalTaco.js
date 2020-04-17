import request from 'superagent'

export function getAllTacos() {
    return request.get('/v1/taco')
        .then(res => {
            return res.body
        })
}

export function addTaco(taco) {
    return request.post('/v1/taco')

    .send(taco)
    .then(res => {
        return res.body
    })
}

export function getTacoById(id) {
    return request.get('/v1/taco/' + id)
    .then(res => {
        return res.body
    })
}


