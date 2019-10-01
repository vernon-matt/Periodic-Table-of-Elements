export default function InfoBox(selement){
    return `
            </br>
            <img style="width: 25vw; height:30vh;" src="${selement.image}">
            </br>
            </br>
            <h3>${selement.name}</h3>
            </br>
            </br>
            <img style="width: 25vw; height:30vh;" src="${selement.image2}">
    `
}