const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');


test.describe('TS01 - Login', async () => {


    test('TC001 - Login with valid credentials', async ({page}) => {
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
<<<<<<< HEAD
        await loginpage.enterTheCredentials('raaja', 'Raaja@12345');
=======
        await loginpage.enterTheCredentials('raaja', 'Raaja@123');
>>>>>>> 6a4323d98db8c0407252a66f21e87b969c8a91af
    })

    test('TC002 - Login with Invalid UserName', async ({page}) => {
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('raaja', 'Atcoperator@123');
        await loginpage.validationMessage('Invalid Username or Password');
    })

    test('TC003 - Login with valid Password', async ({page}) => {
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('atcOperator', 'Atcoper@3');
        await loginpage.validationMessage('Invalid Username or Password');
    })

    test('TC004 - Login without credentials', async ({page}) => {
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('', '');
        await loginpage.fieldvalidationErrorMessage('Enter username');
    })




});