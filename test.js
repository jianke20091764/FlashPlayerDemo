var QuanrPlayer = new QunarPackagePlayer({
	id : 'QuanrPlayer',
	width : '480',
	height : '270',
	player : 'player.swf?v.0.0.1',
	flashvars : 'skin=skin.swf&thumbnail=bg.jpg&video=test1.mp4'
});

QuanrPlayer.load();

console.log(QuanrPlayer);

var log = function(msg){
	if(console){
		console.log(msg);
	}else{
		alert(msg);
	}
};

var development = false ; 
var _setDevelopment = function(){
	development = !development ;
	QuanrPlayer.setDevelopmentStatus(development);
	log('setDevelopmentStatus : ' + development + ' >>> ');
};

var _getDevelopment = function(){
	var status = QuanrPlayer.getDevelopmentStatus();
	log('getDevelopmentStatus : ' + status + ' >>> ');
};

var position = 10 ;
var _setPosition = function(){
	QuanrPlayer.setVideoPosition(position);
	log('setVideoPosition : ' + position + ' >>> ');
};

var _getPosition = function(){
	var status = QuanrPlayer.getVideoPosition();
	log('getVideoPosition : ' + status + ' >>> ');
};

var vStatus = ['play','pause'] ,i = 0;
var _setVideoStatus = function(){
	QuanrPlayer.setVideoStatus(vStatus[i]);
	log('setVideoStatus : ' + vStatus[i] + ' >>> ');
};

var _getVideoStatus = function(){
	var status = QuanrPlayer.getVideoStatus();
	log('getVideoStatus : ' + status + ' >>> ');
};

var isAuto = false ;
var _setVideoAutoPlay = function(){
	isAuto = !isAuto ;
	QuanrPlayer.setVideoAutoPlay(isAuto);
	log('setVideoAutoPlay : ' + isAuto + ' >>> ');
};

var _getVideoAutoPlay = function(){
	//var status = QuanrPlayer.getVideoAutoPlay();
	log('getVideoAutoPlay : null  >>> ');
};

var _getVideoLength = function(){
	var status = QuanrPlayer.getVideoLength();
	log('getVideoLength : ' + status + ' >>> ');
};

var _isVideoEnd = function(){
	var status = QuanrPlayer.isVideoPlayEnd();
	log('getVideoLength : ' + status + ' >>> ');
}
