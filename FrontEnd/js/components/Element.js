export default function Element(selement){
        return `

            <h2>${selement.name}</h2>
            <selement>
                <sele class="${selement.class} Group${selement.groupId} Period${selement.periodId} sele">
                    <atomn>${selement.atomicNumber}</atomn>
                    <sym>${selement.symbol}</sym>
                    <atomw>${selement.atomicWeight}</atomw>
                    <elename>${selement.name}</elename>
                </sele>
            <img src="${selement.image}">
            </selement>
            <selement2>
            <selementd>
                <seld>${selement.description}<seld>
            </selementd>
            </br>
            </br>
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
            </selement2>
                `   
};