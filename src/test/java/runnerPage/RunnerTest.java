package runnerPage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format= {"pretty","html:reports"},features={"C:\\WORKSPACE\\BDD\\src\\test\\resources\\feature"},tags={"@logintag"},glue={"testCases"},monochrome = true)
public class RunnerTest {

}
