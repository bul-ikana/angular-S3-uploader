angular.module('uploader.controllers', ['uploader.constants'])

.controller('UploadController', function($scope, $http, uploadConfig) {
	$scope.profilePic = "img/placeholder.png";
	$scope.uploading = false;

	var bucket = new AWS.S3({params: {Bucket: uploadConfig.bucketName} })
	bucket.config.accessKeyId = uploadConfig.accessKeyId;
	bucket.config.secretAccessKey = uploadConfig.secretAccessKey;
	bucket.config.region = uploadConfig.region;

	$scope.uploadFile = function() {
		$scope.uploading = true;
		var file =  document.getElementById('file-input').files[0];
		if (file == null) return console.log("No file");
		console.log("file found");
		var params = {Key: "images/" + randomString() + "-" + file.name, ContentType: file.type, Body: file};

		bucket.upload(params, function (err, data) {
	        $scope.profilePic = data.Location;
	        $scope.uploading = false;
	        $scope.$apply();
	    });
		
	}

	var randomString = function() {
		var text = "";
		var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for(var i = 0; i < 10; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    return text;
	}
})