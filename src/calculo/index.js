import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

    export default function Calculo () {
        const [val1, setVal1] = useState('');
        const [val2, setVal2] = useState('');
        const [val3, setVal3] = useState('');
        const [resultado, setResultado] = useState(null);

        const handleButtonClick = () => {
            const num1 = parseInt(val1);
            const num2 = parseInt(val2);
            const num3 = parseInt(val3);

            if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {

                const calculo = num2 * num2 - 4 * num1 *num3
                
                setResultado(calculo);
            }else {
                alert('Por favor, insira números inteiros válidos em todos os campos.');
            }
        };

    return(
        <View>

            <View style={styles.container}>

                <Text style={styles.textColor}>A:</Text>
                <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(text) => setVal1(text)}
                value={val1}
                />

                <Text style={styles.textColor}>B:</Text>
                <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(text) => setVal2(text)}
                value={val2}
                />

                <Text style={styles.textColor}>C:</Text>
                <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(text) => setVal3(text)}
                value={val3}
                />

            </View>

            <View style={styles.container2}>

                <TouchableOpacity onPress={handleButtonClick} style={styles.button}>

                    <Text style={styles.buttonColor}>Calcular</Text>

                </TouchableOpacity>
        
                {resultado !== null && (
                <Text style={styles.result}>Δ = {resultado}</Text>
                )}

            </View>

        </View>
    )
}