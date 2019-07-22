import Elements from "./js/components/Elements";
import ApiAction from "./js/api/api-actions";

pageBuild();

function pageBuild(){
    elements();
};

function elements(){
    const app = document.getElementById('component1');
    const elements = document.getElementById('nav__Elements');
    elements.addEventListener('click', function(){
        ApiAction.getRequest("https://localhost:44330/api/elements", elementlist => {
            app.innerHTML = Elements(elementlist);
        })
    })
}
