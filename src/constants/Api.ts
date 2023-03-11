const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

const Api = {
    // Authentication & Authorization
    auth: {
        login: {
            method: METHOD.POST,
            url: 'auth/local',
            dontNeedToken: true,
        },
    },

    // Home
    home: {},
}
export default Api
