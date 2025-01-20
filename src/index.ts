import * as fs from 'fs';
import * as path from 'path';
import { parseJsonData } from './utils/jsonParser';
import { generateExcel } from './utils/excelGenerator';
import { JsonData } from './types/SchoolData';

const inputFilePath = path.join(__dirname, '../data/input.json');

function main() {
    // 读取 JSON 数据
    const jsonData = JSON.parse(fs.readFileSync(inputFilePath, 'utf-8')) as JsonData;

    console.log('jsonData---', jsonData);

    // 解析 JSON 数据
    const parsedData = parseJsonData(jsonData);

    // 生成 Excel 文件
    generateExcel(parsedData);
}

// 执行主函数
main();