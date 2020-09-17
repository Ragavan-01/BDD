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
  "duration": 4213696200,
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
  "duration": 2717422000,
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
  "duration": 118391100,
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
  "duration": 65891900,
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
  "duration": 74189400,
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
  "duration": 288193800,
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
  "duration": 65983200,
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
  "duration": 74648200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 72971900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 183639500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 4737692800,
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
  "duration": 32347200,
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
  "duration": 2388633700,
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
  "duration": 92399200,
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
  "duration": 121235700,
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
  "duration": 91151900,
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
  "duration": 312693500,
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
  "duration": 66082800,
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
  "duration": 78739200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 86457800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 106974500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 673554100,
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
  "duration": 28102400,
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
  "duration": 861966400,
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
  "duration": 61057800,
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
  "duration": 67605900,
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
  "duration": 79772300,
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
  "duration": 163986500,
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
  "duration": 79056900,
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
  "duration": 51980500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 82232300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 114051500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 687071300,
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
  "duration": 21524900,
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
  "duration": 1278890900,
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
  "duration": 68366500,
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
  "duration": 70641800,
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
  "duration": 76736800,
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
  "duration": 174468900,
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
  "duration": 62048300,
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
  "duration": 76761600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 90052500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 108901000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 882313600,
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
  "duration": 27678900,
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
  "duration": 953155600,
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
  "duration": 78830000,
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
  "duration": 65361300,
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
  "duration": 76572200,
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
  "duration": 194134500,
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
  "duration": 69016100,
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
  "duration": 59533400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickGst()"
});
formatter.result({
  "duration": 82816800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickCod()"
});
formatter.result({
  "duration": 95893700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickPlaceorder()"
});
formatter.result({
  "duration": 708675100,
  "status": "passed"
});
});