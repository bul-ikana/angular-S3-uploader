angular.module('uploader.controllers', ['uploader.constants'])

.controller('UploadController', function($scope, $http, uploadConfig) {
	$scope.profilePic = "img/placeholder.png";
	var bucket = new AWS.S3({params: {Bucket: uploadConfig.bucketName} })
	bucket.config.accessKeyId = uploadConfig.accessKeyId;
	bucket.config.secretAccessKey = uploadConfig.secretAccessKey;
	bucket.config.region = uploadConfig.region;

	$scope.uploadFile = function() {
		console.log(bucket);
		var file =  document.getElementById('file-input').files[0];
		if (file == null) return console.log("No file");
		console.log("file found");
		var params = {Key: file.name, ContentType: file.type, Body: file};

		bucket.upload(params, function (err, data) {
	        console.log(err);
	        console.log(data);
	    });
		
	}
})