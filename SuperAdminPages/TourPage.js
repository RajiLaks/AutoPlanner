const { expect } = require('@playwright/test');
class TourPage {
    constructor(page) {
        this.page = page;
        this.managementIcon = page.locator('//span[@aria-label="Management"]');
        this.tourModule = page.locator('//a[text()="Tour"]');

        //Two way Tour
        this.twoWayTourText = page.locator('//button[text()="Two Way Tour"]');
        this.addNewTourButton = page.locator('//button[text()="Add New Tour"]');
        this.tourName = page.locator('//input[@id="tour-name"]');
        this.clickAddAliases = page.locator('//button[text()="Add aliases"]');
        this.aliases_1 = page.locator('[id="aliases1"]');
        this.deleteIcon = page.locator('(//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1 css-16zyij1"])[2]/button');
        this.clearIcon = page.locator('[aria-label="Clear"]');
        this.tourType = page.locator('[id="tourType"]');
        this.tourMode = page.locator('//input[@id="trip-mode"]');
        this.fromTime = page.locator('(//button[@aria-label="Choose time"])[1]');
        this.toTime = page.locator('(//button[@aria-label="Choose time"])[1]');
        this.from_Hour = page.locator("(//li[text()='08'])[1]");
        this.from_Minute = page.locator("(//li[text()='30'])");
        this.AM = page.locator('//li[@aria-label="AM"]');
        this.toHour = page.locator("(//li[text()='09'])[1]");
        this.toMinute = page.locator("//li[text()='00']");
        this.PM = page.locator('//li[text()="PM"]');
        this.returnTime = page.locator('(//button[@aria-label="Choose time"])[1]');
        this.returnHour = page.locator('(//li[text()="07"])[1]');
        this.returnMinute = page.locator('//li[text()="15"]');
        this.locationField = page.locator('[id="destinationAddress"]');
        this.saveButton = page.locator('//button[@type="submit"]');
        this.TWT_Toaster = page.locator('//div[text()="Standard tour added successfully"]');
        this.closeIcon = page.locator('//span[@aria-label="Close"]');
        //Update
        this.menuIcon = page.locator("(//*[@class='menu-bg iconify iconify--eva'])[1]");
        this.updateText = page.locator('(//li[text()="Update"])[1]');
        this.deleteText = page.locator('(//li[text()="Delete"])[1]');
        this.updateReturnTime = page.locator('//button[@aria-label="Choose time, selected time is 7:15 PM"]');
        this.yesButton = page.locator('//div[@class="MuiBox-root css-1iamr9e"]/div');
        this.noButton = page.locator('//div[@class="MuiBox-root css-1iamr9e"]/button');
        this.deleteToaster = page.locator("//div[text()='Standard tour deleted successfully']");
        //Disposal
        this.disposalText = page.locator('//button[text()="Disposal / Round Tour"]');
        this.togglebutton = page.locator('//input[@type="checkbox"]');
        this.locationDetails = page.locator('//input[@aria-placeholder="Search"]');
        this.expectedDuration = page.locator('//li[@aria-label="0 minutes"]');
        this.expecteduration1 = page.locator('(//input[@placeholder="hh:mm"])[1]');

        //Regular
        this.regularText = page.locator('//button[text()="Regular Tour"]');
        this.close = page.locator('span[aria-label="Close"]');
        this.addRegularButton = page.locator('//button[text()="Add Regular"]');
        this.tourNamefield = page.locator('//input[@id="tourName"]');
        this.agentName = page.locator('//input[@id="agentName"]');
        this.pickupSourceName = page.locator('//input[@id="sourceName"]');
        this.sourceLocation = page.locator('//input[@id="source"]');
        //stae visible
        this.waitFortable_source = page.locator("(//div[@class='pac-container pac-logo hdpi'])[3]");
        this.destinationName = page.locator('//input[@id="destinationName"]');
        this.destinationLocation = page.locator('//input[@id="destination"]');
        this.startTimeScrollDown = page.locator('(//button[@aria-label="Choose time"])[1]');
        this.vehicleField = page.locator('//input[@id="vehicle"]');
        this.saveCancelFields = page.locator('//div[@class="MuiStack-root addregular-buttons css-j7qwjs"]');
        this.tourdaysField = page.locator('[placeholder="Tour days"]');
        this.adultCount = page.locator('//input[@name="adultCount"]');
        this.childCount = page.locator('//input[@name="childCount"]');
        this.driverNameField = page.locator('//input[@placeholder="Driver name"]');
        
        //Update Regular
        this.menu = page.locator('(//div[@role="menu"])[1]');
        this.updatebutton = page.locator('(//li[@role="menuitem"])[1]');
    }


    async navigateToTheTourScreen() {
        await this.managementIcon.click();
        await this.page.waitForTimeout(1000);
        await this.tourModule.click();
    }
    //Two Way Tour
    async addNewTourFor_TWT(TourName, Alias, TourType, TourMode, Location) {
        await this.twoWayTourText.click();
        await this.page.waitForTimeout(1000);
        await this.addNewTourButton.click();
        await this.tourName.fill(TourName);
        await this.page.waitForTimeout(1000);
        await this.clickAddAliases.click();
        await this.page.waitForTimeout(1000);
        await this.aliases_1.fill(Alias);
        await this.clickAddAliases.click();
        await this.deleteIcon.click();
        await this.tourType.click();
        await this.page.waitForTimeout(1000);
        await this.clearIcon.click();
        await this.tourType.fill(TourType);
        await this.tourType.press('ArrowDown');
        await this.tourType.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.tourName.fill(TourName);
        await this.page.waitForTimeout(1000);
        await this.tourMode.fill(TourMode);
        await this.page.waitForTimeout(1000);
        await this.tourMode.press('ArrowDown');
        await this.page.waitForTimeout(1000);
        await this.tourMode.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.fromTime.click();
        await this.from_Hour.click();
        await this.from_Minute.click();
        await this.AM.click();
        await this.page.waitForTimeout(2000);
        await this.toTime.click();
        await this.toHour.click();
        await this.toMinute.click();
        await this.AM.click();
        await this.saveButton.scrollIntoViewIfNeeded({ force: true });
        await this.page.waitForTimeout(2000);
        await this.returnTime.click();
        await this.returnHour.click();
        await this.returnMinute.click();
        await this.PM.click();
        await this.page.waitForTimeout(1000);
        await this.locationField.fill(Location);
        await this.page.waitForTimeout(2000);
        await this.locationField.press('ArrowDown');
        await this.locationField.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.saveButton.click();
        await this.page.waitForTimeout(4000);
        const toaster1 = await this.TWT_Toaster.innerText();
        console.log(toaster1);
    }

    async update_TwoWayTour(TourName, Alias, TourMode) {
        await this.menuIcon.hover();
        await this.page.waitForTimeout(1000);
        //await this.menuIcon.click({ force: true });
        await this.menuIcon.dblclick({ force: true });
        await this.page.waitForTimeout(1000);
        await this.updateText.click({ force: true });
        await this.tourName.click();
        await this.tourName.clear();
        await this.tourName.fill(TourName);
        await this.page.waitForTimeout(1000);
        await this.aliases_1.clear();
        await this.aliases_1.fill(Alias);
        await this.page.waitForTimeout(1000);
        await this.tourMode.click();
        await this.saveButton.scrollIntoViewIfNeeded({ force: true });
        await this.updateReturnTime.click();
        await this.page.waitForTimeout(1000);
        await this.returnHour.click();
        await this.returnMinute.click();
        await this.PM.click();
        await this.page.waitForTimeout(2000);
        await this.saveButton.click();
        await this.page.waitForTimeout(2000);
        // const toaster1 = await this.TWT_Toaster.innerText();
        //console.log(toaster1);
    }

    async deleteTWT(){
        await this.menuIcon.hover();
        await this.menuIcon.click({ force: true });
        await this.menuIcon.click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.deleteText.click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.noButton.click();
        await this.page.waitForTimeout(1000);
        await this.menuIcon.click({ force: true });
        await this.menuIcon.click({ force: true });
        await this.deleteText.click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.yesButton.click();
        await this.page.waitForTimeout(1000);
        const toasterForDelete = await this.deleteToaster.innerText();
        console.log(toasterForDelete);
    }

    async addTourwithWithoutData() {
        await this.addNewTourButton.click();
        await this.saveButton.scrollIntoViewIfNeeded();
        await this.saveButton.click();
        await this.closeIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async addNewTourWithInvalidData(TourName, TourMode, TourType, Location) {
        await this.addNewTourButton.click();
        await this.tourName.fill(TourName);
        await this.page.waitForTimeout(1000);
        await this.tourType.click();
        await this.page.waitForTimeout(1000);
        await this.clearIcon.click();
        await this.tourType.fill(TourType);
        await this.tourType.press('ArrowDown');
        await this.tourType.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.tourName.fill(TourName);
        await this.page.waitForTimeout(1000);
        await this.tourMode.fill(TourMode);
        await this.page.waitForTimeout(1000);
        await this.tourMode.press('ArrowDown');
        await this.page.waitForTimeout(1000);
        await this.tourMode.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.fromTime.click();
        await this.from_Hour.click();
        await this.from_Minute.click();
        await this.AM.click();
        await this.page.waitForTimeout(2000);
        await this.toTime.click();
        await this.toHour.click();
        await this.toMinute.click();
        await this.AM.click();
        await this.saveButton.scrollIntoViewIfNeeded({ force: true });
        await this.page.waitForTimeout(2000);
        await this.returnTime.click();
        await this.returnHour.click();
        await this.returnMinute.click();
        await this.PM.click();
        await this.page.waitForTimeout(1000);
        await this.locationField.fill(Location);
        await this.page.waitForTimeout(2000);
        await this.locationField.press('ArrowDown');
        await this.locationField.press('Enter');
        await this.saveButton.click();
        await this.page.waitForTimeout(1000);
        await this.closeIcon.click();
        await this.page.waitForTimeout(1000);
    }
    
    //Round Tour
    async addRoundTour(TourName, TourMode) {
        await this.disposalText.click();
        await this.addNewTourButton.click();
        await this.togglebutton.click();
        await this.tourName.click();
        await this.tourName.fill(TourName);
        await this.tourMode.click();
        await this.tourMode.fill(TourMode);
        await this.tourMode.press('ArrowDown');
        await this.tourMode.press('Enter');
        await this.fromTime.click();
        await this.from_Hour.click();
        await this.from_Minute.click();
        await this.page.waitForTimeout(2000);
        await this.saveButton.scrollIntoViewIfNeeded();
        await this.saveButton.click();
        await this.page.waitForTimeout(1000);
    }

    async updateRoundTour(TourName, TourMode) {
        await this.menuIcon.click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.updateText.click({ force: true });
        await this.togglebutton.click();
        await this.tourName.click();        
        await this.tourName.fill(TourName);
        await this.tourMode.click();
        await this.tourMode.fill(TourMode);
        await this.tourMode.press('ArrowDown');
        await this.tourMode.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.saveButton.scrollIntoViewIfNeeded();
        await this.saveButton.click();
        await this.page.waitForTimeout(1000);
    }

   async deleteRoundTour(){
        await this.menuIcon.hover();
        await this.menuIcon.click({ force: true });
        await this.menuIcon.click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.deleteText.click({ force: true });
        await this.page.waitForTimeout(2000);        
        await this.noButton.click();
        await this.page.waitForTimeout(1000);
        await this.menuIcon.click({ force: true });
        await this.menuIcon.click({ force: true });
        await this.deleteText.click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.yesButton.click();
        await this.page.waitForTimeout(5000);
        const toasterForDelete = await this.deleteToaster.innerText();
        console.log(toasterForDelete);
   }

   async addDisposalTour(TourMode){
        await this.disposalText.click();
        await this.addNewTourButton.click();
        await this.tourMode.click();
        await this.page.waitForTimeout(1000);
        await this.tourMode.fill(TourMode);
        await this.tourMode.press('ArrowDown');
        await this.tourMode.press('Enter');
        await this.page.waitForTimeout(1000);
        await this.expecteduration1.fill('05:00');
        await this.page.waitForTimeout(1000);
        await this.saveButton.scrollIntoViewIfNeeded();
        await this.saveButton.click();
   }

   async updateDisposal(){
        await this.menuIcon.hover();
        await this.menuIcon.click({ force: true });
        await this.menuIcon.click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.updateText.click({ force: true });
        await this.page.waitForTimeout(1000);
        await this.expecteduration1.clear();
        await this.page.waitForTimeout(1000);
        await this.expecteduration1.fill('07:30');
        await this.page.waitForTimeout(1000);
        await this.saveButton.scrollIntoViewIfNeeded();
        await this.saveButton.click();
   }



   async addRegularTour(TourName, AgentName, PickupSourceName, PickupLocation, DestinationName, DropLocation, AdultCount, ChildCount){
        await this.regularText.click();
        await this.addRegularButton.click();
        await this.tourNamefield.fill(TourName);
        await this.agentName.fill(AgentName);
        await this.pickupSourceName.fill(PickupSourceName);
        await this.page.waitForTimeout(2000);
        await this.sourceLocation.fill(PickupLocation);
        await this.page.waitForTimeout(2000);
        await this.sourceLocation.press('ArrowDown');
        await this.sourceLocation.press('Enter');
        await this.page.waitForTimeout(2000);
        await this.destinationName.fill(DestinationName);
        await this.startTimeScrollDown.scrollIntoViewIfNeeded();
        await this.destinationLocation.fill(DropLocation);
        await this.page.waitForTimeout(2000);
        await this.destinationLocation.press('ArrowDown');
        await this.page.waitForTimeout(2000);
        await this.destinationLocation.press('Enter');/*
        await this.vehicleField.click();
        await this.vehicleField.press('ArrowDown');
        await this.vehicleField.press('ArrowDown');
        await this.vehicleField.press('Enter'); */
        await this.saveCancelFields.scrollIntoViewIfNeeded();
        await this.fromTime.click();
        await this.from_Hour.click();
        await this.from_Minute.click();
        await this.AM.click();
        await this.toTime.click();
        await this.toHour.click();
        await this.toMinute.click();
        await this.PM.click();
        await this.tourdaysField.click();
        await this.tourdaysField.press('ArrowDown');
        await this.tourdaysField.press('ArrowDown');
        await this.tourdaysField.press('ArrowDown');
        await this.tourdaysField.press('Enter');
        await this.toTime.click();
        await this.toTime.click();
        await this.adultCount.fill(AdultCount);
        await this.childCount.fill(ChildCount);
        /*await this.driverNameField.click();
        await this.page.waitForTimeout(1000);
        await this.driverNameField.press('ArrowDown');
        await this.driverNameField.press('Enter'); */  
        await this.saveButton.click();
    }

    



}

module.exports = {TourPage};