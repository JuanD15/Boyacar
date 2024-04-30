import { TextInput, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import colors from "../constants/colors";

export default MyTextInput = ({ style, label, ...otherProps }) => {
    const [isFocused, setFocus] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, isFocused && styles.labelFocused]} >{label}</Text>
            <TextInput
                {...otherProps}
                style={[styles.input, isFocused && styles.inputFocused, style]}
                selectionColor={'black'}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                enabled={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
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

    },
    inputFocused: {
        borderLeftColor: colors.PRIMARY_COLOR,
        borderRightColor: colors.PRIMARY_COLOR,
        borderBottomColor: colors.PRIMARY_COLOR,
        borderTopColor: colors.BACKGROUND_GRAY,
        borderTopWidth: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 10

    },
    inputLabel: {
        paddingLeft: 15,
        paddingTop: 5,
        backgroundColor: colors.BACKGROUND_GRAY,
        borderLeftColor: colors.BACKGROUND_GRAY,
        borderTopColor: colors.BACKGROUND_GRAY,
        borderRightColor: colors.BACKGROUND_GRAY,
        position: 'absolute',
        top: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 5,
        color: 'gray',
        borderWidth: 1,
        width: '100%'
    },
    labelFocused: {
        borderTopLeftRadius: 10,
        borderLeftColor: colors.PRIMARY_COLOR,
        borderRightColor: colors.PRIMARY_COLOR,
        borderTopColor: colors.PRIMARY_COLOR,
    },
    error: {
        borderColor: '#940c0c',
        backgroundColor: 'red'
    }
});