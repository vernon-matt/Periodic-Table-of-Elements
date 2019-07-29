import Elements from "./js/components/Elements";
import ApiAction from "./js/api/api-actions";
import ElementByClass from "./js/components/ElementByClass";
import Element from "./js/components/Element";
import AddElement from "./js/components/AddElement";
import AddElement2 from "./js/components/AddElement2";
import AddElement3 from "./js/components/AddElement3";
import AddElement4 from "./js/components/AddElement4";
import EditElement from"./js/components/EditElement";
import { isAbsolute } from "path";

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
};

//About Nav
function about() {
    document.getElementById('navAbout').addEventListener('click', function() {
        document.getElementById('component1').innerHTML = "<h2>About Page Coming Soon</h2>"
    })
}

//Displays All Elements
function elements(){
    const app = document.getElementById('component1');
    const elements = document.getElementById('nav__Elements');
    elements.addEventListener('click', function(){
        ApiAction.getRequest("https://localhost:44330/api/elements", elementlist => {
            app.innerHTML = Elements(elementlist);
        })
    })
};

//Returns All Elements Upon Delete
function delReturnsElements(){
    const app = document.getElementById('component1');
        ApiAction.getRequest("https://localhost:44330/api/elements", elementlist => {
            app.innerHTML = Elements(elementlist);
        })};
  
//Displays Elements By Class
function elementByClass(){
    document.querySelector('.navbar').addEventListener("click", function() {
        if (event.target.classList.contains("select_element_by_class")) {
          const element = event.target.querySelector(".select_element_by_class_value").value;
          console.log(element)
          ApiAction.getRequest("https://localhost:44330/api/elements/"+ element,
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
          ApiAction.getRequest("https://localhost:44330/api/elements/element/"+ elementId,
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
            ApiAction.getRequest("https://localhost:44330/api/elements/element/"+ elementId,
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
            ApiAction.putRequest("https://localhost:44330/api/Elements/"+ elementId, data,
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
            ApiAction.putRequest("https://localhost:44330/api/Elements/"+ elementId, data,
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
            ApiAction.putRequest("https://localhost:44330/api/Elements/"+ elementId, data,
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
            ApiAction.putRequest("https://localhost:44330/api/Elements/"+ elementId, data,
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
            ApiAction.putRequest("https://localhost:44330/api/Elements/"+ elementId, data,
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
        if (event.target.classList.contains("geteditele")) {
            const elementId = event.target.querySelector(".select_element_by_id_value").value;
            ApiAction.getRequest("https://localhost:44330/api/Elements/element/"+ elementId,
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
            ApiAction.putRequest("https://localhost:44330/api/Elements/"+ elementId, data,
            selement => {
                document.getElementById('component1').innerHTML = Element(selement);
            },
            );
        }
    })
}


    