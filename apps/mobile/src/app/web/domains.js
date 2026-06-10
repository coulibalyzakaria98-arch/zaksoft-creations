"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DomainsScreen;
var react_native_1 = require("react-native");
var react_1 = require("react");
var expo_router_1 = require("expo-router");
var lucide_react_native_1 = require("lucide-react-native");
function DomainsScreen() {
    var websiteId = (0, expo_router_1.useLocalSearchParams)().websiteId;
    var _a = (0, react_1.useState)([]), domains = _a[0], setDomains = _a[1];
    var _b = (0, react_1.useState)(''), newDomain = _b[0], setNewDomain = _b[1];
    var _c = (0, react_1.useState)(true), loading = _c[0], setLoading = _c[1];
    return (<react_native_1.ScrollView className="flex-1 bg-white p-6">
      <react_native_1.Text className="text-3xl font-black text-gray-900 mb-2">Domaines</react_native_1.Text>
      <react_native_1.Text className="text-gray-500 mb-8 font-medium">Connectez votre propre marque à votre site généré.</react_native_1.Text>
      
      <react_native_1.View className="bg-gray-50 p-6 rounded-[32px] border border-gray-100 mb-8">
        <react_native_1.Text className="text-gray-900 font-bold mb-4">Ajouter un domaine personnalisé</react_native_1.Text>
        <react_native_1.View className="flex-row gap-3">
          <react_native_1.TextInput value={newDomain} onChangeText={setNewDomain} placeholder="mon-site.com" className="flex-1 bg-white border border-gray-200 rounded-2xl px-5 py-4 font-bold" autoCapitalize="none"/>
          <react_native_1.TouchableOpacity className="bg-indigo-600 px-6 py-4 rounded-2xl justify-center">
            <react_native_1.Text className="text-white font-black">LIER</react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
      </react_native_1.View>

      <react_native_1.View className="bg-white rounded-[32px] border border-gray-100 p-8 items-center justify-center">
         <lucide_react_native_1.Globe size={48} color="#e2e8f0"/>
         <react_native_1.Text className="text-gray-400 font-bold mt-4">Aucun domaine lié pour le moment</react_native_1.Text>
      </react_native_1.View>
    </react_native_1.ScrollView>);
}
