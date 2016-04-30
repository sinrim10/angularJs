/**
 * Created by Lee on 2016-04-30.
 */
/*
* 독립스코프 데이터 바인딩.
* */
/*var app = angular.module("example",[]);*/

app.controller('demoCtrl',function($scope){
    $scope.term = "Master";
})
.directive('bbString',function(){
        return {
            scope:{ term : '@'},
            template:"<input ng-model='term'>"
        }
    })
.directive('bbExpression',function(){
        return{
            scope:{term : '&'},
            template:'<input ng-model="term">',
            link: function(scope,ele,attr){
                console.log('scope.term ' , scope.term())
                scope.term = scope.term();
            }
        }
    })
.directive('bbTwoWay',function(){
        return{
            scope:{ term: "="},
            template:'<input ng-model="term">'
        }
    })