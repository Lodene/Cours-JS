window.addEventListener("load", ready);

function ready(){
	addEvents(document.getElementById("alarm"));
	
	document.getElementById("add_alarm")
		.addEventListener("click", function() {
			var alarmNode = document.getElementsByClassName("alarm")[0].cloneNode(true);
			document.getElementById("alarms").appendChild(alarmNode);
			
			addEvents(alarmNode);
		})
	;
	
	setInterval(function(){
		var date = new Date();
		document.getElementById("time").textContent = date.toLocaleTimeString(); 
		
		var alarms = document.getElementsByClassName("alarm");
		for (var alarm of alarms) {
			if (alarm.getElementsByClassName("alarm_check")[0].checked) {
				if ((date.getHours() === parseInt(alarm.getElementsByClassName("alarm_hour")[0].value)) &&
					(date.getMinutes() === parseInt(alarm.getElementsByClassName("alarm_min")[0].value)) &&
					(date.getSeconds() === 0)) {
					runAudio(alarm.getElementsByClassName("alarm_sound")[0].value);
					alert(alarm.getElementsByClassName("alarm_msg")[0].value);
					document.getElementById("audio").pause();
				}
			}
		}
	}, 500);
}

function addEvents(node) {
	node.getElementsByClassName("del_alarm")[0]
		.addEventListener("click", function() {
			document.getElementById("alarms").removeChild(node);
		})
	;

	var cbx = node.getElementsByClassName("alarm_check")[0];
	cbx.addEventListener("change", function() {
			if (cbx.checked) {
				cbx.parentNode.classList.remove("unchecked");
				cbx.parentNode.className += " checked";
			} else {
				cbx.parentNode.classList.remove("checked");
				cbx.parentNode.className += " unchecked";
			}
		})
	;
}


function runAudio(song) {
	var audio = document.getElementById("audio");
	audio.src = song + '.mp3';
	audio.play();
}