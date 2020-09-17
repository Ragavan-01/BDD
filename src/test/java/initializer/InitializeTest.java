package initializer;

import java.io.File;
import java.io.FileInputStream;

import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class InitializeTest {

	public static WebDriver wd=null;
	public static Properties locatorprop=null;
	public static FileInputStream locatorfis=null;
	
	
	public static void initializer(String browser) throws IOException {
		//Locate the Properties
		locatorfis=new FileInputStream(new File("C:\\WORKSPACE\\BDD\\src\\test\\resources\\config\\locator.properties"));
		 locatorprop=new Properties();
		locatorprop.load(locatorfis);
		
		
		if(wd==null) {
		if(browser.contains("firefox"))
		{
			System.out.println("firefoxdiver");
			wd=new FirefoxDriver();
			
		}
		else if(browser.contains("chrome")) 
		{
			wd=new ChromeDriver();
		}
	}
		wd.manage().window().maximize();
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	public static WebElement getWebelement(String id) {
		return wd.findElement(By.id(locatorprop.getProperty(id)));
		
	}
}
