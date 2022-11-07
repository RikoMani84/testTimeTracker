var xhttp = new XMLHttpRequest;
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var employees = response;
        var item = '';
        for (var i = 0; i < employees.length; i++) {

            item += `<tr>
                    <th scope="row">${employees[i].name}</th>
                    <td>${employees[i].email}</td>
                    <td>${employees[i].clock_in}</td>
                    <td>${employees[i].clock_out}</td>
                  </tr>
                `
        }
        document.getElementById('table_tbody').innerHTML = item;
    }
};

xhttp.open("GET", "http://localhost:3000/employees", true);
xhttp.send();
