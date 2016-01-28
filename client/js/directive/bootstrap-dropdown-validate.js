app.directive('bsSelectValidate', function(){
	return {
		restrict: 'A',
	link: function(scope, element, attrs, ctlr){
           attrs.$observe('bsSelectValidate', function(value){
                console.log(value);
            });

           console.log(attrs.bsSelectValidate);
           //scope.bindStatus(attrs.bsSelectValidate);
	}
}
});