export default function AddElement4(selement){
    return `
            <h1>Finally, add a Description and an Image for Your Element!</h1>
            <selement class="addele">
                <classbox>
                (Describe your discovered element)</br>
                <strong>Description:</strong>
                <input type="text" class="add_element_description" placeholder="Description">
                </br>
                </br>
                </br>
                (Image must be a web URL)</br>
                <strong>Image:</strong>
                <input type="text" class="add_element_image" placeholder="Image URL">   
                </br>
                </br>  
                <button class="addele4">Continue
                <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}">
                <input class='add_element_name' type='hidden' value="${selement.name}">
                <input class='add_element_symbol' type='hidden' value="${selement.symbol}">
                <input class='add_element_atomic_number' type='hidden' value="${selement.atomicNumber}">
                <input class='add_element_atomic_weight' type='hidden' value="${selement.atomicWeight}">
                <input class='add_element_class' type='hidden' value="${selement.class}">
                </button>            
                </classbox>
                <sele class="${selement.class} Group${selement.groupId} Period${selement.periodId}">
                    <atomn>${selement.atomicNumber}</atomn>
                    <sym>${selement.symbol}</sym>
                    <elename>${selement.name}</elename>
                    <atomw>${selement.atomicWeight}</atomw>
                </sele>
            </selement>
                `      
};