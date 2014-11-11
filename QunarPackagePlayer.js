/**
module : QunarPackagePlayer 
version : 0.0.0 
author : xizhao.wang@qunar.com
date : 2014-05-14 15:33
*/

(function(window, undefined){
	
	var doc = window.document, win = window ;
	var QunarPackagePlayer = function(cfg){
		var config = $.extend({
			id : 'QuanrPackagePlayer', //
			width : '480', //               
			height : '300', //
			player : 'player.swf', //
			quality : 'high', // 
			menu : 'false' , //
			scale : 'noscale' , //
			allowfullscreen : true, //
			allowscriptaccess : 'always' , //
			swlivevonnect : true, //
			cachebusting : false, //
			flashvars : 'skin=skin.swf&thumbnail=bg.jpg' //
		},cfg);
		
		var videoPanel = doc.getElementById(config.id),video;
		var temlpate = [
			'<object id="{{id}}Id" width="{{width}}" height="{{height}}" type="application/x-shockwave-flash" data="{{player}}">', 
				'<param name="movie" value="{{player}}">', 
				'<param name="quality" value="{{quality}}">',
				'<param name="menu" value="{{menu}}">', 
				'<param name="scale" value="{{scale}}">',
				'<param name="allowfullscreen" value="{{allowfullscreen}}">', 
				'<param name="allowscriptaccess" value="{{allowscriptaccess}}">', 
				'<param name="swlivevonnect" value="{{swlivevonnect}}">', 
				'<param name="cachebusting" value="{{cachebusting}}">', 
				'<param name="flashvars" value="{{flashvars}}">',
				'<param name="wmode" value="transparent">',
			'</object>'
		];
		
		var loadVideoHtml = function(obj){
			var html = temlpate.join(''),pro ;
			for(pro in obj){
				html = html.replace(new RegExp('{{' + pro + '}}','g'), obj[pro]);
			}
			return html ;
		};
		
		var isReady = false ;
		var docLoad = function(){
			win.onload = function(){
				isReady = true ;
			};
		};
		
		this.load = function(){
			$(videoPanel).html(loadVideoHtml(config));
			video = doc.getElementById(config.id + 'Id');
			console.log(video);
			docLoad();
		};
		
		/*
			isAutoPlay : true/false 
		*/
		this.setVideoAutoPlay = function(isAutoPlay){
			if(!isReady){
				return ;
			}
			
			video.setAutoPlay(isAutoPlay);
		};
				
		/*
			status : ['play','pause']
		*/
		this.setVideoStatus = function(status){
			if(!isReady){
				return ;
			}
			
			
			video.setStatus(status);
		};
		
		/*
			return : true/false 
		*/
		this.getVideoStatus = function(){
			if(!isReady){
				return ;
			}
			
			return video.getStatus();
		};
		
		/*
			return : int(milliSeconds)
		*/
		this.getVideoPosition = function(){
			if(!isReady){
				return ;
			}
			
			return video.getPosition();
		};
		
		/*
			milliSeconds : int 
		*/
		this.setVideoPosition = function(milliSeconds){
			if(!isReady){
				return ;
			}
			
			video.setPosition(milliSeconds);
		};
		
		
		/*
			return : int(milliSeconds)
		*/
		this.getVideoLength = function(){
			if(!isReady){
				return ;
			}
			
			return video.getVideoTimes()* 1000;
		};
		
		
		/*
			isDevelopment : true/false 
		*/
		this.setDevelopmentStatus = function(isDevelopment){
			if(!isReady){
				return ;
			}
			
			video.setDevelopment(isDevelopment);
		};
		
		/*
			return : true/false 
		*/
		this.getDevelopmentStatus = function(){
			if(!isReady){
				return ;
			}
			
			return video.getDevelopment();
		};
		
		/*
			return : int (video play times) 
		*/
		this.isVideoPlayEnd = function(){
			if(!isReady){
				return ;
			}
			
			return video.isPlayEnd();
		}
	};
	
	window.QunarPackagePlayer = QunarPackagePlayer ;
})(window);

