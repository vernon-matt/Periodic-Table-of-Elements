export default function Elements(elementlist){
    return `
    <elements>  
        ${elementlist.map(element => {
        return `
                <ele class="${element.class} Group${element.groupId} Period${element.periodId}">
                    <atomn class="select_element_by_id">${element.atomicNumber}</atomn>
                    <sym class="select_element_by_id">${element.symbol}</sym>
                    <atomw class="select_element_by_id">${element.atomicWeight}</atomw>
                    <elename class="select_element_by_id">${element.name}</elename>
                    <input class='select_element_by_id_value' type='hidden' value="${element.elementId}">
                </ele>
                `      
        })     
        .join("")}
    </elements>
    `
}
