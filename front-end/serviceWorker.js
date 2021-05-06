
onmessage = ({data}) => {
    const wsConnection = new WebSocket("ws://localhost:8888");

    // web socket
    wsConnection.onopen = function() {
        postMessage({hint: 'Соединение установлено'});
    };

    wsConnection.onclose = function(event) {
        if (event.wasClean) {
            postMessage({hint: 'Соединение закрыто чисто'});
        } else {
            // например, "убит" процесс сервера
            postMessage({hint: 'Обрыв соединения'});
        }
        postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
    };

    wsConnection.onmessage = evt => {
        // отправляем сообщение в основной поток
        postMessage({message: evt.data});
    }

    wsConnection.onerror = function(error) {
        postMessage({error: "Ошибка " + error.message});
    };
};

var self = this;
const workercode = () => {
    self.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };
    
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;








self.addEventListener('message', ({data}) => {
    const wsConnection = new WebSocket("ws://localhost:8888");

    // web socket
    wsConnection.onopen = function() {
        postMessage({hint: 'Соединение установлено'});
    };

    wsConnection.onclose = function(event) {
        if (event.wasClean) {
            postMessage({hint: 'Соединение закрыто чисто'});
        } else {
            // например, "убит" процесс сервера
            postMessage({hint: 'Обрыв соединения'});
        }
        postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
    };

    wsConnection.onmessage = evt => {
        // отправляем сообщение в основной поток
        postMessage({message: evt.data});
    }

    wsConnection.onerror = function(error) {
        postMessage({error: "Ошибка " + error.message});
    };
});
    









this.serviceWorker.addEventListener('message', ({data}) => {
    const wsConnection = new WebSocket("ws://localhost:8888");

    // web socket
    wsConnection.onopen = function() {
        postMessage({hint: 'Соединение установлено'});
    };

    wsConnection.onclose = function(event) {
        if (event.wasClean) {
            postMessage({hint: 'Соединение закрыто чисто'});
        } else {
            // например, "убит" процесс сервера
            postMessage({hint: 'Обрыв соединения'});
        }
        postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
    };

    wsConnection.onmessage = evt => {
        // отправляем сообщение в основной поток
        postMessage({message: evt.data});
    }

    wsConnection.onerror = function(error) {
        postMessage({error: "Ошибка " + error.message});
    };
});
    









console.log('sss');

navigator.serviceWorker.addEventListener('message', ({data}) => {
    const wsConnection = new WebSocket("ws://localhost:8888");

    // web socket
    wsConnection.onopen = function() {
        postMessage({hint: 'Соединение установлено'});
    };

    wsConnection.onclose = function(event) {
        if (event.wasClean) {
            postMessage({hint: 'Соединение закрыто чисто'});
        } else {
            // например, "убит" процесс сервера
            postMessage({hint: 'Обрыв соединения'});
        }
        postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
    };

    wsConnection.onmessage = evt => {
        // отправляем сообщение в основной поток
        postMessage({message: evt.data});
    }

    wsConnection.onerror = function(error) {
        postMessage({error: "Ошибка " + error.message});
    };
});
    









self.addEventListener('install', (e) => {
    console.log('worker installed');
})


//var self = this;
const workercode = () => {
    self.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };
    
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;








self.addEventListener('install', (e) => {
    console.log('worker installed');
})










self.addEventListenet('install', () => {
    console.log('install');
})

var self = this;
const workercode = () => {
    self.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };
    
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;








var self = this;
const workercode = () => {
    self.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };
    
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;








onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };

/*var self = this;
const workercode = () => {
    self.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };
    
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;

*/





this.addEventListener('install', function(event) {
    // event.waitUntil принимает промис для того, чтобы узнать,
    // сколько времени займёт установка, и успешно
    // или нет она завершилась.
    console.log('sss');
  });




onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };

/*var self = this;
const workercode = () => {
    self.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };
    
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;

*/





navigator.serviceWorker.addEventListener('install', function(event) {
    // event.waitUntil принимает промис для того, чтобы узнать,
    // сколько времени займёт установка, и успешно
    // или нет она завершилась.
    console.log('sss');
  });




  navigator.serviceWorker.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };

/*var self = this;
const workercode = () => {
    self.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };
    
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;

*/





navigator.serviceWorker.addEventListener('install', function(event) {
    // event.waitUntil принимает промис для того, чтобы узнать,
    // сколько времени займёт установка, и успешно
    // или нет она завершилась.
    console.log('sss');
  });




  navigator.serviceWorker.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };

/*var self = this;
const workercode = () => {
    self.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };
    
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;

*/





navigator.serviceWorker.addEventListener('install', function(event) {
    // event.waitUntil принимает промис для того, чтобы узнать,
    // сколько времени займёт установка, и успешно
    // или нет она завершилась.
    console.log('sss');
  });




  navigator.serviceWorker.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };

/*var self = this;
const workercode = () => {
    self.onmessage = ({data}) => {
        const wsConnection = new WebSocket("ws://localhost:8888");
    
        // web socket
        wsConnection.onopen = function() {
            postMessage({hint: 'Соединение установлено'});
        };
    
        wsConnection.onclose = function(event) {
            if (event.wasClean) {
                postMessage({hint: 'Соединение закрыто чисто'});
            } else {
                // например, "убит" процесс сервера
                postMessage({hint: 'Обрыв соединения'});
            }
            postMessage({hint: 'Код: ' + event.code + ' причина: ' + event.reason});
        };
    
        wsConnection.onmessage = evt => {
            // отправляем сообщение в основной поток
            postMessage({message: evt.data});
        }
    
        wsConnection.onerror = function(error) {
            postMessage({error: "Ошибка " + error.message});
        };
    };
    
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

module.exports = worker_script;

*/





