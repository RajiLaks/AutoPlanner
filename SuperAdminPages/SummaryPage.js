class SummaryPage {

    constructor(page) {
        this.page = page;

        //Dashboard
        this.BookingsIcon = page.locator("//span[@aria-label='Bookings']");
        this.Summarytab = page.locator("//a[text()='Summary']");
        this.calendericon_start = page.locator("(//*[@data-testid='CalendarIcon'])[1]");
        this.selectdate = page.locator(`(//button[@aria-current='date']/following-sibling::button)[1]`);

        this.calendericon_end = page.locator("(//*[@data-testid='CalendarIcon'])[2]")
        this.Filterfield = page.locator("#status");
        this.filterbtn = page.locator("//button[text()='Filter']");
        this.clearfilterbtn = page.locator("//button[text()='Clear filter']");

        // View Schedule
        this.View_Schedule = page.locator("//div[text()='View Schedule']");
        this.tourbtn = page.locator("//button[text()='Tours']");
        this.close = page.locator("//*[@class='routes-close-icon iconify iconify--ic']")

        //Vehicle
        this.vehiclebtn = page.locator("//button[text()='Vehicles']");

        //Addexternal
        this.addExternalVehiclebtn = page.locator("//p[text()='Add External Vehicle']");
        //vehicleno
        this.vehicleNumberfield = page.locator("#vehicle-no");
        //Capacity
        this.seatingfield = page.locator("#capacity");
        //drivername
        this.drivernamefield = page.locator("#driver-name");
        //Contact Number
        this.contactnofield = page.locator("//input[@placeholder='Contact Number']");
        this.addvehiclebtn = page.locator("//button[text()='Add Vehicle']");
        this.closevehicletab = page.locator("Add External Vehicle (SIC)");
        this.searchbox = page.locator("//input[@placeholder='Search…']");

        //Guide
        this.guidebtn = page.locator("//button[text()='Guide']");
        //Addguide
        this.addguide = page.locator("(//p[text()='Add Guide'])[1]");
        //Guidename
        this.guidename_field = page.locator("#guide-name");
        //Contact 
        this.contactnumber = page.locator("//input[@placeholder='Contact Number']");
        //hotel
        this.hotelname = page.locator("#hotel-name");
        //Savebtn
        this.savebutton = page.locator("//button[text()='Save']");
        //close
        this.closeicon = page.locator("//*[@class='routes-close-icon iconify iconify--ic']");


        //Schedulebutonn
        this.schedulebuttonfinal = page.locator("//p[text()='Schedule']");
        this.close_schedule=page.locator("//*[@class='routes-close-icon iconify iconify--ic']")
        // Save button
        this.Savebuttonfinal = page.locator("//p[text()='Save']");
        this.save_no=page.locator("//button[text()='No']");
        this.save_yes=page.locator("//button[text()='Yes']");
        //View Schedule
        this.viewschedule_aftersave=page.locator("//p[text()='View Scheduled']");
        this.download=page.locator("//*[@aria-label='Downlaod']");


        //Change Table
        this.table = page.locator("(//*[@class='iconify iconify--hugeicons'])[2]");

        //suggeston droparrow
        this.droparrow=page.locator("//*[@class='iconify iconify--icon-park-outline']");
        //Search
        this.suggest_search=page.locator("(//input[@placeholder='Search…'])[2]");
       //Close
        this.suggest_close=page.locator("//*[@class='feedback-close-icon iconify iconify--ic']");
    }

    async SummaryScreen(){
        await this.BookingsIcon.click();
    }

}
/*
    async SummaryModule(filter) {
        await this.BookingsModule.click();
        await this.page.waitForTimeout(1000);
        await this.Summarytab.click();
        await this.page.waitForTimeout(1000);
        await this.calendericon_start.click();
        await this.page.waitForTimeout(1000);
        await this.selectdate.click();
        await this.page.waitForTimeout(1000);
        await this.calendericon_end.click();
        await this.page.waitForTimeout(1000);
        await this.selectdate.click();
        await this.page.pause();
        await this.Filterfield.fill(filter)
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(3000);
    }

    async clearfilter() {
        await this.clearfilterbtn.click();
        await this.page.waitForTimeout(2000);
    }

    async Applyfilter() {
        await this.filterbtn.click();
        await this.page.waitForTimeout(5000);
    }
    async ScheduleModule(Schedulebtn) {
        await this.page.locator(`//div[text()='${Schedulebtn}']`).click();
    }
    async ViewSchedulebutton(){
        await this.View_Schedule.click();
    }

    async selectTab(tab) {
        const Tab = await this.page.locator(`//p[text()='${tab}']`);
        await Tab.hover();
        await Tab.click({ force: true });
    }

    async searchthedetails(search) {
        await this.searchbox.fill(search);
    }

    async Tour() {
        await this.tourbtn.click();
        await this.page.locator(`(//p[text()='View Details'])[1]`).click();
        await this.close.click();
    }

    async Vehicle(coach, view) {
        await this.vehiclebtn.click();
        await this.page.locator(`//p[text()='${coach}']/../../preceding-sibling::div`).click()
        await this.page.locator(`//p[text()='${view}']/../../following-sibling::div/div/button`).click({ force: true });
        
        await this.schedulebuttonfinal.click();
        await page.waitForSelector("//*[@class='routes-close-icon iconify iconify--ic']", { state: 'visible', timeout: 5000 });
        await this.close_schedule.click();

    }

    async AddExternalVehicle(vehicle, vehicleNum, Seat, driver, contact) {
        await this.addExternalVehiclebtn.click();
        await this.page.locator(`//button[text()='${vehicle}']`).click({ force: true });
        await this.vehicleNumberfield.fill(vehicleNum);
        await this.seatingfield.fill(Seat);
        await this.drivernamefield.fill(driver);
        await this.contactnofield.fill(contact);
        await this.addvehiclebtn.click();

    }

    async closevehicle() {
        await this.closevehicletab.click();
    }

    async guide(guidename, number, hotel) {
        await this.guidebtn.click();
        await this.addguide.click()
        await this.guidename_field.fill(guidename);
        await this.contactnumber.fill(number);
        await this.hotelname.fill(hotel);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');
        await this.savebutton.click();
    }

    async closeGuide() {
        await this.closeicon.click();
    }
    
     async clickSave_Final() {
        await this.Savebuttonfinal.click();
        await this.save_no.click();
    
    }
     
    async clickSave_Yes() {
        await this.save_yes.click();
        await this.download.click();
    
    }
    async clickviewShedule_save(){
        await this.viewschedule_aftersave.click();
    }
    async suggestion(search){
        const  suggest=await this.page.locator("//*[@class='suggestions-button-icon iconify iconify--mage']");
        await suggest.hover();
        await suggest.click();
        await this.droparrow.click();
        await this.suggest_search.fill(search);
        await this.suggest_close.click();
    }
    
} 

*/

module.exports = { SummaryPage };