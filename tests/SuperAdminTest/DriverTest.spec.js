/*Objective: To Verify Driver Module of Yaantrac Web Application
Author: Vighnesh J
Created by: Vighnesh J
Created date: 26/08/2025
Objective of the Update: Nil
Updated by: Nil
Updated date: Nil
Application version/Env: Dev v2 Env
Remarks: nil */

const { test,expect } = require ('@playwright/test');
const { LoginPage } = require ('../../SuperAdminPages/LoginPage');
const {DriverPage} = require ('../../SuperAdminPages/DriverPage');

let page;
let context;

test.describe('TS03', async()=>{

    test.beforeAll('Reports Module', async({browser})=>{
        context = await browser.newContext({
            //viewport: { width: 1280, height: 720 },
            geolocation: {latitude: 12.939965304673995, longitude: 80.11990807936198},
            permissions: ['geolocation'],
    });
        page = await context.newPage();
        const loginpage = new LoginPage(page);
        await loginpage.LaunchUrl('https://dev-v2.yaantrac.com/');
        await loginpage.enterTheCredentials('atcOperator', 'Atcoperator@123');
    });

test("TC001 - Verify application opens and closes the Add Driver Box", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)
    
    //Select the Management option in side navbar 
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Close the Add Driver box
    await driverPage.CloseAddDriver()
    
})

test("TC002 - Verify application does not save Driver with empty fields", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)
    
    //Select the Management option in side navbar 
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Enter the Add Driver button without entering any mandatory fields
    await driverPage.SubmitButton()

    //Close the Add Driver box
    await driverPage.CloseAddDriver()
    await page.waitForTimeout(2000)

})

test("TC003 - Verify Mandatory fields have asterick symbol across their name", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)
    
    //Select the Management option in side navbar 
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    // Click to open the dialog
    await driverPage.clickDialog();

    // Verify all mandatory fields
    await driverPage.verifyMandatoryFields();
    await driverPage.CloseAddDriver()

})

test("TC004 - Verify Application opens the Update Driver Details under the Action column", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    await driverPage.Editoption()
    await driverPage.CloseAddDriver()
    
})

test("TC005 - Verify Rows per page option changes and displays number of data correctly", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //Change and verify number of rows
    await driverPage.changeAndVerifyRows(5)
    await driverPage.changeAndVerifyRows(10)

})

test("TC006 - Verify pagenation button works properly", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //Select 5 Rows per Page option
    await driverPage.selectRowsPerPage(5)

    //Navigate to Next Page
    await driverPage.Nextpage()
        
    //Verify whether 5 rows are only there after navigating
    await driverPage.verifyRowCount(5)

    //Navigate to Previous Page
    await driverPage.Previouspage()
        
    //Verify whether 5 rows are only there after navigating
    await driverPage.verifyRowCount(5)

    //Navigate to a Page by Seleting the Page Number
    await driverPage.goToPage(3)
    await page.waitForTimeout(3000)

    //Verify whether 5 rows are only there after navigating
    await driverPage.verifyRowCount(5)
    
})

test("TC007 - Verify user can access and view the Availability of the driver", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //Click the Availability button to view the Driver availability time
    await driverPage.DriverAvailabilityBox()

    // Hover so scroll applies to this container
    await driverPage.AvailabilityBoxNavigation()

    //Close the Availability box
    await driverPage.CloseAvailabilitybox()

})

test("TC008 - Verify Deactivate button works correctly ", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //Select Deactivate option
    await driverPage.Deactivateoption()

    //Select 'No' option in the Deactivate box
    await driverPage.NotButton()

})

test("TC009 - Verify Delete button works correctly ", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //Select Delete option
    await driverPage.Deleteoption()

    //Select 'No' option in the Delete box
    await driverPage.NotButton()

})

test("TC010 - Verify User can upload the License Document and number changes correctly", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Image file path
    const filePath = 'C:/Users/JV/Desktop/Playwright/screenshot.png';

    //Upload the image from the path
    await driverPage.Licuploadfile(filePath)

    const fileCount = page.locator('div.file-count', {hasText: '1'})
    await expect(fileCount).toHaveText('1')
    await driverPage.CloseAddDriver()

})


test("TC011 - Verify User can view and delete the uploaded License Document under Add Driver Box", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Image file path
    const filePath = 'C:/Users/JV/Desktop/Playwright/screenshot.png';

    //Upload the image from the path
    await driverPage.Licuploadfile(filePath)

    //Delete the uploaded document file
    await driverPage.Deleteuploadimage()
    await driverPage.CloseAddDriver()

})

test("TC012 - Verify user can upload,delete Insurance document and the number icon changes correctly", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Image file path
    const filePath = 'C:/Users/JV/Desktop/Playwright/screenshot.png';

    //Upload the image from the path
    await driverPage.Insuploadfile(filePath)

    const fileCount = page.locator('div.file-count', {hasText: '1'})
    await expect(fileCount).toHaveText('1')

    await driverPage.Deleteuploadimage()
    await driverPage.CloseAddDriver()

})

test("TC013 - Verify user can upload,delete Medical document and the number icon changes correctly", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Image file path
    const filePath = 'C:/Users/JV/Desktop/Playwright/screenshot.png';

    //Upload the image from the path
    await driverPage.Meduploadfile(filePath)

    const fileCount = page.locator('div.file-count', {hasText: '1'})
    await expect(fileCount).toHaveText('1')

    await driverPage.Deleteuploadimage()
    await driverPage.CloseAddDriver()

})


test("TC014 - Verify User can view uploaded Documents under Action column", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    await driverPage.ViewDocumentsOption()
    await DriverPage.Closeimage()

})

test("TC015 - Verify User can open Uploaded Document in a separate tab and navigate back", async () => { 

    // POM instances
    const driverPage = new DriverPage(page)

    // Select Management option
    await driverPage.clickManagement()

    // View document from kebab menu
    await driverPage.ViewDocumentsOption()

    // Open document in new tab and close it
    await driverPage.Newtabopenclose()

    // Close the document viewer page
    await driverPage.Closeimage()

})

test("TC016 - Verify User can enter all Expiry date manually in correct format", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    // Enter all Expiry date field
    await driverPage.LicExpirydate('28/10/2026')
    await driverPage.InsExpirydate('15/02/2028')
    await driverPage.MedExpirydate('07/05/2027')
    await driverPage.CloseAddDriver()

})

test("TC017 - Verify User can select All Expiry date from Calendar icon", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    // Select License, Insurance and Medical Expiry date field from Calendar
    await driverPage.LicselectDate('17')
    await driverPage.InsselectDate('21')
    await driverPage.MedselectDate('26')
    await driverPage.CloseAddDriver()

})

test("TC018 - Verify when user enters past date, application should display correct error message", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    // Enter Past License, Insuance and Medical Expiry date 
    await driverPage.LicExpirydate('23/11/2024')
    await driverPage.InsExpirydate('15/02/2023')
    await driverPage.MedExpirydate('07/05/2024')

    //Verify Error message for past date
    await driverPage.LicenseErrormsg()
    await driverPage.CloseAddDriver()

})

test("TC019 - Verify input in password and confirm password field is hidden by default", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    await driverPage.DriverPwd('Demo@12345!')
    await driverPage.DriverConfirmPwd('Demo@12345')
    await driverPage.CloseAddDriver()

})

test("TC020 - Verify when user clicks Eye Icon in password fields, entered password should be visible", async () => {     

    //Login with valid credentials
    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    await driverPage.DriverPwd('Demo@12345!')
    await driverPage.DriverConfirmPwd('Demo@123')

    // Verify the value is actually stored, but masked on UI
    await driverPage.DriverpwdEye()
    await driverPage.DriverConfirmpwdEye()
    await driverPage.CloseAddDriver()

})

test("TC021 - Verify maximum input limit matches correctly in the password field", async () => {     

    //Boundary Value Testing

    const driverPage = new DriverPage(page)

    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    await driverPage.DriverPwd('abcdefghijklmnopqrstuv')

    // Verify the value is actually stored, but masked on UI
    await driverPage.DriverpwdEye()

    // Get the entered value
    const value = await driverPage.getDriverPwd()

    // Verify it’s trimmed to 16 characters
    expect(value.length).toBe(16)
    await driverPage.CloseAddDriver()

})

test("TC022 - Verify password and confirm password fields should be same and validate error message", async () => {     

    const driverPage = new DriverPage(page)
    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Enter username, password fields and verify error message
    await driverPage.Driverusername('malar')
    await driverPage.VerifyPasswordMatch('Demo@123!','Demo@123')

})

test("TC023 - Verify username field doesn't create duplicate values", async () => {     

    const driverPage = new DriverPage(page)
    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Enter already existing username to verify duplicate entries are blocked
    await driverPage.Driverusername('malar')
    await driverPage.CloseAddDriver()

})

test("TC024 - Verify driver is created when user enters valid inputs,verify success toaster message and delete the newly created driver", async () => {     
    const driverPage = new DriverPage(page)
    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Enter all valid Driver inputs
    await driverPage.Driverusername('malar4')
    await driverPage.DriverPwd('Demo@123!')
    await driverPage.DriverConfirmPwd('Demo@123!')
    await driverPage.ValidDriver('malar', '', 'malar115@gmail.com')
    await driverPage.EnterContactNumber('+656543-5625')

    //Click Submit Button after entering all input fields
    await driverPage.SubmitButton()

    //Verify Success Toaster message
    const isToastVisible = await driverPage.VerifySuccessToast()
    expect(isToastVisible).toBeTruthy()

    //Delete the newly created driver
    await driverPage.Deleteoption()
    await driverPage.YesOption()

    //Verify Delete Toaster message
    const isdeleteVisible = await driverPage.VerifyDeletedToast()
    expect(isdeleteVisible).toBeTruthy()

})

test("TC025 - Verify user can set driver availability time in Standard Shift using two methods", async () => {     

    const driverPage = new DriverPage(page)
    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Entering time manually in standard shift
    await driverPage.EnterFromTime('08:00 am' )
    await driverPage.EnterToTime('07:30 pm' )

    //Selecting time from the clock in standard shift
    await driverPage.selectTime(driverPage.FromClock, "07:30 AM");
    await driverPage.selectTime(driverPage.ToClock, "06:55 PM");
    await page.waitForTimeout(1000)
    await driverPage.CloseAddDriver()

})

test.only("TC026 - Verify user can set driver time without Standard shift", async () => {     

    const driverPage = new DriverPage(page)
    //Select the Management option in side navbar
    await driverPage.clickManagement()

    //click the Add Driver button to open the Add Driver box
    await driverPage.OpenAddDriver()

    //Turning off the Standard Shift toggle button
    await driverPage.ToggleDriverShift()

    await driverPage.selectDay("Monday");
    await driverPage.selectDay("Wednesday");
    await driverPage.selectDay("Friday");

})


})