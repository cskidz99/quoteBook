angular.module('quoteBook').directive('keyBind', function() {
        return function(scope, element, attrs) {
            element.bind("keydown, keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.keyBind, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });
