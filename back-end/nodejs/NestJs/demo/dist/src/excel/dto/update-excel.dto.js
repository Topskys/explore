"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExcelDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_excel_dto_1 = require("./create-excel.dto");
class UpdateExcelDto extends (0, swagger_1.PartialType)(create_excel_dto_1.CreateExcelDto) {
}
exports.UpdateExcelDto = UpdateExcelDto;
//# sourceMappingURL=update-excel.dto.js.map