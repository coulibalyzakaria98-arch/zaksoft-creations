"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryPills = CategoryPills;
var react_native_1 = require("react-native");
var CATEGORIES = [
    { value: 'all', label: 'Tous', icon: '💎' },
    { value: 'image_prompt', label: 'Images', icon: '🎨' },
    { value: 'video_prompt', label: 'Vidéos', icon: '🎬' },
    { value: 'website_template', label: 'Sites Web', icon: '🌐' }
];
function CategoryPills(_a) {
    var selected = _a.selected, onSelect = _a.onSelect;
    return (<react_native_1.ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
      <react_native_1.View className="flex-row gap-2">
        {CATEGORIES.map(function (cat) { return (<react_native_1.TouchableOpacity key={cat.value} onPress={function () { return onSelect(cat.value); }} className={"px-6 py-2.5 rounded-full border transition-all ".concat(selected === cat.value ? 'bg-gray-900 border-gray-900' : 'bg-white border-gray-100')}>
            <react_native_1.Text className={"font-bold text-xs ".concat(selected === cat.value ? 'text-white' : 'text-gray-500')}>
              {cat.icon} {cat.label}
            </react_native_1.Text>
          </react_native_1.TouchableOpacity>); })}
      </react_native_1.View>
    </react_native_1.ScrollView>);
}
