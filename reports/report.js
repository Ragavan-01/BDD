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
  "duration": 3129226000,
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
  "duration": 3154916999,
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
  "duration": 93682799,
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
  "duration": 60449400,
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
  "duration": 61040500,
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
  "duration": 195056001,
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
  "duration": 38336600,
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
  "duration": 51586799,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 99038800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 121982600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 2255132800,
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
  "duration": 18437600,
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
  "duration": 772292600,
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
  "duration": 49705200,
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
  "duration": 56432801,
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
  "duration": 58085401,
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
  "duration": 132041800,
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
  "duration": 41724401,
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
  "duration": 55195900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 68156300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 69115401,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 656878400,
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
  "duration": 13606800,
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
  "duration": 557696300,
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
  "duration": 57472101,
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
  "duration": 50012100,
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
  "duration": 61782401,
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
  "duration": 145390500,
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
  "duration": 46299499,
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
  "duration": 48038201,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 70087699,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 77733700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 554561301,
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
  "duration": 15026599,
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
  "duration": 514515700,
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
  "duration": 55071800,
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
  "duration": 54214900,
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
  "duration": 58038900,
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
  "duration": 164828800,
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
  "duration": 49552901,
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
  "duration": 61092100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 84523900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 74394500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 650560599,
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
  "duration": 43133500,
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
  "duration": 512211099,
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
  "duration": 52468401,
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
  "duration": 59874999,
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
  "duration": 70735000,
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
  "duration": 133481199,
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
  "duration": 48618899,
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
  "duration": 56047599,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 75598001,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 79571800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 567994301,
  "status": "passed"
});
});