export default function Element(selement){
    return `
            <selement>
                <sele class="${selement.class} Group${selement.groupId} Period${selement.periodId} sele">
                    <atomn>${selement.atomicNumber}</atomn>
                    <sym>${selement.symbol}</sym>
                    <atomw>${selement.atomicWeight}</atomw>
                    <elename>${selement.name}</elename>
                </sele>
            <img src="${selement.image}">
            </selement>
            <selementd>
                <seld>${selement.description}<seld>
            </selementd>
                `      
};