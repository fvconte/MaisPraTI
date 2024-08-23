function showFunction(successCalback, errorCallback) {
    if(true) {
        successCallback("Requisição bem sucedida")
    } else {
        errorCallback('Erro na requisição')
    }
}

let successCallback = function(message) {
    console.log(message)
}

let errorCallback = (message) => {
    console.log(message)
}

showFunction(successCallback, errorCallback)