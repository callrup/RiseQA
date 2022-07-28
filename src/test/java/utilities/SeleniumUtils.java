package utilities;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.imageio.ImageIO;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import pageObjects.Products;



public class SeleniumUtils {
	
	public static WebDriver driver;
	

	
	public static String takeScreenshot(String imgName) throws WebDriverException {
        String imgPath = imgName + "_" + getDateTime() + ".png";
        Path path = Paths.get("TestReport/screenshots", imgPath);
        try {
            Files.createDirectories(path.getParent());
            FileOutputStream fileOutputStream = new FileOutputStream(path.toString());
            fileOutputStream.write(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES));
            fileOutputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return imgPath;
    }
	
	private static String getDateTime() {
        return new SimpleDateFormat("yyMMdd-HHmmss").format(Calendar.getInstance().getTime());
    }
	
	
	public static void getpageloaded()
	{
		 JavascriptExecutor j = (JavascriptExecutor) driver;
	      j.executeScript("return document.readyState")
	      .toString().equals("complete");
	}
	
	
	
	
	
	public static void scrollToElement(String loc)
	{
		JavascriptExecutor js = (JavascriptExecutor) driver;
		WebElement ele =driver.findElement(By.xpath(loc));
		js.executeScript("arguments[0].scrollIntoView();", ele);
	}

}
