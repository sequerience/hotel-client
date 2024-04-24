export async function registerUser(data: any){ // функция регистрации 
    // Отправляем POST-запрос на URL вашего API 
    return fetch('http://localhost:8000/users/signup', { 
        method: 'POST', // Указываем метод запроса 
        headers: { 
        'Content-Type': 'application/json' // Устанавливаем заголовок Content-Type для указания типа данных 
        }, 
        body: JSON.stringify(data) // Преобразуем данные в формат JSON и передаем в теле запроса 
    }) 
    .then(response => { 
        if (!response.ok) { 
        throw new Error('Ошибка сети или сервера'); 
        } 
        return response.json(); // Парсим ответ сервера в формате JSON 
    }) 
    .then(data => { 
        return data;
    }) 
    .catch(error => { 
        console.error(error); // Обрабатываем ошибки 
    });
}


export async function loginUser(data: any) {
        // Отправляем POST-запрос на URL вашего API 
        return fetch('http://localhost:8000/users/login', { 
            method: 'POST', // Указываем метод запроса 
            headers: { 
            'Content-Type': 'application/json' // Устанавливаем заголовок Content-Type для указания типа данных 
            }, 
            body: JSON.stringify(data) // Преобразуем данные в формат JSON и передаем в теле запроса 
        }) 
        .then(response => { 
            if (!response.ok) { 
            throw new Error('Ошибка сети или сервера'); 
            } 
            return response.json(); // Парсим ответ сервера в формате JSON 
        }) 
        .then(data => { 
            return data;
        }) 
        .catch(error => { 
            console.error(error); // Обрабатываем ошибки 
        });
}


export async function loginCheckUser(data: any) {

}