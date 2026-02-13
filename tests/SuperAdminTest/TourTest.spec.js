const { test } = require ('@playwright/test');
const { LoginPage } = require ('../../SuperAdminPages/LoginPage');
const { TourPage } = require ('../../SuperAdminPages/TourPage');
const { ExcelReader } = require('../../Utils/ExcelReader');
const { assert } = require('console');

let page;
let context;

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

    test('TC001 - Navigate to the Tour Module', async()=>{
        const tourmodule = new TourPage(page);
        await tourmodule.navigateToTheTourScreen();
    })

    test('TC002 - Add a new Two Way Tour with valid data.', async()=>{
        const tourmodule = new TourPage(page);
        const excelreader = new ExcelReader();
        const TWTData = await excelreader.readExcel('C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx', 'Tour');
        const { TourName, Alias, TourType, TourMode, Location } = TWTData[0];
        await tourmodule.addNewTourFor_TWT(TourName, Alias, TourType, TourMode, Location);
    }) 

    test('TC003 - Update the Two way tour with valid data', async()=>{
        const tourmodule = new TourPage(page);
        const excelreader = new ExcelReader();
        const TWTData = await excelreader.readExcel('C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx', 'Tour');
        const { TourName, Alias, TourMode } = TWTData[1];
        await tourmodule.update_TwoWayTour(TourName, Alias, TourMode);
        
    })

    test('TC004 - Verify that the application allows the user to delete the added tour.', async()=>{
        const tourmodule = new TourPage(page);
        await tourmodule.deleteTWT();
    })

    test('TC005 - Verify that the application displays the error message when the user without enter the data.', async()=>{
        const tourmodule = new TourPage(page);
        await tourmodule.addTourwithWithoutData();
    })

    test('TC006 - Add a new two way tour without data', async()=>{
        const tourmodule = new TourPage(page);
        const excelreader = new ExcelReader();
        const TWTData = await excelreader.readExcel('C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx', 'Tour');
        const { TourName, TourMode, TourType, Location } = TWTData[3];
        await tourmodule.addNewTourWithInvalidData(TourName, TourMode, TourType, Location);
    })

    test('TC007 - Add a new Disposal Tour with valid data.', async()=>{
        const tourmodule = new TourPage(page);
        const excelreader = new ExcelReader();
        const TWTData = await excelreader.readExcel('C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx', 'Tour');
        const { TourName , TourMode } = TWTData[4];
        await tourmodule.addRoundTour(TourName, TourMode);
    })

    test('TC008 - Update disposal tour with valid data.', async()=>{
        const tourmodule = new TourPage(page);
        const excelreader = new ExcelReader();
        const TWTData = await excelreader.readExcel('C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx', 'Tour');
        const { TourName , TourMode } = TWTData[5];
        await tourmodule.updateRoundTour(TourName, TourMode);
    })

    test('TC009 - Delete the Disposal tour', async()=>{
        const tourmodule = new TourPage(page);
        await tourmodule.deleteRoundTour();
    })

    test('TC010 - Add a new Round Tour with valid data.', async()=>{
        const tourmodule = new TourPage(page);
        const excelreader = new ExcelReader();
        const TWTData = await excelreader.readExcel('C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx', 'Tour');
        const { TourMode } = TWTData[8];
        await tourmodule.addDisposalTour(TourMode);
    })

    test('TC011 - Update the disposal tour with valid data.', async()=>{
        const roundtour = new TourPage(page);
        await roundtour.updateDisposal();
    })

    test('TC012 - Add a Regular tour with valid data', async()=>{
        const tourmodule = new TourPage(page);
        const excelreader = new ExcelReader();
        const TWTData = await excelreader.readExcel('C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx', 'Tour');
        const { TourName , AgentName, PickupSourceName, PickupLocation, DestinationName, DropLocation, AdultCount, ChildCount } = TWTData[6];
        await tourmodule.addRegularTour(TourName , AgentName, PickupSourceName, PickupLocation, DestinationName, DropLocation, AdultCount, ChildCount);
    }) 
/*
    test('TC013 - Update the regular tour', async()=>{
        const regularTour = new TourPage(page);
        const excelreader = new ExcelReader();
        const regularUpdate = await excelreader.readExcel('C:/Users/RajalakshmiRajasekar/Desktop/Dataset For Autoplanner.xlsx', 'Tour');
        const {TourName, AgentName, PickupSourceName, PickupLocation, DestinationName, DropLocation, AdultCount, ChildCount} = regularUpdate[7];
        await regularTour.updateRegular(TourName, AgentName, PickupSourceName, PickupLocation, DestinationName, DropLocation, AdultCount, ChildCount);
    })
*/

});