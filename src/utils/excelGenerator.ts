import * as XLSX from 'xlsx';
import { JsonData, SchoolData } from '../types/SchoolData';

export function generateExcel(data: JsonData) {
    const workbook = XLSX.utils.book_new();

    Object.entries(data).forEach(([subject, schools]) => {
        const worksheetData = schools.map((school: SchoolData) => ({
            '学校名称': school.schoolName,
            '平均分': school.value[1],
            '标准差': school.value[0]
        }));

        const worksheet = XLSX.utils.json_to_sheet(worksheetData);
        XLSX.utils.book_append_sheet(workbook, worksheet, subject);
    });

    XLSX.writeFile(workbook, 'school_stats.xlsx');
}