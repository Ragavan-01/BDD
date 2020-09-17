package initializer;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class DriverFunctions extends InitializeTest{

	public static void selectByVisibleText(WebElement element,String productqty)
	{
		Select s =new Select(element);
		s.selectByVisibleText(productqty);
		
	}
	public static void loadUrl(String url)
	{
		wd.get(url);
	}
}
