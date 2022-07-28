package stepDefinitions;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.java.Function;
import pageObjects.LoginPage;
import utilities.SeleniumUtils;
import pageObjects.Products;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.comparison.ImageDiff;
import ru.yandex.qatools.ashot.comparison.ImageDiffer;
import ru.yandex.qatools.ashot.coordinates.WebDriverCoordsProvider;



public class Steps extends Base{

	public WebDriver driver;
	public LoginPage lp;
	public static String status = "passed";
	

	
	@Given("^I launch the browser$")
	public void user_Launch_browser()
	{
		
		//initializedriver;
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir") + File.separator+ "Drivers"+ File.separator	+"chromedriver.exe");
		driver = new ChromeDriver();
		lp = new LoginPage(driver);
		pr= new Products(driver);
		driver.manage().window().maximize();
		//delete cookies
		driver.manage().deleteAllCookies();
	}
	
	@When("^I open the URL \"([^\"]*)\"$")
	public void user_opwn_url(String url)
	{
		driver.get(url);	
	}
	
	@And("^I enter Username as \"([^\"]*)\"$")
	public void set_username(String username)
	{
		lp.setUserName(username);
		
	
	}
	
	@And("^I enter Password as \"([^\"]*)\"$")
	public void set_password(String password)
	{
		lp.setPassword(password);
	}
	
	
	@And("^I click the login button$")
	public void click_on_Login()
	{
		lp.clickLogin();
		
	}
	
	@Then("^I land into the homePage as \"([^\"]*)\"$")
	public void Page_title_shouldbe(String title)
	{
		pr.validateproducthomepage();
		Assert.assertEquals(title, driver.getTitle());
			
	}
	
	@Then("^Check User is locked out$")
	public void validate_locked_out_user()
	{
		String errormessage = driver.findElement(By.xpath("//*[@id='login_button_container']/div/form/div[3]/h3")).getText();
	    
		Assert.assertEquals(errormessage, "Epic sadface: Sorry, this user has been locked out.");
		
	}
	
	

	
	@Then("^I add item to the cart$")
	public void add_item_to_cart()
	{
		
		pr.addItemtocart();
		pr.clicktheshoppingcart();
	}
	
	@Then("^I add items to the cart$")
	public void add_items_to_cart()
	{
		pr.addmultipleItemstoCart();
	     
		pr.clicktheshoppingcart();
	}
	
	@Then("^I compare and find the minimum price$")
	public void find_minimum_price()
	{
		pr.compareamountoftheproduct();
	}
	
	
	
	@When("^I place the order$")
	public void place_the_order()
	{

		pr.clickcheckout();

	}
	
	
	
	

	
	@And("^I check the order completion and back to home$")
	public void validate_checkout_complete()
	{
		pr.validateorder();
	}
	
	@Then("^I click on logout link$")
	public void Click_on_logout_link()
	{
		lp.logout();
	
	}
	
	@Then("^I close the browser$")
	public void close_browser()
	{
		
		driver.quit();
	}
}
