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
exports.default = LoginScreen;
var react_native_1 = require("react-native");
var react_1 = require("react");
var useAuth_1 = require("../../hooks/useAuth");
var expo_router_1 = require("expo-router");
var lucide_react_native_1 = require("lucide-react-native");
function LoginScreen() {
    var _this = this;
    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var login = (0, useAuth_1.useAuth)().login;
    var handleLogin = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!email || !password) {
                        react_native_1.Alert.alert('Erreur', 'Veuillez remplir tous les champs');
                        return [2 /*return*/];
                    }
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, login(email, password)];
                case 2:
                    _a.sent();
                    expo_router_1.router.replace('/');
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    react_native_1.Alert.alert('Erreur', 'Email ou mot de passe incorrect');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (<react_native_1.KeyboardAvoidingView behavior={react_native_1.Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 bg-white">
      <react_native_1.View className="flex-1 justify-center px-8">
        <react_native_1.View className="items-center mb-12">
          <react_native_1.View className="w-24 h-24 bg-indigo-50 rounded-3xl items-center justify-center mb-6 transform -rotate-6">
            <lucide_react_native_1.Sparkles size={48} color="#4f46e5"/>
          </react_native_1.View>
          <react_native_1.Text className="text-3xl font-extrabold text-gray-900 tracking-tight">Bon retour !</react_native_1.Text>
          <react_native_1.Text className="text-gray-500 mt-2 text-center">Connectez-vous pour continuer vos créations IA.</react_native_1.Text>
        </react_native_1.View>
        
        <react_native_1.View className="space-y-4">
          <react_native_1.View className="relative">
            <react_native_1.View className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <lucide_react_native_1.Mail size={20} color="#94a3b8"/>
            </react_native_1.View>
            <react_native_1.TextInput placeholder="Email professionnel" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" className="bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-gray-900 font-medium outline-none"/>
          </react_native_1.View>
          
          <react_native_1.View className="relative mt-4">
            <react_native_1.View className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <lucide_react_native_1.Lock size={20} color="#94a3b8"/>
            </react_native_1.View>
            <react_native_1.TextInput placeholder="Mot de passe" value={password} onChangeText={setPassword} secureTextEntry className="bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-gray-900 font-medium outline-none"/>
          </react_native_1.View>
        </react_native_1.View>
        
        <react_native_1.TouchableOpacity className="mt-4 self-end">
          <react_native_1.Text className="text-indigo-600 font-bold text-sm">Mot de passe oublié ?</react_native_1.Text>
        </react_native_1.TouchableOpacity>
        
        <react_native_1.TouchableOpacity onPress={handleLogin} disabled={loading} className="bg-indigo-600 rounded-2xl py-5 items-center mt-10 shadow-lg shadow-indigo-200 active:scale-95 transition-all">
          <react_native_1.View className="flex-row items-center gap-3">
            <react_native_1.Text className="text-white font-bold text-lg">
              {loading ? 'Connexion en cours...' : 'Se connecter'}
            </react_native_1.Text>
            {!loading && <lucide_react_native_1.ArrowRight size={20} color="white"/>}
          </react_native_1.View>
        </react_native_1.TouchableOpacity>
        
        <react_native_1.View className="flex-row justify-center mt-10">
          <react_native_1.Text className="text-gray-500 font-medium">Nouveau ici ? </react_native_1.Text>
          <react_native_1.TouchableOpacity onPress={function () { return expo_router_1.router.push('/auth/register'); }}>
            <react_native_1.Text className="text-indigo-600 font-bold">Créer un compte</react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.KeyboardAvoidingView>);
}
