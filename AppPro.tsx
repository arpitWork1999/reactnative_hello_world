import React, { JSX } from "react";

import { View, Text, StyleSheet, useColorScheme} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return  <SafeAreaView style = {styles.safeArea}>
        <View style = {styles.container}>
        <Text style= {isDarkMode? styles.whiteText: styles.darkText}>
            Hello World!
            </Text>
    </View>
    </SafeAreaView>
    
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    whiteText: {
        color: '#ffffff'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro