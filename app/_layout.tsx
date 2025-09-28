import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="jogo" options={{ title: 'Jogo da Forca' }} />
            <Stack.Screen name="regras" options={{ title: 'Regras' }} />
        </Stack>
    );
}
