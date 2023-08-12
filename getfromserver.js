
let button = document.querySelector('#button')
const divResponse = document.querySelector('#response')

function serverRequest (method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
  }


button1.onclick = () => {
    serverRequest('GET', '//localhost:3000/test')
    .then(result=>{
        displayTest(result)
    })
    .catch(err=>{
        console.error(err.statusText)
    })
}

button2.onclick = () => {
    serverRequest('GET', '//localhost:3000/test2')
    .then(result=>{
        displayTest(result)
    })
    .catch(err=>{
        console.error(err.statusText)
    })
}

function displayTest(result) {
    divResponse.innerText = "";
    resultJSON = JSON.parse(result)
    //console.table(resultJSON)
    stringProps = ""
    Object.getOwnPropertyNames(resultJSON[0]).forEach(property=>{
        stringProps += property+','
    })
    stringProps = stringProps.substring(0, stringProps.length-1)
    divResponse.append('['+stringProps+']')
    divResponse.append(document.createElement('br'))
    divResponse.append(document.createElement('br'))
    resultJSON.forEach(item=>{
        itemString = ""
        Object.getOwnPropertyNames(item).forEach(property=>{
            itemString += item[property] + ','
        })
        itemString = itemString.substring(0, itemString.length-1)
        divResponse.append(itemString)
        divResponse.append(document.createElement('br'))
    })
}