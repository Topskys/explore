import { ExcelService } from './excel.service';
import { UpdateExcelDto } from './dto/update-excel.dto';
export declare class ExcelController {
    private readonly excelService;
    constructor(excelService: ExcelService);
    upload(file: any): {
        msg: string;
        data: any;
    };
    create(req: Request): void;
    merge(body: any): void;
    findAll(query: {
        keywords: string;
        page: number;
        pageSize: number;
    }): Promise<{
        data: import("./entities/excel.entity").Excel[];
        total: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateExcelDto: UpdateExcelDto): string;
    remove(id: string): string;
}
