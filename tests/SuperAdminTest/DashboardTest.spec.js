const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');
const { DashboardPage } = require('../../SuperAdminPages/DashboardPage');

let context;
let page;

test.describe.serial('TS01 - Login', async () => {

    test.beforeAll('Dashboard Module', async ({ browser }) => {
        context = await browser.newContext({
            viewport: { width: 1200, height: 600 },
            geolocation: { latitude: 12.939965304673995, longitude: 80.11990807936198 },
            permissions: ['geolocation'],
        })

        page = await context.newPage();
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('atcOperator', 'Atcoperator@123');
        await page.waitForTimeout(2000);
    })

    test('TC001 - Navigate to Dashboard', async () => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.navigateToDashboard();
        await page.waitForTimeout(2000);

    })

    test('TC002 - get job and booking details', async () => {
        const dashboardPage = new DashboardPage(page);
        const job = await dashboardPage.getNoOfJobsDetails();
        const booking = await dashboardPage.getNoOfBookingDetails();
        console.log(job, booking);
        await page.waitForTimeout(2000);

    })

    test('TC003 - add adoc SIC or TSIC with Internal vehicle', async () => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.clickAddAdhocBtn();
        await dashboardPage.clickCancelBtn();
        await dashboardPage.clickAddAdhocBtn();
        await dashboardPage.addAdhocTripSIC("Tour", "Akr", "917094755345", "2", "1", "123", "SIC", "sento", "Test Tour", "Tn123");
        await dashboardPage.clickSaveBtn();
        await page.waitForTimeout(2000)
        await dashboardPage.toastMessage("Adhoc booking added successfully");
        await page.waitForTimeout(2000);
    })

    test('TC004 - add adoc SIC or TSIC with External vehicle', async () => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.clickAddAdhocBtn();
        await dashboardPage.addAdhocTripTSIC("Tour", "Akr", "917094755345", "2", "1", "123", "SIC", "sentosa", "Test Tour", "Tn12345", "abilash", "62346234", "2");
        await dashboardPage.clickCancelBtn();
        await page.waitForTimeout(2000);
    })

    test('TC005 - View and get the tour details', async () => {
        const dashboardPage = new DashboardPage(page);

        
        await dashboardPage.searchValue("raja");
        await page.waitForTimeout(1000);
        await dashboardPage.clickViewBtn();
        const value = await dashboardPage.printBookingDetails();
        console.log(value);
        await dashboardPage.clickBackBtn();

    })

})