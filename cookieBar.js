/*!
 * CookieBar 
 * David MOTTET
 */


(function (window) {
	'use strict';

	if (!!window.cookieShop) {
		return window.cookieShop;
	}

	var document = window.document;

	var cookieShop =(function  () {

		/* Custom HERE */
		//name of cookie
		var flavor = "chocolateCookie";
		//text
		var frosting = "En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies conformément à notre politique de données personnelles.";
		//bar
		var ingerdient = "background: #161616; position: fixed; width: 100%; color: #ffffff; font-family: Helvetica, Arial, sans-serif; z-index: 1510; font-size: 12px; cursor: pointer; margin: 0 auto; height: 30px; line-height: 30px; text-align: center; top: 0; left: 0; right: 0;";
		//button
		var chip_bottel = "position: absolute; top: 0; bottom: 0; right: 20px; width: 20px; height: 2px; background-color: #ffffff; margin: auto;";
		//cross
		var spreadBlack = "-webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -o-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);";
		var spreadWhite = "-webkit-transform: rotate(90deg); -moz-transform: rotate(90deg); -o-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg); right: 0;";



		function cookCookie (_flavor, _hunger, _size) {
			if (_size) {
				var date = new Date();
				date.setTime(date.getTime()+(_size*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}else{
				var expires = "";
			}
			document.cookie = _flavor+"="+_hunger+expires+"; path=/";
		}

		function tasteCookie(_flavor) {
			var flavorEQ = _flavor + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(flavorEQ) == 0) return c.substring(flavorEQ.length,c.length);
			}
			return null;
		}

		function showCookies () {

			var oven = document.createElement("div");
			oven.id = "cookies";
			oven.style.cssText = ingerdient;

			var cookie = document.createElement("div");
			cookie.textContent = frosting;

			var chipBlack = document.createElement("span");
			chipBlack.style.cssText = chip_bottel+spreadBlack;

			var chipWhite = document.createElement("span");
			chipWhite.style.cssText = chip_bottel+spreadWhite;


			var table = document.getElementsByTagName("body");
			chipBlack.appendChild(chipWhite);
			cookie.appendChild(chipBlack);
			oven.appendChild(cookie);
			table[0].appendChild(oven);

			

			oven.addEventListener("click", function () {
				table[0].removeChild(oven);
				cookCookie(flavor,true,390);
			});

		}

		var brownie = tasteCookie(flavor);
		if(brownie === null) {
			showCookies();
		}
	})();
	
	window.cookieShop = cookieShop;
	return cookieShop;
})(this);