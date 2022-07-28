package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(
		features=".//Features/RiseTest.feature",
		glue="stepDefinitions",
		dryRun=false,
		monochrome=true,
	    tags= {"@EndToEndAcceotanceTest"},
		plugin ={"json:target/cucumber.json"}
)

public class TestRunner {

}
