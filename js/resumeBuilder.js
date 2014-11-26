var awesomeThoughts = "I am Joshua Cork and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
var formattedName
var formattedRole

$("#main").append(funThoughts);

var formattedName = "Joshua Cork";
var formattedRole = "web developer extrodinaire";

HTMLheaderName = HTMLheaderName.replace("%data%",formattedName)
HTMLheaderRole = HTMLheaderRole.replace('%data%',formattedRole)

$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);
