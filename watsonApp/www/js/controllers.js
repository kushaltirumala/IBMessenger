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
    $scope.sayHello = function() {
    $scope.greeting = "I am at techcrunch disrupt 2015 right now";
    }
//    require("usr/local/lib/node_modules/twilio");
//    // Your accountSid and authToken from twilio.com/user/account
//    var accountSid = 'AC32a3c49700934481addd5ce1659f04d2';
//    var authToken = "66dfc254a5079bbed9b2f574c752e3e4 ";
//    var client = require('twilio')(accountSid, authToken);
//
//    client.messages.create({
//        body: "Jenny please?! I love you <3",
//        to: "+6507878175 ",
//        from: "+16503766941"
//    }, function (err, message) {
//        process.stdout.write(message.sid);
//    });

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


    /*
    $scope.sendSms = function () {
        alert("DISCLAIMER: This bot was created to enable you to anonymously let your friends know things, like their fly being open, etc." +
            "What you do with this bot is up to you, we are not responsible for any improper usages.");
>>>>>>> Stashed changes

        var number;
        var picture;
        var image_width = 70;
        var image_height = 70;
        var minutes;
        var error;
        var messages;
        var audio = new Audio("http://www.oringz.com/oringz-uploads/d0_oringz-pack-nine-06.mp3");
        // var name = prompt("Target's name?")
        // var message = prompt("Enter your message");
        // sendSms(message);
        // contacts = ["415-298-4987"];
        function checkNum(e) {
            if (e.which == 13) {
                enterNum();
            }
        }
        sendSms();

        function numValid() {
            alert('please');
            if ($('#victimNum').val().split("").length === 7) {
                error = "Please input the area code of number you are trying to text";
            } else if ($('#victimNum').val().split("").length <= 6 || $('#victimNum').val().split("").length > 12) {
                error = "Please input a valid number";
            } else {
                return true;
                enterNum();
            }
            $('#errormsg').show();
            return false;
        }

        function enterNum() {
            if (numValid() === true) {
                number = $('#victimNum').val();
                // console.log("num"+$('#victimNum').text())
                $('#victimNum').hide();
                $('h1').html("Creeper Bot");
                return true;
            } else {
                console.log("error");
                $('#errormsg').html(error)
                return false;
            }
        }
        $('#victimNum').keypress(function (e) {
            checkNum(e);
        });
        $('#newMsg').keypress(function (e) {
            if (e.which == 13) {
                sendSms();
            }
        });
        maestro.Twilio.recieveSms(function (reply) {
            audio.play();
            $('#messageIntro').append('<p class = "you">' + '<img style = "width: ' + image_width + 'px; height: ' + image_height + 'px;" src ="https://s-media-cache-ak0.pinimg.com/736x/a0/d8/8f/a0d88f742bd61c61320a35b5a295fb5b.jpg">' + '<b>' + 'Victim: ' + '</b>' + reply.Body + '<br>' + (new Date()).toTimeString().substr(0, 5) + '</p>');
            $('#welcome').hide();
            // console.log("reply: "+reply.Body); //prints the number that sent a message to twilio-number
        });

        function sendSms() {
            alert('hello?');
            if (enterNum() === false) {
                enterNum();
            }
            var msg = $('#newMsg').val();
            maestro.Twilio.sendSms(number, msg);

            if (!(/\S/.test($('#newMsg').val()))) {
                console.log("homg")
                error = "please type a message before sending";
                $('#errormsg').show();
                $('#errormsg').html(error)
                return false;
            }
            if (enterNum() === true) {
                console.log("display")
                $('#errormsg').hide();
                var msg = $('#newMsg').val();
                maestro.Twilio.sendSms(number, msg);
                messages += msg;
                // fixMinutes(date);
                // contacts.push = number;
                // console.log("num: "+number+"msg: "+msg);
                // console.log("sent!");
                $('#messageIntro').append('<p class = "me">' + '<img style = "width: ' + image_width + 'px; height: ' + image_height + 'px;" src ="http://imgs.tuts.dragoart.com/how-to-draw-jigsaw-jigsaw-saw_1_000000009688_5.jpg">' + '<b>' + ' Me: ' + '</b>' + msg + '<br>' + (new Date()).toTimeString().substr(0, 5) + '</p>');
                $('#welcome').hide();
                $('#newMsg').val(" ");
            }
        }
    }
*/
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
