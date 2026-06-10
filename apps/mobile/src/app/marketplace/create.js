"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateTemplateScreen;
var react_native_1 = require("react-native");
var react_1 = require("react");
var api_1 = require("../../services/api");
var expo_router_1 = require("expo-router");
var useAuth_1 = require("../../hooks/useAuth");
var lucide_react_native_1 = require("lucide-react-native");
function CreateTemplateScreen() {
    var _this = this;
    var user = (0, useAuth_1.useAuth)().user;
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var _b = (0, react_1.useState)({
        name: '',
        description: '',
        type: 'image_prompt',
        config: '',
        price: '0',
        isPublic: true
    }), formData = _b[0], setFormData = _b[1];
    var handleSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var config, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!formData.name || !formData.config) {
                        react_native_1.Alert.alert('Champs obligatoires', 'Veuillez au moins renseigner un nom et une configuration.');
                        return [2 /*return*/];
                    }
                    try {
                        config = JSON.parse(formData.config);
                    }
                    catch (_b) {
                        react_native_1.Alert.alert('Erreur JSON', 'Le champ configuration doit être un JSON valide.');
                        return [2 /*return*/];
                    }
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api_1.marketplaceService.createTemplate(__assign(__assign({}, formData), { config: config, price: parseInt(formData.price) || 0, authorId: user === null || user === void 0 ? void 0 : user.id }))];
                case 2:
                    _a.sent();
                    react_native_1.Alert.alert('Publication réussie !', 'Votre template est maintenant disponible sur le Marketplace.');
                    expo_router_1.router.back();
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    react_native_1.Alert.alert('Échec de publication', 'Une erreur réseau est survenue.');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (<react_native_1.ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <react_native_1.View className="p-6">
        <react_native_1.View className="flex-row items-center gap-4 mb-8">
           <react_native_1.TouchableOpacity onPress={function () { return expo_router_1.router.back(); }} className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
             <lucide_react_native_1.ArrowLeft size={20} color="#1e293b"/>
           </react_native_1.TouchableOpacity>
           <react_native_1.Text className="text-2xl font-extrabold text-gray-900 tracking-tight">Vendre un Template</react_native_1.Text>
        </react_native_1.View>

        <react_native_1.View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8 space-y-6">
          <react_native_1.View>
            <react_native_1.Text className="text-gray-900 font-bold text-sm mb-2">Titre du Template</react_native_1.Text>
            <react_native_1.TextInput value={formData.name} onChangeText={function (text) { return setFormData(__assign(__assign({}, formData), { name: text })); }} placeholder="ex: Portrait HDR 8K Cinematic" className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 font-medium"/>
          </react_native_1.View>
          
          <react_native_1.View className="mt-4">
            <react_native_1.Text className="text-gray-900 font-bold text-sm mb-2">Description</react_native_1.Text>
            <react_native_1.TextInput value={formData.description} onChangeText={function (text) { return setFormData(__assign(__assign({}, formData), { description: text })); }} placeholder="Décrivez les résultats obtenus avec ce template..." multiline numberOfLines={3} className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 font-medium min-h-[100px]" textAlignVertical="top"/>
          </react_native_1.View>
          
          <react_native_1.View className="mt-4">
            <react_native_1.Text className="text-gray-900 font-bold text-sm mb-3">Catégorie</react_native_1.Text>
            <react_native_1.View className="flex-row gap-2">
              {[
            { id: 'image_prompt', label: 'Image' },
            { id: 'video_prompt', label: 'Vidéo' },
            { id: 'website_template', label: 'Web' }
        ].map(function (type) { return (<react_native_1.TouchableOpacity key={type.id} onPress={function () { return setFormData(__assign(__assign({}, formData), { type: type.id })); }} className={"flex-1 py-3 rounded-2xl items-center border transition-all ".concat(formData.type === type.id ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-100')}>
                  <react_native_1.Text className={"font-bold text-xs ".concat(formData.type === type.id ? 'text-white' : 'text-gray-600')}>
                    {type.label}
                  </react_native_1.Text>
                </react_native_1.TouchableOpacity>); })}
            </react_native_1.View>
          </react_native_1.View>
          
          <react_native_1.View className="mt-4">
            <react_native_1.View className="flex-row justify-between items-center mb-2">
              <react_native_1.Text className="text-gray-900 font-bold text-sm">Configuration JSON</react_native_1.Text>
              <div className="bg-indigo-50 px-2 py-1 rounded">
                <lucide_react_native_1.Code size={14} color="#4f46e5"/>
              </div>
            </react_native_1.View>
            <react_native_1.TextInput value={formData.config} onChangeText={function (text) { return setFormData(__assign(__assign({}, formData), { config: text })); }} placeholder='{"prompt": "...", "steps": 50}' multiline numberOfLines={6} className="bg-gray-900 rounded-2xl p-4 text-indigo-200 font-mono text-xs min-h-[140px]" textAlignVertical="top"/>
          </react_native_1.View>
        </react_native_1.View>

        <react_native_1.View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">
           <react_native_1.View className="flex-row justify-between items-center mb-6">
              <react_native_1.View className="flex-row items-center gap-2">
                <lucide_react_native_1.Coins size={18} color="#4f46e5"/>
                <react_native_1.Text className="text-gray-900 font-bold">Tarification (crédits)</react_native_1.Text>
              </react_native_1.View>
              <react_native_1.TextInput value={formData.price} onChangeText={function (text) { return setFormData(__assign(__assign({}, formData), { price: text })); }} placeholder="0" keyboardType="numeric" className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-indigo-600 font-extrabold text-right min-w-[80px]"/>
           </react_native_1.View>
           
           <react_native_1.View className="flex-row justify-between items-center mb-2">
              <react_native_1.View className="flex-row items-center gap-2">
                {formData.isPublic ? <lucide_react_native_1.Eye size={18} color="#10b981"/> : <lucide_react_native_1.EyeOff size={18} color="#94a3b8"/>}
                <react_native_1.Text className="text-gray-900 font-bold">Rendre public</react_native_1.Text>
              </react_native_1.View>
              <react_native_1.Switch value={formData.isPublic} onValueChange={function (value) { return setFormData(__assign(__assign({}, formData), { isPublic: value })); }} trackColor={{ false: '#e5e7eb', true: '#4f46e5' }}/>
           </react_native_1.View>
           <react_native_1.Text className="text-[10px] text-gray-400 font-medium ml-7">Les templates publics sont visibles par toute la communauté.</react_native_1.Text>
        </react_native_1.View>
        
        <react_native_1.TouchableOpacity onPress={handleSubmit} disabled={loading} className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 active:scale-95 transition-all mb-10 flex-row justify-center gap-3">
          {loading ? <react_native_1.ActivityIndicator color="white"/> : <lucide_react_native_1.Send size={20} color="white"/>}
          <react_native_1.Text className="text-white font-bold text-lg">
            {loading ? 'Publication...' : 'Publier le Template'}
          </react_native_1.Text>
        </react_native_1.TouchableOpacity>
        
        <react_native_1.View className="bg-indigo-50 rounded-2xl p-4 flex-row gap-3 mb-10">
           <lucide_react_native_1.Info size={20} color="#4f46e5"/>
           <react_native_1.Text className="text-indigo-700 text-xs flex-1 font-medium leading-4">
             En publiant, vous acceptez que ZAKSOFT prélève 30% de commission sur vos ventes. Vous recevrez 5 crédits bonus pour chaque nouvelle publication.
           </react_native_1.Text>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.ScrollView>);
}
