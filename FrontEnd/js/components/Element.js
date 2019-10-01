export default function Element(selement){
        return `
        <div class="fixedseleheader">
        <sele2 class="${selement.class} Group${selement.groupId} Period${selement.periodId} sele">
            <sele2class>${selement.class}</sele2class>
        </sele2>
            <h2 style="border-bottom: 1px black solid; background-color: rgb(41, 41, 41);">${selement.name}</h2>
            </div>
            <selement>
            <subsele>
            <selementd>
                <seld>${selement.description}<seld>
                </br>
                </br>
                </br>
                Periodic Properties of ${selement.name}
                <hr>
                Atomic Number: ${selement.atomicNumber}
                </br>
                Atomic Weight: ${selement.atomicWeight}
                </br>
                Class: ${selement.class}
                </br>
                Group: ${selement.groupId}
                </br>
                Period: ${selement.periodId}
                </br>
                </br>
                Chemical Properties of ${selement.name}
                <hr>
                Phase at STP: ${selement.phase}
                </br>
                Melting Point: -200°F
                </br>
                Boiling Point: -150°F
                </br>
                Density: 0.08988 g/L
                </br>
                </br>
                Atomic Properties of ${selement.name}
                <hr>
                Electronegativity: 
                </br>
                Covalent radius:
                </br>
                Van der Waals radius:

                <selebuttons>
                <button class="delele">DELETE
     
                <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}">
                <input class='add_element_name' type='hidden' value="${selement.name}">
                <input class='add_element_symbol' type='hidden' value="${selement.symbol}">
                <input class='add_element_atomic_number' type='hidden' value="${selement.atomicNumber}">
                <input class='add_element_atomic_weight' type='hidden' value="${selement.atomicWeight}">
                <input class='add_element_class' type='hidden' value="${selement.class}"></button>
                <button class="geteditele">EDIT
                <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}">
                <input class='add_element_name' type='hidden' value="${selement.name}">
                <input class='add_element_symbol' type='hidden' value="${selement.symbol}">
                <input class='add_element_atomic_number' type='hidden' value="${selement.atomicNumber}">
                <input class='add_element_atomic_weight' type='hidden' value="${selement.atomicWeight}">
                <input class='add_element_class' type='hidden' value="${selement.class}"></button>
            </selebuttons>
            </selementd>
            <asp>
            <img src="${selement.image}">
            <img src="${selement.image2}">
           
            </asp>
            </subsele>
            </selement>
            <selement2>
            </br>
            </br>
           
            </selement2>
                `   
};