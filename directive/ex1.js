/**
 * Created by Lee on 2016-04-30.
 */
var app = angular.module("example",[]);

var definitionObject = {
    restrict: 'EA',
    link: function(scope, element, attrs){
        element.text('Hello Directive World');
    }
};

app.directive('bbHelloWorld', function(){
    return definitionObject;
});
