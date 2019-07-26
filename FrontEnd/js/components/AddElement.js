export default function AddElement(selement){
    return `
            <h1> Create your Element </h1>
            <selement>
                <sele class="${selement.class} Group${selement.groupId} Period${selement.periodId} sele">
                    <atomn>${selement.atomicNumber}</atomn>
                    <sym>${selement.symbol}</sym>
                    <atomw>${selement.atomicWeight}</atomw>
                    <elename>${selement.name}</elename>
                </sele>
            </selement>
            <selementd>
                <seld>${selement.description}<seld>
            </selementd>
                `      
};