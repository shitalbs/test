const employees=[
    {name:"shital",designation:"technical writer",dateofjoining:"2023-12-05",address:"pune",salary:"8000"},
];  


    function populateTable(){
    const tableBody=document.getElementById("employeeTableBody");

    employees.forEach(employee=>{const row=document.createElement("tr");

    row.innerHTML=

    <><td>${employee.name} </td><td>${employee.designation}</td><td>${employee.dateofjoining}</td><td>${employee.address} </td><td>${employee.salary} </td></>
    

    tableBody.appendChildld(row);
    });
}

document.addEventListener("DOMContentLoaded",populateTable);