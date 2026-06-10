"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = SearchBar;
var react_native_1 = require("react-native");
var lucide_react_native_1 = require("lucide-react-native");
function SearchBar(_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.placeholder, placeholder = _b === void 0 ? "Rechercher une pépite..." : _b;
    return (<react_native_1.View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 border border-gray-100">
      <lucide_react_native_1.Search size={20} color="#94a3b8"/>
      <react_native_1.TextInput value={value} onChangeText={onChange} placeholder={placeholder} placeholderTextColor="#94a3b8" className="flex-1 ml-3 text-gray-800 font-medium"/>
      {value.length > 0 && (<react_native_1.TouchableOpacity onPress={function () { return onChange(''); }}>
          <lucide_react_native_1.X size={18} color="#94a3b8"/>
        </react_native_1.TouchableOpacity>)}
    </react_native_1.View>);
}
