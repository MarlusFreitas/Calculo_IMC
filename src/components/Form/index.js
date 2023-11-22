import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';
import ResultIMC from './ResultIMC';

export default function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [messageImc, setMessageImc]= useState("Informe seu peso e altura!")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual")
        setTextButton("Calcular novamente!")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Informe seu peso e altura!")
}

return (
   <View>
        <View>
            <Text>Altura:</Text>
            <TextInput onChangeText={setHeight} value={height} placeholder='Ex.: 1.50' keyboardType='numeric'></TextInput>
            <Text>Peso:</Text>
            <TextInput onChangeText={setWeight} value={weight} placeholder='Ex.: 85.4' keyboardType='numeric'></TextInput>
        </View>
        <Button onPress={() => validationImc()} title={textButton}/>
        <ResultIMC messageResultIMC={messageImc} ResultIMC={imc}/>
   </View>
  );
}