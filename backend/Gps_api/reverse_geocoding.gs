var today = new Date();
var date = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear(); // use getFullYear() method
var today_str = month + "/" + date + "/" + year;
var url_Consolidated =
  "https://docs.google.com/spreadsheets/d/1gCU47x7bto4obNy0DLjcVtOCyQp1SeOrmxyf8PJEBY0/edit#gid=0";
var apikey = "2cf93062423643f8a47acf01d1b10647";
function reverse_geocoding() {
  var startrow = 2365,
    endrow = 2368;
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
    reverse_api = "AC";
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
    var lat = gisdata_row[10];
    var long = gisdata_row[11];
    api_url =
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      lat +
      "%2C" +
      long +
      "&key=" +
      apikey;
    //https://geocode.maps.co/search?q=515004&api_key=65f286cdcd04a150725873cfs9dbf5c
    Logger.log(api_url);
    try {
      var returnvalue = UrlFetchApp.fetch(api_url).getContentText();
      processed += 1;
      datasource.getRange(reverse_api + cell).setValue(returnvalue);
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
    country = "AD";
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
    api_val = gisdata_row[28];

    try {
      var countryval = extractCountryName(api_val);
      processed += 1;
      datasource.getRange(country + cell).setValue(countryval);
    } catch (e) {
      Logger.log("the error is" + e);
      datasource.getRange(country + cell).setValue("NULL");
    }
  }
}

function extractCountryName(response) {
  try {
    var data = JSON.parse(response);
    if (
      data.results &&
      data.results.length > 0 &&
      data.results[0].components &&
      data.results[0].components.country
    ) {
      return data.results[0].components.country;
    } else {
      return "Country name not found in JSON response";
    }
  } catch (error) {
    return "Error extracting country name: " + error.message;
  }
}
