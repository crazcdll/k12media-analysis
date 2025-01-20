export interface SchoolData {
    value: [number, number];
    name: string;
    schoolName: string;
    itemStyle?: {
        normal: {
            color: string;
        }
    };
}

export interface JsonData {
    总分: SchoolData[];
    语文: SchoolData[];
    数学: SchoolData[];
    英语: SchoolData[];
    物理: SchoolData[];
    化学: SchoolData[];
    生物: SchoolData[];
    政治: SchoolData[];
    历史: SchoolData[];
    地理: SchoolData[];
}