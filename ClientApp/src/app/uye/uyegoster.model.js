"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var uye_model_1 = require("./uye.model");
var UyeGosterModel = /** @class */ (function (_super) {
    __extends(UyeGosterModel, _super);
    function UyeGosterModel(model
    //private meslekService: MeslekService,
    //private kurumService: KurumService,
    //private okulService: OkulService,
    //private ilService: IlService,
    //private uyeService: UyeService 
    ) {
        var _this = _super.call(this) || this;
        _this.ikametIlIdString = "";
        _this.ikametIlcesiString = "";
        return _this;
    }
    return UyeGosterModel;
}(uye_model_1.UyeModel));
exports.UyeGosterModel = UyeGosterModel;
//# sourceMappingURL=uyegoster.model.js.map