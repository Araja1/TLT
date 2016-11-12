'use strict';
app.controller('timesheetController', ['$scope', 'time', function ($scope, time) {
    $scope.timeentries = [];
    $scope.totalTime = {};
    $scope.clockIn = new Date();
    $scope.clockOut = new Date();

    time.getTime().then(function(results) {
        $scope.timeentries = results;
        updateTotalTime($scope.timeentries);
    }, function (error) {
        console.log(error);
    });

    function updateTotalTime(timeentries) {
        $scope.totalTime = time.getTotalTime(timeentries);
    }
        
    $scope.logNewTime = function () {
        if ($scope.clockOut < $scope.clockIn) {
            alert("You can't clock out before you clock in!");
            return;                 
        }

        if ($scope.clockOut - $scope.clockIn === 0) {
            alert("Your time entry has to be greater than zero!");
            return;
        }
   
        $scope.timeentries.push({
            "user_id":1,
            "user_firstname":"Ryan",
            "user_lastname":"Chenkie",
            "start_time": $scope.clockIn,
            "end_time": $scope.clockOut,
            "loggedTime": time.getTimeDiff($scope.clockIn, $scope.clockOut),
            "comment": $scope.comment
        });
        updateTotalTime($scope.timeentries);
        $scope.comment = "";
    }
}]);