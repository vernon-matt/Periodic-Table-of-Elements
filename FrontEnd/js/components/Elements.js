export default function Elements(elementlist){
    return `
    <periodlabel><pl></pl><pl>1</pl><pl>2</pl><pl>3</pl><pl>4</pl><pl>5</pl><pl>6</pl><pl>7</pl><pl>8</pl><pl>9</pl><pl>10</pl><pl>11</pl><pl>12</pl><pl>13</pl><pl>14</pl><pl>15</pl><pl>16</pl><pl>17</pl><pl>18</pl></periodlabel>
    <elementpage>
    <grouplabel><groupnum></groupnum><groupnum>1</groupnum><groupnum>2</groupnum><groupnum>3</groupnum><groupnum>4</groupnum><groupnum>5</groupnum><groupnum>6</groupnum><groupnum>7</groupnum></grouplabel>
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
    </elementpage>
    `
}
