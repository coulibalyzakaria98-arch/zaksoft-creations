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
exports.NotificationsProvider = NotificationsProvider;
var react_native_1 = require("react-native");
var react_1 = require("react");
var notifications_1 = require("../services/notifications");
var useAuth_1 = require("../hooks/useAuth");
var lucide_react_native_1 = require("lucide-react-native");
function NotificationsProvider(_a) {
    var _this = this;
    var children = _a.children;
    var user = (0, useAuth_1.useAuth)().user;
    var _b = (0, react_1.useState)([]), notifications = _b[0], setNotifications = _b[1];
    var _c = (0, react_1.useState)(0), unreadCount = _c[0], setUnreadCount = _c[1];
    var _d = (0, react_1.useState)(false), modalVisible = _d[0], setModalVisible = _d[1];
    (0, react_1.useEffect)(function () {
        if (user) {
            fetchNotifications();
            var interval_1 = setInterval(fetchNotifications, 60000);
            return function () { return clearInterval(interval_1); };
        }
    }, [user]);
    var fetchNotifications = function () { return __awaiter(_this, void 0, void 0, function () {
        var data, count, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, notifications_1.notificationService.getNotifications(user.id)];
                case 2:
                    data = _a.sent();
                    setNotifications(data);
                    return [4 /*yield*/, notifications_1.notificationService.getUnreadCount(user.id)];
                case 3:
                    count = (_a.sent()).count;
                    setUnreadCount(count);
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.error('Failed to fetch notifications', e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var getIcon = function (type) {
        switch (type) {
            case 'JOB_COMPLETED': return <lucide_react_native_1.CheckCircle size={20} color="#10b981"/>;
            case 'JOB_FAILED': return <lucide_react_native_1.AlertCircle size={20} color="#ef4444"/>;
            case 'TEAM_INVITE': return <lucide_react_native_1.Users size={20} color="#4f46e5"/>;
            default: return <lucide_react_native_1.Zap size={20} color="#f59e0b"/>;
        }
    };
    return (<react_native_1.View className="flex-1">
      {/* Global Notification Trigger (usually placed in header) */}
      <react_native_1.View className="absolute top-12 right-6 z-50">
        <react_native_1.TouchableOpacity onPress={function () { return setModalVisible(true); }} className="bg-white/90 p-3 rounded-2xl shadow-sm border border-gray-100">
          <lucide_react_native_1.Bell size={24} color="#1f2937"/>
          {unreadCount > 0 && (<react_native_1.View className="absolute -top-1 -right-1 bg-indigo-600 rounded-full w-5 h-5 items-center justify-center border-2 border-white">
              <react_native_1.Text className="text-white text-[10px] font-black">{unreadCount}</react_native_1.Text>
            </react_native_1.View>)}
        </react_native_1.TouchableOpacity>
      </react_native_1.View>

      <react_native_1.Modal visible={modalVisible} animationType="slide" presentationStyle="pageSheet" onRequestClose={function () { return setModalVisible(false); }}>
        <react_native_1.SafeAreaView className="flex-1 bg-white">
          <react_native_1.View className="flex-row justify-between items-center px-6 py-4 border-b border-gray-100">
            <react_native_1.Text className="text-2xl font-black text-gray-900">Notifications</react_native_1.Text>
            <react_native_1.TouchableOpacity onPress={function () { return setModalVisible(false); }}>
              <lucide_react_native_1.X size={24} color="#94a3b8"/>
            </react_native_1.TouchableOpacity>
          </react_native_1.View>
          
          <react_native_1.ScrollView className="flex-1 px-6 pt-4">
            {notifications.length === 0 ? (<react_native_1.View className="flex-1 items-center justify-center pt-20">
                <lucide_react_native_1.Bell size={64} color="#f1f5f9"/>
                <react_native_1.Text className="text-gray-400 font-bold mt-4">Aucune notification pour le moment</react_native_1.Text>
              </react_native_1.View>) : (notifications.map(function (notif) { return (<react_native_1.TouchableOpacity key={notif.id} className={"flex-row gap-4 p-5 rounded-3xl mb-4 border ".concat(notif.readAt ? 'bg-white border-gray-50' : 'bg-indigo-50/50 border-indigo-100')}>
                  <react_native_1.View className={"w-12 h-12 rounded-2xl items-center justify-center ".concat(notif.readAt ? 'bg-gray-50' : 'bg-white')}>
                    {getIcon(notif.type)}
                  </react_native_1.View>
                  <react_native_1.View className="flex-1">
                    <react_native_1.Text className="text-gray-900 font-bold text-base">{notif.title}</react_native_1.Text>
                    <react_native_1.Text className="text-gray-500 text-sm mt-1 leading-5">{notif.body}</react_native_1.Text>
                    <react_native_1.Text className="text-gray-400 text-[10px] font-bold uppercase mt-3 tracking-widest">
                      {new Date(notif.sentAt).toLocaleDateString()}
                    </react_native_1.Text>
                  </react_native_1.View>
                </react_native_1.TouchableOpacity>); }))}
          </react_native_1.ScrollView>
        </react_native_1.SafeAreaView>
      </react_native_1.Modal>

      {children}
    </react_native_1.View>);
}
