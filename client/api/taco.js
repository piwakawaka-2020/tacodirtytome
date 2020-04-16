import request from 'superagent'

export function getRandomTaco() {
    return request
        .get('http://taco-randomizer.herokuapp.com/random/')
        .then(res => res.body)
}

export function getRandomFullTaco() {
    return request
        .get('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
        .then(res => res.body)
}