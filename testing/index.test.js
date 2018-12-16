const fetch = require('node-fetch');
const url = 'http://localhost:3000';

test('test stupido', () => {
    expect(1).toBe(1);
});

describe('Test for index', () => {
    // two test -> right 200 and also false 400 error in call
    test('200 ok' , () => {
        expect.assertions(1);
        return fetch(url + '/').then(res => {
            expect(res.status).toBe(200);
        });
    });

    test('200 ok' , () => {
        expect.assertions(2);
        return fetch(url + '/getArea?side1=3&side2=5').then(async res => {
            expect(res.status).toBe(200);
            let returned = await res.json();
            expect(returned).toEqual({'area': 15});
        });
    });

    test('400 error' , () => {
        expect.assertions(2);
        return fetch(url + '/getArea?side1=3&side2=ciao').then(async res => {
            expect(res.status).toBe(400);
            let returned = await res.json();
            expect(returned).toEqual({'area': -1});
        });
    });
});