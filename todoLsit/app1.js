/**
 * Created by Lee on 2015-04-28.
 */

var todoList = [{ done : true, title : '�����ϱ�'},
    {done:false,title:'�����ϱ�'},
    {done:false,title:'������Ʈ ����'}
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
        // 0 ���� ���� ���� �ʴ������� ������� �����̴�.. �ڿ������� �����ϸ� ������� ������� �ʾ� �ùٸ��� ������ �����ϴ�..
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
