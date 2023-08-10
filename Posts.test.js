//автоматизация тест-кейсов для https://jsonplaceholder.typicode.com/ 
//попытка структурировать тесты в один файл разделив по describe-ам.
//сильно в код не углублялся, цель - правильно понять подход и логику. 
const fetch = require('node-fetch');

describe()
    beforeAll() 
        pass

describe('Тестирование API запросов для постов', () => {
    describe('Корректные запросы', () => {
        it('Получение списка постов', async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await responce.json()
        
        expect(responce.status).toBe(200)
        expect(Array.isArray(data)).toBe(true)
        expect(data.length).toBeGreaterThan(0)

        // проверка наличия нужных полей
        const post = data[0]
        expect(post).toHaveProperty('userId')
        expect(post).toHaveProperty('id')
        expect(post).toHaveProperty('title')
        expect(post).toHaveProperty('body')
        });

        it('запрос на конкретный пост', async () => {
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts/7');
            const post = await responce.json();
    
            expect(responce.status).toBe(200);
    
            expect(post).toHaveProperty('userId')
            expect(post).toHaveProperty('id')
            expect(post).toHaveProperty('title')
            expect(post).toHaveProperty('body')
            // проверяем соответствие запрашиваемого и получаемого ID
            const expectedId = 7
            expect(post.id).toBe(expectedId)
            
        });
        it('получение списка комментариев к посту', async () => {
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts/7/comments')
            const post = await responce.json();
            expect(responce.status).toBe(200);
            const expectedId = 7
            //отошел от письменного кейса, проверяю только postId
            expect(post.id).toBe(expectedId)
            
        })
    });

    describe('Некорректные запросы', () => {
        it('Попытка получить несуществующий пост', async () => {
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts/79932');
            const post = await responce.json();
            expect(responce.status).toBe(404);
        });
        it('невалидный данные', async () => {
            const invalidPost = {
                // Не указываем обязательные поля, чтобы получить ошибку 400
            };
        
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(invalidPost)
            };
        
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
            expect(response.status).toBe(400);
            //возможно, ошибку он выдаст другую, сайт для этого не предназначен
            //все равно все тесты проваливаются))
        });

        
    });
});

describe('Тестирование API запросов для пользователей', () => {
    describe('Корректные запросы', () => {
        // Тесты на корректные запросы к пользователям
    });

    describe('Некорректные запросы', () => {
        // Тесты на некорректные запросы к пользователям
    });
});

describe()
    afterAll()
        pass


