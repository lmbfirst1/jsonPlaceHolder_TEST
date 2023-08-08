const fetch = require('node-fetch');

test(
    'проверяем конкретный пост',
    async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts/7');
        const post = await responce.json();

        expect(responce.status).toBe(200);

        expect(post).toHaveProperty('userId')
        expect(post).toHaveProperty('id')
        expect(post).toHaveProperty('title')
        expect(post).toHaveProperty('body')

        const expectedId = 7
        expect(post.id).toBe(expectedId)
        
    }
)