// src/types/JsonData.ts

export interface School {
    schoolName: string;
    averageScore: number;
    standardDeviation: number;
}

export interface JsonData {
    [key: string]: {
        value: [number, number];
        name: string;
        schoolName: string;
    }[];
}