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
exports.default = TemplateDetailScreen;
var react_native_1 = require("react-native");
var expo_router_1 = require("expo-router");
var react_1 = require("react");
var api_1 = require("../../services/api");
var useAuth_1 = require("../../hooks/useAuth");
var lucide_react_native_1 = require("lucide-react-native");
function TemplateDetailScreen() {
    var _this = this;
    var id = (0, expo_router_1.useLocalSearchParams)().id;
    var _a = (0, react_1.useState)(null), template = _a[0], setTemplate = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(false), importing = _c[0], setImporting = _c[1];
    var _d = (0, react_1.useState)(false), isFavorite = _d[0], setIsFavorite = _d[1];
    var _e = (0, useAuth_1.useAuth)(), credits = _e.credits, refreshUser = _e.refreshUser;
    (0, react_1.useEffect)(function () {
        if (id)
            fetchTemplate();
    }, [id]);
    var fetchTemplate = function () { return __awaiter(_this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, api_1.marketplaceService.getTemplate(id)];
                case 1:
                    data = _a.sent();
                    setTemplate(data);
                    setIsFavorite(data.isFavorite || false);
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    react_native_1.Alert.alert('Erreur', 'Impossible de charger les détails.');
                    expo_router_1.router.back();
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handlePurchase = function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            if (credits < template.price) {
                react_native_1.Alert.alert('Crédits insuffisants', 'Voulez-vous recharger votre compte ?', [
                    { text: 'Plus tard', style: 'cancel' },
                    { text: 'Recharger', onPress: function () { return expo_router_1.router.push('/profile'); } }
                ]);
                return [2 /*return*/];
            }
            react_native_1.Alert.alert('Confirmer l\'achat', "Voulez-vous d\u00E9penser ".concat(template.price, " cr\u00E9dits pour ce template ?"), [
                { text: 'Annuler', style: 'cancel' },
                {
                    text: 'Confirmer',
                    onPress: function () { return __awaiter(_this, void 0, void 0, function () {
                        var error_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    setImporting(true);
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, 4, 5]);
                                    return [4 /*yield*/, api_1.marketplaceService.importTemplate(template.id)];
                                case 2:
                                    _a.sent();
                                    react_native_1.Alert.alert('Succès !', 'Template ajouté à votre bibliothèque.');
                                    refreshUser();
                                    expo_router_1.router.push('/marketplace/downloads');
                                    return [3 /*break*/, 5];
                                case 3:
                                    error_2 = _a.sent();
                                    react_native_1.Alert.alert('Échec', 'L\'achat n\'a pas pu être finalisé.');
                                    return [3 /*break*/, 5];
                                case 4:
                                    setImporting(false);
                                    return [7 /*endfinally*/];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); }
                }
            ]);
            return [2 /*return*/];
        });
    }); };
    var handleShare = function () { return __awaiter(_this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, react_native_1.Share.share({
                            message: "Boostez vos cr\u00E9ations IA avec \"".concat(template.name, "\" sur ZAKSOFT Cr\u00E9ations !"),
                            url: "https://zaksoft.com/t/".concat(template.id)
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (loading)
        return <react_native_1.View className="flex-1 justify-center items-center"><react_native_1.ActivityIndicator size="large" color="#4f46e5"/></react_native_1.View>;
    return (<react_native_1.View className="flex-1 bg-white">
      <react_native_1.ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <react_native_1.View className="relative h-96">
          {template.thumbnail ? (<react_native_1.Image source={{ uri: template.thumbnail }} className="w-full h-full" resizeMode="cover"/>) : (<react_native_1.View className="w-full h-full bg-gray-900 items-center justify-center">
               <react_native_1.Text className="text-8xl opacity-30">
                 {template.type === 'image_prompt' ? '🎨' : template.type === 'video_prompt' ? '🎬' : '🌐'}
               </react_native_1.Text>
            </react_native_1.View>)}
          
          <react_native_1.TouchableOpacity onPress={function () { return expo_router_1.router.back(); }} className="absolute top-12 left-6 w-12 h-12 bg-black/20 backdrop-blur-xl rounded-2xl items-center justify-center border border-white/20">
            <lucide_react_native_1.ArrowLeft size={24} color="white"/>
          </react_native_1.TouchableOpacity>

          <react_native_1.View className="absolute top-12 right-6 flex-row gap-3">
            <react_native_1.TouchableOpacity onPress={function () { return setIsFavorite(!isFavorite); }} className="w-12 h-12 bg-black/20 backdrop-blur-xl rounded-2xl items-center justify-center border border-white/20">
              <lucide_react_native_1.Heart size={24} color={isFavorite ? "#ef4444" : "white"} fill={isFavorite ? "#ef4444" : "none"}/>
            </react_native_1.TouchableOpacity>
            <react_native_1.TouchableOpacity onPress={handleShare} className="w-12 h-12 bg-black/20 backdrop-blur-xl rounded-2xl items-center justify-center border border-white/20">
              <lucide_react_native_1.Share2 size={24} color="white"/>
            </react_native_1.TouchableOpacity>
          </react_native_1.View>

          <react_native_1.View className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"/>
        </react_native_1.View>

        <react_native_1.View className="px-8 -mt-12 relative z-10">
          <react_native_1.View className="bg-indigo-600 self-start px-4 py-1.5 rounded-full mb-4 shadow-lg shadow-indigo-200">
            <react_native_1.Text className="text-white font-black text-[10px] uppercase tracking-widest">
              {template.type.replace('_', ' ')}
            </react_native_1.Text>
          </react_native_1.View>
          
          <react_native_1.Text className="text-3xl font-black text-gray-900 tracking-tight leading-tight">{template.name}</react_native_1.Text>
          
          <react_native_1.View className="flex-row items-center gap-3 mt-4 mb-8">
             <react_native_1.View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
               <react_native_1.Text className="text-gray-400 font-bold">{template.author.email.charAt(0).toUpperCase()}</react_native_1.Text>
             </react_native_1.View>
             <react_native_1.View>
               <react_native_1.Text className="text-gray-900 font-bold text-sm">Posté par {template.author.email.split('@')[0]}</react_native_1.Text>
               <react_native_1.Text className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter">Créateur Vérifié <lucide_react_native_1.ShieldCheck size={10} color="#10b981"/></react_native_1.Text>
             </react_native_1.View>
          </react_native_1.View>

          <react_native_1.View className="flex-row justify-between bg-gray-50 rounded-3xl p-6 mb-8">
             <react_native_1.View className="items-center flex-1 border-r border-gray-200">
                <react_native_1.Text className="text-gray-900 font-black text-lg">{template.avgRating > 0 ? template.avgRating.toFixed(1) : '—'}</react_native_1.Text>
                <react_native_1.Text className="text-gray-400 text-[10px] font-bold uppercase mt-1">Note IA</react_native_1.Text>
             </react_native_1.View>
             <react_native_1.View className="items-center flex-1 border-r border-gray-200">
                <react_native_1.Text className="text-gray-900 font-black text-lg">{template._count.downloads}</react_native_1.Text>
                <react_native_1.Text className="text-gray-400 text-[10px] font-bold uppercase mt-1">Ventes</react_native_1.Text>
             </react_native_1.View>
             <react_native_1.View className="items-center flex-1">
                <react_native_1.Text className="text-indigo-600 font-black text-lg">{template.price === 0 ? 'FREE' : template.price}</react_native_1.Text>
                <react_native_1.Text className="text-gray-400 text-[10px] font-bold uppercase mt-1">Crédits</react_native_1.Text>
             </react_native_1.View>
          </react_native_1.View>

          <react_native_1.Text className="text-gray-900 font-extrabold text-xl mb-4">À propos de ce template</react_native_1.Text>
          <react_native_1.Text className="text-gray-500 font-medium leading-6 mb-8">
            {template.description || "Ce template exceptionnel vous permet d'obtenir des résultats professionnels instantanément en exploitant les meilleurs modèles d'IA générative."}
          </react_native_1.Text>

          <react_native_1.View className="bg-gray-900 rounded-[32px] p-6 mb-12">
             <react_native_1.View className="flex-row justify-between items-center mb-4">
                <react_native_1.Text className="text-white font-bold">Aperçu Technique</react_native_1.Text>
                <lucide_react_native_1.Download size={18} color="#4f46e5"/>
             </react_native_1.View>
             <react_native_1.View className="bg-white/5 rounded-2xl p-4">
                <react_native_1.Text className="text-indigo-200 font-mono text-xs leading-5">
                   {JSON.stringify(template.config, null, 2).slice(0, 250)}...
                </react_native_1.Text>
             </react_native_1.View>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.ScrollView>

      <react_native_1.View className="px-8 pb-10 pt-4 bg-white border-t border-gray-100">
        <react_native_1.TouchableOpacity onPress={handlePurchase} disabled={importing} className="bg-indigo-600 rounded-3xl py-5 items-center shadow-xl shadow-indigo-100 flex-row justify-center gap-4">
          {importing ? <react_native_1.ActivityIndicator color="white"/> : <lucide_react_native_1.Download size={24} color="white"/>}
          <react_native_1.Text className="text-white font-black text-lg">
            {importing ? 'Finalisation...' : template.price === 0 ? 'Importation Gratuite' : "Acheter (".concat(template.price, " CR)")}
          </react_native_1.Text>
        </react_native_1.TouchableOpacity>
      </react_native_1.View>
    </react_native_1.View>);
}
