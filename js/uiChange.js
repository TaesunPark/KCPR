(function () {
	var time = document.getElementById("time").value;	
	var audio1 = new Audio("../beep.mp3");	
	var num = 0;
	var sum = 30;
	var good = 10;
	var bad = 19;
	var percent = 93.12;
	console.log(time);
	
	document.getElementById('number').innerHTML="0";						
	
	function timer() {				
		alert("good : "+good.toString() + '\n'+"bad : "+bad.toString()+ '\n' + "percent : "+ percent.toString() );
	    location.replace("../index.html");	    
	}
	
	
	switch(time){
		case "0":			
			break;
			
		case "30":				
			setTimeout(timer, 30000);
			break;					
								
		case "60":
			setTimeout(timer, 60000);						
			break;
						
		case "90":			
			setTimeout(timer, 90000);			
			break;
			
		case "120":			
			setTimeout(timer, 120000);			
			break;
	}			
	
	setInterval(function(){		
		num++;        
		document.getElementById('number').innerHTML= num.toString();		
		audio1.currentTime=0.1;		
		audio1.play();
		
		if(num===30){			
			document.getElementById('ui-page-id').style.backgroundColor = "#fc2e0c";
			document.getElementById('phrase').innerHTML = "BAD";
			num = 0;			
		}
	        
		if(num===15){
			document.getElementById('ui-page-id').style.backgroundColor= "#056ecd";
			document.getElementById('phrase').innerHTML = "GOOD";
		}	        
	}, 600);}());