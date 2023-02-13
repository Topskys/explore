"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelController = void 0;
const common_1 = require("@nestjs/common");
const excel_service_1 = require("./excel.service");
const update_excel_dto_1 = require("./dto/update-excel.dto");
const platform_express_1 = require("@nestjs/platform-express");
const path = require("path");
const multiparty = require("multiparty");
const fse = require("fs-extra");
const fs = require("fs");
let ExcelController = class ExcelController {
    constructor(excelService) {
        this.excelService = excelService;
    }
    upload(file) {
        console.log("uploadFile：", file);
        return {
            msg: "上传成功",
            data: file,
        };
    }
    create(req) {
        const UPLOAD_DIR = path.resolve(__dirname, 'src/excel/videoUpload');
        const form = new multiparty.Form({ uploadDir: 'src/excel/temp' });
        form.parse(req);
        form.on('file', async (name, chunk) => {
            let chunkDir = `${UPLOAD_DIR}/${chunk.originalFilename.split('.')[0]}`;
            if (!fse.existsSync(chunkDir)) {
                await fse.mkdirs(chunkDir);
            }
            let dPath = path.join(chunkDir, chunk.originalFilename.split('.')[1]);
            await fse.move(chunk.path, dPath, { overwrite: true });
        });
    }
    merge(body) {
        let name = body.name;
        let fname = name.split('.')[0];
        const UPLOAD_DIR = path.resolve(__dirname, 'videoUpload');
        let chunkDir = path.join(UPLOAD_DIR, fname);
        const m = async () => {
            let chunks = await fse.readdir(chunkDir);
            chunks.sort((a, b) => a - b).map(chunkPath => {
                fs.appendFileSync(path.join(UPLOAD_DIR, name), fs.readFileSync(`${chunkDir}/${chunkPath}`));
            });
            fse.removeSync(chunkDir);
            return {
                url: `http://localhost:3000/videoUpload/${name}`
            };
        };
        m();
    }
    findAll(query) {
        return this.excelService.findAll(query);
    }
    findOne(id) {
        return this.excelService.findOne(+id);
    }
    update(id, updateExcelDto) {
        return this.excelService.update(+id, updateExcelDto);
    }
    remove(id) {
        return this.excelService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('/img'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExcelController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExcelController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/merge'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExcelController.prototype, "merge", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ExcelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExcelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_excel_dto_1.UpdateExcelDto]),
    __metadata("design:returntype", void 0)
], ExcelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExcelController.prototype, "remove", null);
ExcelController = __decorate([
    (0, common_1.Controller)('excel'),
    __metadata("design:paramtypes", [excel_service_1.ExcelService])
], ExcelController);
exports.ExcelController = ExcelController;
//# sourceMappingURL=excel.controller.js.map