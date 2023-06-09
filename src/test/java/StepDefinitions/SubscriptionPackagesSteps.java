package StepDefinitions;

import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import io.cucumber.java.en.Then;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import Pages.SubscriptionPackagesPage;

public class SubscriptionPackagesSteps {

    WebDriver driver = null;

    @Before
    public void browserSetup() {
        String projectPath = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver", projectPath + "\\src\\test\\resources\\drivers\\chromedriver.exe");
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(40));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(40));
        driver.manage().window().maximize();
    }

    @When("^user opens stc tv$")
    public void openStcTv() {
        SubscriptionPackagesPage subscriptionPackagesPage = new SubscriptionPackagesPage(driver);
        subscriptionPackagesPage.openStcTv();
        driver.manage().timeouts().implicitlyWait(5000, TimeUnit.SECONDS);
    }

    @Then("^user should see the \"([^\"]*)\" (title|section)$")
    public void isTheTitleDisplayed(String title, String type) {
        SubscriptionPackagesPage subscriptionPackagesPage = new SubscriptionPackagesPage(driver);
        switch (type) {
            case "title":
                Assert.assertTrue(subscriptionPackagesPage.isTheTitleDisplayedWithTheValue(title));
                break;
            case "section":
                Assert.assertTrue(subscriptionPackagesPage.isTheSectionDisplayedWithTheTitle(title));
                break;
        }
    }

    @Then("^user chooses (.*)$")
    public void selectCountry(String country) {
        SubscriptionPackagesPage subscriptionPackagesPage = new SubscriptionPackagesPage(driver);
        subscriptionPackagesPage.selectCountry(country);
        driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
    }

    @Then("^user should see the \"([^\"]*)\" label in \"([^\"]*)\" section$")
    public void isTheLabelDisplayedInSection(String label, String section) {
        SubscriptionPackagesPage subscriptionPackagesPage = new SubscriptionPackagesPage(driver);
        switch (section) {
            case "Choose Your Plan":
                Assert.assertTrue(subscriptionPackagesPage.isTheLabelDisplayedInSectionOne(label));
                break;
            case "Available Add-Ons":
                Assert.assertTrue(subscriptionPackagesPage.isTheLabelDisplayedInSectionTwo(label));
                break;
        }
    }

    @And("^user should see the (.*) package$")
    public void isThePackageNameDisplayed(String packageName) {
        SubscriptionPackagesPage subscriptionPackagesPage = new SubscriptionPackagesPage(driver);
        Assert.assertTrue(subscriptionPackagesPage.isThePackageNameDisplayed(packageName));
    }

    @Then("^user should see \"([^\"]*)\" value for (.*) package$")
    public void isThePackageFeatureDisplayedWithTheRightText(String value, String packageName) {
        SubscriptionPackagesPage subscriptionPackagesPage = new SubscriptionPackagesPage(driver);
        Assert.assertTrue(subscriptionPackagesPage.isThePackageFeatureDisplayedWithTheRightText(packageName, value));
    }

    @Then("^user should see the \"([^\"]*)\" value for (.*) (plan|add-ons) package is (.*)$")
    public void isThePackageFeatureDisplayedWithTheRightValue(String label, String packageName, String section, String value) {
        SubscriptionPackagesPage subscriptionPackagesPage = new SubscriptionPackagesPage(driver);
        switch (section) {
            case "plan":
                Assert.assertTrue(subscriptionPackagesPage.isThePackageFeatureDisplayedWithTheRightValueInSectionOne(packageName, label, value));
                break;
            case "add-ons":
                Assert.assertTrue(subscriptionPackagesPage.isThePackageFeatureDisplayedWithTheRightValueInSectionTwo(packageName, label, value));
                break;
        }
    }

    @And("^user should see MOST POPULAR label for CLASSIC package$")
    public void isTheMostPopularLabelDisplayed() {
        SubscriptionPackagesPage subscriptionPackagesPage = new SubscriptionPackagesPage(driver);
        Assert.assertTrue(subscriptionPackagesPage.isTheMostPopularLabelDisplayed());
    }

    @After
    public void teardown() {
        driver.close();
        driver.quit();
    }
}
