var xhttp = new XMLHttpRequest;
const table_tbody = document.getElementById("table_tbody");
xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status==200){
        let response = JSON.parse(xhttp.responseText)
        let employees = response.employees;
        // let out = '';

        // for (let emp in employees) {
        //     out +=`<tr>
        //             <th scope="row">'${emp.name}'</th>
        //             <td>'${emp.email}'</td>
        //             <td></td>
        //             <td></td>
        //           </tr>`
        // }
        // table_tbody.innerHTML = out;

        console.log(employees);
    }
}


xhttp.open("GET", "http://localhost:3000/employees", true);
xhttp.send();