var TripDetailCtrl = function ($scope, $http, )
{
$scope.SendMail = function ()
{
var dataToPost = { to: “MyEmailID@gmail.com”, subject: “Test Mail”, text: “This is just a test mail for testing mailing fuctionality” }; /* PostData*/
$http({
url: “/send”,
method: “GET”,
params: { to: dataToPost.to, subject: dataToPost.subject,text:dataToPost.text }
}).success(function (serverResponse)
{
console.log(serverResponse);
}).error(function (serverResponse)
{
console.log(serverResponse);
});
}
}
}
