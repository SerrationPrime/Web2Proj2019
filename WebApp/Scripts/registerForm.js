$scope.runTest = function (myTest) {
    $.ajax({
        method: 'GET',
        Url: '/Account/Register',
        contentType: 'application/json;',
        data: myTest,
        success: function () { handleTest(myTest); },
        error: function () { alert('no object found'); }
    });
}

angular.module('YourModuleName')
    .controller("Account", ["$http", "$scope", function ($http, $scope) {
        /*Request to C# Controller*/
        $scope.runTest = function (myTest) {
            var config = {
                params: { myTest: myTest }
            }
            $http.get('/Account/Register', config).success(function (data) {
                if (data != null && data.success) {
                    handleTest(myTest);
                }
            }).error(function (error) {
                //Handle Error 
            });
        }
    }