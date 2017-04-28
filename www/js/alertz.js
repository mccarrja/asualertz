		function showHomeTab() {
			document.getElementById('home').click();
		}

		function showTab(event, tabName) {
		    // Declare all variables
		    var i, tabContentElems, tabLinkElems;

		    // Get all elements with class="tabContent" and hide them
		    tabContentElems = document.getElementsByClassName("tabContent");
		    for (i = 0; i < tabContentElems.length; i++) {
		        tabContentElems[i].style.display = "none";
		    }

		    // Get all elements with class="tabLink" and remove class "active"
		    tabLinkElems = document.getElementsByClassName("tabLink");
		    for (i = 0; i < tabLinkElems.length; i++) {
		        tabLinkElems[i].className = 
		        	tabLinkElems[i].className.replace(" active", "");
		    }

		    // Show the current tab, and add an "active" class to the link
		    document.getElementById(tabName).style.display = "block";
		    event.currentTarget.className += " active";
		}

		function onLogin(event, tabName) {

			var hide;

			hide = document.getElementById('home');

			hide.style.display = "none";
		}


/*
function loadScript(callback) {
	var script 		 = undefined;
	var googleAPIKey = "AIzaSyAH7e1P_eSIAOa_Q2bNVJJwj1bV43cmsyY";
	var googleAPIUrl = "https://maps.googleapis.com/maps/api/js";

	var srcURL 		 = googleAPIUrl + '?key=' + googleAPIKey 
							+ '&callback=' + callback;

	script 			 = document.createElement('script');
	script.type 	 = "text/javascript";
	script.async 	 = true;
	script.defer 	 = true;
	script.src 		 = srcURL;

	document.body.appendChild(script);
}

function initMap() {

string dbServer = "dmazzola.com" // Hostname
string username = "syoon34" 	 // DB username
string passowrd = "syoo7199"	 // DB password
string dbName   = "dmazzola.com" // DB name

string dbConnectionString = string.Format("server={0};uid={1};pwd={2};database={3};", dbServer, username, passowrd, dbName);

var conn = new MySql.Data.MySqlClient.MySqlCommand(query, conn);
conn.Open();

string query = "Select latitutde, longitude from locationData";

var cmd = new MySql.Data.MySqlClient.MySqlCommand(query, conn);
var reader = cmd.ExecuteReader();

while (reader.Read())
{
	var latitude = reader ["latitude"]; // get latitude data
	var longitude = reader["longitude"]; // get longitude data
}

reader.Close();
	var mapElement 		= document.getElementById('mapDiv');
	
	var geoLocationASU 	= {lat: latitude, lng: -longitude};
	var mapOptions 		= {zoom: 18, center: geoLocationASU};

	var mapper = new google.maps.Map(mapElement, mapOptions);

	var markerOptions 	= {position: geoLocationASU, map: mapper};
	var marker = new google.maps.Marker(markerOptions);
}
*/