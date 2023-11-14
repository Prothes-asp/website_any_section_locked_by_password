//  Section Password Code Start Here
// =====================================
// =====================================

document.getElementById("psshead").style.color = "#ffc107";

function onSubmit() {

    var a = document.getElementById('password').value;
    let myString = a;
    let encodedValue = btoa(myString);

    if (encodedValue == "NzQyNjcy" ) {
        window.ProtectedDiv.style.display="block"; 
        document.getElementById("psshead").innerHTML = "Section has been opened";
        document.getElementById("psshead").style.color = "#0bceaf";

        // When User Submitted Rignt Password
        swal({
            title: "Successed",
            text: "Permission Granted",
            icon: "success",
            button: "Ok",
          });
    }

    // When User Submitted Wrong Password
    else if (encodedValue != "NzQyNjcy") {
        swal({
            title: "Wrong Password",
            text: "Password Does Not Matched",
            icon: "warning",
            button: "Ok",
        });
    }

}




// When Filed is empty 

$("#submit").click(function(){
    var password = $("#password").val();
    if(password == ''){
        swal({
            title: "Field is Empty ",
            text: "Please Check The Field !",
            icon: "warning",
            button: "Ok",
          });
    }
});



