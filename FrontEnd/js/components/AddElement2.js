export default function AddElement2(selement){
    return `
            <h1>Now, Choose a Name and a Smybol Tag for Your New Element</h1>
            <selement class="addele">
                <classbox>
                (Name should be 16 characters or less.)</br>
                <strong>Name:</strong>
                <input type="text" class="add_element_name" placeholder="Choose a Name">
                </br>
                </br>
                </br>
                (Symbol value should be 4 characters or less.)</br>
                <strong>Symbol:</strong>
                <input type="text" class="add_element_symbol" placeholder="Choose a Symbol">   
                </br>
                </br>  
                <button class="addele2">Continue
                <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}">
                <input class='add_element_class' type='hidden' value="${selement.class}">
                </button>            
                </classbox>
                <sele class="${selement.class} Group${selement.groupId} Period${selement.periodId}">
                    <p>A newly discovered element!</p>
                </sele>
            </selement>
                `      
};