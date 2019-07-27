export default function AddElement(selement){
    return `
            <h1> Start by Choosing an Element Class From the List Below</h1>
            <selement class="addele">
                <classbox>
                    <class class="addele1"><classcolor style="background-color: red;"></classcolor><classname>Alkali Metal
                    <input class='add_element_class' type='hidden' value="AM">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}">
                    </classname></class> 
                    <class class="addele1"><classcolor style="background-color: rgb(255, 115, 0);"></classcolor><classname>Alkaline Earth Metal</classname>
                    <input class='add_element_class' type='hidden' value="AEM">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></class>                   
                    <class class="addele1"><classcolor style="background-color: rgb(255, 187, 0);"></classcolor><classname>Transition Metal
                    <input class='add_element_class' type='hidden' value="TM">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></classname></class>                   
                    <class class="addele1"><classcolor style="background-color: rgb(238, 234, 1);"></classcolor><classname>Post-Transition Metal
                    <input class='add_element_class' type='hidden' value="PTM">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></classname></class>                   
                    <class class="addele1"><classcolor style="background-color: rgb(138, 224, 9);"></classcolor><classname>Metalloid
                    <input class='add_element_class' type='hidden' value="M">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></classname></class>                   
                    <class class="addele1"><classcolor style="background-color: rgb(1, 202, 135);"></classcolor><classname>Polyatomic Nonmetal
                    <input class='add_element_class' type='hidden' value="PN">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></classname></class>                   
                    <class class="addele1"><classcolor style="background-color: rgb(79, 117, 241);"></classcolor><classname>Diatomic Nonmetal
                    <input class='add_element_class' type='hidden' value="DN">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></classname></class>                   
                    <class class="addele1"><classcolor style="background-color: purple;"></classcolor><classname>Noble Gas
                    <input class='add_element_class' type='hidden' value="NG">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></classname></class>
                    <class class="addele1"><classcolor style="background-color: rgb(247, 201, 146);"></classcolor><classname>Lanthanide
                    <input class='add_element_class' type='hidden' value="L">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></classname></class>                   
                    <class class="addele1"><classcolor style="background-color: rgb(176, 176, 245);"></classcolor><classname>Actinide
                    <input class='add_element_class' type='hidden' value="A">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></classname></class>                   
                    <class class="addele1"><classcolor style="background-color: rgb(78, 129, 78);"></classcolor><classname>Unknown Properties
                    <input class='add_element_class' type='hidden' value="UP">
                    <input class='select_element_by_id_value' type='hidden' value="${selement.elementId}">
                    <input class='select_element_by_period_value' type='hidden' value="${selement.periodId}">
                    <input class='select_element_by_group_value' type='hidden' value="${selement.groupId}"></classname></class>                                      
                </classbox>
                <sele class="${selement.class} Group${selement.groupId} Period${selement.periodId}">
                    <p>A newly discovered element!</p>
                </sele>
            </selement>
                `      
};

