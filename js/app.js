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
				$location.path('/images');
			}
		};
	});

	app.controller('imagesCtrl', function ($scope, $route, $routeParams, $location) {
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;

		$scope.image = null;
		$scope.images = [
			"https://lh3.googleusercontent.com/29JPOAx3nI8yYFo7NHzMAL_QAqt8IZtHt33FBz1UYszqBEWv5Mztd3w3aH7nrRmm1r5aIBRh_hoDkynHGfqdcHWvmMt_3mUtP_31oZZZyQToaKeidUSwbdwsMSzdyNuXkJ8vd3UuVw=w1920-h1080", "https://lh3.googleusercontent.com/jQ63MJjQc0r0dzs-KcihfIQ4Ch5cHTGmRZeMvmKM3w8AizBYbBGEWg5fgw5rDoqM7hMQuaEPksawwR-QCM7yilaSAk5ZM1OjE10LBk7zhOu9fAzwYoKVAEvjy22OWIi2Ti5ccMHBTg=w1920-h1080", "https://lh3.googleusercontent.com/1FM4b5MhejgsHbyqsjRpQeeKKqCHbjUbLfpTC-3dBsU96S-cc2fEoLBHFsRVZE_9zHEzK1ObkzrOW2JhEqP3TjkcG4Wv4AmIXmbRCRM0HFS5YcnGUWVI3diX8AoeDJ22OP6yCNz4VA=w1920-h1080", "https://lh3.googleusercontent.com/adDg26DMY4K0YIiEuA91hwJfBU3GfX5VGKp6t9uTARpRfFFLzwG9y1W8wrmp1l0fAhUAHKWlGtAaQAdvejF7P4xxjqHvk5pxq-N2ZQRqKOt_KQs1zo-qrpQpPHNZwsQ5APCgoC4Pmw=w1920-h1080", "https://lh3.googleusercontent.com/fV48kaE6LHckr0qwRKEro1O4knKBJYba9r_MeCsG1F63dDmRUeJds6kfT7cAixSK_bciUiRnWbgLxF5YL5KowVwuQbYxROOFdTRtCVfrMQuxmu4kOkZv0K_Dj4KAJudYtBofOmJ71A=w1920-h1080", "https://lh3.googleusercontent.com/cHSFenVIjUAAzG01s2pWhZaxfj7oOrAnwu1yldZAknqPAvJWd9j1k6EXjv5GsGAP5J03X0dxgatuEtaVctwXIVhYpLKT6gcRIaKHI2sjsS1-dBUDsj7MsmQ6NgAwqfUpggInqS7jZA=w1920-h1080", "https://lh3.googleusercontent.com/nOMKj2IR23Ynt13JaC1pO5B9Px_2GKve7byuMS8nUyMa2L8x7nSKyZ7yCNqHwvi3HWJ8aLu6f_aKyZrRH8WGKEeKWanb0ISkMb-5v9BnIESSE3-YK-QsQyQZtOpUPgr1qLkTUkp_Kg=w1920-h1080", "https://lh3.googleusercontent.com/s8QcbHYnLflK4Cg4084mNABsX6wTmIUEUkOPG-3kWokue9LUpy1WB_jXYUPL45nXtG5-F9cPst8CQ5zvCN9EAVCB-0CVMXlIgI2qR8GdOvTPBhVPsmMR4B3RqLJvelS9XDOuhFTdvA=w1920-h1080", "https://lh3.googleusercontent.com/vB97Yfmg4avhLLoLNjb2AtdF2OTywfGWIRMzVWXIh0XnzztCKMDhie_6kPe4XdU_7_5oQOTMBiU9eRL0PS444xUwOKfKh8z0tqwKiXWGU9mV_6fe7QKeYKwizWI81F03QMKms5txgg=w1920-h1080", "https://lh3.googleusercontent.com/jvcrB787M7k5xEux8FuW1caxgY4PkzU6h05ugyK-TbfG0RpPq8UFqJ7k4LbhR-uEcq-qDT2YUeCTa_ZiOq9b7iqUm3NVeqczhxfQp2wqcEUOn0fBeGSSz1s7DuAXhQiQJKEyzi4XBA=w1920-h1080", "https://lh3.googleusercontent.com/TfMY-VwWOHN6mVUe1DrzEd2a8abZs4UbRtLLdoSmHu1jOv4O6V4x-94rEJ0aGGTkOStXZZIDFD2w9n7kbkC9p6bQkbwH9PkHjFZwPz1bPnN2qYnPl1iw4s4Orx_1rRUfhjFIxiKgdw=w1920-h1080", "https://lh3.googleusercontent.com/Qq3u7boGz2p_wjXSFiSo8p-7FfL5hW28BfUF7oHY6U8AttMrti0OdVtbbZNBX1UCHOXpRft6PprG_ZwfIs7eut0arTNLz5kKwFWUokhLomI4Izt3bfbUVBAfrf5wAeuw5CT7gZLpuw=w1920-h1080", "https://lh3.googleusercontent.com/PEHUer_bsq9_ZiBX_53IlVGq5EHLtVYsH6zth-TQtUl0PBOYQF4WM4fkvdd8vxdWw9ShXKQMsNC8wEq16aEvvvS5xIYwvfBYeTCId6EQoSkI9QvdPE4odKCGEvUrjeE-B-ToatzGPw=w1920-h1080", "https://lh3.googleusercontent.com/7YV1fF1a1Jl9YIzTT8lelYZz_w730jSdnrXMA6fh_a-BxVzScQ3ws4pDnGOa_TFWDWL43XfKiei6e5dKicMzlXgPxA-DmO6XqseD63Ccnx2u-vewk9KRdXvVK278anVohZWYa3nZSA=w1920-h1080", "https://lh3.googleusercontent.com/9qDXM1_-RsoUQZAFWZ_av23jP8pjydMFlnRN5aw_a_4rmzZUq5ED1wdGSnK681eyoDW7KXmTBmbyhpYWLz80_-wgZeftkyd722sxVzmZNVgvg_2Eqajoy034aoUSpIydiv71PzW-5A=w1920-h1080", "https://lh3.googleusercontent.com/RaE1JnEieV2cF-7R0DyoWsNnUqciV0mDfP9KPQwRlxRnTJ1ah0ToOyd2giNIVVOSn0ZZhz9c0_QNL2wM4dQv63cXbHIvWmw1oGSvvmqJq7mGR5lQx9dGPvSgjttwELZhSwkcOqCO6A=w1920-h1080", "https://lh3.googleusercontent.com/zfDXAEt2Vitwz42aaoh70bM3O_eNvBG5HzeLmUxXW3ZO1nfq_T2BsyQvGP75Ok0dzREKp2pZZ-HUdTY7r5JxyGH-eR_hEbSz-kzmWjyQ_vEz082NJNaXnGim9GeS1kvCm5toEBngIA=w1920-h1080", "https://lh3.googleusercontent.com/0gni2L4Vka8MmMlcToS4zZ3-fGubmQLuwxOhjdmBBYjYYElaCy5s2grvUCzrF_1lvTcbHueVOUvCJrjbygweQPvTcadeGnXVF82IKOIM5c81TruzTZ2Gg7fc7G39W4_l7qF_ydNtmA=w1920-h1080", "https://lh3.googleusercontent.com/plt6sxUDQTvSwMtGUpy5RSaoap_8BBUJYb7eyySI-d6c0kSgeKGbhESivf_pZRzmKXXy1X58owekUUqSaZiKS3_OgzMkM4m0kIDkAndeOm7MUvzMAaTErlXxxwntq8QBo9O3BTExyA=w1920-h1080", "https://lh3.googleusercontent.com/Adw7NPsdv12_BnnsHPQSb-kslj62lMJL8_mnGOYkDQnF-BtdwdedppcWNqlfZjq4-tTOszIDni0mVWDbNeD7wTIglHUQ3tl3iaaB-3tonp1kdJaRRg7NZaZeic00ih7dIa6pRUuurw=w1920-h1080"];

		$scope.showImage = function (img) {
			$scope.image = img;
			console.log($scope.image);
		};

		$scope.hideImage = function () {
			$scope.image = null;
		};
	});

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/login',{
			templateUrl:"login.html",
			controller:"loginCtrl"
		})
		.when('/images',{
			templateUrl:"/images.html",
			controller:"imagesCtrl"
		})
		.otherwise({
			redirectTo:'/login'
		})
	}]);
})();
