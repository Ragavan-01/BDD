package testCases;

import java.io.IOException;



import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import initializer.DriverFunctions;
import initializer.InitializeTest;
import pageObject.HomePageObject;

public class HomePageTest extends InitializeTest{

	@Given("^open browser as (.*)$")
	public void openBrowser(String browser) throws IOException
	{
			initializer(browser);
	}
	@And("^enter url as (.*)$")
	public void enterUrl(String url)
	{
		DriverFunctions.loadUrl(url);
	}
	@And("^enter productname as (.*)$")
	public void enterProductname(String productName)
	{
		HomePageObject.enterProductName(productName);
	}
	@And("^enter mobile as (.*)$")
	public void enterMobile(String mobile)
	{
		HomePageObject.enterMobile(mobile);
	}
	@And("^enter email as (.*)$")
	public void enterEmail(String mail)
	{
		HomePageObject.enterEmail(mail);
	}
	@Then("^select productcatogry as (.*)$")
	public void selectProductCatogry(String productcat)
	{ 
	    HomePageObject.selectProductCat(productcat);
	}
	@Then("^enter productqty as (.*)$")
	public void enterProductqty(String productqty)
	{
		HomePageObject.enterProductQty(productqty);
	}
	@Then("^enter name as (.*)$")
	public void enterName(String name)
	{
	HomePageObject.enterPurchaserName(name);
	}
	@Then("^click gst$")
	public void clickGst()
	{
		HomePageObject.clickGST();
	}
	@Then("^click cod$")
	public void clickCod()
	{
		HomePageObject.clickCOD();
	}
	@Then("^click placeorder$")
	public void clickPlaceorder()
	{
		HomePageObject.clickPlaceOrder();
	}
}
