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

<!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->

/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	loadScript('initMap');
}

/* 
 our WebApp version had this at the bottom of the body section:

 <script async defer	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAH7e1P_eSIAOa_Q2bNVJJwj1bV43cmsyY&callback=initMap">
	because of the async and defer, we need to generate this after "deviceready"
	and call the google api js url, then call initMap()

	async: this might take a while to load, keep working on loading the DOM
	defer: dont run the script until the DOM is loaded
	src: the url and options
		https://maps.googleapis.com/maps/api/js - what to load
		?key=AIzaSyAH7e1P_eSIAOa_Q2bNVJJwj1bV43cmsyY - my entitlement
		&callback=initMap - once loaded, entitled, and ran, call initMap()

	loadScript, creates the <script> element with the correc info, appends
	it to the end of the <body> tag, and executes it with the callback
 */

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
	var mapElement 		= document.getElementById('mapDiv');
	
	var geoLocationASU 	= {lat: 33.4166317, lng: -111.9341069};
	var mapOptions 		= {zoom: 18, center: geoLocationASU};

	var mapper = new google.maps.Map(mapElement, mapOptions);

	var markerOptions 	= {position: geoLocationASU, map: mapper};
	var marker = new google.maps.Marker(markerOptions);
}

<!--//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->


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