import { Text, View } from 'react-native';

export default function Regras() {
    return (
        <View style={{ display: 'flex', gap: 10, padding: 20 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>
                Regras do jogo
            </Text>
            <Text style={{ fontSize: 14 }}>
                As regras do jogo são as seguintes: A cada rodada, o jogador
                escolhe uma letra. Se a letra estiver na palavra, ela é revelada
                em sua posição correta. Se a letra não estiver na palavra, o
                jogador perde uma vida. O jogo continua até que o jogador
                adivinhe a palavra completa ou perca todas as suas vidas.
            </Text>
            <Text style={{ fontSize: 14 }}>
                Assim que o jogo for finalizado, será exibido caso o jogador
                venceu ou não, junto com a palavra resposta.
            </Text>
        </View>
    );
}
