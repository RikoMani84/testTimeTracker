const in_out = document.getElementById("in-out");
let status = 'Clock out';
in_out.onclick = function () {
    startStop();
}
var date = new Date(new Date().getTime()).toLocaleTimeString();
console.log(date);
function startStop()
{
	if(status == 'Clock out')
	{
		document.getElementById('message').innerHTML = "Have a nice day, good luck!";
		in_out.innerHTML = 'Clock out';
        in_out.style.background="#FF4F4F";

    //     fetch('http://127.0.0.1:3000/employees/id', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         clock_in: date
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

		status = 'Clock in';
	}
	else if(status == 'Clock in')
	{
		document.getElementById('message').innerHTML = "You did a good job today, see you again...";
        in_out.innerHTML = 'Clock in';
        in_out.style.background="#FFA74F";

    //     fetch('http://127.0.0.1:3000/employees/id', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         clock_out: date
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

		status = 'Clock out';
	}
}

