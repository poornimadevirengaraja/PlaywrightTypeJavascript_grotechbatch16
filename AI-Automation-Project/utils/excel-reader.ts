import path from 'node:path';
import ExcelJS = require('exceljs');

export async function readExcelRows<T extends object>(filePath: string, sheetName: string): Promise<T[]> {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(path.resolve(process.cwd(), filePath));
  const worksheet = workbook.getWorksheet(sheetName);

  if (!worksheet) {
    throw new Error(`Worksheet "${sheetName}" was not found in "${filePath}".`);
  }

  const headers = worksheet.getRow(1).values as (string | undefined)[];
  const records: T[] = [];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;

    const record: Record<string, string> = {};
    headers.slice(1).forEach((header, index) => {
      if (header) record[header] = row.getCell(index + 1).text;
    });
    records.push(record as T);
  });

  return records;
}