CloudFlare.define("tipjar",
    ["tipjar/config", "cloudflare/jquery1.7"],
    function(config,$)
    {		
    	function initialize() {
    		if (config.display_mode == "visits") {
    			total_visits = logVisit();
    			if (total_visits >= config.visit_threshold) {
    				displayTipjar();
    			}
    		}
    		else if (config.display_mode == "time") {
    			startTimer(config.time_threshold);
    		}
    		else if (config.display_mode == "always") {
    			displayTipjar();
    		}
    		return;
    	}
    	function logVisit() {
    		// make GET request to log_visit endpoint
    		// returns integer
    		return;
    	}
		function startOAuth() {
			var redirect_uri = "path to an html file on backend that calls a function defined here to finish the oauth process and pass a session id to parent frame"
			var url = "https://www.dwolla.com/oauth/v2/authenticate?client_id=" + config.app_key + "&response_type=code&redirect_uri=" + redirect_uri + "&scope=send"
			$("login_button").attributes.href = url;
		}

		function finishOAuth() {
			// store session id and close iframe
			// update tipjar frame with PIN form
			return;
		}

		function sendPayment() {
			// send payment amount, PIN, and session id to server
			// display response to user
			return;
		}

		function displayTipjar() {
			// shows tipjar
			return;
		}

		function startTimer(time) {
			// waits time seconds before displaying tipjar
			setTimeout(displayTipjar, 1000 * time);
		}
		
    }
)
