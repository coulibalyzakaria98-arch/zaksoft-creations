"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DesignScreen;
var react_native_1 = require("react-native");
var react_1 = require("react");
var api_1 = require("../../services/api");
var useAuth_1 = require("../../hooks/useAuth");
var lucide_react_native_1 = require("lucide-react-native");
function DesignScreen() {
    var _this = this;
    var _a = (0, react_1.useState)(''), prompt = _a[0], setPrompt = _a[1];
    var _b = (0, react_1.useState)(''), negativePrompt = _b[0], setNegativePrompt = _b[1];
    var _c = (0, react_1.useState)('1024x1024'), size = _c[0], setSize = _c[1];
    var _d = (0, react_1.useState)(false), generating = _d[0], setGenerating = _d[1];
    var _e = (0, react_1.useState)([]), images = _e[0], setImages = _e[1];
    var _f = (0, react_1.useState)(null), currentJobId = _f[0], setCurrentJobId = _f[1];
    var _g = (0, useAuth_1.useAuth)(), credits = _g.credits, refreshUser = _g.refreshUser;
    var sizes = [
        { label: '512×512', value: '512x512', cost: 1 },
        { label: '1024×1024', value: '1024x1024', cost: 2 },
        { label: '4K', value: '4k', cost: 5 }
    ];
    var handleGenerate = function () { return __awaiter(_this, void 0, void 0, function () {
        var cost, jobId_1, interval_1, error_1;
        var _this = this;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!prompt.trim()) {
                        react_native_1.Alert.alert('Champs vide', 'Veuillez décrire l\'image que vous souhaitez créer.');
                        return [2 /*return*/];
                    }
                    cost = ((_a = sizes.find(function (s) { return s.value === size; })) === null || _a === void 0 ? void 0 : _a.cost) || 2;
                    if (credits < cost) {
                        react_native_1.Alert.alert('Crédits insuffisants', 'Vous avez besoin de plus de crédits pour cette résolution.');
                        return [2 /*return*/];
                    }
                    setGenerating(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_1.designService.generate(prompt, size, negativePrompt)];
                case 2:
                    jobId_1 = (_b.sent()).jobId;
                    setCurrentJobId(jobId_1);
                    interval_1 = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var status_1, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, api_1.designService.getStatus(jobId_1)];
                                case 1:
                                    status_1 = _a.sent();
                                    if (status_1.status === 'completed' && status_1.url) {
                                        setImages(function (prev) { return __spreadArray([status_1.url], prev, true); });
                                        clearInterval(interval_1);
                                        setGenerating(false);
                                        setCurrentJobId(null);
                                        refreshUser();
                                    }
                                    else if (status_1.status === 'failed') {
                                        clearInterval(interval_1);
                                        setGenerating(false);
                                        setCurrentJobId(null);
                                        react_native_1.Alert.alert('Échec', 'La génération d\'image a échoué.');
                                    }
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }, 3000);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    setGenerating(false);
                    react_native_1.Alert.alert('Erreur', 'Impossible de lancer la génération.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var removeImage = function (index) {
        setImages(function (prev) { return prev.filter(function (_, i) { return i !== index; }); });
    };
    return (<react_native_1.ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <react_native_1.View className="p-6">
        <react_native_1.View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <react_native_1.Text className="text-gray-900 font-bold text-base mb-4">Studio de Design</react_native_1.Text>
          
          <react_native_1.TextInput placeholder="Un chat astronaute explorant une galaxie de bonbons..." value={prompt} onChangeText={setPrompt} multiline numberOfLines={3} className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 min-h-[100px] font-medium mb-4" textAlignVertical="top"/>
          
          <react_native_1.Text className="text-gray-400 text-xs font-bold mb-2 uppercase tracking-wider ml-1">Paramètres avancés</react_native_1.Text>
          <react_native_1.TextInput placeholder="Exclure : flou, texte, déformé..." value={negativePrompt} onChangeText={setNegativePrompt} className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 font-medium mb-6"/>
          
          <react_native_1.Text className="text-gray-900 font-bold text-sm mb-3 ml-1">Résolution de sortie</react_native_1.Text>
          <react_native_1.View className="flex-row gap-2">
            {sizes.map(function (s) { return (<react_native_1.TouchableOpacity key={s.value} onPress={function () { return setSize(s.value); }} className={"flex-1 py-3 rounded-xl items-center border ".concat(size === s.value ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-100')}>
                <react_native_1.Text className={"font-bold text-xs ".concat(size === s.value ? 'text-white' : 'text-gray-600')}>{s.label}</react_native_1.Text>
                <react_native_1.Text className={"text-[10px] mt-0.5 ".concat(size === s.value ? 'text-indigo-200' : 'text-gray-400')}>
                  {s.cost} crédits
                </react_native_1.Text>
              </react_native_1.TouchableOpacity>); })}
          </react_native_1.View>
        </react_native_1.View>
        
        <react_native_1.TouchableOpacity onPress={handleGenerate} disabled={generating} className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 active:scale-95 transition-all mb-8">
          {generating ? (<react_native_1.View className="flex-row items-center gap-3">
              <react_native_1.ActivityIndicator color="white"/>
              <react_native_1.Text className="text-white font-bold text-lg">Création artistique...</react_native_1.Text>
            </react_native_1.View>) : (<react_native_1.View className="flex-row items-center gap-3">
              <lucide_react_native_1.Sparkles color="white" size={24}/>
              <react_native_1.Text className="text-white font-bold text-lg">Générer l'œuvre</react_native_1.Text>
            </react_native_1.View>)}
        </react_native_1.TouchableOpacity>
        
        {currentJobId && (<react_native_1.View className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mb-8">
            <react_native_1.Text className="text-amber-700 text-center font-bold text-sm">IA au travail : {currentJobId.slice(-8).toUpperCase()}</react_native_1.Text>
          </react_native_1.View>)}
        
        {images.length > 0 && (<react_native_1.View className="mb-10">
            <react_native_1.Text className="text-gray-900 font-bold text-xl mb-6">Galerie de Créations</react_native_1.Text>
            {images.map(function (img, index) { return (<react_native_1.View key={index} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 mb-6">
                <react_native_1.Image source={{ uri: img }} className="w-full h-80" resizeMode="cover"/>
                <react_native_1.View className="p-4 flex-row justify-between items-center bg-white">
                  <react_native_1.Text className="text-gray-400 font-bold text-xs uppercase">Généré aujourd'hui</react_native_1.Text>
                  <react_native_1.View className="flex-row gap-3">
                    <react_native_1.TouchableOpacity onPress={function () { return removeImage(index); }} className="bg-red-50 p-2.5 rounded-full">
                      <lucide_react_native_1.Trash2 size={18} color="#ef4444"/>
                    </react_native_1.TouchableOpacity>
                    <react_native_1.TouchableOpacity className="bg-indigo-50 p-2.5 rounded-full">
                      <lucide_react_native_1.Download size={18} color="#4f46e5"/>
                    </react_native_1.TouchableOpacity>
                  </react_native_1.View>
                </react_native_1.View>
              </react_native_1.View>); })}
          </react_native_1.View>)}
      </react_native_1.View>
    </react_native_1.ScrollView>);
}
