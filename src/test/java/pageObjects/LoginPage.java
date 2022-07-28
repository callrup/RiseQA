package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.SeleniumUtils;

public class LoginPage {

	public WebDriver ldriver;
	public Products prd;
	
	public LoginPage(WebDriver rdriver)
	
	{
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(id="user-name")
	@CacheLookup
	WebElement txtEmail;
	
	@FindBy(id="password")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy(id="login-button")
	@CacheLookup
	WebElement btnLogin;
	
	@FindBy(xpath  ="//*[@id='react-burger-menu-btn']")
	@CacheLookup
	WebElement leftbarmenu;
	
	@FindBy(xpath = "//*[@id='logout_sidebar_link']")
	@CacheLookup
	WebElement logout;
	
	@FindBy(xpath = "//*[@id='login_button_container']/div/form/div[3]/h3")
	@CacheLookup
	WebElement lockedOutuser;
	
	public void setUserName(String uname)
	{
		prd = new Products(ldriver);
		txtEmail.clear();
		txtEmail.sendKeys(uname);
	}
	
	public void setPassword(String pwd)
	{
		txtPassword.clear();
		txtPassword.sendKeys(pwd);
	}
	
	
	public void clickLogin()
	{
		btnLogin.click();
	}
	
	public void logout()
	{
		leftbarmenu.click();
		prd.elementisdisplayed(logout, 20);
		logout.click();
		
	}
	
	public void validatelockedoutusermessage()
	{
		lockedOutuser.getText();
	}
}
