let cardTitle = ["ANDROID","IOS","MARKETING COMMUNICATION","PYTHON","RPA","BLOCKCHAIN","JAVA WEB","MS DOTNET","QC / TEST ENGINEER (AUTOMATION)","SALES (S/W INTERNATIONAL)","CONTENT STRATEGY ","JAVASCRIPT BACK-END","MS SHAREPOINT","QC / TEST ENGINEER (MANUAL)","DEVOPS / CLOUD (AWS, MS AZURE, GCP)","JAVASCRIPT FRONT-END","PHP","QC / TEST ENGINEER (PERFORMANCE)","UX / UI DESIGNER","FLUTTER"]


 let pText = ["looking for a Business Development Manager ","looking for an Oracle Fusion Financials Technical Consultant","looking for an Oracle Cloud ERP Application Sales Manager","looking for an Oracle Fusion EPM Functional Junior Consultant"," looking for an Oracle Fusion HCM Functional Consultant","an Oracle Fusion SCM Functional Consultant","looking for an Oracle Fusion SCM Functional Consultant"," looking for an Oracle Fusion SCM Technical Consultant"," looking for a Team Lead - Oracle Integration Cloud (OIC)","looking for a JBoss Administrator"," looking for an Oracle Fusion Finance Functional Consultant", " looking for an OIC Technical Consultan"," looking for an L2 Senior Engineer – Technical Support (VisionPLUS Application) ", "looking for an L1 Engineer – Technical Support (VisionPLUS application)","looking for an Oracle Cloud ERP Application Sales Manager", "looking for an Oracle VBCS Technical Consultan", " looking for an Oracle Fusion HCM - Solution Architect","looking for a Project Manager - Oracle Cloud"," looking for WSO2 - Developer/Support","looking for Sales Hunter - Digital Transformation and Cloud Services "]

let expirience = ["3 - 5 yrs", "March 15, 2024"]




let cardDiv = document.querySelector(".content")
const displayElement = ()=> {
    let id = "0"
    cardTitle.forEach(e=> {
        let div = document.createElement("div")
    div.innerHTML = `  <div id="${id}" class="card m-3 p-2">
                        <a target="_blank" class="text-decoration-none" href="/dipscrip.html" >
                            <div class="col-12 d-flex title">
                                <div class="col-9"><h1 class="">${e}</h1> </div><div class="col-3"><i class="ri-checkbox-circle-fill fs-3 ms-5"></i></div>
                                </div>
                                <div class="col-12 mt-1 dips">
                                <p class="dips-p"></p>
                            </div>
                            <p class="m-0">Location : Mumbai</p>
                            <p class="m-0">Till : March 15, 2024</p>
                            <p>Expirience : ${expirience[0]}</p>
                            <button class="btn py-2 px-3 text-white rounded-3 cardBtn">Read more</button>
                        </a>
                        </div>`
                        // console.log(div)
                        cardDiv.appendChild(div)
                        id++
    })
}
displayElement()

let ps = document.querySelectorAll(".dips p")
// console.log(ps)
let a="0"
ps.forEach(e=> {
    e.innerHTML = pText[a]
    a++
})

let jobTitle = document.querySelector(".job-title")
let card = document.querySelectorAll(".card")

card.forEach(e=> {
  e.addEventListener('click',function(){
    // console.log()
    let newText = `${pText[e.id]}`
    console.log(newText)
    jobTitle.innerHTML = "newText"
  })
})