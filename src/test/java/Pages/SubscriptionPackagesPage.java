package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class SubscriptionPackagesPage {

    WebDriver driver = null;
    String stcTvUrl = "https://subscribe.stctv.com/sa-en";
    By countryButton = By.xpath("//*[@id='country-name']");
    By countryOptions = By.xpath("//*[@id='country-selct']//*[contains(@id,'-contry-flag')]//img");
    By Title_Choose_Your_Plan = By.xpath("//h2[@class='mobile-hidden']");
    By Section_Choose_Your_Plan = By.xpath("//*[@class='plan-row plan-header']//h2/b");
    By Section_Available_Add_Ons = By.xpath("//*[@class='plan-section extensions']//h2/b");
    By Label_Switch_plans_or_cancel = By.xpath("//*[@class='plan-section']//*[text()='Switch plans or cancel anytime. Free trial for all packages.']");
    By Label_Monthly_price = By.xpath("(//*[@class='plan-section']//div[@class='plan-row'])[1]//*[text()='Monthly price after free trial']");
    By Label_discovery = By.xpath("(//*[@class='plan-section']//div[@class='plan-row'])[2]//img[contains(@src,'mlp-discovery-horizontal.svg')]");
    By Label_Free_trial = By.xpath("(//*[@class='plan-section']//div[@class='plan-row'])[3]//*[text()='Free trial']");
    By Label_Video_quality = By.xpath("(//*[@class='plan-section']//div[@class='plan-row'])[4]//*[text()='Video quality']");
    By Label_Device_access = By.xpath("(//*[@class='plan-section']//div[@class='plan-row'])[5]//*[text()='Device access']");
    By Label_Rewind = By.xpath("(//*[@class='plan-section']//div[@class='plan-row'])[6]//*[text()='Rewind']");
    By Label_Watch_offline = By.xpath("(//*[@class='plan-section']//div[@class='plan-row'])[7]//*[text()='Watch offline']");
    By Label_Watch_simultaneously = By.xpath("(//*[@class='plan-section']//div[@class='plan-row'])[8]//*[text()='Watch simultaneously']");
    By Label_Cast_to_tv = By.xpath("(//*[@class='plan-section']//div[@class='plan-row'])[9]//*[text()='Cast to tv']");
    By Label_Add_ons_available_at_an_additional_cost = By.xpath("(//*[@class='plan-section extensions']//div[@class='plan-row'])[1]//*[text()='Add-ons available at an additional cost. Add them up after you sign up for STC TV']");
    By Label_Discovery_in_section_two = By.xpath("(//*[@class='plan-section extensions']//div[@class='plan-row'])[2]//img[contains(@src,'mlp-discovery-horizontal.svg')]");
    By Label_Fight_Sport = By.xpath("(//*[@class='plan-section extensions']//div[@class='plan-row'])[3]//img[contains(@src,'fight_sport_short_fixed.svg')]");
    By Package_Lite = By.id("name-lite");
    By Package_Classic = By.id("name-classic");
    By Package_Premium = By.id("name-premium");
    By Values_Monthly_price = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[2]//div/div");
    By Values_discovery = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[3]//div");
    By Values_Free_trial = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[4]//div");
    By Values_Video_quality = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[5]//div");
    By Values_Device_access = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[6]//div");
    By Values_Rewind = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[7]//div");
    By Values_Watch_offline = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[8]//div/img");
    By Values_Watch_simultaneously = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[9]//div");
    By Values_Watch_simultaneously_img = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[9]//div[1]/img");
    By Values_Cast_to_tv = By.xpath("(//*[@class='plan-section']//div[@class='plan-names'])[10]//div/img");
    By Values_Discovery_in_section_two = By.xpath("(//*[@class='plan-section extensions']//div[@class='plan-names'])[1]//div");
    By Values_Fight_Sport = By.xpath("(//*[@class='plan-section extensions']//div[@class='plan-names'])[2]//div");
    By Most_Popular_Flag = By.xpath("//*[@class='info-flag']");
    By Packages_Strat_Free_Trial = By.xpath("//*[contains(@id,'-selection')]");

    public SubscriptionPackagesPage(WebDriver driver) {
        this.driver = driver;
    }

    public void openStcTv() {
        driver.navigate().to(stcTvUrl);
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
    }

    public boolean isTheTitleDisplayedWithTheValue(String title) {
        By locator = null;
        switch (title) {
            case "Choose Your Plan":
                locator = Title_Choose_Your_Plan;
                break;
        }
        return driver.findElement(locator).isDisplayed() && driver.findElement(locator).getText().equals(title);
    }

    public boolean isTheSectionDisplayedWithTheTitle(String title) {
        By locator = null;
        switch (title) {
            case "Choose Your Plan":
                locator = Section_Choose_Your_Plan;
                break;
            case "Available Add-Ons":
                locator = Section_Available_Add_Ons;
                break;
        }
        return driver.findElement(locator).isDisplayed() && driver.findElement(locator).getText().equals(title);
    }

    public void selectCountry(String country) {
        driver.findElement(countryButton).click();
        int countryID = -1;
        switch (country) {
            case "Bahrain":
                countryID = 0;
                break;
            case "KSA":
                countryID = 1;
                break;
            case "Kuwait":
                countryID = 2;
                break;
        }
        driver.findElements(countryOptions).get(countryID).click();
    }

    public boolean isTheLabelDisplayedInSectionOne(String label) {
        By locator = null;
        switch (label) {
            case "Switch plans or cancel anytime. Free trial for all packages.":
                locator = Label_Switch_plans_or_cancel;
                break;
            case "Monthly price after free trial":
                locator = Label_Monthly_price;
                break;
            case "discovery":
                locator = Label_discovery;
                break;
            case "Free trial":
                locator = Label_Free_trial;
                break;
            case "Video quality":
                locator = Label_Video_quality;
                break;
            case "Device access":
                locator = Label_Device_access;
                break;
            case "Rewind":
                locator = Label_Rewind;
                break;
            case "Watch offline":
                locator = Label_Watch_offline;
                break;
            case "Watch simultaneously":
                locator = Label_Watch_simultaneously;
                break;
            case "Cast to tv":
                locator = Label_Cast_to_tv;
                break;
        }
        return driver.findElement(locator).isDisplayed();
    }

    public boolean isTheLabelDisplayedInSectionTwo(String label) {
        By locator = null;
        switch (label) {
            case "Add-ons available at an additional cost. Add them up after you sign up for STC TV":
                locator = Label_Add_ons_available_at_an_additional_cost;
                break;
            case "discovery":
                locator = Label_Discovery_in_section_two;
                break;
            case "fight sport":
                locator = Label_Fight_Sport;
                break;
        }
        return driver.findElement(locator).isDisplayed();
    }

    public boolean isThePackageNameDisplayed(String packageName) {
        By locator = null;
        switch (packageName) {
            case "LITE":
                locator = Package_Lite;
                break;
            case "CLASSIC":
                locator = Package_Classic;
                break;
            case "PREMIUM":
                locator = Package_Premium;
                break;
        }
        return driver.findElement(locator).getText().equals(packageName);
    }

    public int getThPackageColumnNumber(String packageName) {
        switch (packageName) {
            case "LITE":
                return 0;
            case "CLASSIC":
                return 1;
            case "PREMIUM":
                return 2;
        }
        return -1;
    }

    public boolean isThePackageFeatureDisplayedWithTheRightText(String packageName, String value) {
        return driver.findElements(Packages_Strat_Free_Trial).get(getThPackageColumnNumber(packageName)).getText()
                .equals(value);
    }

    public boolean isThePackageFeatureDisplayedWithTheRightValueInSectionOne(String packageName, String label, String value) {
        int packageID = getThPackageColumnNumber(packageName);
        switch (label) {
            case "Monthly price after free trial":
                return driver.findElements(Values_Monthly_price).get(packageID).getText().equals(value);
            case "discovery":
                return driver.findElements(Values_discovery).get(packageID).getText().equals(value);
            case "Free trial":
                return driver.findElements(Values_Free_trial).get(packageID).getText().equals(value);
            case "Video quality":
                return driver.findElements(Values_Video_quality).get(packageID).getText().equals(value);
            case "Device access":
                return driver.findElements(Values_Device_access).get(packageID).getText().equals(value);
            case "Rewind":
                return driver.findElements(Values_Rewind).get(packageID).getText().equals(value);
            case "Watch offline":
                return driver.findElements(Values_Watch_offline).get(packageID).getAttribute("src").contains(value);
            case "Watch simultaneously":
                if (packageID == 0) {
                    return driver.findElements(Values_Watch_simultaneously_img).get(packageID).getAttribute("src").contains(value);
                } else {
                    return driver.findElements(Values_Watch_simultaneously).get(packageID).getText().equals(value);
                }
            case "Cast to tv":
                return driver.findElements(Values_Cast_to_tv).get(packageID).getAttribute("src").contains(value);
        }
        return false;
    }

    public boolean isThePackageFeatureDisplayedWithTheRightValueInSectionTwo(String packageName, String label, String value) {
        int packageID = getThPackageColumnNumber(packageName);
        By locator = null;
        switch (label) {
            case "discovery":
                locator = Values_Discovery_in_section_two;
                break;
            case "fight sport":
                locator = Values_Fight_Sport;
                break;
        }
        return driver.findElements(locator).get(packageID).getText().equals(value);
    }

    public boolean isTheMostPopularLabelDisplayed() {
        return driver.findElement(Most_Popular_Flag).isDisplayed();
    }
}
