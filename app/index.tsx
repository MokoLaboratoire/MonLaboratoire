import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'

const HomeScreen = (): React.JSX.Element => {
    return (
        <View>
            <Text>Home page</Text>
            <Link href="/test">Test</Link>
        </View>
    )
}

export default HomeScreen
