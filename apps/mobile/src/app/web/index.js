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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebScreen;
var react_native_1 = require("react-native");
var react_1 = require("react");
var api_1 = require("../../services/api");
var useAuth_1 = require("../../hooks/useAuth");
var lucide_react_native_1 = require("lucide-react-native");
function WebScreen() {
    var _this = this;
    var _a = (0, react_1.useState)(''), description = _a[0], setDescription = _a[1];
    var _b = (0, react_1.useState)('Accueil, À propos, Services, Contact'), pages = _b[0], setPages = _b[1];
    var _c = (0, react_1.useState)('modern'), template = _c[0], setTemplate = _c[1];
    var _d = (0, react_1.useState)(false), generating = _d[0], setGenerating = _d[1];
    var _e = (0, react_1.useState)(null), result = _e[0], setResult = _e[1];
    var _f = (0, useAuth_1.useAuth)(), credits = _f.credits, refreshUser = _f.refreshUser;
    var templates = [
        { value: 'modern', label: 'Moderne', icon: '✨' },
        { value: 'minimal', label: 'Minimal', icon: '🎯' },
        { value: 'corporate', label: 'Pro', icon: '💼' },
        { value: 'creative', label: 'Créatif', icon: '🎨' }
    ];
    var handleGenerate = function () { return __awaiter(_this, void 0, void 0, function () {
        var jobId_1, interval_1, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!description.trim()) {
                        react_native_1.Alert.alert('Description manquante', 'Veuillez décrire le site web que vous souhaitez créer.');
                        return [2 /*return*/];
                    }
                    if (credits < 10) {
                        react_native_1.Alert.alert('Crédits insuffisants', 'Cette opération nécessite au moins 10 crédits.');
                        return [2 /*return*/];
                    }
                    setGenerating(true);
                    setResult(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_1.webService.generate({
                            description: description,
                            pages: pages.split(',').map(function (p) { return p.trim(); }),
                            template: template
                        })];
                case 2:
                    jobId_1 = (_a.sent()).jobId;
                    interval_1 = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var status_1, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, api_1.webService.getStatus(jobId_1)];
                                case 1:
                                    status_1 = _a.sent();
                                    if (status_1.status === 'completed' && status_1.url) {
                                        setResult({ websiteId: jobId_1, previewUrl: status_1.url });
                                        clearInterval(interval_1);
                                        setGenerating(false);
                                        refreshUser();
                                    }
                                    else if (status_1.status === 'failed') {
                                        clearInterval(interval_1);
                                        setGenerating(false);
                                        react_native_1.Alert.alert('Erreur de rendu', 'Le moteur de génération web a rencontré un problème.');
                                    }
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }, 4000);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setGenerating(false);
                    react_native_1.Alert.alert('Erreur réseau', 'Impossible de se connecter au service Web-Gen.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<react_native_1.ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <react_native_1.View className="p-6">
        <react_native_1.View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <react_native_1.View className="flex-row items-center gap-2 mb-6">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <lucide_react_native_1.Globe size={18} color="white"/>
            </div>
            <react_native_1.Text className="text-gray-900 font-bold text-lg">Web Generator</react_native_1.Text>
          </react_native_1.View>

          <react_native_1.Text className="text-gray-700 font-bold text-sm mb-2">Description du projet</react_native_1.Text>
          <react_native_1.TextInput placeholder="Un site pour un restaurant gastronomique italien avec réservation en ligne..." value={description} onChangeText={setDescription} multiline numberOfLines={4} className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 min-h-[120px] font-medium mb-6" textAlignVertical="top"/>
          
          <react_native_1.Text className="text-gray-700 font-bold text-sm mb-2">Architecture (pages)</react_native_1.Text>
          <react_native_1.TextInput placeholder="Accueil, Menu, Histoire, Contact" value={pages} onChangeText={setPages} className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 font-medium mb-6"/>
          
          <react_native_1.Text className="text-gray-700 font-bold text-sm mb-3">Style visuel</react_native_1.Text>
          <react_native_1.View className="flex-row flex-wrap gap-2 mb-4">
            {templates.map(function (t) { return (<react_native_1.TouchableOpacity key={t.value} onPress={function () { return setTemplate(t.value); }} className={"px-4 py-3 rounded-2xl flex-row items-center gap-2 border ".concat(template === t.value ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-100')}>
                <react_native_1.Text className="text-lg">{t.icon}</react_native_1.Text>
                <react_native_1.Text className={"font-bold text-sm ".concat(template === t.value ? 'text-white' : 'text-gray-600')}>
                  {t.label}
                </react_native_1.Text>
              </react_native_1.TouchableOpacity>); })}
          </react_native_1.View>
        </react_native_1.View>
        
        <react_native_1.TouchableOpacity onPress={handleGenerate} disabled={generating} className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 active:scale-95 transition-all mb-10">
          {generating ? (<react_native_1.View className="flex-row items-center gap-3">
              <react_native_1.ActivityIndicator color="white"/>
              <react_native_1.Text className="text-white font-bold text-lg">Codage en cours...</react_native_1.Text>
            </react_native_1.View>) : (<react_native_1.View className="flex-row items-center gap-3">
              <lucide_react_native_1.Code color="white" size={24}/>
              <react_native_1.Text className="text-white font-bold text-lg">Générer le Site React</react_native_1.Text>
            </react_native_1.View>)}
        </react_native_1.TouchableOpacity>
        
        {result && (<react_native_1.View className="bg-white rounded-3xl p-8 border-2 border-emerald-100 shadow-sm relative overflow-hidden">
            <react_native_1.View className="absolute -right-4 -top-4 bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center pt-4 pl-0">
               <lucide_react_native_1.CheckCircle2 size={40} color="#10b981"/>
            </react_native_1.View>

            <react_native_1.Text className="text-gray-900 font-extrabold text-xl mb-2">Prêt à l'emploi !</react_native_1.Text>
            <react_native_1.Text className="text-gray-500 text-sm mb-6">Votre site web a été généré et optimisé pour le mobile.</react_native_1.Text>
            
            <react_native_1.View className="bg-gray-50 rounded-2xl p-4 flex-row justify-between items-center mb-8 border border-gray-100">
              <react_native_1.Text className="text-indigo-600 font-bold text-xs flex-1 mr-4" numberOfLines={1}>{result.previewUrl}</react_native_1.Text>
              <react_native_1.TouchableOpacity onPress={function () { return react_native_1.Alert.alert('Copié', 'URL copiée dans le presse-papier'); }}>
                <lucide_react_native_1.Copy size={20} color="#4f46e5"/>
              </react_native_1.TouchableOpacity>
            </react_native_1.View>
            
            <react_native_1.View className="flex-row gap-4">
              <react_native_1.TouchableOpacity onPress={function () { return react_native_1.Linking.openURL(result.previewUrl); }} className="flex-1 bg-indigo-600 py-4 rounded-2xl flex-row items-center justify-center gap-2 shadow-lg shadow-indigo-100">
                <lucide_react_native_1.ExternalLink size={20} color="white"/>
                <react_native_1.Text className="text-white font-bold">Voir le site</react_native_1.Text>
              </react_native_1.TouchableOpacity>
              
              <react_native_1.TouchableOpacity className="flex-1 bg-gray-900 py-4 rounded-2xl flex-row items-center justify-center gap-2">
                <lucide_react_native_1.Globe size={20} color="white"/>
                <react_native_1.Text className="text-white font-bold">Déployer</react_native_1.Text>
              </react_native_1.TouchableOpacity>
            </react_native_1.View>
          </react_native_1.View>)}
      </react_native_1.View>
    </react_native_1.ScrollView>);
}
