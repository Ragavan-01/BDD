package pageObject;


import org.openqa.selenium.WebElement;


import initializer.DriverFunctions;
import initializer.InitializeTest;

public class HomePageObject extends InitializeTest {

	public static void enterProductName(String productName)
	{
		getWebelement("HOMEPAGE_TYPE_PRODUCTNAME_ID").sendKeys(productName);;
	}
	public static void enterMobile(String mobile)
	{
		getWebelement("HOMEPAGE_TYPE_MOBILE_ID").sendKeys(mobile);
	}
	public static void enterEmail(String mail)
	{
		getWebelement("HOMEPAGE_TYPE_EMAIL_ID").sendKeys(mail);
	}
	public static void selectProductCat(String qty)
	{
		WebElement element=getWebelement("HOMEPAGE_SELECT_PRODUCTCAT_ID");
		DriverFunctions.selectByVisibleText(element, qty);
	}
	public static void enterProductQty(String quantity)
	{
		getWebelement("HOMEPAGE_TYPE_PRODUCTQTY_ID").sendKeys(quantity);
	}
	public static void enterPurchaserName(String name)
	{
		getWebelement("HOMEPAGE_TYPE_NAME_ID").sendKeys(name);
	}
	public static void clickGST()
	{
		getWebelement("HOMEPAGE_CLICK_GST_ID").click();
	}
	public static void clickCOD()
	{
		getWebelement("HOMEPAGE_CLICK_COD_ID").click();
	}
	public static void clickPlaceOrder()
	{
		getWebelement("HOMEPAGE_CLICK_PLACEORDER_ID").click();
		}
	
}
