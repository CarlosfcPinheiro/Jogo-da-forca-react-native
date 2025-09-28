import { Button, Text, View } from 'react-native';
import Stickman from './components/stickman';

import { useState } from 'react';

export default function Jogo() {
    const letras = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];

    const palavrasForca = [
        'abacaxi',
        'elefante',
        'computador',
        'girassol',
        'montanha',
        'oceano',
        'bicicleta',
        'janela',
        'telefone',
        'cachorro',
        'livro',
        'praia',
        'foguete',
        'chocolate',
        'dinossauro',
        'planeta',
        'violino',
        'escada',
        'sanduíche',
        'travesseiro',
        'camiseta',
        'borboleta',
        'martelo',
        'espelho',
        'cadeira',
        'tartaruga',
        'pipoca',
        'relógio',
        'formiga',
        'pinguim',
        'Marcio',
    ];

    const getRandomWord = () => {
        return palavrasForca[Math.floor(Math.random() * palavrasForca.length)];
    };

    const [tentativasErradas, setTentativasErradas] = useState(0);
    const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
    const [palavraSecreta, setPalavraSecreta] = useState(getRandomWord());

    const resetarJogo = () => {
        setTentativasErradas(0);
        setLetrasUsadas([]);
        setPalavraSecreta(getRandomWord());
    };

    const adicionarTentativaErrada = (letter: string) => {
        if (tentativasErradas < 6 && !palavraSecreta.includes(letter)) {
            setTentativasErradas(tentativasErradas + 1);
        }
    };

    const handleBotaoLetra = (letter: string) => {
        setLetrasUsadas([...letrasUsadas, letter]);
        adicionarTentativaErrada(letter);
    };

    // Função para exibir a palavra com underlines
    const exibirPalavra = () => {
        return palavraSecreta
            .toLowerCase()
            .split('')
            .map((letra) =>
                letrasUsadas.includes(letra) ? letra.toUpperCase() : '_'
            )
            .join(' ');
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
            }}
        >
            <View
                className="resultado_jogo__container"
                style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}
            >
                <Stickman tentativa={tentativasErradas} />
                <Text>{exibirPalavra()}</Text>
            </View>
            <Text style={{ fontSize: 16, marginTop: 20 }}>
                Tentativas erradas: {tentativasErradas}/6
            </Text>
            {tentativasErradas >= 6 && (
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'red', fontSize: 18, marginTop: 10 }}>
                        Fim de jogo!
                    </Text>
                    <Text>A palavra era: {palavraSecreta}</Text>
                </View>
            )}
            {tentativasErradas < 6 && !exibirPalavra().includes('_') && (
                <Text style={{ color: 'green', fontSize: 18, marginTop: 10 }}>
                    Parabéns! Você ganhou!
                </Text>
            )}
            <View
                className="letter-buttons__container"
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 5,
                    marginTop: 20,
                    marginBottom: 60,
                }}
            >
                {letras.map((letter) => (
                    <Button
                        key={letter}
                        title={letter}
                        onPress={() => handleBotaoLetra(letter)}
                        disabled={
                            letrasUsadas.includes(letter) ||
                            tentativasErradas >= 6
                        }
                    />
                ))}
            </View>
            <Button title="reiniciar" onPress={resetarJogo} />
        </View>
    );
}
