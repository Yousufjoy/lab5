import axios from "axios";
import React, { useState } from "react";
import { View,Text, StyleSheet, TextInput ,Button} from "react-native";


const NationlizePage = ()=>{
    const [nationality, setNationlaity] = useState("A");
    const [userName, setUserName] = useState("")

const handleSubmit = ()=>{
    axios.get(`https://api.nationalize.io?name=${userName}`)
    .then ((res)=>{
        if(res.data.country.length){
            setNationlaity(res.data.country[0]["country_id"])
        }
    })
}

    return (
        <View style= {style.mainContainer}>
               
                <Text style={style.mainText}>
                    {nationality}
                </Text>
                <View>
                    <TextInput style={style.inputStyle} value={userName} onChangeText={setUserName}></TextInput>
                </View>
                <Button title="Click me" onPress={handleSubmit}></Button>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center",

    },

    mainText :{
          fontSize: 80,
          fontWeight: "700",
          color : "red"
    },
    inputStyle :{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})

export default NationlizePage;