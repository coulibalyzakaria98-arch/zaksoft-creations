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
exports.default = DownloadsScreen;
var react_native_1 = require("react-native");
var react_1 = require("react");
var api_1 = require("../../services/api");
var lucide_react_native_1 = require("lucide-react-native");
var expo_router_1 = require("expo-router");
function DownloadsScreen() {
    var _this = this;
    var _a = (0, react_1.useState)([]), downloads = _a[0], setDownloads = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var fetchDownloads = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api_1.marketplaceService.getMyDownloads()];
                case 2:
                    data = _a.sent();
                    setDownloads(data || []);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error('Failed to load downloads', error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, []);
    (0, expo_router_1.useFocusEffect)((0, react_1.useCallback)(function () {
        fetchDownloads();
    }, [fetchDownloads]));
    var handleUseTemplate = function (template) {
        switch (template.type) {
            case 'image_prompt':
                expo_router_1.router.push({ pathname: '/design', params: { preset: JSON.stringify(template.config) } });
                break;
            case 'video_prompt':
                expo_router_1.router.push({ pathname: '/video', params: { preset: JSON.stringify(template.config) } });
                break;
            case 'website_template':
                expo_router_1.router.push({ pathname: '/web', params: { preset: JSON.stringify(template.config) } });
                break;
        }
    };
    var getTypeLabel = function (type) {
        switch (type) {
            case 'image_prompt': return 'Studio Image';
            case 'video_prompt': return 'Studio Vidéo';
            case 'website_template': return 'Générateur Web';
            default: return 'Outil IA';
        }
    };
    return (<react_native_1.View className="flex-1 bg-gray-50">
      <react_native_1.View className="bg-white px-8 pt-6 pb-8 rounded-b-[40px] shadow-sm z-10">
        <react_native_1.Text className="text-3xl font-black text-gray-900 tracking-tight">Ma Bibliothèque</react_native_1.Text>
        <react_native_1.Text className="text-gray-400 font-bold text-xs uppercase mt-2 tracking-[2px]">Templates & Ressources</react_native_1.Text>
      </react_native_1.View>

      {loading ? (<react_native_1.View className="flex-1 justify-center items-center">
          <react_native_1.ActivityIndicator size="large" color="#4f46e5"/>
        </react_native_1.View>) : (<react_native_1.FlatList data={downloads} keyExtractor={function (item) { return item.id; }} contentContainerStyle={{ padding: 24, paddingTop: 32 }} showsVerticalScrollIndicator={false} renderItem={function (_a) {
                var item = _a.item;
                return (<react_native_1.TouchableOpacity onPress={function () { return handleUseTemplate(item.template); }} className="bg-white rounded-[32px] p-6 mb-5 shadow-sm border border-gray-100 flex-row items-center gap-5 active:scale-[0.97] transition-all">
              <react_native_1.View className="w-16 h-16 bg-indigo-50 rounded-2xl items-center justify-center border border-indigo-100">
                <react_native_1.Text className="text-3xl">
                   {item.template.type === 'image_prompt' ? '🎨' : item.template.type === 'video_prompt' ? '🎬' : '🌐'}
                </react_native_1.Text>
              </react_native_1.View>
              
              <react_native_1.View className="flex-1">
                <react_native_1.Text className="font-extrabold text-gray-900 text-lg leading-tight" numberOfLines={1}>{item.template.name}</react_native_1.Text>
                <react_native_1.Text className="text-indigo-600 font-black text-[10px] uppercase mt-1 tracking-wider">{getTypeLabel(item.template.type)}</react_native_1.Text>
              </react_native_1.View>
              
              <react_native_1.View className="bg-gray-900 w-10 h-10 rounded-full items-center justify-center shadow-lg shadow-gray-400">
                 <lucide_react_native_1.Play size={16} color="white" fill="white"/>
              </react_native_1.View>
            </react_native_1.TouchableOpacity>);
            }} ListEmptyComponent={<react_native_1.View className="py-24 items-center">
              <react_native_1.View className="bg-gray-100 p-10 rounded-full mb-8">
                 <lucide_react_native_1.LayoutGrid size={50} color="#cbd5e1"/>
              </react_native_1.View>
              <react_native_1.Text className="text-gray-900 font-black text-xl">Bibliothèque vide</react_native_1.Text>
              <react_native_1.Text className="text-gray-400 text-center mt-3 text-sm font-medium leading-5 max-w-[240px]">
                Vos acquisitions apparaîtront ici. Commencez par explorer le Marketplace.
              </react_native_1.Text>
              <react_native_1.TouchableOpacity onPress={function () { return expo_router_1.router.push('/marketplace'); }} className="mt-10 bg-indigo-600 px-8 py-4 rounded-2xl">
                 <react_native_1.Text className="text-white font-extrabold text-xs uppercase tracking-widest">Voir le Marketplace</react_native_1.Text>
              </react_native_1.TouchableOpacity>
            </react_native_1.View>}/>)}
    </react_native_1.View>);
}
