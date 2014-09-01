'use strict';
	 
	angular.module('example366', ['ngAnimate', 'ngTouch'])
	  .controller('MainCtrl', function ($scope) {
	 
	    // Set of Photos
	    $scope.photos = [
	        {src: 'galimg/img/five-energy-savers-you-have-to-build-into-your-new-home-house-windows-photo.jpg', desc: 'Image 01'},
	        {src: 'galimg/img/room2.jpg', desc: 'Image 02'},
	        {src: 'galimg/img/room3.jpg', desc: 'Image 03'},
	        {src: 'galimg/img/The-Advantages-Of-Steel-window.jpg', desc: 'Image 04'},
	        {src: 'galimg/img/Window-Frame.jpg', desc: 'Image 05'},
	        {src: 'galimg/img/woodven.jpg', desc: 'Image 06'}
	    ];
	 
	    // initial image index
	    $scope._Index = 0;
	 
	    // if a current image is the same as requested image
	    $scope.isActive = function (index) {
	        return $scope._Index === index;
	    };
	 
	    // show prev image
    $scope.showPrev = function () {
	        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
	    };
	 
	    // show next image
	    $scope.showNext = function () {
	        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
	    };
	 
	    // show a certain image
	    $scope.showPhoto = function (index) {
	        $scope._Index = index;
	    };
	});