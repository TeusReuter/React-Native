import React from "react";
import { Image } from "react-native";

import Texto from "../../componentes/Texto";
import topo from '../../assets/topo.png';

export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da cesta</Text>

        {/* CONTINUAR TRABALHANDO AQUI */}
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
        // fontFamily: "Monstserrat",
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 16,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
})