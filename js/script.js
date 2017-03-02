var app = angular.module("revApp", []);
app.filter("reverse", function() {
  return function(string) {
  	    var result = "";
    string = string || "";
    for (var i = string.length - 1; i >= 0; i--) {
    	 result =  result+string.charAt(i) 

    }

      return result;

  };
});
