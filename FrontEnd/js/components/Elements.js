export default function Elements(elementlist){
    return `
    <periodlabel><pl></pl><pl id="pl1">1</pl><pl id="pl2">2</pl><pl id="pl3">3</pl><pl id="pl4">4</pl><pl id="pl5">5</pl><pl id="pl6">6</pl><pl id="pl7">7</pl><pl id="pl8">8</pl><pl id="pl9">9</pl><pl id="pl10">10</pl><pl id="pl11">11</pl><pl id="pl12">12</pl><pl id="pl13">13</pl><pl id="pl14">14</pl><pl id="pl15">15</pl><pl id="pl16">16</pl><pl id="pl17">17</pl><pl id="pl18">18</pl></periodlabel>
    <elementpage>
    <grouplabel><groupnum></groupnum><groupnum id="g1">1</groupnum><groupnum id="g2">2</groupnum><groupnum id="g3">3</groupnum><groupnum id="g4">4</groupnum><groupnum id="g5">5</groupnum><groupnum id="g6">6</groupnum><groupnum id="g7">7</groupnum></grouplabel>
    <elements>  
        ${elementlist.map(element => {
            if(element.class != "NON") {var select = "select_element_by_id"};
            if(element.class == "NON") {var select = "add_element"};
        return `          
                <ele class="ele ${element.class} Group${element.groupId} Period${element.periodId}">
                    <atomn class="${select}">${element.atomicNumber}</atomn>
                    <sym class="${select}">${element.symbol}</sym>
                    <atomw class="${select}">${element.atomicWeight}</atomw>
                    <elename class="${select}">${element.name}
                    <input class='select_element_by_id_value' type='hidden' value="${element.elementId}">
                    </elename>
                    <input class='select_element_by_id_value' type='hidden' value="${element.elementId}">
                    <input class='groupnum' type='hidden' value="${element.groupId}">
                    <input class='periodnum' type='hidden' value="${element.periodId}">
                </ele>
                `      
        })     
        .join("")}
<label class="switch">
  <input class="darktheme" id="darktheme"  type="checkbox">
  <span class="slider"></span>
</label>
        
<label class="switch">
  <input class="HideNON" id="HideNON"  type="checkbox">
  <span class="slider"></span>
</label>

<label class="switch">
  <input class="InfoView" id="InfoView"  type="checkbox">
  <span class="slider"></span>
</label>
    </elements>
    <div id="InfoBox" style="display: none;">
    </div>
    </elementpage>
    `
        
}
