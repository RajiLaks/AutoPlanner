const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page) {
        this.page = page;

        //Dashboard
        this.liveDashboard = page.locator("//span[@aria-label='Live Dashboard']");

        this.getJobDetails = page.locator("(//p[@class='MuiTypography-root MuiTypography-body1 css-pya38b'])[1]/following-sibling::div//span");
        this.getBookingDetails = page.locator("(//p[@class='MuiTypography-root MuiTypography-body1 css-pya38b'])[2]/following-sibling::div//span");

        //AddAdhocTrip
        this.addAdhocTripBtn = page.locator("//button[text()='Add Ad-hoc']");
        this.agentName = page.locator("#agent-name");
        this.guestName = page.locator("#guest-name");
        this.adultCount = page.locator("#adult-count");
        this.childCount = page.locator("#child-count");
        this.referenceNo = page.locator("#reference-no");
        this.tourMode = page.locator("#trip-type");
        this.contactNumber = page.locator("[placeholder='Contact Number']");

        //SIC or TSIC
        this.pickupLocation = page.locator("#search-source");
        this.tourName = page.locator("#configured-route");

        //Internal Vehicle
        this.internalVehicleRadioBtn = page.locator("//span[text()='Internal']");
        this.internalVehicleNo = page.locator("#vehicle-number");


        //Back, Save and Cancel Buttons
        this.cancelBtn = page.locator("//button[text()='Cancel']");
        this.saveBtn = page.locator("//button[text()='Save']");
        this.backBtn = page.locator("//button[text()='Back']");
        this.closeIcon = page.locator("//button[@class='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall icon-button css-1j7qk7u']");

        //ExternalVehicle
        this.externalVehicleRadioBtn = page.locator("//span[text()='External']");
        this.externalVehicleNo = page.locator("#vehicle-number");
        this.driverName = page.locator("#driver-name");
        this.driverContactNo = page.locator("//input[@placeholder='Driver Contact Number']");
        this.seatingCapacity = page.locator("#seating-capacity");


        //View Trip btn
        this.search = page.locator("#filter-input");
        this.viewBtn = page.locator("div[class='view-available MuiBox-root css-0']");

        //View Trip Details
        this.tripDetails = page.locator("//span[@class='MuiChip-label MuiChip-labelMedium css-11lqbxm']");
        this.bookingDetails = page.locator("//div[@class='touraccordion-counts MuiBox-root css-0']/div/p");


    }

    async navigateToDashboard() {
        await this.liveDashboard.click();
        await this.page.waitForTimeout(2000);
    }


    async getNoOfJobsDetails() {
        const date = await this.page.locator("//div[@class='MuiBox-root css-171onha']/p").textContent();
        const job = await this.page.locator("(//p[@class='MuiTypography-root MuiTypography-body1 css-pya38b'])[1]").textContent();
        let value = [];
        for (let i = 0; i < await this.getJobDetails.count(); i++) {
            const jobDetails = await this.getJobDetails.nth(i).textContent();
            value.push(jobDetails);
        }
        return { date, job, value };
    }


    async getNoOfBookingDetails() {
        const date = await this.page.locator("//div[@class='MuiBox-root css-171onha']/p").textContent();
        const job = await this.page.locator("(//p[@class='MuiTypography-root MuiTypography-body1 css-pya38b'])[2]").textContent();
        let value = [];
        for (let i = 0; i < await this.getBookingDetails.count(); i++) {
            const jobDetails = await this.getBookingDetails.nth(i).textContent();
            value.push(jobDetails);
        }
        return { date, job, value };
    }

    async clickAddAdhocBtn() {

        await this.addAdhocTripBtn.hover();
        await this.page.waitForTimeout(1000);
        await this.addAdhocTripBtn.click();
        await this.page.waitForTimeout(1000);
    }


    async addAdhocTripSIC(agentName, guestName, contactNumber, adultCount, childCount, referenceNo, tourMode, pickupLocation, tourName, vehicleNo) {


        await this.agentName.fill(agentName);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.guestName.fill(guestName);
        await this.page.waitForTimeout(1000);
        await this.contactNumber.fill(contactNumber);
        await this.page.waitForTimeout(1000);
        await this.adultCount.fill(adultCount);
        await this.childCount.fill(childCount);
        await this.referenceNo.fill(referenceNo);
        await this.page.waitForTimeout(1000);
        await this.tourMode.type(tourMode);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.pickupLocation.type(pickupLocation);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.tourName.fill(tourName);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.internalVehicleRadioBtn.click();
        await this.page.waitForTimeout(1000);
        await this.internalVehicleNo.fill(vehicleNo);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);


    }

    async addAdhocTripTSIC(agentName, guestName, contactNumber, adultCount, childCount, referenceNo, tourMode, pickupLocation, tourName, externalVehicleNo, driverName, driverContactNo, seatingCapacity) {


        await this.agentName.fill(agentName);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.guestName.fill(guestName);
        await this.page.waitForTimeout(1000);
        await this.contactNumber.fill(contactNumber);
        await this.page.waitForTimeout(1000);
        await this.adultCount.fill(adultCount);
        await this.childCount.fill(childCount);
        await this.referenceNo.fill(referenceNo);
        await this.page.waitForTimeout(1000);
        await this.tourMode.type(tourMode);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.pickupLocation.type(pickupLocation);
        await this.page.waitForTimeout(1000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.tourName.fill(tourName);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(1000);

        await this.externalVehicleRadioBtn.click();

        await this.externalVehicleNo.fill(externalVehicleNo)
        await this.driverName.fill(driverName)
        await this.driverContactNo.fill(driverContactNo);
        await this.seatingCapacity.fill(seatingCapacity);

    }


    async clickSaveBtn() {
        await this.saveBtn.click();
    }

    async clickCancelBtn() {
        await this.cancelBtn.click();
    }

    async clickCancelBtn() {
        await this.cancelBtn.click();
    }

    async searchValue(value) {
        await this.search.fill(value);
    }

    async clickBackBtn() {
        await this.backBtn.click();
    }

    async clickViewBtn() {
        await this.viewBtn.first().click();
        await this.page.waitForTimeout(2000);
    }
    async toastMessage(value) {
       const toast= await this.page.locator("[class='MuiAlert-message css-1xsto0d']").textContent();
        await expect(toast).toBe(value);
    }

    async printBookingDetails() {

        const tripDetail = [],bookingDetail = [];
        for (let i = 0; i < await this.tripDetails.count(); i++) {
            const tripData = await this.tripDetails.nth(i).textContent();
         tripDetail.push(tripData);
        }

        for (let i = 0; i < await this.bookingDetails.count(); i++) {
            const bookingData = await this.bookingDetails.nth(i).textContent();
             bookingDetail.push(bookingData);
        }
        return { tripDetail,bookingDetail };
    }
















}

module.exports = { DashboardPage };