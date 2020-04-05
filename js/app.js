(function () {
	'use strict';

	var app = angular.module("app", ['ngRoute']);

	app.controller('loginCtrl', function ($scope, $route, $routeParams, $location) {
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;

		$scope.password = '';

		$scope.login = function () {
			if ($scope.password == 'Twinsphotofilms') {
				$location.path('/home');
			}
		};
	});

	app.controller('homeCtrl', function ($scope, $route, $routeParams, $location) {
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;

		$scope.images = [
			'https://lh3.googleusercontent.com/b99ynahcWqIhZQO_E3zvNbPc7OK5-stX05jsUOLKUpmzcjKqKv9_SlYbq5zB22lrrdiL6bTWk36dK2VzZNS1G2TfRAz6Ul8VaDOCtbMmqSvAXG-76e1yvI7lzxx4GSNABH91nYC6yg=w1920-h1080', 'https://lh3.googleusercontent.com/qDgeA4VhbctXFuKdgNSD-9RsmX3WmHGQhk51GdKT72OnDRZugPS3l-cHCo3tyFcdSyZLXt6LTMnBI14Ufly-1E7w3PZ75zwiu0-YCnu3B1x147kN_KhE2GdUdPKevWlP4aJYqxXBVA=w1920-h1080', 'https://lh3.googleusercontent.com/_xhAnYqO0KjZdrQImkB6g8HkEI7f6uo9J0RNCb7cAov-4U7yN-XgZyInbFvKtCpu5LP-1KzvF6rY6GpYJHiBQ2s_26trZYEiagmmtOezks7SYcooPmjGqw72wsmD9IG5RATnrLpDYw=w1920-h1080', 'https://lh3.googleusercontent.com/7-rVzBdhjP25KMiAim0LzKQbu-2RsPJ1MS2XkbwV0IAP2Zl42uR_qvjNsU2B-C9OgPnKiRqmkM-e7MgetLYj7Z9yJu_uNdjW_4vyhaDUSLj0o7M6KX8hhyphxUR-E9G-TT8Ys2QK8Q=w1920-h1080', 'https://lh3.googleusercontent.com/_wUcWLIFcjeCP3XWzLNjrXq9MPmmpfR7DtZ0qCjDfbyw9__6pDsvsuSnFFJZRC637QsWxN3Fkg2XbGDNTwTQwc-VHUqt9XD_32XeAmuriw86tkz10C8qQ5cp3xgtJtD-0sfg1OrALw=w1920-h1080', 'https://lh3.googleusercontent.com/h7KAR-dm3nlT6SXeRJvjqxax_qMEzvmEPZXWHMkNW3D7uGA5YTtEVS8yGwKkuTeZKivkxb8VABlaec4l7QBtafEUZZB91SGdmnlfdIHzhaPanEwIwZRmKHBfB0g0w13AA7FStFpyWA=w1920-h1080', 'https://lh3.googleusercontent.com/Mc_5x1E_jomvheyk7BdTs_ARkEc84EdjRCxY0CnDJQh-jz2q7HCtP40uFrKgaqxv9RIq1T6ntwskfHcufiZ8f5LvecSqkXhbxBz4jmsLr6uxtv15R7zI3p11_Hhpblkl9UVK_ux7og=w1920-h1080', 'https://lh3.googleusercontent.com/jB4YKXi0HYM6YIAJtnlez0lMMWdVAyntn_EF-XuXfMP5Z1tP5d8dAdOo3XPYckuOWor8ILNBo3wwnFwwVNT5S-uhdI_TWzWjP_sBL57WxtruQrM7eTQOCJQLvk8hy0PFEkxBCdEbAA=w1920-h1080', 'https://lh3.googleusercontent.com/Z8yP226YCCSMIJ_FB52D7WjH7NF239UIi1epYXes4Prq_szOwiUtdPLfUSuo6WjAz4-hZ9CHEUsFfNsDp-_EVt3MjvN06_CNEqtBc548STvCylJQIx7O_Qlgq1aelX0cOmK0WAr6Ug=w1920-h1080', 'https://lh3.googleusercontent.com/oWKjsNnDPIyWoZCCy_Skn5ArP1WPnQnNG1mVzw2LYyPY-mrsZb9WwMBOax_NXBjPfjqAF7KullqWhrVUdW0BZpTcrxXY2Satf9cAgoQCdidSjFdP7sTy84n61ZePzHenqwBgRHHqZA=w1920-h1080', 'https://lh3.googleusercontent.com/swi3AlboOMgkF4Bl8twqU3fq7-FT4UTOJmE80DAYzalmuvnoCdKZ3yCMba1Z2F2sxSnO-4MwIde497td9XiuBI3-HjrphJkNuNnEB0e7toZntlvmpOFqRh6EFUkqVi6dcLxkdfTGWg=w1920-h1080', 'https://lh3.googleusercontent.com/UnP-2z4JznClyEj_Lz7C_0cPH_--rkLNzRxzhOVMlDKBxB5QZqVBvyiealybcpjVUQhZ9a3LsONLFQxpPu570QPHd0Yzuim3T9_jPVB7jFM_0ncDRKVraknmBvQxZ7spGjY7vG1pXg=w1920-h1080', 'https://lh3.googleusercontent.com/hiNSpiEEhvrSafCkf2yIXQO-UERXf-SbIAiolovD5NZihaxkgHn2M2C7F-_fLHgI1LBnIbDzDIc7BruxkXr6Ar9Kairnc9ToPuqq3mIdLuiPZB5EVY0XEhoSEFCi8n-zrDTJT-qo0A=w1920-h1080', 'https://lh3.googleusercontent.com/w-OaCoTZR8THiU_08fLSNItRNO1JIgoY6ECcKQtmv8pCfk1alzW6fsYDD_sm-gJ1YgdI0OolyTOnOLnudblmICLP8VSqJXvLhYGduNj8FWqktBCNuyVsTlxNw-zSYl6vT0spT288yg=w1920-h1080', 'https://lh3.googleusercontent.com/RWwk5fbVnPZYbh4ScLbLiF7dDtMh2Xm5VD3EPo2fbDOStNOlci4Hx-NWBIggBybRKZN3P333GikKML4juyRiyyJFvC9lcmhTNg906QuHrDHR04WheusXbOTD4gPqfGJ8cpJPMJhrcw=w1920-h1080', 'https://lh3.googleusercontent.com/mog4OIsU59CCDXMwxtkZOkchimJ2RL3nzjUah_Jn9NVSR_Al83AOuaFWn2sf_xDP-UCs_qC-5pxk3rsoi5NPhcGruTcdR_nv42vhihSWdV0B41F6_l5_lJMn7GFI7IM_mQIX3i2E6w=w1920-h1080']
	});

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/login',{
			templateUrl:"/login.html",
			controller:"loginCtrl"
		})
		.when('/home',{
			templateUrl:"/home.html",
			controller:"homeCtrl"
		})
		.otherwise({
			redirectTo:'/login'
		})
	}]);
})();