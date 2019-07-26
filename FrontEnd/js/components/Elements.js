export default function Elements(elementlist){
    return `
    <elements>  
        ${elementlist.map(element => {
            if(element.class != "NON") {var select = "select_element_by_id"};
            if(element.class == "NON") {var select = "add_element"};
        return `          
                <ele class="${element.class} Group${element.groupId} Period${element.periodId}">
                    <atomn class="${select}">${element.atomicNumber}</atomn>
                    <sym class="${select}">${element.symbol}</sym>
                    <atomw class="${select}">${element.atomicWeight}</atomw>
                    <elename class="${select}">${element.name}</elename>
                    <input class='select_element_by_id_value' type='hidden' value="${element.elementId}">
                </ele>
                `      
        })     
        .join("")}
    </elements>
    `
}
