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
exports.default = MarketplaceScreen;
var react_native_1 = require("react-native");
var react_1 = require("react");
var api_1 = require("../../services/api");
var TemplateCard_1 = require("../../components/marketplace/TemplateCard");
var SearchBar_1 = require("../../components/marketplace/SearchBar");
var CategoryPills_1 = require("../../components/marketplace/CategoryPills");
var expo_router_1 = require("expo-router");
var lucide_react_native_1 = require("lucide-react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
function MarketplaceScreen() {
    var _this = this;
    var _a = (0, react_1.useState)([]), templates = _a[0], setTemplates = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(false), refreshing = _c[0], setRefreshing = _c[1];
    var _d = (0, react_1.useState)(''), search = _d[0], setSearch = _d[1];
    var _e = (0, react_1.useState)('all'), selectedCategory = _e[0], setSelectedCategory = _e[1];
    var fetchTemplates = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, api_1.marketplaceService.getTemplates({
                            search: search,
                            type: selectedCategory !== 'all' ? selectedCategory : '',
                            sort: 'popular',
                            limit: 30
                        })];
                case 1:
                    data = _a.sent();
                    setTemplates(data.data || []);
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    console.error('Failed to fetch templates:', error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    setRefreshing(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [search, selectedCategory]);
    (0, react_1.useEffect)(function () {
        fetchTemplates();
    }, [fetchTemplates]);
    (0, expo_router_1.useFocusEffect)((0, react_1.useCallback)(function () {
        fetchTemplates();
    }, [fetchTemplates]));
    var onRefresh = function () {
        setRefreshing(true);
        fetchTemplates();
    };
    return (<react_native_1.View className="flex-1 bg-gray-50">
      <react_native_1.View className="bg-white px-8 pt-6 pb-6 shadow-sm z-10 rounded-b-[40px]">
        <react_native_1.View className="flex-row justify-between items-center mb-8">
          <react_native_1.View>
            <react_native_1.Text className="text-3xl font-black text-gray-900 tracking-tight">Marketplace</react_native_1.Text>
            <react_native_1.Text className="text-gray-400 text-[10px] font-extrabold uppercase mt-1 tracking-[3px]">Le futur du design</react_native_1.Text>
          </react_native_1.View>
          <react_native_1.View className="flex-row gap-3">
             <react_native_gesture_handler_1.TouchableOpacity onPress={function () { return expo_router_1.router.push('/marketplace/downloads'); }} className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center">
               <lucide_react_native_1.ShoppingBag size={22} color="#1e293b"/>
             </react_native_gesture_handler_1.TouchableOpacity>
             <react_native_gesture_handler_1.TouchableOpacity onPress={function () { return expo_router_1.router.push('/marketplace/create'); }} className="bg-indigo-600 w-12 h-12 rounded-2xl items-center justify-center shadow-lg shadow-indigo-100">
               <lucide_react_native_1.Plus size={26} color="white"/>
             </react_native_gesture_handler_1.TouchableOpacity>
          </react_native_1.View>
        </react_native_1.View>
        
        <react_native_1.View className="mb-6">
           <SearchBar_1.SearchBar value={search} onChange={setSearch}/>
        </react_native_1.View>
        
        <CategoryPills_1.CategoryPills selected={selectedCategory} onSelect={setSelectedCategory}/>
      </react_native_1.View>

      <react_native_1.FlatList data={templates} keyExtractor={function (item) { return item.id; }} renderItem={function (_a) {
        var item = _a.item;
        return <TemplateCard_1.TemplateCard template={item}/>;
    }} contentContainerStyle={{ padding: 24, paddingTop: 32 }} showsVerticalScrollIndicator={false} refreshControl={<react_native_1.RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#4f46e5"/>} ListEmptyComponent={!loading && (<react_native_1.View className="py-24 items-center">
              <react_native_1.Text className="text-gray-400 font-bold">Aucun template trouvé</react_native_1.Text>
            </react_native_1.View>)}/>

      {loading && !refreshing && (<react_native_1.View className="absolute inset-0 justify-center items-center bg-gray-50/60 z-20">
          <react_native_1.ActivityIndicator size="large" color="#4f46e5"/>
        </react_native_1.View>)}
    </react_native_1.View>);
}
