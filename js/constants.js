angular.module('uploader.constants', [])

.constant('uploadConfig', 
	{
		'bucketName': "", /*add the name of your bucket here*/
		'region': "", /*add the region of your bucket here*/
		'accessKeyId': "", /*add the access key Id from your IAM user here*/
		'secretAccessKey': "", /*add teh url for signed requests here*/
		'cdn': "", /*Add the domain name of your CloudFront*/
	}
)