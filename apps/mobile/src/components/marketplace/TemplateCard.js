"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateCard = TemplateCard;
var react_native_1 = require("react-native");
var expo_router_1 = require("expo-router");
var lucide_react_native_1 = require("lucide-react-native");
function TemplateCard(_a) {
    var template = _a.template;
    var getTypeIcon = function () {
        switch (template.type) {
            case 'image_prompt': return '🎨';
            case 'video_prompt': return '🎬';
            case 'website_template': return '🌐';
            default: return '📦';
        }
    };
    return (<react_native_1.TouchableOpacity onPress={function () { return expo_router_1.router.push("/marketplace/".concat(template.id)); }} className="bg-white rounded-3xl shadow-sm mb-6 overflow-hidden border border-gray-100 active:scale-[0.98] transition-all">
      <react_native_1.View className="aspect-[16/10] bg-gray-50 items-center justify-center relative">
        {template.thumbnail ? (<react_native_1.Image source={{ uri: template.thumbnail }} className="w-full h-full" resizeMode="cover"/>) : (<react_native_1.Text className="text-5xl opacity-20">{getTypeIcon()}</react_native_1.Text>)}
        <react_native_1.View className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          <react_native_1.Text className="text-[10px] font-bold text-gray-800 uppercase tracking-tighter">Par {template.author.email.split('@')[0]}</react_native_1.Text>
        </react_native_1.View>
      </react_native_1.View>

      <react_native_1.View className="p-5">
        <react_native_1.View className="flex-row justify-between items-start gap-2">
          <react_native_1.View className="flex-1">
            <react_native_1.Text className="font-extrabold text-gray-900 text-lg leading-tight" numberOfLines={1}>{template.name}</react_native_1.Text>
            <react_native_1.Text className="text-gray-400 text-xs mt-1 font-medium" numberOfLines={1}>
              {template.description || "Aucune description."}
            </react_native_1.Text>
          </react_native_1.View>
          <react_native_1.View className="bg-indigo-50 px-3 py-1.5 rounded-xl">
            <react_native_1.Text className="text-indigo-600 font-extrabold text-sm">
              {template.price === 0 ? 'OFFERT' : "".concat(template.price, " CR")}
            </react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>

        <react_native_1.View className="flex-row justify-between items-center mt-6">
          <react_native_1.View className="flex-row items-center gap-4">
            <react_native_1.View className="flex-row items-center gap-1.5">
              <lucide_react_native_1.Star size={16} color="#fbbf24" fill="#fbbf24"/>
              <react_native_1.Text className="text-gray-900 font-bold text-xs">{template.avgRating && template.avgRating > 0 ? template.avgRating.toFixed(1) : 'NEW'}</react_native_1.Text>
            </react_native_1.View>
            <react_native_1.View className="flex-row items-center gap-1.5">
              <lucide_react_native_1.Download size={16} color="#94a3b8"/>
              <react_native_1.Text className="text-gray-500 font-bold text-xs">{template._count.downloads}</react_native_1.Text>
            </react_native_1.View>
          </react_native_1.View>
          
          <react_native_1.View className="bg-gray-900 px-6 py-2.5 rounded-2xl">
            <react_native_1.Text className="text-white text-xs font-extrabold uppercase tracking-widest">Détails</react_native_1.Text>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.TouchableOpacity>);
}
