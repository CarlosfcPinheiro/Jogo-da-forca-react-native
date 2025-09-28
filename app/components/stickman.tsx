import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

interface StickmanProps {
    tentativa: number;
}

export default function Stickman({ tentativa }: StickmanProps) {
    const renderStickman = () => {
        const parts = [];

        // Forca (sempre visível)
        parts.push(
            <Line
                key="base"
                x1="10"
                y1="190"
                x2="100"
                y2="190"
                stroke="brown"
                strokeWidth="4"
            />, // Base
            <Line
                key="post"
                x1="30"
                y1="190"
                x2="30"
                y2="20"
                stroke="brown"
                strokeWidth="4"
            />, // Poste
            <Line
                key="top"
                x1="30"
                y1="20"
                x2="80"
                y2="20"
                stroke="brown"
                strokeWidth="4"
            />, // Topo
            <Line
                key="noose"
                x1="80"
                y1="20"
                x2="80"
                y2="35"
                stroke="brown"
                strokeWidth="2"
            /> // Corda
        );

        // Cabeça (tentativa >= 1)
        if (tentativa >= 1) {
            parts.push(
                <Circle
                    key="head"
                    cx="80"
                    cy="45"
                    r="10"
                    stroke="black"
                    strokeWidth="2"
                    fill="none"
                />
            );
        }

        // Corpo (tentativa >= 2)
        if (tentativa >= 2) {
            parts.push(
                <Line
                    key="body"
                    x1="80"
                    y1="55"
                    x2="80"
                    y2="120"
                    stroke="black"
                    strokeWidth="2"
                />
            );
        }

        // Braço esquerdo (tentativa >= 3)
        if (tentativa >= 3) {
            parts.push(
                <Line
                    key="leftArm"
                    x1="80"
                    y1="75"
                    x2="60"
                    y2="95"
                    stroke="black"
                    strokeWidth="2"
                />
            );
        }

        // Braço direito (tentativa >= 4)
        if (tentativa >= 4) {
            parts.push(
                <Line
                    key="rightArm"
                    x1="80"
                    y1="75"
                    x2="100"
                    y2="95"
                    stroke="black"
                    strokeWidth="2"
                />
            );
        }

        // Perna esquerda (tentativa >= 5)
        if (tentativa >= 5) {
            parts.push(
                <Line
                    key="leftLeg"
                    x1="80"
                    y1="120"
                    x2="60"
                    y2="150"
                    stroke="black"
                    strokeWidth="2"
                />
            );
        }

        // Perna direita (tentativa >= 6)
        if (tentativa >= 6) {
            parts.push(
                <Line
                    key="rightLeg"
                    x1="80"
                    y1="120"
                    x2="100"
                    y2="150"
                    stroke="black"
                    strokeWidth="2"
                />
            );
        }

        return parts;
    };

    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
            }}
        >
            <Svg height="200" width="120" viewBox="0 0 120 200">
                {renderStickman()}
            </Svg>
        </View>
    );
}
