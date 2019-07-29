export default function EditElement(selement){
    return `
            <selement class="editele">
                <classbox>
                <strong>Description</strong>
                <input type="text" class="edit_element_description" value="${selement.description}">
                </br>
                <strong>Image</strong>
                <input type="text" class="edit_element_image" value="${selement.image}">
                </br>

                <strong>Name</strong>
                <input type="text" class="edit_element_name" value="${selement.name}">
                </br>

                <strong>Symbol</strong>
                <input type="text" class="edit_element_symbol" value="${selement.symbol}">
                </br>

                <strong>Atomic Number</strong>
                <input type="text" class="edit_element_atomic_number" value="${selement.atomicNumber}">
                </br>

                <strong>Atomic Weight</strong>
                <input type="text" class="edit_element_atomic_weight" value="${selement.atomicWeight}">
                </br>

                <strong>Class</strong>
                <input type="text" class="edit_element_class" value="${selement.class}">    
                </br>

                <button class="editelement">Edit
                <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}">
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