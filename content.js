$(document).keypress(function(e) {
	if(e.which == 13) {
		run();
	}
});

var aList = [];

function run()
{
	$("a").each(function()
	{
		aList.push($(this).attr("href"));
	});

	for (var i = 1; i < aList.length - 4; i++)
	{
		$.get("http://www.oldradioshows.com" + aList[i], function(response) {
			var nodes = $(response).find("b").prevObject[9].childNodes;
			for (var j = 0; j < nodes.length; j++)
			{
				if (nodes[j].nodeType == 3 && nodes[j].nodeValue.includes("ROGER"))
				{
					console.log(nodes[j].nodeValue);
				}
			}
		});
	}
}