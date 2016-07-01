var vm = new Vue({
			el:"#app",
			data:{
				blur:0,//模糊度
				brightness:100,//亮度
				contrast:100,//对比度
				grayscale:0,//灰度
				hueRotate:0, //色相
				invert:0, //法相度
				opacity:100,//透明度
				saturate:100, //饱和 度
				sepia:0,//柔和度
			},
			computed:{
				regulatorStyle:function(){
					var blur = "blur("+ this.blur +"px)"; 
					var brightness = "brightness("+ this.brightness +"%)";
					var contrast = "contrast(" + this.contrast + "%)";
					var grayscale = "grayscale("+ this.grayscale +"%)";
					var hueRotate = "hue-rotate("+ this.hueRotate +"deg)";
					var invert = "invert("+ this.invert +"%)";
					var opacity = "opacity("+ this.opacity + "%)";
					var saturate = "saturate("+ this.saturate +"%)";
					var sepia = "sepia("+ this.sepia +"%)";
					return blur + brightness + contrast + grayscale + hueRotate + invert + opacity + saturate + sepia;
				}
			}
		})