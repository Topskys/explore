import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import { Repository } from "typeorm";
import { Excel } from "./entities/excel.entity";
export declare class ExcelService {
    private readonly excel;
    constructor(excel: Repository<Excel>);
    create(createExcelDto: CreateExcelDto): Promise<Excel>;
    findAll(query: {
        keywords: string;
        page: number;
        pageSize: number;
    }): Promise<{
        data: Excel[];
        total: number;
    }>;
    findOne(id: number): string;
    update(id: number, updateExcelDto: UpdateExcelDto): string;
    remove(id: number): string;
}
