//Now input days of the month into a single array. Then set the days to match the lunch//
var lunch = {
	1: "Cheeseburger",
	2: "Taco",
	3: "Saimin",
	4: "Steak",
	5: "Udon",
	6: "Katsu",
	7: "Kim Chee",
	8: "Pizza",
	9: "Egg Roll",
	10: "Food1",
	11: "Food2",
	12: "Food3",
	13: "Food4",
	14: "Food5",
	15: "Food6",
	16: "Food7",
	17: "Food8",
	18: "Food9",
	19: "Food10",
	20: "FoodA",
	21: "FoodB",
	22: "FoodC",
	23: "FoodD",
	24: "FoodE",
	25: "FoodF",
	26: "FoodG",
	27: "FoodH",
	28: "FoodI",
	29: "FoodJ",
	30: "FoodK",
	31: "FoodL"
	};

//defines number of days
	if(m = 0,2,4,6,7,9,11){
		numberDays = 31;
	};
	else if(m = 3,5,8,10){
		numberDays = 30;
		}
	else if(leapYear = 16,20,24,28,32){
		numberDays = 29;
	};
	else{
		numberDays = 28;
	};
	
	
//generates array based on month
//transfers lunch data into new array
	lunchDays = [];
		for(q = 0; q < numberDays; q++){
			lunchDays.push(lunch[q+1]);
		};



//Based on the reported day of the clients computer, the food in the array will be displayed.//
	function lunchDay() {
		var d = new Date();
		var n = d.getDate();
		var m = d.getMonth();
		var y = d.getFullYear();		
		leapYear = y-2000;
		
		
		document.getElementById('showTheLunch').innerHTML = lunchDays[n+1];
		showWeekDay();
		document.getElementById('showTheNextLunch').innerHTML = lunchDays[n+1+delta];
		showNextSchoolDay();
	}

	function showWeekDay() {
		 var x = new Date();
		var y = x.getDay();
		if (y === 0) {
			document.getElementById('showTheDayName').innerHTML = 'Sunday';
		}
		else if (y === 1) {
			document.getElementById('showTheDayName').innerHTML = 'Monday';
		}
		else if (y ===2) {
			document.getElementById('showTheDayName').innerHTML = 'Tuesday';
		}
		else if (y === 3) {
			document.getElementById('showTheDayName').innerHTML = 'Wednesday';
		}
		else if (y === 4) {
			document.getElementById('showTheDayName').innerHTML = 'Thursday';
		}
		else if (y === 5) {
			document.getElementById('showTheDayName').innerHTML = 'Friday';
		}
		else {
			document.getElementById('showTheDayName').innerHTML = 'Saturday';
		}

	}
	
	//shows next day's lunch NOT ADJUSTED FOR SCHEDULE CHANGES
	function showNextSchoolDay(){
		if (y === 0) {
			document.getElementById('showTheNextDayName').innerHTML = 'Monday';
			delta = 1;
		}
		else if (y === 1) {
			document.getElementById('showTheNextDayName').innerHTML = 'Tuesday';
			delta = 1;
		}
		else if (y ===2) {
			document.getElementById('showTheNextDayName').innerHTML = 'Wednesday';
			delta = 1;
		}
		else if (y === 3) {
			document.getElementById('showTheNextDayName').innerHTML = 'Thursday';
			delta = 1;
		}
		else if (y === 4) {
			document.getElementById('showTheNextDayName').innerHTML = 'Friday';
			delta = 1;
		}
		else if (y === 5) {
			document.getElementById('showTheNextDayName').innerHTML = 'Monday';
			delta = 3;
		}
		else {
			document.getElementById('showTheNextDayName').innerHTML = 'Monday';
			delta = 2;
		}

	}
	
	
	
