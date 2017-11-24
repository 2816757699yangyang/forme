// 圆形进度条
$(function(){

	$('#html').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj1 = $('#html').data('radialIndicator');
			radialObj1.animate(70);

			$('#css').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj2 = $('#css').data('radialIndicator');
			radialObj2.animate(70);
			$('#js').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj3 = $('#js').data('radialIndicator');
			radialObj3.animate(70);
			$('#jq').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj4 = $('#jq').data('radialIndicator');
			radialObj4.animate(70);
			
			$('#bootstrap').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj5 = $('#bootstrap').data('radialIndicator');
			radialObj5.animate(60);
			$('#SQL').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj6 = $('#SQL').data('radialIndicator');
			radialObj6.animate(70);
			$('#Java').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj7 = $('#Java').data('radialIndicator');
			radialObj7.animate(80);
			$('#ssm').radialIndicator({
				radius:70,
				barColor: '#ff675f',
				barWidth: 10,
				initValue: 0,
				roundCorner : true,
				percentage: true
			});
			var radialObj8 = $('#ssm').data('radialIndicator');
			radialObj8.animate(60);

	
})