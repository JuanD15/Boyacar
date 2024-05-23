import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import MyTextInput from './MyTextInput';
import colors from '../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default PersonalDataForm = (props) => {
    let maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18); // Se le resta 18 a la fecha actual y se obtiene la fecha máxima que se puede seleccionar

    const { formData, setFormData, isPersonalFormComplete, setIsPersonalFormComplete } = props;
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(maxDate);
    const [formErrors, setFormErrors] = useState({});
    const [selectedValue, setSelectedValue] = useState('');


    useEffect(() => {
        if (selectedDate) {
            // Actualiza el estado de forma segura sin causar un bucle infinito
            setFormData((prevFormData) => ({
                ...prevFormData,
                birthDate: selectedDate.toLocaleDateString('es-ES')
            }));

        }
    }, [selectedDate]);

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
        if (!formData.names || !formData.lastNames || !formData.documentId || !formData.birthDate) {
            setIsPersonalFormComplete(false)
        } else {
            setIsPersonalFormComplete(true)
        }
    };

    const handleDateChange = (event, date) => {
        const currentDate = date || selectedDate;
        setDatePickerVisibility(Platform.OS === 'ios');
        setSelectedDate(currentDate);
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    return (
        <>
            <ScrollView style={styles.personalInfoScroll}>
                <View style={styles.personalInfo}>
                    <MyTextInput
                        style={styles.myInput}
                        value={formData.names}
                        label={'Nombres'}
                        onChangeText={(value) => handleInputChange('names', value)}
                        maxLength={30}
                        required={true}
                    />
                    <MyTextInput
                        style={styles.myInput}
                        value={formData.lastNames}
                        label={'Apellidos'}
                        onChangeText={(value) => handleInputChange('lastNames', value)}
                        maxLength={30}
                        required={true}
                    />
                    <MyTextInput
                        style={[styles.myInput, styles.idDocSection]}
                        value={formData.documentId}
                        label={'Documento de identidad'}
                        maxLength={20}
                        onChangeText={(value) => handleInputChange('documentId', value)}
                        required={true}
                    />
                    <TouchableOpacity style={styles.imagePicker}>
                        <Feather name="upload" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.birthdateSection} onTouchStart={showDatePicker}>
                        <MyTextInput
                            style={styles.myInput}
                            value={`${selectedDate.toLocaleDateString()}`}
                            label={'Fecha de nacimiento'}
                            editable={false}
                            multiline
                            required={true}
                        />
                        {isDatePickerVisible && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={selectedDate}
                                is24Hour={true}
                                display="default"
                                onChange={handleDateChange}
                                maximumDate={maxDate}
                            />
                        )}
                    </View>
                    <View style={styles.genreSection}>
                        <Text style={styles.genreLabel} >Genéro</Text>
                        <Picker
                            selectedValue={selectedValue}
                            onValueChange={(itemValue) => {
                                setSelectedValue(itemValue)
                                handleInputChange('genre', itemValue)
                            }}
                        >
                            <Picker.Item label="Seleccionar..." value='' />
                            <Picker.Item label="Masculino" value="Masculino" />
                            <Picker.Item label="Femenino" value="Femenino" />
                            <Picker.Item label="Otro" value="Otro" />
                            <Picker.Item label="Prefiero no decirlo" value={null} />
                        </Picker>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    formInfo: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.PRIMARY_COLOR,
    },
    title: {
        fontFamily: 'Inter_Regular',
        fontSize: 25,
        color: 'white',
    },
    personalInfoScroll: {
        height: '50%',
        width: '100%',

    },
    personalInfo: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    personalInfoText: {
        paddingLeft: 10,
    },
    myInput: {
        minWidth: '80%',
        marginVertical: 30,
        color: 'black'
    },
    birthdateSection: {
        minWidth: '80%',
    },
    idDocSection: {
        minWidth: '60%'
    },
    imagePicker: {
        height: 60,
        minWidth: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1
    },
    genreLabel: {
        paddingTop: 5,
        color: 'gray',
    },
    genreSection: {
        paddingVertical: 0,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderLeftColor: colors.BACKGROUND_GRAY,
        borderTopColor: colors.BACKGROUND_GRAY,
        borderRightColor: colors.BACKGROUND_GRAY,
        borderBottomColor: 'gray',
        borderRadius: 5,
        backgroundColor: colors.BACKGROUND_GRAY,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        width: '80%'
    }
})