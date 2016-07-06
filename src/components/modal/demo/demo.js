(function () {
	'use strict';

	var c = 0;
	
	angular
		.module('app')
		.controller('modalCtrl', modalCtrl)
		.component('modalComp', {
			template: '<button type="button" ng-click="$ctrl.go()">Go</button><h1>Here you go</h1><h1>Here you go</h1><h1>Here you go</h1><h1>Here you go</h1><h1>Here you go</h1><h1>Here you go</h1><h1>Here you go</h1>',
			bindings: {
				modalInstance: '<'
			},
			controller: function ($scope, modal) {
				this.go = () => {
					c++;
					modal({
						scope: $scope,
						title: '' + c + '.',
						template: '<modal-comp modal-instance="$modalInstance"></modal-comp>'
					});
				};
			}
		});

	function modalCtrl($scope, $q, $timeout, modal) {
		this.go = () => {
			modal({
				scope: $scope,
				template: '<modal-comp modal-instance="modalInstance"></modal-comp>'
			});
		};
	}
})();
