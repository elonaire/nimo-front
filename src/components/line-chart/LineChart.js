import React from 'react';
import { VictoryChart, VictoryLine } from "victory";

export default function LineChart() {
    return (
        <VictoryChart>
            <VictoryLine
                data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 6 }
                ]}
                style={{
                    data: { 
                        stroke: "green",
                        strokeWidth: 5,
                        boxShadow: '1px 1px 3px #fff'
                    },
                    scale: { 
                        color: "green"
                    }
                }}
            />
        </VictoryChart>
    );
}