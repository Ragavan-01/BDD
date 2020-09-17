$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 2,
  "name": "Am going to fill Simple form",
  "description": "",
  "id": "am-going-to-fill-simple-form",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@logintag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Enter details with valid data",
  "description": "",
  "id": "am-going-to-fill-simple-form;enter-details-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "open browser as \u003cbrowser\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter url as \u003curl\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter productname as \u003cproduct\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter mobile as \u003cmobile\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter email as \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select productcatogry as \u003cproductcat\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter productqty as \u003cproductqty\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter name as \u003cname\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click gst",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click cod",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click placeorder",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;",
  "rows": [
    {
      "cells": [
        "browser",
        "url",
        "product",
        "mobile",
        "email",
        "productcat",
        "productqty",
        "name"
      ],
      "line": 18,
      "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;1"
    },
    {
      "cells": [
        "firefox",
        "http://djangovinoth.pythonanywhere.com/simpleform/",
        "abcd1",
        "89474",
        "abc@1234.com",
        "Electrical",
        "11",
        "data1"
      ],
      "line": 19,
      "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;2"
    },
    {
      "cells": [
        "firefox",
        "http://djangovinoth.pythonanywhere.com/simpleform/",
        "abcd2",
        "89464",
        "abc@1235.com",
        "Electrical",
        "12",
        "data2"
      ],
      "line": 20,
      "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;3"
    },
    {
      "cells": [
        "firefox",
        "http://djangovinoth.pythonanywhere.com/simpleform/",
        "abcd3",
        "89454",
        "abc@1236.com",
        "Electrical",
        "14",
        "data3"
      ],
      "line": 21,
      "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;4"
    },
    {
      "cells": [
        "firefox",
        "http://djangovinoth.pythonanywhere.com/simpleform/",
        "abcd4",
        "89444",
        "abc@1237.com",
        "Electrical",
        "15",
        "data4"
      ],
      "line": 22,
      "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;5"
    },
    {
      "cells": [
        "firefox",
        "http://djangovinoth.pythonanywhere.com/simpleform/",
        "abcd5",
        "89474",
        "abc@1238.com",
        "Electrical",
        "18",
        "data5"
      ],
      "line": 23,
      "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Enter details with valid data",
  "description": "",
  "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@logintag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter url as http://djangovinoth.pythonanywhere.com/simpleform/",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter productname as abcd1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter mobile as 89474",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter email as abc@1234.com",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select productcatogry as Electrical",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter productqty as 11",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter name as data1",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click gst",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click cod",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click placeorder",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 4386384401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/simpleform/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterUrl(String)"
});
formatter.result({
  "duration": 1710051000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1",
      "offset": 21
    }
  ],
  "location": "HomePageTest.enterProductname(String)"
});
formatter.result({
  "duration": 158087999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "89474",
      "offset": 16
    }
  ],
  "location": "HomePageTest.enterMobile(String)"
});
formatter.result({
  "duration": 97723299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@1234.com",
      "offset": 15
    }
  ],
  "location": "HomePageTest.enterEmail(String)"
});
formatter.result({
  "duration": 100117300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electrical",
      "offset": 25
    }
  ],
  "location": "HomePageTest.selectProductCatogry(String)"
});
formatter.result({
  "duration": 364073999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 20
    }
  ],
  "location": "HomePageTest.enterProductqty(String)"
});
formatter.result({
  "duration": 105226100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data1",
      "offset": 14
    }
  ],
  "location": "HomePageTest.enterName(String)"
});
formatter.result({
  "duration": 91155100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 804900,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat testCases.HomePageTest.clickGst(HomePageTest.java:60)\r\n\tat ✽.Then click gst(home.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/jpeg", "embedded0.jpg");
formatter.after({
  "duration": 133998000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Enter details with valid data",
  "description": "",
  "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@logintag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter url as http://djangovinoth.pythonanywhere.com/simpleform/",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter productname as abcd2",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter mobile as 89464",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter email as abc@1235.com",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select productcatogry as Electrical",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter productqty as 12",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter name as data2",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click gst",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click cod",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click placeorder",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 24656800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/simpleform/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterUrl(String)"
});
formatter.result({
  "duration": 1265258400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd2",
      "offset": 21
    }
  ],
  "location": "HomePageTest.enterProductname(String)"
});
formatter.result({
  "duration": 77024100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "89464",
      "offset": 16
    }
  ],
  "location": "HomePageTest.enterMobile(String)"
});
formatter.result({
  "duration": 84792800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@1235.com",
      "offset": 15
    }
  ],
  "location": "HomePageTest.enterEmail(String)"
});
formatter.result({
  "duration": 78233500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electrical",
      "offset": 25
    }
  ],
  "location": "HomePageTest.selectProductCatogry(String)"
});
formatter.result({
  "duration": 209091701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 20
    }
  ],
  "location": "HomePageTest.enterProductqty(String)"
});
formatter.result({
  "duration": 65864101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data2",
      "offset": 14
    }
  ],
  "location": "HomePageTest.enterName(String)"
});
formatter.result({
  "duration": 55769700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 180700,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat testCases.HomePageTest.clickGst(HomePageTest.java:60)\r\n\tat ✽.Then click gst(home.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/jpeg", "embedded1.jpg");
formatter.after({
  "duration": 158851801,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Enter details with valid data",
  "description": "",
  "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@logintag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter url as http://djangovinoth.pythonanywhere.com/simpleform/",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter productname as abcd3",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter mobile as 89454",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter email as abc@1236.com",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select productcatogry as Electrical",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter productqty as 14",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter name as data3",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click gst",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click cod",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click placeorder",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 25476500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/simpleform/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterUrl(String)"
});
formatter.result({
  "duration": 606282000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd3",
      "offset": 21
    }
  ],
  "location": "HomePageTest.enterProductname(String)"
});
formatter.result({
  "duration": 61407000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "89454",
      "offset": 16
    }
  ],
  "location": "HomePageTest.enterMobile(String)"
});
formatter.result({
  "duration": 49056601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@1236.com",
      "offset": 15
    }
  ],
  "location": "HomePageTest.enterEmail(String)"
});
formatter.result({
  "duration": 98042901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electrical",
      "offset": 25
    }
  ],
  "location": "HomePageTest.selectProductCatogry(String)"
});
formatter.result({
  "duration": 170336999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14",
      "offset": 20
    }
  ],
  "location": "HomePageTest.enterProductqty(String)"
});
formatter.result({
  "duration": 66017400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data3",
      "offset": 14
    }
  ],
  "location": "HomePageTest.enterName(String)"
});
formatter.result({
  "duration": 65863300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 172700,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat testCases.HomePageTest.clickGst(HomePageTest.java:60)\r\n\tat ✽.Then click gst(home.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/jpeg", "embedded2.jpg");
formatter.after({
  "duration": 80128800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Enter details with valid data",
  "description": "",
  "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@logintag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter url as http://djangovinoth.pythonanywhere.com/simpleform/",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter productname as abcd4",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter mobile as 89444",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter email as abc@1237.com",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select productcatogry as Electrical",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter productqty as 15",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter name as data4",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click gst",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click cod",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click placeorder",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 65121600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/simpleform/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterUrl(String)"
});
formatter.result({
  "duration": 2553051800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd4",
      "offset": 21
    }
  ],
  "location": "HomePageTest.enterProductname(String)"
});
formatter.result({
  "duration": 100347000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "89444",
      "offset": 16
    }
  ],
  "location": "HomePageTest.enterMobile(String)"
});
formatter.result({
  "duration": 77027100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@1237.com",
      "offset": 15
    }
  ],
  "location": "HomePageTest.enterEmail(String)"
});
formatter.result({
  "duration": 87380001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electrical",
      "offset": 25
    }
  ],
  "location": "HomePageTest.selectProductCatogry(String)"
});
formatter.result({
  "duration": 214488400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 20
    }
  ],
  "location": "HomePageTest.enterProductqty(String)"
});
formatter.result({
  "duration": 50856400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data4",
      "offset": 14
    }
  ],
  "location": "HomePageTest.enterName(String)"
});
formatter.result({
  "duration": 61463099,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 389900,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat testCases.HomePageTest.clickGst(HomePageTest.java:60)\r\n\tat ✽.Then click gst(home.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/jpeg", "embedded3.jpg");
formatter.after({
  "duration": 97438700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Enter details with valid data",
  "description": "",
  "id": "am-going-to-fill-simple-form;enter-details-with-valid-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@logintag"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "enter url as http://djangovinoth.pythonanywhere.com/simpleform/",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "enter productname as abcd5",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter mobile as 89474",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter email as abc@1238.com",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select productcatogry as Electrical",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter productqty as 18",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter name as data5",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click gst",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click cod",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click placeorder",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 51385300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/simpleform/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterUrl(String)"
});
formatter.result({
  "duration": 633407901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd5",
      "offset": 21
    }
  ],
  "location": "HomePageTest.enterProductname(String)"
});
formatter.result({
  "duration": 63048900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "89474",
      "offset": 16
    }
  ],
  "location": "HomePageTest.enterMobile(String)"
});
formatter.result({
  "duration": 94109900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@1238.com",
      "offset": 15
    }
  ],
  "location": "HomePageTest.enterEmail(String)"
});
formatter.result({
  "duration": 94395699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electrical",
      "offset": 25
    }
  ],
  "location": "HomePageTest.selectProductCatogry(String)"
});
formatter.result({
  "duration": 221069300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 20
    }
  ],
  "location": "HomePageTest.enterProductqty(String)"
});
formatter.result({
  "duration": 78178900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data5",
      "offset": 14
    }
  ],
  "location": "HomePageTest.enterName(String)"
});
formatter.result({
  "duration": 90094900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 669400,
  "error_message": "java.lang.ArithmeticException: / by zero\r\n\tat testCases.HomePageTest.clickGst(HomePageTest.java:60)\r\n\tat ✽.Then click gst(home.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/jpeg", "embedded4.jpg");
formatter.after({
  "duration": 105918000,
  "status": "passed"
});
});