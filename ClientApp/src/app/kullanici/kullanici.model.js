"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KullaniciModel = /** @class */ (function () {
    function KullaniciModel() {
    }
    Object.defineProperty(KullaniciModel.prototype, "getkullaniciTipi", {
        get: function () {
            switch (this.kullaniciTipi) {
                case 1:
                    return "Admin";
                case 2:
                    return "Genel Merkez";
                case 3:
                    return "İl";
                case 4:
                    return "Rapor";
                default:
                    return 'N/A';
            }
        },
        enumerable: true,
        configurable: true
    });
    return KullaniciModel;
}());
exports.KullaniciModel = KullaniciModel;
//# sourceMappingURL=kullanici.model.js.map