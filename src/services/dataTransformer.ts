export interface SchoolData {
    schoolName: string;
    averageScore: number;
    standardDeviation: number;
}

export function transformData(jsonData: any): SchoolData[] {
    const schoolData: SchoolData[] = [];

    for (const subject in jsonData) {
        if (jsonData.hasOwnProperty(subject)) {
            jsonData[subject].forEach((item: any) => {
                schoolData.push({
                    schoolName: item.schoolName,
                    averageScore: item.value[1],
                    standardDeviation: item.value[0],
                });
            });
        }
    }

    return schoolData;
}