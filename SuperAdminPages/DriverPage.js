const {expect} = require("@playwright/test")


class DriverPage
{
    constructor(page)
    {
        this.page = page
        this.Management = page.locator('svg.icon.iconify.iconify--icon-park-outline')
        this.AddDriverBox = page.getByRole('button', {name:'Add Driver'})
        this.CloseDriverBox = page.locator("div.driver-close")
        this.Submit = page.locator('button[type="submit"]', {hasText:'Add Driver'})
        this.Dialog = page.getByRole("dialog")
        this.mandatoryFields = ["First Name", "Contact Number", "Days", "From", "To"]
        this.KebabMenu = page.locator("button:has(svg[data-testid='MenuIcon'])")
        this.EditIcon = page.getByTestId("EditIcon")
        this.rowsDropdown = page.getByRole('combobox')
        this.rowElements = page.locator('div[role="row"][data-rowindex]:has([aria-label])')
        this.NextPage = page.getByLabel('Go to next page')
        this.PreviousPage = page.getByLabel('Go to previous page')
        this.Drivertime = page.getByText('View', { exact: true }).first()
        this.DriverAvailabilityPopup = page.locator('div.dayselection-workingdays') 
        this.CloseDriverTime =  page.locator('svg.dayselection-close-icon')
        this.Deactivate =  page.getByText('Deactivate')
        this.NoButton = page.getByRole('button',{name:'No'})
        this.YesButton = page.getByRole('button',{name:'Yes'})
        this.Delete = page.getByText('Delete')
        this.LicUploadIcon = page.locator('svg.accordion-uploadicon').nth(0)
        this.InsUploadIcon = page.locator('svg.accordion-uploadicon').nth(1)
        this.MedUploadIcon = page.locator('svg.accordion-uploadicon').nth(2)
        this.ExpandIcon = page.getByTestId('ExpandMoreIcon')
        this.DeleteImageIcon = page.locator('svg[style="color: red;"]')
        this.DocumentsIcon = page.getByTestId('FilePresentIcon')
        this.ZoomIcon = page.locator('svg.zoom-icon.iconify--gg').nth(0)
        this.CloseDocument =  page.getByTestId('CloseIcon')
        this.LicExpiry = page.getByPlaceholder('License expiry')
        this.InsExpiry = page.getByPlaceholder('Insurance expiry')
        this.MedExpiry = page.getByPlaceholder('Medical expiry')
        this.LicCalendarIcon = page.getByLabel('Choose date').nth(0)
        this.InsCalendarIcon = page.getByLabel('Choose date').nth(1)
        this.MedCalendarIcon = page.getByLabel('Choose date').nth(2)
        this.LicErrorMessage = page.getByText('Select future date')
        this.DriverUserName = page.getByPlaceholder('Username')
        this.DriverPasswordField = page.locator('#password')
        this.DriverConfirmPwdField = page.getByPlaceholder('Confirm Password')
        this.DriverPwdEyeIcon = page.locator('button:has(svg.iconify--iconamoon)').nth(0)
        this.DriverConfimrPwdEyeIcon = page.locator('button:has(svg.iconify--iconamoon)').nth(1)
        this.FirstName = page.getByPlaceholder('First name')
        this.LastName = page.getByPlaceholder('Last name')
        this.DriverEmail = page.getByPlaceholder('Email')
        this.ContactNumber = page.getByPlaceholder('Contact Number')        
        this.SuccessToast = page.locator('div.MuiAlert-message')
        this.DeletedToast = page.locator('div.MuiAlert-message')
        this.FromTime = page.locator('input[placeholder="hh:mm aa"]').nth(0)
        this.ToTime = page.locator('input[placeholder="hh:mm aa"]').nth(1)
        this.FromClock = page.locator('button:has(svg[data-testid="ClockIcon"])').nth(0)
        this.ToClock   = page.locator('button:has(svg[data-testid="ClockIcon"])').nth(1)
        this.DriverShift = page.getByRole('checkbox', { name: 'Field Switch' })
        this.DayCheckbox = {
        Sunday: page.locator('label:has-text("Sunday") input[type="checkbox"]'),
        Monday: page.locator('label:has-text("Monday") input[type="checkbox"]'),
        Tuesday: page.locator('label:has-text("Tuesday") input[type="checkbox"]'),
        Wednesday: page.locator('label:has-text("Wednesday") input[type="checkbox"]'),
        Thursday: page.locator('label:has-text("Thursday") input[type="checkbox"]'),
        Friday: page.locator('label:has-text("Friday") input[type="checkbox"]'),
        Saturday: page.locator('label:has-text("Saturday") input[type="checkbox"]'),
        }    


    }

    async clickManagement()
    {
        await this.Management.click()
        await this.page.waitForTimeout(2000)
    }

    async OpenAddDriver()
    {    
        await this.AddDriverBox.click()
        await this.page.waitForTimeout(2000)
    }

    async CloseAddDriver()
    {    
        await this.CloseDriverBox.click()
        await this.page.waitForTimeout(2000)
    }

    async SubmitButton()
    {    
        await this.Submit.click()
        await this.page.waitForTimeout(2000)
    }

    async clickDialog()
    {    
        await this.Dialog.click()
    }
   
    async verifyMandatoryFields()
    {
        for (const field of this.mandatoryFields) {
            const fieldLocator = this.Dialog.getByText(new RegExp(`${field}\\s*\\*`))
            await expect(fieldLocator).toBeVisible()
        }
    }  
    
    async OpenKebabMenu()
    {    
        await expect(this.KebabMenu).toBeVisible()
        await this.KebabMenu.click()
        await this.page.waitForTimeout(2000)
    }

    async Editoption() {
        const count = await this.KebabMenu.count();

    for (let i = 0; i < count; i++) {
        const menu = this.KebabMenu.nth(i);
        await menu.click();
        await this.page.waitForTimeout(2000); // Wait for dropdown to open

        if (await this.EditIcon.isVisible()) {
            await this.EditIcon.click({ timeout: 40000 });
            await this.page.waitForTimeout(3000);
            break; // Stop looping once found
        }
    }

    }

    async selectRowsPerPage(count) 
    {
        await this.rowsDropdown.waitFor()
        await this.rowsDropdown.click()
        await this.page.getByRole('option', { name: String(count), exact: true }).click()
        await this.page.waitForTimeout(3000)
  
        for (let i = 0; i < 100; i++) {
        await this.page.mouse.wheel(0, 5);  // small wheel tick 
        }

    }
    
    async verifyRowCount(expectedCount) 
    {
        await expect(this.rowElements).toHaveCount(expectedCount);
    }

    async changeAndVerifyRows(count) 
    {
        await this.selectRowsPerPage(count);
        await this.verifyRowCount(count);
    }

    async Nextpage()
    {    
        await this.NextPage.click()
        await this.page.waitForTimeout(2000)
    }

    async Previouspage()
    {    
        await this.PreviousPage.click()
        await this.page.waitForTimeout(2000)
    }
   
    async goToPage(pageNumber) 
    {
    const pageLabel = `Go to page ${pageNumber}`;
    const pageButton = this.page.getByLabel(pageLabel);
    await pageButton.waitFor({ state: 'visible' });
    await pageButton.click();
    }

    async DriverAvailabilityBox()
    {
        await this.Drivertime.click()
        await this.page.waitForTimeout(1500)
    }

    async AvailabilityBoxNavigation()
    {
        await this.DriverAvailabilityPopup.hover()
        await this.page.waitForTimeout(1000)

        // Scroll down gradually
        for (let i = 0; i < 100; i++) {
        await this.page.mouse.wheel(0, 10)}

        //Scroll up gradually
        for (let i = 0; i < 100; i++) {
        await this.page.mouse.wheel(0, -10)}
        await this.page.waitForTimeout(1000)
    }

    async CloseAvailabilitybox()
    {
        await this.CloseDriverTime.click()
        await this.page.waitForTimeout(2000)
    }

    async Deactivateoption()
    {
        const count = await this.KebabMenu.count()
        
        for (let i = 0; i < count; i++) {
        const menu = this.KebabMenu.nth(i)
        await menu.click()
        await this.page.waitForTimeout(2000)

        if (await this.Deactivate.isVisible()) {
            await this.Deactivate.click({ timeout: 40000 });
            await this.page.waitForTimeout(3000);
            break; // Stop looping once found
        }
        }
        
    }

    async NotButton()
    {
        await expect(this.NoButton).toBeVisible({timeout: 2000})
        await this.NoButton.click()
    }

    async YesOption()
    {
        await expect(this.YesButton).toBeVisible({timeout: 2000})
        await this.YesButton.click()
        await this.page.waitForTimeout(2000)
    }

    async Deleteoption() 
    {
    const count = await this.KebabMenu.count();

    for (let i = 0; i < count; i++) {
        const menu = this.KebabMenu.nth(i);
        await menu.click();
        await this.page.waitForTimeout(2000); // Wait for dropdown to open

        if (await this.Delete.isVisible()) {
            await this.Delete.click({ timeout: 40000 });
            await this.page.waitForTimeout(3000);
            break; // Stop looping once found
        }
    }
}


   async Licuploadfile(filePath) 
   {
    const fileChooserPromise = this.page.waitForEvent('filechooser')
    await this.LicUploadIcon.click()

    const fileChooser = await fileChooserPromise

    await fileChooser.setFiles(filePath)
    await this.page.waitForTimeout(2000)
  }

  async Insuploadfile(filePath) 
   {
    const fileChooserPromise = this.page.waitForEvent('filechooser')
    await this.InsUploadIcon.click()

    const fileChooser = await fileChooserPromise

    await fileChooser.setFiles(filePath)
    await this.page.waitForTimeout(2000)
  }

  async Meduploadfile(filePath) 
   {
    const fileChooserPromise = this.page.waitForEvent('filechooser')
    await this.MedUploadIcon.click()

    const fileChooser = await fileChooserPromise

    await fileChooser.setFiles(filePath)
    await this.page.waitForTimeout(2000)
  }

  async Expandmoreicon()
    {
        await this.ExpandIcon.click()
        await this.page.waitForTimeout(2000)
    }

    async Deleteuploadimage()
    {
        await this.ExpandIcon.click()
        await this.DeleteImageIcon.click({force: true})
        await this.page.waitForTimeout(2000)
    }

    async ViewDocumentsOption() 
    {
    const count = await this.KebabMenu.count()

    for (let i = 0; i < count; i++) {
    const menu = this.KebabMenu.nth(i);
    await menu.click();
    await this.page.waitForTimeout(2000)

      if (await this.DocumentsIcon.isVisible()) {
        await this.DocumentsIcon.click({ timeout: 40000 });
        await this.page.waitForTimeout(2000);
        break; // Stop looping once found
      } else {
            // Press Escape button in Keyboard to close the menu
            await this.page.keyboard.press('Escape');
            await this.page.waitForTimeout(500);
        }
    }
    }

    async Openimage()
    {
        await this.ZoomIcon.click({timeout: 2000})
        await this.page.waitForTimeout(2000)
    }

    async Newtabopenclose() 
    {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent("page"),  
            this.ZoomIcon.click({ timeout: 2000 })     
        ])

            await newPage.waitForLoadState('domcontentloaded')
            await newPage.waitForTimeout(3000)

            await newPage.close()
            await this.page.waitForTimeout(2000)
    }

    async Closeimage()
    {
        await this.CloseDocument.click()
        await this.page.waitForTimeout(2000)
    }

    async LicExpirydate(date) 
    {
        await expect(this.LicExpiry).toBeVisible()
        await this.LicExpiry.click()
        await this.page.waitForTimeout(2000)
        await this.LicExpiry.fill(date)
        await this.page.waitForTimeout(2000)
    }

    async InsExpirydate(date) 
    {
        await expect(this.InsExpiry).toBeVisible()
        await this.InsExpiry.click()
        await this.page.waitForTimeout(2000)
        await this.InsExpiry.fill(date)
        await this.page.waitForTimeout(2000)
    }

    async MedExpirydate(date) 
    {
        await expect(this.MedExpiry).toBeVisible()
        await this.MedExpiry.click()
        await this.page.waitForTimeout(2000)
        await this.MedExpiry.fill(date)
        await this.page.waitForTimeout(2000)
    }
    
    async LicselectDate(day) 
    {
        await expect(this.LicCalendarIcon).toBeVisible()
        await this.LicCalendarIcon.click()

        await this.page.waitForTimeout(2000)

        const dayButton = this.page.locator(`button:has-text("${day}")`)
        await this.page.waitForSelector(`button:has-text("${day}")`)
        await dayButton.click()

        await this.page.waitForTimeout(2000)
    }

    async InsselectDate(day) 
    {
        await expect(this.InsCalendarIcon).toBeVisible()
        await this.InsCalendarIcon.click()

        await this.page.waitForTimeout(2000)

        const dayButton = this.page.locator(`button:has-text("${day}")`)
        await this.page.waitForSelector(`button:has-text("${day}")`)
        await dayButton.click()

        await this.page.waitForTimeout(2000)
    }

    async MedselectDate(day) 
    {
        await expect(this.MedCalendarIcon).toBeVisible()
        await this.MedCalendarIcon.click()

        await this.page.waitForTimeout(2000)

        const dayButton = this.page.locator(`button:has-text("${day}")`)
        await this.page.waitForSelector(`button:has-text("${day}")`)
        await dayButton.click()

        await this.page.waitForTimeout(2000)
    }

    async LicenseErrormsg() 
    {  
        const count = await this.LicErrorMessage.count()

        await expect(this.LicErrorMessage).toHaveCount(3)

        for (let i = 0; i < count; i++) {
        await expect(this.LicErrorMessage.nth(i)).toBeVisible()
        await expect(this.LicErrorMessage.nth(i)).toHaveText(/future date/i)
        }
    }

    async DriverPwd(password) 
    {
        await this.DriverPasswordField.fill(password)
        await this.page.waitForTimeout(2000)

        await expect(this.DriverPasswordField).toHaveAttribute('type', 'password')
        
    }

    async DriverConfirmPwd(password) 
    {
        await this.DriverConfirmPwdField.fill(password)
        await this.page.waitForTimeout(2000)

        await expect(this.DriverConfirmPwdField).toHaveAttribute('type', 'password')
        
    }

    async DriverpwdEye() 
    {
        await this.DriverPwdEyeIcon.click()
        await this.page.waitForTimeout(2000)

        await this.DriverPwdEyeIcon.click()
        await this.page.waitForTimeout(2000)
    }

    async DriverConfirmpwdEye() 
    {
        await this.DriverConfimrPwdEyeIcon.click()
        await this.page.waitForTimeout(2000)

        await this.DriverConfimrPwdEyeIcon.click()
        await this.page.waitForTimeout(2000)
    }

    async getDriverPwd() 
    {
        return await this.DriverPasswordField.inputValue();
    }

    async VerifyPasswordMatch(password, confirmPassword) 
    {
    // Fill Password and Confirm Password fields
    await this.DriverPasswordField.fill(password);
    await this.DriverConfirmPwdField.fill(confirmPassword);
    await this.page.waitForTimeout(2000);

    // If passwords don't match, verify the error message
        if (password !== confirmPassword) {
            const errorMsg = this.page.locator('text=Passwords must match'); // adjust text if needed
            await expect(errorMsg).toBeVisible();
            await this.page.waitForTimeout(2000);
            await this.DriverPwdEyeIcon.click()
            await this.page.waitForTimeout(2000);
            await this.DriverConfimrPwdEyeIcon.click()
            await this.page.waitForTimeout(2000);

        }
    }

    async Driverusername(Username) 
    {
        await this.DriverUserName.fill(Username)
        await this.page.waitForTimeout(2000) 
        
        const isErrorVisible = await this.page.locator('text=Username already exists').isVisible();
        await this.page.waitForTimeout(2000)
    
        if (isErrorVisible) {
        // If username already ends with a number, increment it; otherwise, add "1"
        const newUsername = Username.match(/\d+$/)
            ? Username.replace(/\d+$/, (n) => parseInt(n) + 1)
            : Username + '1';
            
            // Clear old value and enter new username
            await this.DriverUserName.fill('');
            await this.page.waitForTimeout(2000)
            await this.DriverUserName.fill(newUsername);
            await this.page.waitForTimeout(2000)
        }
    }

    async ValidDriver(firstname, lastname, email) 
    {
        await this.FirstName.fill(firstname)
        await this.page.waitForTimeout(2000)
        await this.LastName.fill(lastname)
        await this.page.waitForTimeout(2000)
        await this.DriverEmail.fill(email)
        await this.page.waitForTimeout(2000)
    }

    async EnterContactNumber(contactNumberBase) 
    {
        const contactInput = this.page.locator('input[placeholder="Contact Number"]');
        const invalidError = this.page.locator('text=Invalid contact number');
        const existsError = this.page.locator('text=Contact number already exists');

        await contactInput.waitFor({ state: 'visible', timeout: 5000 });

        let currentNumber = contactNumberBase;

        for (let attempt = 0; attempt < 5; attempt++) {
            // Step 1: Detect prefix dynamically
            const placeholder = await contactInput.getAttribute('placeholder');
            const hasPrefix = placeholder?.includes('+65') || currentNumber.startsWith('+65');

            // Step 2: Ensure correct format (e.g., "+65" or no prefix)
            const prefix = hasPrefix ? '+65' : '';
            const baseDigits = currentNumber.replace('+65', '').slice(0, 4); // keep first 4 digits
            const randomDigits = Math.floor(1000 + Math.random() * 9000); // last 4 random
            currentNumber = `${prefix}${baseDigits}${randomDigits}`;

            // Step 3: Normal fill
            await contactInput.fill('');
            await contactInput.fill(currentNumber);
            await this.page.waitForTimeout(1500);

            // Step 4: Fallback fill (if React-controlled)
            const fieldValue = await contactInput.inputValue();
            if (!fieldValue || fieldValue.trim() !== currentNumber.trim()) {
            await this.page.evaluate(({ selector, value }) => {
                const input = document.querySelector(selector);
                if (input) {
                input.value = value;
                input.dispatchEvent(new Event('input', { bubbles: true }));
                input.dispatchEvent(new Event('change', { bubbles: true }));
                input.dispatchEvent(new Event('blur', { bubbles: true }));
                }
            }, { selector: 'input[placeholder="Contact Number"]', value: currentNumber });
            await this.page.waitForTimeout(1000);
            }

            //  Step 5: Check if error still visible
            const invalidVisible = await invalidError.isVisible();
            const existsVisible = await existsError.isVisible();

            if (!invalidVisible && !existsVisible) {
            // Success — contact number accepted
            return currentNumber;
            }

            // Small delay before retry
            await this.page.waitForTimeout(1000);
        }

            await this.page.waitForTimeout(2000)
    }

    async VerifySuccessToast() 
    {
    await this.SuccessToast.waitFor({ state: 'visible', timeout: 3000 });
    const message = (await this.SuccessToast.textContent())?.trim();
    return message === 'New driver profile created successfully';
    }

    async VerifyDeletedToast() 
    {
    await this.DeletedToast.waitFor({ state: 'visible', timeout: 3000 });
    const message = (await this.SuccessToast.textContent())?.trim();
    return message === 'Driver details deleted successfully';
    }

    async EnterFromTime(time) 
    {
        await this.page.evaluate(() => {
        const el = document.querySelector('input[placeholder="hh:mm aa"]')
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'center' })
        })
        await this.page.waitForTimeout(1000)
        await this.FromTime.fill(time)
        await this.page.waitForTimeout(1000)

        const fromInput = this.page.locator('input[placeholder="hh:mm aa"]').first();

        // Click and type slowly to trigger MUI events
        await fromInput.click({ force: true });
        await fromInput.pressSequentially(time, { delay: 100 });
        await this.page.keyboard.press('Tab'); // to blur and trigger validation
        await this.page.waitForTimeout(1000)
    }

    async EnterToTime(time) 
    {
        const toInput = this.page.locator('input[placeholder="hh:mm aa"]').nth(1);
        await toInput.click({ force: true });
        await toInput.pressSequentially(time, { delay: 100 });
        await this.page.keyboard.press('Tab');
        await this.page.waitForTimeout(2000);
    }

    async selectTime(clockLocator, timeString) 
    {
        const [hour, minute, period] = timeString.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i).slice(1);

        // Scroll the field into view
        await this.page.evaluate(() => {
            const el = document.querySelector('input[placeholder="hh:mm aa"]');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });

        await this.page.waitForTimeout(800);

        // Open the clock picker
        await clockLocator.click();

        const clockPopup = this.page.locator('.MuiMultiSectionDigitalClock-root');
        await clockPopup.waitFor({ state: 'visible', timeout: 5000 });

        // --- Select hour ---
        const hourList = clockPopup.locator('ul[aria-label="Select hours"]');
        await hourList.waitFor({ state: 'visible', timeout: 5000 });

        // Wait until at least one hour <li> appears
        await this.page.waitForFunction(() =>
            document.querySelectorAll('ul[aria-label="Select hours"] li[role="option"]').length > 0
        );

        const hourOption = hourList.locator(`li[aria-label="${parseInt(hour)} hours"]`);
        await hourOption.scrollIntoViewIfNeeded();
        await hourOption.click({ force: true });

        await this.page.waitForTimeout(600);

        // --- Select minute ---
        const minuteList = clockPopup.locator('ul[aria-label="Select minutes"]');
        await minuteList.waitFor({ state: 'visible', timeout: 5000 });

        await this.page.waitForFunction(() =>
            document.querySelectorAll('ul[aria-label="Select minutes"] li[role="option"]').length > 0
        );

        const minuteOption = minuteList.locator(`li[aria-label="${parseInt(minute)} minutes"]`);
        await minuteOption.scrollIntoViewIfNeeded();
        await minuteOption.click({ force: true });

        await this.page.waitForTimeout(600);

        // --- Select AM/PM ---
        const periodList = clockPopup.locator('ul[aria-label="Select meridiem"]');
        await periodList.waitFor({ state: 'visible', timeout: 5000 });

        const periodOption = periodList.locator(`li[aria-label="${period.toUpperCase()}"]`);
        await periodOption.scrollIntoViewIfNeeded();
        await periodOption.click({ force: true });

        // Close picker
        await this.page.keyboard.press('Escape');
        await this.page.waitForTimeout(1000);
    }

    async ToggleDriverShift() 
    {
        await this.page.evaluate(() => {
        const el = document.querySelector('input[name="fieldSwitch"]')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
        await this.page.waitForTimeout(1000)
        await this.DriverShift.click()

        await this.page.evaluate(() => {
        // Scroll the main page (or scrollable container if available)
        const scrollContainer = document.scrollingElement || document.documentElement;
        scrollContainer.scrollBy({ top: 300, behavior: 'smooth' }); // increase 300 to 500 if needed
        });
        await this.page.waitForTimeout(2000);
    }

    async selectDay(dayName) 
    {
    const checkbox = this.DayCheckbox[dayName]
    //await checkbox.waitFor({ state: 'visible' });
    await checkbox.check({force: true})
    }



}   

module.exports = { DriverPage }