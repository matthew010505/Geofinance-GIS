var today = new Date();
var date = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear(); // use getFullYear() method
var today_str = month + "/" + date + "/" + year;
var url_Consolidated =
  "https://docs.google.com/spreadsheets/d/1gCU47x7bto4obNy0DLjcVtOCyQp1SeOrmxyf8PJEBY0/edit#gid=0";
var apikey = "66f45ed7c4f04b47b2edeb910056e9ca";

function gps_api_test() {
  var startrow = 2000,
    endrow = 3005;
  gps(startrow, endrow);
  extract(startrow, endrow);
}

function gps(startrow, endrow) {
  var terratech_sheet = SpreadsheetApp.openByUrl(url_Consolidated);
  var datasource = terratech_sheet.getSheetByName("Consolidated");
  var processed = 0,
    offset = 2,
    range_end = datasource.getLastRow(),
    range_col = datasource.getLastColumn();
  var pincode,
    api_url,
    api_response = "J",
    latitude = "K",
    longitude = "L";
  Logger.log(range_end + " start " + range_col + " end ");
  var gis_data = datasource.getRange(1, 1, range_end, range_col).getValues();
  if (startrow < offset) {
    startrow = offset;
  }
  if (endrow > range_end) {
    endrow = range_end;
  }
  for (var i = startrow; i < endrow; i++) {
    var gisdata_row = gis_data[i];
    var cell = i + offset - 1;
    pincode = gisdata_row[8];
    api_url =
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      pincode +
      "&key=" +
      apikey;
    //https://geocode.maps.co/search?q=515004&api_key=65f286cdcd04a150725873cfs9dbf5c
    Logger.log(api_url);
    try {
      var returnvalue = UrlFetchApp.fetch(api_url).getContentText();
      processed += 1;
      datasource.getRange(api_response + cell).setValue(returnvalue);
    } catch (e) {
      Logger.log("the error is" + e);
    }
  }
}

function extract(startrow, endrow) {
  var terratech_sheet = SpreadsheetApp.openByUrl(url_Consolidated);
  var datasource = terratech_sheet.getSheetByName("Consolidated");
  var processed = 0,
    offset = 2,
    range_end = datasource.getLastRow(),
    range_col = datasource.getLastColumn();
  var api_val,
    latitude = "K",
    longitude = "L";
  Logger.log(range_end + " start " + range_col + " end ");
  var gis_data = datasource.getRange(1, 1, range_end, range_col).getValues();
  if (startrow < offset) {
    startrow = offset;
  }
  if (endrow > range_end) {
    endrow = range_end;
  }
  for (var i = startrow; i < endrow; i++) {
    var gisdata_row = gis_data[i];
    var cell = i + offset - 1;
    api_val = gisdata_row[9];

    try {
      var coordinates = extractCoordinates(api_val);
      processed += 1;
      datasource.getRange(latitude + cell).setValue(coordinates.lat);
      datasource.getRange(longitude + cell).setValue(coordinates.long);
    } catch (e) {
      Logger.log("the error is" + e);
      datasource.getRange(latitude + cell).setValue("NULL");
      datasource.getRange(longitude + cell).setValue("NULL");
    }
  }
}

function extractCoordinates(response) {
  try {
    var parsedResponse = JSON.parse(response);
    var results = parsedResponse.results;

    // Check if results array exists and has at least one element
    if (results && results.length > 0) {
      var latitude = results[0].geometry.lat;
      var longitude = results[0].geometry.lng;

      Logger.log("Latitude: " + latitude);
      Logger.log("Longitude: " + longitude);

      return { lat: latitude, long: longitude };
    } else {
      Logger.log("No results found in the response");
    }
  } catch (error) {
    Logger.log("Error extracting coordinates: " + error);
  }
}
