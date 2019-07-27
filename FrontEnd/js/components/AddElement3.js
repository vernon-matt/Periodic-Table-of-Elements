export default function AddElement3(selement){
    return `
            <h1>You're almost done, Choose an Atomic Number and an Atomic Mass.</h1>
            <selement class="addele">
                <classbox>
                (Atomic Number should be no greater than 1000.)</br>
                <strong>Atomic Number:</strong>
                <input type="text" class="add_element_atomic_number" placeholder="Choose a Name">
                </br>
                </br>
                </br>
                (Atomic Mass should have 3 values after the decimal.)</br>
                <strong>Atomic Mass:</strong>
                <input type="text" class="add_element_atomic_weight" placeholder="Choose a Symbol">   
                </br>
                </br>  
                <button class="addele3">Continue
                <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}">
                <input class='add_element_name' type='hidden' value="${selement.name}">
                <input class='add_element_symbol' type='hidden' value="${selement.symbol}">
                <input class='add_element_class' type='hidden' value="${selement.class}">
                </button>            
                </classbox>
                <sele class="${selement.class} Group${selement.groupId} Period${selement.periodId}">
                    <sym>${selement.symbol}</sym>
                    <elename>${selement.name}</elename>
                </sele>
            </selement>
                `      
};