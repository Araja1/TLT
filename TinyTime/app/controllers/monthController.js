'use strict';
app.controller('monthController', ['$scope', function ($scope) {
    $scope.day = moment();
}]);
 /*   $scope.months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    $scope.year = date.getFullYear();
    $scope.previousMonth = $scope.months[monthIndex-1];
    $scope.currentMonth = $scope.months[monthIndex];
    $scope.nextMonth = $scope.months[monthIndex + 1];

    console.log(new Date($scope.year, monthIndex, 0).getDate());
    $scope.setPreviousNextMonth = function (plusorminus) {

        if (monthIndex === 11 && plusorminus === '+') {
            $scope.year = $scope.year + 1;
            monthIndex = -1;
        }
        if (monthIndex === 0 && plusorminus === '-') {
            $scope.year = $scope.year - 1;
            monthIndex = 12;
        }
        if (plusorminus === '+') {
            if (monthIndex === 10) {
                $scope.nextMonth = $scope.months[monthIndex - 10];
            } else {
                $scope.nextMonth = $scope.months[monthIndex + 2];
            }
            $scope.currentMonth = $scope.months[monthIndex + 1];
            if (monthIndex === -1) {
                $scope.previousMonth = $scope.months[monthIndex + 12];
            } else {
                $scope.previousMonth = $scope.months[monthIndex];
            }
            monthIndex++;
        } else {
            if (monthIndex === 12) {
                $scope.nextMonth = $scope.months[monthIndex -12];
            } else {
                $scope.nextMonth = $scope.months[monthIndex];
            }
            $scope.currentMonth = $scope.months[monthIndex - 1];
            if (monthIndex === 1) {
                $scope.previousMonth = $scope.months[monthIndex + 10];
            } else {
                $scope.previousMonth = $scope.months[monthIndex - 2];
            }
            monthIndex--;
        }
        $scope.countDays = new Date($scope.year, monthIndex + 1, 0).getDate();
        $scope.firstDay = new Date($scope.year, monthIndex).getDay();
    };

  //  var firstDay = new Date(y, m, 1);
  //  var lastDay = new Date(y, m + 1, 0);

    var monthIndex2 = monthIndex + 1;
    $scope.currentDate = (day + '-' + monthIndex2 + '-' + $scope.year); */
//}]);