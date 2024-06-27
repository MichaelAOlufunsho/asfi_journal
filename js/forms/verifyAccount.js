import { GetParameters, parentDirectoryName, submissionsEndpoint } from "../constants.js";

const email = GetParameters("a")

if(email){
    fetch(`${submissionsEndpoint}/backend/verifyaccount.php?e=${email}`, {
        method:"GET"
    }).then(res=>res.json())
    .then(data=>{
        if(data.status === "success" || data.status === "accountVerified"){
            window.location.href = parentDirectoryName+="/portal/login"
        }else{
            document.write(data.message)
        }
    })
}else{
    window.location.href = parentDirectoryName+"/portal/login"
}