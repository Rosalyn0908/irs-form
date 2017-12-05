  angular.module('myApp', ['ngSanitize'])
  	.controller('myCtrl', ['$scope', '$sce', function($scope, $sce) {
	    $scope.load_part = function(part_number) {
	    	var part_description = {
				  1 : "I : Information About the Partnership"
				, 2 : "II : Information About the Partner"
				, 3 : "III : Partner's Share of Current Year Income, Deductions, Credits, and Other Items"
			};

	      	$scope.part = part_description[part_number];

	      	$(".part").hide();
	      	$('.part:nth-child(' + part_number + ')').show();

	      	$('#progress .active').removeClass('active');
	      	$('#progress li:nth-child(' + part_number + ')').addClass('active');
	    };
	}]);
