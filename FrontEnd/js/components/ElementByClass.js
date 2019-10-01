export default function ElementByClass(elementlist){
    return `
    ${elementlist[0].class}
    <elements>  
        ${elementlist.map(element => {
        return `
                <ele class="${element.class} Group${element.groupId} Period${element.periodId}">
                    <atomn>${element.atomicNumber}</atomn>
                    <sym>${element.symbol}</sym>
                    <atomw>${element.atomicWeight}</atomw>
                    <elename>${element.name}</elename>
                </ele>
                `      
            })     
            .join("")}
    </elements>
    `
}