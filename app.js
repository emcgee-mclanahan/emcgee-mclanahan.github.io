// JS page for application data
const user ={
    firstName:"Admin",
    lastName: "Admin",
    employeeNumber:1905,
    title:"Business Process Developer",
    permUser:"admin",
    permPassword:"admin"
    

};

function returnCredential(){
    let username = document.getElementById("user").value;
    let password = document.getElementById("userKey").value;

    if(user.permUser == username && user.permPassword == password) {
        console.log('Login Sucesses: ',"Login Successful");
        window.location="homePage.html";

    } else {
        document.getElementById("myForm").reset();
        console.log( 'Failed Login: ', user.permUser, user.permPassword);

        document.getElementById("invalid").style.display = 'contents';

        // Function to reset element for 5sec
        setTimeout(()=> {
            const invalid = document.getElementById("invalid");

            invalid.style.display = 'none';
        }, 2000);

    }

}

function returnName(){
    header = user.firstName;

    document.getElementById("welcomeName").innerHTML =  "Welcome, " + header;
    console.log('Return Name:', header);
}

// Script Section to export table to different file types
// using open source table2excel library
var btnXlsx = document.getElementById("xlsx").addEventListener('click', function(){
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("#export-table"));
});

var btnCsv = document.getElementById("csv");
    
    
