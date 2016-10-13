(function(){
	/*
	* UI Module
	*/
	'use strict';
	
	function modalService($document, $timeout){
		var valor =  false;
		var elemento = null;

		this.showModal = function(class_name){
			elemento = document.querySelector("." + class_name);
			angular.element(elemento).addClass("ak-modal--enabled ak-modal--visible");
			document.body.addEventListener('keydown', removeEvent);
		};

		var removeEvent = function(e) {
			if (e.keyCode === 27){
				removeModal(true);
				document.body.removeEventListener('keydown', removeEvent);
			}
		}

		var removeModal = function(valor) {
			valor = false;
			angular.element(elemento).removeClass("ak-modal--enabled ak-modal--visible");			
		}

	}

	modalService.$inject = ["$document","$timeout"];
	angular.module('ipm').service('modalService', modalService);

})();
