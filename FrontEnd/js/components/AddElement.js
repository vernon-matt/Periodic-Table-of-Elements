export default function AddElement(selement){
    return `
            <h1> Start by Choosing an Element Class From the List Below</h1>
            <selement class="addele">
                <classbox>
                    <class><classcolor style="background-color: red;"></classcolor><classname>Alkali Metal</classname></class> 
                    <class><classcolor style="background-color: rgb(255, 115, 0);"></classcolor><classname>Alkaline Earth Metal</classname></class>                   
                    <class><classcolor style="background-color: rgb(255, 187, 0);"></classcolor><classname>Transition Metal</classname></class>                   
                    <class><classcolor style="background-color: rgb(238, 234, 1);"></classcolor><classname>Post-Transition Metal</classname></class>                   
                    <class><classcolor style="background-color: rgb(138, 224, 9);"></classcolor><classname>Metalloid</classname></class>                   
                    <class><classcolor style="background-color: rgb(1, 202, 135);"></classcolor><classname>Polyatomic Nonmetal</classname></class>                   
                    <class><classcolor style="background-color: rgb(79, 117, 241);"></classcolor><classname>Diatomic Nonmetal</classname></class>                   
                    <class><classcolor style="background-color: purple;"></classcolor><classname>Noble Gas</classname></class>
                    <class><classcolor style="background-color: rgb(247, 201, 146);"></classcolor><classname>Lanthanide</classname></class>                   
                    <class><classcolor style="background-color: rgb(176, 176, 245);"></classcolor><classname>Actinide</classname></class>                   
                    <class><classcolor style="background-color: rgb(78, 129, 78);"></classcolor><classname>Unknown Properties</classname></class>                                      
                </classbox>
                <sele class="${selement.class} Group${selement.groupId} Period${selement.periodId}">
                    <p>A newly discovered element!</p>
                </sele>
            </selement>
                `      
};