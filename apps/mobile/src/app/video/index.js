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
exports.default = VideoGenerationScreen;
var react_native_1 = require("react-native");
var react_1 = require("react");
var api_1 = require("../../services/api");
var useAuth_1 = require("../../hooks/useAuth");
var lucide_react_native_1 = require("lucide-react-native");
function VideoGenerationScreen() {
    var _this = this;
    var _a = (0, react_1.useState)(''), prompt = _a[0], setPrompt = _a[1];
    var _b = (0, react_1.useState)(5), duration = _b[0], setDuration = _b[1];
    var _c = (0, react_1.useState)(false), generating = _c[0], setGenerating = _c[1];
    var _d = (0, react_1.useState)(null), jobId = _d[0], setJobId = _d[1];
    var _e = (0, useAuth_1.useAuth)(), credits = _e.credits, refreshUser = _e.refreshUser;
    var handleGenerate = function () { return __awaiter(_this, void 0, void 0, function () {
        var id_1, interval_1, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!prompt.trim()) {
                        react_native_1.Alert.alert('Champs requis', 'Veuillez décrire la vidéo que vous souhaitez générer.');
                        return [2 /*return*/];
                    }
                    if (credits < 10) {
                        react_native_1.Alert.alert('Crédits insuffisants', 'Cette action nécessite 10 crédits. Veuillez recharger votre compte.');
                        return [2 /*return*/];
                    }
                    setGenerating(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_1.videoService.generate({
                            prompt: prompt,
                            duration: duration,
                            ratio: '16:9'
                        })];
                case 2:
                    id_1 = (_a.sent()).jobId;
                    setJobId(id_1);
                    interval_1 = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var status_1, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, api_1.videoService.getStatus(id_1)];
                                case 1:
                                    status_1 = _a.sent();
                                    if (status_1.status === 'completed') {
                                        clearInterval(interval_1);
                                        setGenerating(false);
                                        react_native_1.Alert.alert('Création terminée !', 'Votre vidéo est prête à être visionnée.');
                                        refreshUser();
                                    }
                                    else if (status_1.status === 'failed') {
                                        clearInterval(interval_1);
                                        setGenerating(false);
                                        react_native_1.Alert.alert('Échec de génération', 'Une erreur est survenue lors du rendu de la vidéo.');
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
                    react_native_1.Alert.alert('Erreur', "Impossible de lancer la génération. Vérifiez votre connexion.");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<react_native_1.ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
      <react_native_1.View className="p-6">
        <react_native_1.View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <react_native_1.View className="flex-row items-center gap-2 mb-4">
            <lucide_react_native_1.Layers size={18} color="#4f46e5"/>
            <react_native_1.Text className="text-gray-900 font-bold text-base">Prompt Créatif</react_native_1.Text>
          </react_native_1.View>
          <react_native_1.TextInput placeholder="Décrivez chaque détail : mouvement, éclairage, style..." value={prompt} onChangeText={setPrompt} multiline numberOfLines={6} className="bg-gray-50 border border-gray-50 rounded-2xl p-4 text-gray-800 min-h-[140px] font-medium" textAlignVertical="top"/>
        </react_native_1.View>
        
        <react_native_1.View className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
          <react_native_1.Text className="text-gray-900 font-bold text-base mb-4">Durée de la séquence</react_native_1.Text>
          <react_native_1.View className="flex-row gap-3">
            {[2, 5, 10, 15].map(function (d) { return (<react_native_1.TouchableOpacity key={d} onPress={function () { return setDuration(d); }} className={"flex-1 py-4 rounded-2xl items-center border ".concat(duration === d ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-gray-100')}>
                <react_native_1.Text className={"font-bold ".concat(duration === d ? 'text-white' : 'text-gray-600')}>{d}s</react_native_1.Text>
              </react_native_1.TouchableOpacity>); })}
          </react_native_1.View>
        </react_native_1.View>
        
        <react_native_1.View className="flex-row gap-4 mb-10">
          <react_native_1.TouchableOpacity className="flex-1 flex-row items-center justify-center gap-3 bg-white border border-gray-100 py-4 rounded-3xl shadow-sm">
            <lucide_react_native_1.Mic size={20} color="#4f46e5"/>
            <react_native_1.Text className="text-gray-900 font-bold">Voix IA</react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.TouchableOpacity className="flex-1 flex-row items-center justify-center gap-3 bg-white border border-gray-100 py-4 rounded-3xl shadow-sm">
            <lucide_react_native_1.Subtitles size={20} color="#4f46e5"/>
            <react_native_1.Text className="text-gray-900 font-bold">Sous-titres</react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
        
        <react_native_1.TouchableOpacity onPress={handleGenerate} disabled={generating} className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 active:scale-95 transition-all">
          {generating ? (<react_native_1.ActivityIndicator color="white"/>) : (<react_native_1.View className="flex-row items-center gap-3">
              <lucide_react_native_1.Video color="white" size={24}/>
              <react_native_1.Text className="text-white font-bold text-lg">Lancer le rendu vidéo</react_native_1.Text>
            </react_native_1.View>)}
        </react_native_1.TouchableOpacity>
        
        {jobId && (<react_native_1.View className="mt-6 bg-indigo-50 border border-indigo-100 rounded-2xl p-4">
            <react_native_1.Text className="text-indigo-600 text-center font-bold">Rendu en cours : {jobId.slice(-8).toUpperCase()}</react_native_1.Text>
            <react_native_1.Text className="text-indigo-400 text-center text-xs mt-1">Ne fermez pas l'application pour un résultat optimal.</react_native_1.Text>
          </react_native_1.View>)}
        
        <react_native_1.View className="mt-8 items-center bg-gray-100 py-3 rounded-full self-center px-6">
          <react_native_1.Text className="text-gray-500 font-bold text-[10px] uppercase tracking-widest">
            Estimation : {duration <= 5 ? '10' : duration <= 10 ? '20' : '50'} crédits ZAKSOFT
          </react_native_1.Text>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.ScrollView>);
}
