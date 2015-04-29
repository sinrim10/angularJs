/**
 * Created by Lee on 2015-04-28.
 */

var todoList = [{ done : true, title : '독서하기'},
    {done:false,title:'공부하기'},
    {done:false,title:'프로젝트 구성'}
];
function testFunc($scope){
    $scope.text = 'Todo App';
    $scope.list = todoList

    $scope.addNewTodo = function (newTitle){
        todoList.push({done : false, title : newTitle});
        $scope.newTitle = '';
    };

    $scope.archive = function (){
        for (var i = $scope.list.length - 1; i >= 0; i--){
        // 0 부터 삭제 하지 않는이유는 당겨지기 때문이다.. 뒤에서부터 삭제하면 빈공간이 당겨지지 않아 올바르게 삭제가 가능하다..
            if($scope.list[i].done){
                $scope.list.splice(i,1);
            }
        }
    };

    $scope.remain = function(){
        var remainCount = 0;
/*        for(var i = 0; i < $scope.list.length  ; i++){
            if($scope.list[i].done == false){
                remainCount++;
            }
        }*/
        angular.forEach($scope.list, function(value , key){
            if(value.done == false){
                remainCount++;
            }
        });
        return remainCount;
    }
}
