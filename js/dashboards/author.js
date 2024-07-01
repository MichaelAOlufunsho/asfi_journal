import { parentDirectoryName, submissionsEndpoint, url } from "../constants.js";
import { GetCookie } from "../setCookie.js";
import { GetAccountData } from "./accountData.js";

const email = GetCookie("user");

if(email){
const userInfo = await GetAccountData(email)
const navbarContainer = document.getElementById("navbarContainer")
let homeActive, authorActive, reviewerActive
const reviewerdashPattern = new RegExp(`^${parentDirectoryName}dashboard/reviewerdash/.*$`);
const authordashPattern = new RegExp(`^${parentDirectoryName}dashboard/authordash/.*$`);



if(url.pathname === `${parentDirectoryName}dashboard/authordash/`){
// navbarContainer.innerHTML = homeNavbar
homeActive = "nav-active"
authorActive = "not-active"
reviewerActive = "not-active"

}else if(authordashPattern.test(url.pathname)){
    homeActive = "not-active"
    authorActive = "nav-active"
    reviewerActive = "not-active"
}else if(reviewerdashPattern.test(url.pathname)) {
    homeActive = "not-active"
    authorActive = "not-active"
    reviewerActive = "nav-active"
}
const homeNavbar = `<div style="display: flex;">
                    <a href="${parentDirectoryName}dashboard/authordash" class="${homeActive}"><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-home text--danger'></i>Home </span></a>
                    <a href="${parentDirectoryName}dashboard/authorDash/manuscripts" class="${authorActive}"><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-pen text--danger'></i> Author </span></a>
                </div>
            </div>`
const authorNavbar = `<div style="display: flex;">
                    <a href="${parentDirectoryName}dashboard/authordash" class="${homeActive}"><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-home text--danger'></i>Home </span></a>
                    <a href="${parentDirectoryName}dashboard/authorDash/manuscripts" class="${authorActive}"><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-pen text--danger'></i> Author </span></a>
                </div>
            </div>`
const reviewerNavbar = `   <div style="display: flex;">
                    <a href="${parentDirectoryName}dashboard/authordash" class="${homeActive}"><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-home text--danger'></i>Home </span></a>
                    <a href="${parentDirectoryName}dashboard/authordash/manuscripts" class="${authorActive}" ><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-pen text--danger'></i> Author </span></a>
                    <a href="${parentDirectoryName}dashboard/reviewerdash" class="${reviewerActive}" ><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-bell text--danger'></i> Review </span></a>
                
                </div>
            </div>`
const editorNavbar = `   <div style="display: flex;">
                    <a href="${parentDirectoryName}dashboard/authordash" class="nav-active"><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-home text--danger'></i>Home </span></a>
                    <a href="${parentDirectoryName}dashboard/authordash/manuscripts" ><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-pen text--danger'></i> Author </span></a>
                    <a href="${parentDirectoryName}dashboard/reviewerdash" ><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-bell text--danger'></i> Review </span></a>
                    <a href="https://editors.asfirj.org" ><span class=" fw-bold" style="margin-left: 20px; margin-right: 20px;"> <i class='las la-edit text--danger'></i> Editorial Assignments </span></a>
                </div>
            </div>`

const isAuthor = userInfo.account_status 
const is_reviewer = userInfo.is_reviewer 
const is_editor = userInfo.is_editor
const userfullname = `${userInfo.prefix} ${userInfo.firstname} ${userInfo.lastname} ${userInfo.othername}`

const userfullname_container = document.querySelectorAll(".user_fullnameContainer")
userfullname_container.forEach(container =>{
    container.innerText = userfullname
})

if(isAuthor === "verified" && is_reviewer != "yes" && is_editor != "yes"){
    navbarContainer.innerHTML = authorNavbar
}else if(isAuthor === "verified" && is_reviewer === "yes" && is_editor != "yes"){
    navbarContainer.innerHTML = reviewerNavbar
}else if(isAuthor === "verified" && is_editor === "yes"){
navbarContainer.innerHTML = editorNavbar
}else{
    console.log(isAuthor)
}
}else{
    window.location.href = parentDirectoryName+'/dashboard'
}