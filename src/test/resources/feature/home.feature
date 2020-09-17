@logintag
Feature: Am going to fill Simple form 
Scenario Outline: Enter details with valid data

Given open browser as <browser>
And enter url as <url>
And enter productname as <product>
And enter mobile as <mobile>
And enter email as <email>
Then select productcatogry as <productcat>
Then enter productqty as <productqty>
Then enter name as <name>
Then click gst 
Then click cod
Then click placeorder

Examples:
|browser|url|product|mobile|email|productcat|productqty|name|
|firefox|http://djangovinoth.pythonanywhere.com/simpleform/|abcd1|89474|abc@1234.com|Electrical|11|data1|
|firefox|http://djangovinoth.pythonanywhere.com/simpleform/|abcd2|89464|abc@1235.com|Electrical|12|data2|
|firefox|http://djangovinoth.pythonanywhere.com/simpleform/|abcd3|89454|abc@1236.com|Electrical|14|data3|
|firefox|http://djangovinoth.pythonanywhere.com/simpleform/|abcd4|89444|abc@1237.com|Electrical|15|data4|
|firefox|http://djangovinoth.pythonanywhere.com/simpleform/|abcd5|89474|abc@1238.com|Electrical|18|data5|
			