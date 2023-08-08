const fetch = require('node-fetch');

test('получение списка постов',
    async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await responce.json()

        expect(responce.status).toBe(200)
        expect(Array.isArray(data)).toBe(true)
        expect(data.length).toBeGreaterThan(0)

        const post = data[0]
        expect(post).toHaveProperty('userId')
        expect(post).toHaveProperty('id')
        expect(post).toHaveProperty('title')
        expect(post).toHaveProperty('body')
        
    })