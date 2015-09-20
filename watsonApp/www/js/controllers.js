angular.module('starter.controllers', [])

.controller('ChatsCtrl', function ($scope, Chats, $ionicPopup, $timeout, text) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // QUERY FOR WATSON http://watsonmessenger.mybluemix.net/profile?text=ADDTEXTHERE
    // Triggered on a button click, or some other target
    $scope.showPopup = function () {
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<input type="number" ng-model="data.wifi">',
            title: 'Enter Phone Number',
            subTitle: 'Please use numbers with no spaces',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                       
                        if (!$scope.data.wifi) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            //alert($scope.data.wifi);
                            //The input data is the $scope.data.wifi info

                            return $scope.data.wifi;
                        }
                    }
                }
             ]

        });

        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 100000);
    };
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats, $ionicPopup, $timeout, $ionicLoading, text ) {
    $scope.chat = Chats.get($stateParams.chatId);
    //Text.get($stateParams);

    // Triggered on a button click, or some other target
    $scope.showPopup = function () {
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: "<div class='progress' style='height:50px;'><div class='progress-bar progress-bar-success progress-bar-striped' role='progressbar' aria-valuenow='87' aria-valuemin='0' aria-valuemax='100' style='width:87%'><b style='font-size:15px; padding-top:5px;'>Pretty Into You (87%)</b></div></div>",
            scope: $scope,
            buttons: [
                {
                    text: 'Close'
                }
    ]
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 6000);
    };

    $scope.sendSms = function() {
        text.sendMsg();
    }

})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
