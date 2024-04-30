import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Platform } from 'react-native';
import MyTextInput from './MyTextInput';
import colors from '../constants/colors';
import DateTimePicker from '@react-native-community/datetimepicker';

export default PersonalDataForm = (props) => {
    const { formData, setFormData, isPersonalFormComplete, setIsPersonalFormComplete } = props;
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (selectedDate) {
            // Actualiza el estado de forma segura sin causar un bucle infinito
            setFormData((prevFormData) => ({
                ...prevFormData,
                birthdate: selectedDate.toLocaleDateString('es-ES')
            }));
        }
    }, [selectedDate]);

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
        if (value === '' || !formData.names || !formData.lastNames || !formData.documentId || !formData.birthdate) {
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
            <View style={styles.formInfo}>
                <Text style={styles.title}>Información personal</Text>
            </View>
            <ScrollView style={styles.personalInfoScroll}>
                <View style={styles.personalInfo}>
                    <MyTextInput
                        style={styles.myInput}
                        value={formData.names}
                        label={'Nombres'}
                        onChangeText={(value) => handleInputChange('names', value)}
                    />
                    <MyTextInput
                        style={styles.myInput}
                        value={formData.lastNames}
                        label={'Apellidos'}
                        onChangeText={(value) => handleInputChange('lastNames', value)}
                    />

                    <MyTextInput
                        style={[styles.myInput, styles.idDocSection]}
                        value={formData.documentId}
                        label={'Documento de identidad'}
                        onChangeText={(value) => handleInputChange('documentId', value)}
                    />
                    <View style={styles.birthdateSection} onTouchStart={showDatePicker}>
                        <MyTextInput
                            style={styles.myInput}
                            value={`${selectedDate.toLocaleDateString()}`}
                            label={'Fecha de nacimiento'}
                            editable={false}
                            multiline
                        />
                        {isDatePickerVisible && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={selectedDate}
                                is24Hour={true}
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
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
        minWidth: '80%'
    },
})