import Elements from "./js/components/Elements";
import ApiAction from "./js/api/api-actions";
import ElementByClass from "./js/components/ElementByClass";
import Element from "./js/components/Element";

pageBuild();

function pageBuild(){
    elements();
    elementByClass();
    element();
};

function elements(){
    const app = document.getElementById('component1');
    const elements = document.getElementById('nav__Elements');
    elements.addEventListener('click', function(){
        ApiAction.getRequest("https://localhost:44330/api/elements", elementlist => {
            app.innerHTML = Elements(elementlist);
        })
    })
};

function elementByClass(){
    document.querySelector('#component1').addEventListener("click", function() {
        if (event.target.classList.contains("select_element_by_class")) {
          const element = event.target.parentElement.querySelector(".select_element_by_class_value").value;
          console.log(element)
          ApiAction.getRequest("https://localhost:44330/api/elements/"+ element,
            elementlist => {
                document.getElementById('component1').innerHTML = ElementByClass(elementlist);
            },           
            );
        }
    })
};

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
