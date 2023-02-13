"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelModule = void 0;
const common_1 = require("@nestjs/common");
const excel_service_1 = require("./excel.service");
const excel_controller_1 = require("./excel.controller");
const typeorm_1 = require("@nestjs/typeorm");
const excel_entity_1 = require("./entities/excel.entity");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let ExcelModule = class ExcelModule {
};
ExcelModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([excel_entity_1.Excel]),
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.diskStorage)({
                    destination: (0, path_1.join)(__dirname, '../excel/temp'),
                    filename: (_, file, callback) => {
                        const fileName = `${new Date().getTime() + (0, path_1.extname)(file.originalname)}`;
                        return callback(null, fileName);
                    }
                }),
            })
        ],
        controllers: [excel_controller_1.ExcelController],
        providers: [excel_service_1.ExcelService]
    })
], ExcelModule);
exports.ExcelModule = ExcelModule;
//# sourceMappingURL=excel.module.js.map