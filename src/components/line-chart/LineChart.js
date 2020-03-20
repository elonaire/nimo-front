import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from "victory";

export default function LineChart() {
    const chartTheme = {
        axis: {
            style: {
                tickLabels: {
                    // this changed the color of my numbers to white
                    stroke: 'none',
                },
            },
        }
    };

    return (
        <VictoryChart style={{ parent: { maxWidth: "50%" } }} theme={chartTheme}>
            <VictoryAxis style={{
                grid: { stroke: "none" },
                axisLabel: {
                    stroke: 'none'
                },
                axis: {
                    stroke: 'none'
                }
            }} label="Body Weight" />
            <VictoryAxis style={{
                grid: { stroke: "none" },
                axisLabel: {
                    stroke: 'none'
                },
                axis: {
                    stroke: 'none'
                }
            }} dependentAxis label="Time" />
            <VictoryLine
                interpolation="natural"
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
                        strokeWidth: 10,
                        boxShadow: '1px 1px 3px #fff'
                    }
                }}
            />
        </VictoryChart>
    );
}