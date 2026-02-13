const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../SuperAdminPages/LoginPage');
const {SummaryPage } = require('../../SuperAdminPages/SummaryPage');
const {ExcelReader} = require ('../../Utils/ExcelReader');

let context;
let page;

test.describe('TS_006', async()=>{
    test.beforeAll('Tour Module', async({browser})=>{
        context = await browser.newContext({
        viewport: { width: 1200, height: 600},
    });

        page = await context.newPage();
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('atcOperator', 'Atcoperator@123');
    })

    test('TC001 - Verify that the Summary screen loads successfully', async()=>{
        const summarypage = new SummaryPage(page);
        await summarypage.SummaryScreen();
    })



});



/*
test.describe.serial('TS01 - Login', async () => {

    test('TC001 - Bookings Module', async ({ browser }) => {
        context = await browser.newContext({
            viewport: { width: 1200, height: 600 },
            geolocation: { latitude: 12.939965304673995, longitude: 80.11990807936198 },
            permissions: ['geolocation'],
        })
        page = await context.newPage();
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('atcOperator', 'Atcoperator@123');
    })

    test('TC002 - Navigate to Bookings', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx", "Summary");
        const { Filter } = summarydata[0];
        await  summaryPage.SummaryModule(Filter);
    })

    test('TC03 - Clear button ', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.clearfilter();
})

 test.skip('TC04 - Apply filter button ', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.Applyfilter();
})

test('TC05 - click  Schedule or Reschedule ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx", "Summary");
        const {ScheduleButton} = summarydata[0];  //0-Schedule  1-Reschedule     
         await summaryPage.ScheduleModule(ScheduleButton);
})
test.skip('TC06 - Click view schudel button', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.ViewSchedulebutton();
})
test('TC07 - click  Tab', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
         const {Tab} = summarydata[1]; //0-sic,1-tsic,2-Pvt,3-grp
        await summaryPage.selectTab(Tab);
})
test('TC08 - Search', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
         const {Search} = summarydata[1]; 
        await summaryPage.searchthedetails(Search);
})
test('TC09 - Tour ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
        const {TourName} = summarydata[0];
        await summaryPage.Tour(TourName);
})

test('TC10 -  Vehicle  ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
        const {Coaches,View} = summarydata[0];
        await summaryPage.Vehicle(Coaches,View);
})
test('TC11 - After Schedule (Add External Vehicle) ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary");
        const {Switch} = summarydata[1];//0-sic,1-tsic,2-Pvt,3-grp,4-Transfer
        const {VehicleNumber,Seating,Drivername,ContactNumber} = summarydata[0];
        await summaryPage.AddExternalVehicle(Switch,VehicleNumber,Seating,Drivername,ContactNumber);
})

 test.skip('TC012 - close the add extenal vehicale tab ', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.closevehicle();
})
test('TC13 - Guide ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary"); 
        const {GuideName,GuideContact,HotelName} = summarydata[0];
        await summaryPage.guide(GuideName,GuideContact,HotelName);

})
 test.skip('TC14 - Guide close', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.closeGuide();
})

 test('TC15 - Click Save button ', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.clickSave_Final();
})
test.skip('TC16 - Click Save No ', async () => {
        const summaryPage = new SummaryPage(page);
        await summaryPage.clickSave_Yes();
        await summaryPage.clickviewShedule_save();
})
test('TC17 - Suggestion ', async () => {
        const summaryPage = new SummaryPage(page);
        const excelReader = new ExcelReader();
        const summarydata = await excelReader.readExcel("C:/Users/TamilselviArul/Downloads/Autoplannerdata.xlsx", "Summary"); 
        const {SuggestSearch} = summarydata[0];
        await summaryPage.suggestion(SuggestSearch);
})
})

*/