import { test, expect } from '@playwright/test';

test('API GET', async ({request}) => {
   
    // Make a GET request   
    const response = await request.get('https://restful-booker.herokuapp.com/booking')

   // Assert that the response status is 200
    expect(response.status()).toBe(200);

   // Check the response body as JSON
    const responseBody = await response.json();

   // Log the response body to the console
    console.log(responseBody);
    console.log(JSON.stringify(responseBody, null, 2));

});