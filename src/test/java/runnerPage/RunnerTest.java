package runnerPage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"com.cucumber.listener.ExtentCucumberFormatter:output/report.html",},format= {"pretty","html:reports","json:C:\\WORKSPACE\\BDD\\json//cucumber.json"},features={"C:\\WORKSPACE\\BDD\\src\\test\\resources\\feature"},tags={"@logintag"},glue={"testCases"},monochrome = true)
public class RunnerTest {

}

// java -jar cucumber-sandwich.jar -n -f C:\WORKSPACE\BDD\json -o C:\WORKSPACE\BDD\sandwichreport
