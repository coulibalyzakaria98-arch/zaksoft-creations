"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeScreen;
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var useAuth_1 = require("../hooks/useAuth");
var lucide_react_native_1 = require("lucide-react-native");
var expo_router_1 = require("expo-router");
function HomeScreen() {
    var _a;
    var _b = (0, useAuth_1.useAuth)(), user = _b.user, credits = _b.credits;
    var services = [
        { name: 'Design', icon: lucide_react_native_1.Image, route: '/design', color: '#6366f1' },
        { name: 'Vidéo', icon: lucide_react_native_1.Video, route: '/video', color: '#ec4899' },
        { name: 'Web', icon: lucide_react_native_1.Globe, route: '/web', color: '#10b981' },
        { name: 'Marketplace', icon: lucide_react_native_1.ShoppingBag, route: '/marketplace', color: '#f59e0b' }
    ];
    return (<react_native_safe_area_context_1.SafeAreaView className="flex-1 bg-gray-50">
      <react_native_1.ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <react_native_1.View className="bg-indigo-600 pt-8 pb-12 px-6 rounded-b-3xl">
          <react_native_1.View className="flex-row justify-between items-center">
            <react_native_1.View>
              <react_native_1.Text className="text-white text-2xl font-bold">ZAKSOFT</react_native_1.Text>
              <react_native_1.Text className="text-indigo-200 text-sm">Créations IA</react_native_1.Text>
            </react_native_1.View>
            <react_native_1.TouchableOpacity onPress={function () { return expo_router_1.router.push('/profile'); }}>
              <react_native_1.View className="w-12 h-12 bg-indigo-500 rounded-full items-center justify-center">
                <lucide_react_native_1.User color="white" size={24}/>
              </react_native_1.View>
            </react_native_1.TouchableOpacity>
          </react_native_1.View>
          
          {/* Credits Card */}
          <react_native_1.View className="mt-6 bg-indigo-500 rounded-2xl p-4">
            <react_native_1.Text className="text-indigo-100 text-sm">Crédits disponibles</react_native_1.Text>
            <react_native_1.Text className="text-white text-4xl font-bold mt-1">{credits}</react_native_1.Text>
            <react_native_1.Text className="text-indigo-100 text-xs mt-2 font-medium">
              Plan {((_a = user === null || user === void 0 ? void 0 : user.tier) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'FREE'}
            </react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>
        
        {/* Services Grid */}
        <div className="px-6 mt-8">
          <react_native_1.Text className="text-gray-900 text-xl font-bold mb-6">
            Services IA
          </react_native_1.Text>
          <react_native_1.View className="flex-row flex-wrap justify-between">
            {services.map(function (service) { return (<react_native_1.TouchableOpacity key={service.name} onPress={function () { return expo_router_1.router.push(service.route); }} className="w-[47%] bg-white rounded-2xl p-5 shadow-sm mb-5 border border-gray-100">
                <div className="w-12 h-12 rounded-xl items-center justify-center mb-4" style={{ backgroundColor: "".concat(service.color, "15") }}>
                  <service.icon color={service.color} size={28}/>
                </div>
                <react_native_1.Text className="text-gray-900 font-bold text-base">{service.name}</react_native_1.Text>
                <react_native_1.Text className="text-gray-500 text-xs mt-1">Exploiter la puissance IA</react_native_1.Text>
              </react_native_1.TouchableOpacity>); })}
          </react_native_1.View>
        </div>
        
        {/* Promo Section */}
        <react_native_1.View className="px-6 mb-10">
          <react_native_1.TouchableOpacity className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 shadow-md overflow-hidden relative">
             <react_native_1.View className="relative z-10">
               <react_native_1.Text className="text-white font-bold text-lg">Passez au plan PRO</react_native_1.Text>
               <react_native_1.Text className="text-indigo-100 text-sm mt-1 max-w-[70%]">Débloquez les générations 4K et les vidéos de 30s.</react_native_1.Text>
               <react_native_1.View className="bg-white px-4 py-2 rounded-lg self-start mt-4">
                 <react_native_1.Text className="text-indigo-600 font-bold text-xs">EN SAVOIR PLUS</react_native_1.Text>
               </react_native_1.View>
             </react_native_1.View>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
      </react_native_1.ScrollView>
    </react_native_safe_area_context_1.SafeAreaView>);
}
