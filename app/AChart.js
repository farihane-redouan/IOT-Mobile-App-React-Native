import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

function AChart({title}) {
    return (
        <View style={styles.container}>
        <Text>{title}</Text>
        <LineChart
            data={{
                labels: [10, 20, 30,40],
                datasets: [
                    {
                        data: [
                            Math.random() * 10,
                            Math.random() * 10,
                            Math.random() * 10,

                        ]
                    }
                ]
            }}
            width={200} // from react-native
            height={220}
            yAxisLabel="V"
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    
})

export default AChart;