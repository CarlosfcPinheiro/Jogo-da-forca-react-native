import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
            }}
        >
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>
                Jogo da forca
            </Text>
            <View style={{ display: 'flex', gap: 10 }}>
                <Button
                    title="Começar"
                    onPress={() => router.push('/jogo')}
                ></Button>
                <Button
                    title="Regras"
                    onPress={() => router.push('/regras')}
                ></Button>
            </View>
        </View>
    );
}
