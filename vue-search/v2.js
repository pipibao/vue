// JavaScript Document

	window.onload = function () {
		
		var vm = new Vue({
			
			"el" : "#box",
			
			"data" : {
				
				v : "",
				
				myData : [],
				
				now : -1,
				
			},
			
			"methods" : {
				
				get : function (evt) {
					
					if (evt.keyCode == 38 || evt.keyCode == 40) {
						return ;
					}
					
					this.$http({
						
						url : "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?",
						
						data : {
							
							wd : this.v,
							
						},
						
						method : "jsonp",
						
						jsonp : "cb"
						
					}).then(function(res){
						
						this.myData = res.data.s;
						
					},function () {});
					
				},
				
				getDown : function () {
					
					this.now++;
					
					if (this.now == this.myData.length) {
						
						this.now = -1;
						
					}
					this.v = this.myData[this.now];
					
				},
				
				getUp : function () {
					
					this.now--;
					
					if (this.now == -2) {
						
						this.now = this.myData.length-1;
						
					}
					this.v = this.myData[this.now];
				},
				
				turn : function () {
					
					window.open("https://www.baidu.com/s?wd="+this.v);
					
					this.v = '';
					this.myData= [];
					
				},
				
				pick : function (i) {
					this.v = this.myData[i];
				}
			},
		});
	};