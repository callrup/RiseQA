package pageObjects;



import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



public class Products {

	
	public WebDriver wdriver;
	
	
public Products(WebDriver pdriver)
	
	{
		wdriver = pdriver;
		PageFactory.initElements(pdriver, this);
	
	}

@FindBy(xpath ="//*[contains(text(),'Add to cart')]")
@CacheLookup
WebElement addToCart; 


@FindBy(xpath ="//*[contains(text(),'Remove')]")
@CacheLookup
WebElement removeFromCart;

@FindBy(xpath = "//*[@id='shopping_cart_container']/a")
@CacheLookup
WebElement clickCart; 

@FindBy(xpath =  "//img[@alt='Sauce Labs Backpack']")
@CacheLookup
WebElement imagewithstandarduser;

@FindBy(xpath = "//*[@id='header_container']/div[1]/div[2]/div")
@CacheLookup
WebElement pageHeader;

@FindBy(id="checkout")
@CacheLookup
WebElement checkout;

@FindBy(xpath ="//*[@id='header_container']/div[2]/span")
@CacheLookup
WebElement checkoutPage;

@FindBy(id="first-name")
@CacheLookup
WebElement firstName;

@FindBy(id="last-name")
@CacheLookup
WebElement lastName;

@FindBy(id="postal-code")
@CacheLookup
WebElement postcode;

@FindBy(id="continue")
@CacheLookup
WebElement clickContinue;

@FindBy(xpath = "//*[@id='checkout_summary_container']/div/div[2]/div[5]")
@CacheLookup
WebElement sumtotal;

@FindBy(xpath = "//*[@id='checkout_summary_container']/div/div[2]/div[6]")
@CacheLookup
WebElement sumtotalTax;

@FindBy(xpath = "//*[@id='checkout_summary_container']/div/div[2]/div[7]")
@CacheLookup
WebElement summarytotalLabel;

@FindBy(xpath ="//*[@id='checkout_summary_container']")
@CacheLookup
WebElement checkoutscreen;

@FindBy(id="finish")
@CacheLookup
WebElement clickFinish;


@FindBy(xpath = "//*[@id='checkout_complete_container']/h2")
@CacheLookup
WebElement checkoutFinish;


@FindBy(xpath = "//*[@id='back-to-products']")
@CacheLookup
WebElement clickBackHome;

@FindBy(xpath = "//*[@id='inventory_container']/div/div[1]/div[2]/div[2]/button")
@CacheLookup
WebElement clickbackpack;

@FindBy(xpath = "//*[@id='inventory_container']/div/div[4]/div[2]/div[2]/button")
@CacheLookup
WebElement clickfleecejacket;

@FindBy(xpath = "//*[@id='inventory_container']/div/div[2]/div[2]/div[2]/button")
@CacheLookup
WebElement clickrandomItem;

@FindBy(xpath = "//*[@id='inventory_container']/div/div[3]/div[2]/div[2]/button")
@CacheLookup
WebElement clickrandomBag;

@FindBy(xpath = "//*[@id='cart_contents_container']/div/div[1]/div[3]/div[2]/div[2]/div")
@CacheLookup
WebElement itemPrice1;

@FindBy(xpath = "//*[@id='cart_contents_container']/div/div[1]/div[4]/div[2]/div[2]/div")
@CacheLookup
WebElement itemPrice2;

@FindBy(xpath = "//*[@id='cart_contents_container']/div/div[1]/div[6]/div[2]/div[2]/div")
@CacheLookup
WebElement itemPrice3;

@FindBy(xpath = "//*[@id='cart_contents_container']/div/div[1]/div[5]/div[2]/div[2]/div")
@CacheLookup
WebElement itemPrice4;



public void elementisdisplayed(WebElement element , long timeout)
{
	try {
		WebDriverWait wait = new WebDriverWait(wdriver, timeout);
		wait.until(ExpectedConditions.visibilityOf(element));
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}
public void addItemtocart()
{
	
	elementisdisplayed(addToCart, 20);
	addToCart.click();
}

public void addmultipleItemstoCart() 
{
	elementisdisplayed(clickbackpack, 20);
	clickrandomBag.click();
	clickrandomItem.click();
	
   if (clickbackpack.getText().equalsIgnoreCase("Add to cart"))
   {
	   clickbackpack.click();
   }
	   
	else 
	{
		   clickbackpack.click();
		   clickbackpack.click();
	 }
   
   if (clickfleecejacket.getText().equalsIgnoreCase("Add to cart"))
   {
	   clickfleecejacket.click();
   }
	   
	else 
	{
		clickfleecejacket.click();
		clickfleecejacket.click();
	 }
   
}

public void clicktheshoppingcart()
{
	elementisdisplayed(clickCart, 20);
	clickCart.click();
}



public void validateproducthomepage(){
    //Assertion
	elementisdisplayed(pageHeader, 30);
}

public void clickcheckout()
{
	elementisdisplayed(checkout, 20);
	checkout.click();
}




public void clickContinue()
{
	clickContinue.click();
}



public void validateorder()
{
	elementisdisplayed(checkoutFinish, 20);
	Assert.assertEquals(checkoutFinish.getText(),"THANK YOU FOR YOUR ORDER");
	clickBackHome.click();
}

public void compareamountoftheproduct()
{
	String item1Cost = itemPrice1.getText();
//	String[] arrayOfStr = item1Cost.split(":");
//	String itemprc1 = arrayOfStr[1];
	String priceofitem1 = item1Cost.replace("$","").trim() ;
    double inventoryItem1 = Double.parseDouble(priceofitem1);
    
    
    String item2Cost = itemPrice2.getText();
//	String[] arrOfString = item2Cost.split(":");
//	String itemprc2 = arrOfString[1];
	String priceofitem2 = item2Cost.replace("$","").trim() ;
    double inventoryItem2 = Double.parseDouble(priceofitem2);
    
    
    
    String item3Cost = itemPrice3.getText();
//	String[] arrOfStr3 = item3Cost.split(":");
//	String itemprc3 = arrOfStr3[1];
	String priceofitem3 = item3Cost.replace("$","").trim() ;
    double inventoryItem3 = Double.parseDouble(priceofitem3);
    
    
    String item4Cost = itemPrice4.getText();
//	String[] arrOfStr4 = item4Cost.split(":");
//	String itemprc4 = arrOfStr4[1];
	String priceofitem4 = item4Cost.replace("$","").trim() ;
    double inventoryItem4 = Double.parseDouble(priceofitem4);
    
    double minprice1 = Double.min(inventoryItem1,inventoryItem2);
    double minprice2= Double.min(inventoryItem3,inventoryItem4);
    
    if (Double.compare(minprice1, minprice2) < 0) {
    	 
        System.out.println(minprice1);
    }
    else {

        System.out.println(minprice2);
    }
	
}


}
