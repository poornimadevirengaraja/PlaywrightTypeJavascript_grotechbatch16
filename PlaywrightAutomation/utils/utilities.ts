// install pacakge to read excel file
// npm install xlsx
import XLSX from 'xlsx'

export class Utils {
    readExcelFile(FilePath: string) {
        const workbook = XLSX.readFile(FilePath)
        const sheetName = workbook.SheetNames[0]
        const SheetValue = workbook.Sheets[sheetName]
        const data = XLSX.utils.sheet_to_json(SheetValue)
        return data
    }
}