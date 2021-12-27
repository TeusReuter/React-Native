import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from '../../../components/Texto';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco }) {
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.fazenda}>
            <Image source={ logoFazenda } style={estilos.imagemFazenda} />
            <Texto style={ nomeFazenda }>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao }</Texto >
        <Texto style={estilos.preco}>{ preco }</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 32,
        color: "#464646",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 16,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 16,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
});