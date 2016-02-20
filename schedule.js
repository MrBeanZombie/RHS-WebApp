//Now input days of the month into a single array. Then set the days to match the schedule//

//NEEDS TO BE UPLOADED TO THE HOWARDKAM.COM SERVER. ONLY HOWARD KAM HAS ACCESS.//
var bSchedule = {
1: "Normal day",
2: "Normal day",
3: "Normal day",
4: "Normal day",
5: "Normal day",
6: "Normal day",
7: "Normal day",
8: "Normal day",
9: "Normal day",
10: "Normal day",
11: "Normal day",
12: "Normal day",
13: "Normal day",
14: "Normal day",
15: "Food15",
16: "No school, No lunch service",
17: "Food17",
18: "Food18",
19: "Advisory. Single assembly schedule.",
20: "No school, No lunch service",
21: "No school, No lunch service",
22: "Normal day",
23: "Normal day",
24: "Normal day",
25: "Advisory. Double assembly schedule.",
26: "Normal day",
27: "Normal day",
28: "Normal day",
29: "Normal day",
30: "Normal day",
31: "Normal day"
};

//Based on the reported day of the clients computer, the food in the array will be displayed.//
function bellSchedule() {
    var d1 = new Date();
    var n1 = d1.getDate();
    document.getElementById('showSchedule').innerHTML = bSchedule[n1];
}
