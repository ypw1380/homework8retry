function wherelive(addy) 
{
	alert("Your address is "+addy);
}
wherelive("246 E 46th St");


function superbowl(winner)
{
	if(winner===1)
	{
		console.log("You are choosing the Broncos to win in regulation!");
	}
	else if(winner===2)
	{
		console.log("You are choosing the Seahawks to win in regulation!");
	}
	else
	{
		console.log("You have chosen a tie and sudden death!");
	}
}

superbowl(7);




function superbowl(overunder)
{
	if(overunder<60)
	{
		console.log("The Super Bowl will be a low scoring game!");
	}
	else if(overunder>60)
	{
		console.log("The Super Bowl will be a high scoring game!");
	}
	else
	{
		console.log("You have tied the bet line!!");
	}
}

superbowl(61);
