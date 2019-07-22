export default function Elements(elementlist){
    return `
    <h1>Elements</h1>
    <ul>
        ${elementlist.map(element => {
        return `
            <div class="${element.class} Group${element.groupId} Period${element.periodId}">
                <p>${element.atomicNumber}</p>
                <p>${element.symbol}</p>
                <p>${element.atomicWeight}</p>
                <p>${element.name}</p>
            </div>
        `      
        })     
    }
    `
}
