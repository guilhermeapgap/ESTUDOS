import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native'
import { CategoryProps } from "../../pages/Order";

interface ModalPickerProps{
    options: CategoryProps[];
    handleCloseModal: () => void;
    selectedItem: () => void;
}

const {width: WIDTH, height: HEIGTH} = Dimensions.get('window')

export function ModalPicker({options, handleCloseModal, selectedItem}:ModalPickerProps){

    function onPressItem(item:CategoryProps){
        console.log(item)
    }

    const option = options.map((item, index) =>{
        return(
            <TouchableOpacity key={index} style={styles.option} onPress={ () => onPressItem(item)}>
                <Text style={styles.item}>
                    {item?.name}
                </Text>
            </TouchableOpacity>
        )
        
    })

    return(
        <TouchableOpacity style={styles.container} onPress={handleCloseModal}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        width: WIDTH - 20,
        height: HEIGTH / 2,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 4,
    }
})