import Elements from "./js/components/Elements";
import ApiAction from "./js/api/api-actions";
import ElementByClass from "./js/components/ElementByClass";
import Element from "./js/components/Element";
import AddElement from "./js/components/AddElement";
import AddElement2 from "./js/components/AddElement2";
import AddElement3 from "./js/components/AddElement3";
import AddElement4 from "./js/components/AddElement4";
import EditElement from"./js/components/EditElement";
import InfoBox from "./js/components/InfoBox";
import { ENETRESET } from "constants";


pageBuild();

function pageBuild(){
    elements();
    elementByClass();
    element();
    addElement();
    addElement2();
    addElement3();
    addElement4();
    createElement();
    deleteElement();
    getEditElement();
    editElement();
    about();
    infoBox();
};

//About Nav
function about() {
    document.getElementById('navAbout').addEventListener('click', function() {
        document.getElementById('component1').innerHTML = "<h2>About Page Coming Soon</h2>"
    })
}

//Display InfoBox
function infoBox() {
    document.getElementById('component1').addEventListener('mouseover', function() {
        if (event.target.classList.contains("ele")) {
            const elementId = event.target.querySelector(".select_element_by_id_value").value;
            console.log(elementId)
            ApiAction.getRequest("https://192.168.0.32:5000/api/elements/element/"+ elementId,
              selement => {
                  document.getElementById('InfoBox').innerHTML = InfoBox(selement);
        }
    )}
})}
            


//Displays All Elements
function elements(){
    const app = document.getElementById('component1');
    const elements = document.getElementById('nav__Elements');
    elements.addEventListener('click', function(){
        ApiAction.getRequest("https://192.168.0.32:5000/api/elements", elementlist => {
            app.innerHTML = Elements(elementlist);
        })
    })
};

//Returns All Elements Upon Delete
function delReturnsElements(){
    const app = document.getElementById('component1');
        ApiAction.getRequest("https://192.168.0.32:5000/api/elements", elementlist => {
            app.innerHTML = Elements(elementlist);
        })};
  
//Displays Elements By Class
function elementByClass(){
    document.querySelector('.navbar').addEventListener("click", function() {
        if (event.target.classList.contains("select_element_by_class")) {
          const element = event.target.querySelector(".select_element_by_class_value").value;
          console.log(element)
          ApiAction.getRequest("https://192.168.0.32:5000/api/elements/"+ element,
            elementlist => {
                document.getElementById('component1').innerHTML = ElementByClass(elementlist);
            },           
            );
        }
    })
};

//Displays a Single Clicked Element From the Table
function element(){
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.target.classList.contains("select_element_by_id")) {
          const elementId = event.target.parentElement.querySelector(".select_element_by_id_value").value;
          console.log(elementId)
          ApiAction.getRequest("https://192.168.0.32:5000/api/elements/element/"+ elementId,
            selement => {
                document.getElementById('component1').innerHTML = Element(selement);
            },           
            );
        }
    })
}

//Get Request for Elements of Class "NON" from Table (Add New)
function addElement(){
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.target.classList.contains("add_element")) {
            const elementId = event.target.parentElement.querySelector(".select_element_by_id_value").value;
            ApiAction.getRequest("https://192.168.0.32:5000/api/elements/element/"+ elementId,
            selement => {
                document.getElementById('component1').innerHTML = AddElement(selement);
            },
            );
        }
    })
}

//Put Request for Add Elements, Returns the Edited Element with the New Class
function addElement2(){ 
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.target.classList.contains("addele1")) {
            const elementId = event.target.querySelector(".select_element_by_id_value").value;
            const selectedclass = event.target.querySelector(".add_element_class").value;
            const groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
            const periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
            const data = {
                elementId: elementId,
                class: selectedclass,
                groupId: groupid,
                periodId: periodid
            }
            ApiAction.putRequest("https://192.168.0.32:5000/api/Elements/"+ elementId, data,
            selement => {
                document.getElementById('component1').innerHTML = AddElement2(selement);
            },
            );
        }
    })
}

//Add Element 3 Component
function addElement3(){ 
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.target.classList.contains("addele2")) {
            const elementId = event.target.querySelector(".select_element_by_id_value").value;
            const groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
            const periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
            const selectedclass = event.target.querySelector(".add_element_class").value;
            const name = document.querySelector(".add_element_name").value;
            const sym = document.querySelector(".add_element_symbol").value;
            const data = {
                elementId: elementId,
                class: selectedclass,
                groupId: groupid,
                periodId: periodid,
                symbol: sym,
                name: name
            }
            ApiAction.putRequest("https://192.168.0.32:5000/api/Elements/"+ elementId, data,
            selement => {
                document.getElementById('component1').innerHTML = AddElement3(selement);
            },
            );
        }
    })
}

//Add Element 4 Component
function addElement4(){ 
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.target.classList.contains("addele3")) {
            const elementId = event.target.querySelector(".select_element_by_id_value").value;
            const groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
            const periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
            const selectedclass = event.target.querySelector(".add_element_class").value;
            const name = document.querySelector(".add_element_name").value;
            const sym = document.querySelector(".add_element_symbol").value;
            const atomnumber = document.querySelector(".add_element_atomic_number").value;
            const atomweight= document.querySelector(".add_element_atomic_weight").value;
            const data = {
                elementId: elementId,
                class: selectedclass,
                groupId: groupid,
                periodId: periodid,
                symbol: sym,
                name: name,
                atomicNumber: atomnumber,
                atomicWeight: atomweight
            }
            ApiAction.putRequest("https://192.168.0.32:5000/api/Elements/"+ elementId, data,
            selement => {
                document.getElementById('component1').innerHTML = AddElement4(selement);
            },
            );
        }
    })
}

//Creates The New Element And Returns The New Element
function createElement(){ 
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.target.classList.contains("addele4")) {
            const elementId = event.target.querySelector(".select_element_by_id_value").value;
            const groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
            const periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
            const selectedclass = event.target.querySelector(".add_element_class").value;
            const name = document.querySelector(".add_element_name").value;
            const sym = document.querySelector(".add_element_symbol").value;
            const atomnumber = document.querySelector(".add_element_atomic_number").value;
            const atomweight = document.querySelector(".add_element_atomic_weight").value;
            const image = document.querySelector(".add_element_image").value;
            const description = document.querySelector(".add_element_description").value;
            const data = {
                elementId: elementId,
                class: selectedclass,
                groupId: groupid,
                periodId: periodid,
                symbol: sym,
                name: name,
                atomicNumber: atomnumber,
                atomicWeight: atomweight,
                description: description,
                image: image
            }
            ApiAction.putRequest("https://192.168.0.32:5000/api/Elements/"+ elementId, data,
            selement => {
                document.getElementById('component1').innerHTML = Element(selement);
            },
            );
        }
    })
}

//Deletes An ELement
function deleteElement(){ 
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.target.classList.contains("delele")) {
            const elementId = event.target.querySelector(".select_element_by_id_value").value;
            const groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
            const periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
            const data = {
                elementId: elementId,
                class: "NON",
                groupId: groupid,
                periodId: periodid,
                symbol: "+",
                name: "Add New",
                atomicNumber: 1,
                atomicWeight: 0,
                description: "",
                image: "",
            }
            ApiAction.putRequest("https://192.168.0.32:5000/api/Elements/"+ elementId, data,
            selement => {
               delReturnsElements();
            },
            );
        }
    })
}

//Gets Edit Component
function getEditElement() {
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.tadrget.classList.contains("geteditele")) {
            const elementId = event.target.querySelector(".select_element_by_id_value").value;
            ApiAction.getRequest("https://192.168.0.32:5000/api/Elements/element/"+ elementId,
            selement=>
            document.getElementById('component1').innerHTML = EditElement(selement)
            )
        }
    })
}

//Element Edit Component
function editElement() {
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.target.classList.contains("editelement")) {
            const elementId = event.target.querySelector(".select_element_by_id_value").value;
            const groupid = event.target.parentElement.querySelector(".select_element_by_group_value").value;
            const periodid = event.target.parentElement.querySelector(".select_element_by_period_value").value;
            const selectedclass = document.querySelector(".edit_element_class").value;
            const name = document.querySelector(".edit_element_name").value;
            const sym = document.querySelector(".edit_element_symbol").value;
            const atomnumber = document.querySelector(".edit_element_atomic_number").value;
            const atomweight = document.querySelector(".edit_element_atomic_weight").value;
            const image = document.querySelector(".edit_element_image").value;
            const description = document.querySelector(".edit_element_description").value;
            const data = {
                elementId: elementId,
                class: selectedclass,
                groupId: groupid,
                periodId: periodid,
                symbol: sym,
                name: name,
                atomicNumber: atomnumber,
                atomicWeight: atomweight,
                description: description,
                image: image
            }
            ApiAction.putRequest("https://192.168.0.32:5000/api/Elements/"+ elementId, data,
            selement => {
                document.getElementById('component1').innerHTML = Element(selement);
            },
            );
        }
    })
}

//Highlights the group and period numbers on hover
document.querySelector('#component1').addEventListener("mouseover", function() {
    if (event.target.parentElement.classList.contains("ele")) {
    const group = event.target.parentElement.querySelector(".groupnum").value;
    const period = event.target.parentElement.querySelector(".periodnum").value;
    const grouphighlight = document.getElementById(`pl${+group}`);
    const periodhighlight = document.getElementById(`g${+period}`);
    grouphighlight.style.color = "orange";
    periodhighlight.style.color = "orange"
}})
document.querySelector('#component1').addEventListener("mouseout", function() {
    if (event.target.parentElement.classList.contains("ele")) {
    const group = event.target.parentElement.querySelector(".groupnum").value;
    const period = event.target.parentElement.querySelector(".periodnum").value;
    const grouphighlight = document.getElementById(`pl${+group}`);
    const periodhighlight = document.getElementById(`g${+period}`);
    grouphighlight.style.color = "white";
    periodhighlight.style.color = "white"
}})
document.querySelector('#component1').addEventListener("mouseover", function() {
    if (event.target.classList.contains("ele")) {
    const group = event.target.querySelector(".groupnum").value;
    const period = event.target.querySelector(".periodnum").value;
    const grouphighlight = document.getElementById(`pl${+group}`);
    const periodhighlight = document.getElementById(`g${+period}`);
    grouphighlight.style.color = "orange";
    periodhighlight.style.color = "orange"
}})
document.querySelector('#component1').addEventListener("mouseout", function() {
    if (event.target.classList.contains("ele")) {
    const group = event.target.querySelector(".groupnum").value;
    const period = event.target.querySelector(".periodnum").value;
    const grouphighlight = document.getElementById(`pl${+group}`);
    const periodhighlight = document.getElementById(`g${+period}`);
    grouphighlight.style.color = "white";
    periodhighlight.style.color = "white"
}})

const app = document.getElementById('component1');
const elements = document.getElementById('enter__Elements');
elements.addEventListener('click', function(){
    ApiAction.getRequest("https://192.168.0.32:5000/api/elements", elementlist => {
        app.innerHTML = Elements(elementlist);
        document.querySelector('.navbar').style.display = "flex";
    })
})

//DarkTheme
app.addEventListener('click', function(){
if (event.target.classList.contains("darktheme")) {
const darktheme = document.getElementById('darktheme');
if (darktheme.checked == true){
    document.querySelector('elements').style.backgroundColor = 'black'
    const elecolor = document.querySelectorAll('ele');
    elecolor.forEach(element => {
        element.style.backgroundColor = 'black';
    })
    const AM = document.querySelectorAll('.Alkaline-Metal');
    AM.forEach(element => {
        element.style.outline = '2px solid red';
        element.style.outlineOffset = '-2px';
    })
    const AEM = document.querySelectorAll('.AEM');
    AEM.forEach(element => {
        element.style.outline = '2px solid rgb(255, 115, 0)';
        element.style.outlineOffset = '-2px';
    })
    const TM = document.querySelectorAll('.TM');
    TM.forEach(element => {
        element.style.outline = '2px solid rgb(255, 187, 0)';
        element.style.outlineOffset = '-2px';
    })
    const PTM = document.querySelectorAll('.PTM');
    PTM.forEach(element => {
        element.style.outline = '2px solid rgb(238, 234, 1)';
        element.style.outlineOffset = '-2px';
    })
    const M = document.querySelectorAll('.M');
    M.forEach(element => {
        element.style.outline = '2px solid rgb(138, 224, 9)';
        element.style.outlineOffset = '-2px';
    })
    const PolyatomicNonmetal = document.querySelectorAll('.Polyatomic-Nonmetal');
    PolyatomicNonmetal.forEach(element => {
        element.style.outline = '2px solid rgb(1, 202, 135)';
        element.style.outlineOffset = '-2px';
    })
    const DN = document.querySelectorAll('.DN');
    DN.forEach(element => {
        element.style.outline = '2px solid rgb(79, 117, 241)';
        element.style.outlineOffset = '-2px';
    })
    const NG = document.querySelectorAll('.Noble-Gas');
    NG.forEach(element => {
        element.style.outline = '2px solid purple';
        element.style.outlineOffset = '-2px';
    })
    const L = document.querySelectorAll('.L');
    L.forEach(element => {
        element.style.outline = '2px solid rgb(247, 201, 146)';
        element.style.outlineOffset = '-2px';
    })
    const A = document.querySelectorAll('.A');
    A.forEach(element => {
        element.style.outline = '2px solid rgb(176, 176, 245)';
        element.style.outlineOffset = '-2px';
    })
    const UP = document.querySelectorAll('.UP');
    UP.forEach(element => {
        element.style.outline = '2px solid rgb(78, 129, 78)';
        element.style.outlineOffset = '-2px';
    })

}
    if (darktheme.checked == false) {
        document.querySelector('elements').style.backgroundColor = 'white'
        const elecolor = document.querySelectorAll('ele');
        elecolor.forEach(element => {
            element.style.backgroundColor = null;
        })
}}})

//Hide NON Elements
app.addEventListener('click', function(){
    if (event.target.classList.contains("HideNON")) {
    let HideNON = document.getElementById('HideNON');
    console.log(HideNON.value)
    if (HideNON.checked == true){
        const NON = document.querySelectorAll('.NON');
        NON.forEach(element => {
            element.style.visibility = 'hidden';
        })
    }
    if (HideNON.checked == false){
        const NON = document.querySelectorAll('.NON');
        NON.forEach(element => {
        element.style.visibility = 'visible';
        })
    }
    console.log(HideNON.value)
}})

//Info View
app.addEventListener('click', function(){
    if (event.target.classList.contains("InfoView")) {
    let InfoView = document.getElementById('InfoView');
    if (InfoView.checked == true){
        const ElementsInfo = document.querySelector('elements');
        ElementsInfo.style.width = '69vw'
        ElementsInfo.style.height = '50.5vh'
        ElementsInfo.style.gridTemplateRows = '7vh 7vh 7vh 7vh 7vh 7vh 7vh'
        ElementsInfo.style.gridTemplateColumns = '3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw 3.44vw'
        ElementsInfo.style.gridRowGap = '.7vh'
        ElementsInfo.style.gridColumnGap = '.406vw'
        const EleInfo = document.querySelectorAll('ele');
        EleInfo.forEach(element => {
            element.style.width = '3.5vw'
            element.style.height = '7vh'
        })
        const atomn = document.querySelectorAll('atomn');
        atomn.forEach(element => {
            element.style.visibility = 'hidden'
        })
        const elename = document.querySelectorAll('elename');
        elename.forEach(element => {
            element.style.visibility = 'hidden'
        })
        const atomw = document.querySelectorAll('atomw');
        atomw.forEach(element => {
            element.style.visibility = 'hidden'
        })
        const InfoBox = document.getElementById('InfoBox');
        InfoBox.style.display = null;
    }
    if (InfoView.checked == false){
        const ElementsInfo = document.querySelector('elements');
        ElementsInfo.style.width = '100vw'
        ElementsInfo.style.height = null
        ElementsInfo.style.gridTemplateRows = '10vh 10vh 10vh 10vh 10vh 10vh 10vh'
        ElementsInfo.style.gridTemplateColumns = '4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw 4.92vw'
        ElementsInfo.style.gridRowGap = '1vh'
        ElementsInfo.style.gridColumnGap = '.580vw'
        const EleInfo = document.querySelectorAll('ele');
        EleInfo.forEach(element => {
            element.style.width = '5vw'
            element.style.height = '10vh'
        })
        const atomn = document.querySelectorAll('atomn');
        atomn.forEach(element => {
            element.style.visibility = null
        })
        const elename = document.querySelectorAll('elename');
        elename.forEach(element => {
            element.style.visibility = null
        })
        const atomw = document.querySelectorAll('atomw');
        atomw.forEach(element => {
            element.style.visibility = null
        })
        const InfoBox = document.getElementById('InfoBox');
        InfoBox.style.display = 'none';
    }
}
})

    