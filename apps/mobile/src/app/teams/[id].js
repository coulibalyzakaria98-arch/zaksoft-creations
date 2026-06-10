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
exports.default = TeamDetailScreen;
var react_native_1 = require("react-native");
var expo_router_1 = require("expo-router");
var react_1 = require("react");
var teamsApi_1 = require("../../services/teamsApi");
var useAuth_1 = require("../../hooks/useAuth");
var lucide_react_native_1 = require("lucide-react-native");
function TeamDetailScreen() {
    var _this = this;
    var _a, _b, _c;
    var id = (0, expo_router_1.useLocalSearchParams)().id;
    var _d = (0, react_1.useState)(null), team = _d[0], setTeam = _d[1];
    var _e = (0, react_1.useState)(null), stats = _e[0], setStats = _e[1];
    var _f = (0, react_1.useState)([]), activities = _f[0], setActivities = _f[1];
    var _g = (0, react_1.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0, react_1.useState)(false), refreshing = _h[0], setRefreshing = _h[1];
    var user = (0, useAuth_1.useAuth)().user;
    var fetchTeamData = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, teamData, statsData, activitiesData, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, Promise.all([
                            teamsApi_1.teamsService.getTeam(id),
                            // Adding these to teamsService would be better, but assuming they exist
                            fetch("".concat(process.env.EXPO_PUBLIC_TEAMS_API_URL, "/teams/").concat(id, "/dashboard/stats"), { headers: { 'x-user-id': (user === null || user === void 0 ? void 0 : user.id) || '' } }).then(function (r) { return r.json(); }),
                            fetch("".concat(process.env.EXPO_PUBLIC_TEAMS_API_URL, "/teams/").concat(id, "/activity"), { headers: { 'x-user-id': (user === null || user === void 0 ? void 0 : user.id) || '' } }).then(function (r) { return r.json(); })
                        ])];
                case 1:
                    _a = _b.sent(), teamData = _a[0], statsData = _a[1], activitiesData = _a[2];
                    setTeam(teamData);
                    setStats(statsData);
                    setActivities(activitiesData);
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _b.sent();
                    console.error('Failed to fetch team data:', error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setLoading(false);
                    setRefreshing(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [id, user]);
    (0, react_1.useEffect)(function () {
        if (id && user)
            fetchTeamData();
    }, [id, user, fetchTeamData]);
    var onRefresh = function () {
        setRefreshing(true);
        fetchTeamData();
    };
    var getRoleIcon = function (role) {
        switch (role) {
            case 'OWNER': return <lucide_react_native_1.Crown size={14} color="#f59e0b" fill="#f59e0b"/>;
            case 'ADMIN': return <lucide_react_native_1.Shield size={14} color="#4f46e5" fill="#4f46e5"/>;
            default: return <lucide_react_native_1.Users size={14} color="#94a3b8"/>;
        }
    };
    if (loading)
        return <react_native_1.View className="flex-1 justify-center items-center bg-white"><react_native_1.ActivityIndicator size="large" color="#4f46e5"/></react_native_1.View>;
    return (<react_native_1.View className="flex-1 bg-white">
      <react_native_1.ScrollView className="flex-1" showsVerticalScrollIndicator={false} refreshControl={<react_native_1.RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#4f46e5"/>}>
        {/* Header Section */}
        <react_native_1.View className="bg-gray-900 pt-16 pb-12 px-8 rounded-b-[48px]">
          <react_native_1.Text className="text-indigo-400 font-black text-xs uppercase tracking-[4px] mb-2">Espace d'équipe</react_native_1.Text>
          <react_native_1.Text className="text-white text-4xl font-black tracking-tight">{team.name}</react_native_1.Text>
          <react_native_1.Text className="text-gray-400 font-medium mt-2 leading-5">{team.description || "Aucune description fournie pour cette organisation."}</react_native_1.Text>
          
          <react_native_1.View className="flex-row items-center gap-6 mt-8">
             <react_native_1.View className="flex-row items-center gap-2">
                <lucide_react_native_1.Users size={16} color="#6366f1"/>
                <react_native_1.Text className="text-white font-bold text-sm">{((_a = team.members) === null || _a === void 0 ? void 0 : _a.length) || 0} Membres</react_native_1.Text>
             </react_native_1.View>
             <react_native_1.View className="flex-row items-center gap-2">
                <lucide_react_native_1.FolderKanban size={16} color="#6366f1"/>
                <react_native_1.Text className="text-white font-bold text-sm">{((_b = team.projects) === null || _b === void 0 ? void 0 : _b.length) || 0} Projets</react_native_1.Text>
             </react_native_1.View>
          </react_native_1.View>
        </react_native_1.View>

        {/* Stats Grid */}
        <react_native_1.View className="px-8 -mt-8">
           <react_native_1.View className="bg-white rounded-[32px] shadow-xl shadow-gray-200 border border-gray-50 p-6 flex-row justify-between">
              <react_native_1.View className="items-center flex-1">
                 <react_native_1.Text className="text-gray-900 font-black text-2xl">{(stats === null || stats === void 0 ? void 0 : stats.projects) || 0}</react_native_1.Text>
                 <react_native_1.Text className="text-gray-400 font-bold text-[10px] uppercase mt-1">Projets</react_native_1.Text>
              </react_native_1.View>
              <react_native_1.View className="w-[1px] h-10 bg-gray-100 self-center"/>
              <react_native_1.View className="items-center flex-1">
                 <react_native_1.Text className="text-gray-900 font-black text-2xl">{(stats === null || stats === void 0 ? void 0 : stats.totalCredits) || 0}</react_native_1.Text>
                 <react_native_1.Text className="text-gray-400 font-bold text-[10px] uppercase mt-1">Crédits</react_native_1.Text>
              </react_native_1.View>
              <react_native_1.View className="w-[1px] h-10 bg-gray-100 self-center"/>
              <react_native_1.View className="items-center flex-1">
                 <react_native_1.View className="flex-row items-center gap-1">
                    <lucide_react_native_1.TrendingUp size={12} color="#10b981"/>
                    <react_native_1.Text className="text-emerald-500 font-black text-2xl">+{Math.round((stats === null || stats === void 0 ? void 0 : stats.activityGrowth) || 0)}%</react_native_1.Text>
                 </react_native_1.View>
                 <react_native_1.Text className="text-gray-400 font-bold text-[10px] uppercase mt-1">Croissance</react_native_1.Text>
              </react_native_1.View>
           </react_native_1.View>
        </react_native_1.View>

        {/* Action Center */}
        <react_native_1.View className="p-8">
           <react_native_1.Text className="text-gray-900 font-black text-xl mb-6">Centre d'Action</react_native_1.Text>
           <react_native_1.View className="flex-row gap-4">
              <react_native_1.TouchableOpacity className="flex-1 bg-indigo-50 border border-indigo-100 p-6 rounded-[32px] items-center">
                 <react_native_1.View className="bg-indigo-600 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                    <lucide_react_native_1.Mail size={24} color="white"/>
                 </react_native_1.View>
                 <react_native_1.Text className="text-indigo-900 font-bold">Inviter</react_native_1.Text>
              </react_native_1.TouchableOpacity>
              
              <react_native_1.TouchableOpacity className="flex-1 bg-gray-50 border border-gray-100 p-6 rounded-[32px] items-center">
                 <react_native_1.View className="bg-gray-900 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                    <lucide_react_native_1.Plus size={24} color="white"/>
                 </react_native_1.View>
                 <react_native_1.Text className="text-gray-900 font-bold">Projet</react_native_1.Text>
              </react_native_1.TouchableOpacity>
           </react_native_1.View>
        </react_native_1.View>

        {/* Member List */}
        <react_native_1.View className="px-8 mb-10">
           <react_native_1.View className="flex-row justify-between items-center mb-6">
              <react_native_1.Text className="text-gray-900 font-black text-xl">Membres</react_native_1.Text>
              <react_native_1.TouchableOpacity><react_native_1.Text className="text-indigo-600 font-bold text-sm">Voir tout</react_native_1.Text></react_native_1.TouchableOpacity>
           </react_native_1.View>
           {(_c = team.members) === null || _c === void 0 ? void 0 : _c.slice(0, 3).map(function (member) { return (<react_native_1.View key={member.id} className="flex-row items-center justify-between bg-gray-50 p-4 rounded-2xl mb-3">
                <react_native_1.View className="flex-row items-center gap-3">
                   <react_native_1.View className="w-10 h-10 bg-indigo-100 rounded-full items-center justify-center">
                      <react_native_1.Text className="text-indigo-600 font-bold">{member.user.email.charAt(0).toUpperCase()}</react_native_1.Text>
                   </react_native_1.View>
                   <react_native_1.View>
                      <react_native_1.Text className="text-gray-900 font-bold text-sm">{member.user.email.split('@')[0]}</react_native_1.Text>
                      <react_native_1.Text className="text-gray-400 text-[10px] font-bold uppercase">{member.role}</react_native_1.Text>
                   </react_native_1.View>
                </react_native_1.View>
                {getRoleIcon(member.role)}
             </react_native_1.View>); })}
        </react_native_1.View>

        {/* Recent Activity */}
        <react_native_1.View className="px-8 pb-20">
           <react_native_1.Text className="text-gray-900 font-black text-xl mb-6">Activité Récente</react_native_1.Text>
           {activities.length > 0 ? activities.map(function (activity) { return (<react_native_1.View key={activity.id} className="flex-row gap-4 mb-6">
                <react_native_1.View className="items-center">
                   <react_native_1.View className="w-2 h-2 bg-indigo-600 rounded-full mt-2"/>
                   <react_native_1.View className="w-[1px] flex-1 bg-gray-200 my-2"/>
                </react_native_1.View>
                <react_native_1.View className="flex-1 bg-white border border-gray-100 p-5 rounded-[24px] shadow-sm">
                   <react_native_1.Text className="text-gray-900 font-bold text-sm">
                      <react_native_1.Text className="text-indigo-600">{activity.user.email.split('@')[0]}</react_native_1.Text> {activity.action.replace('_', ' ')}
                   </react_native_1.Text>
                   <react_native_1.Text className="text-gray-400 text-[10px] font-bold mt-2 uppercase">{new Date(activity.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</react_native_1.Text>
                </react_native_1.View>
             </react_native_1.View>); }) : (<react_native_1.View className="bg-gray-50 p-10 rounded-[32px] items-center">
                <lucide_react_native_1.Activity size={32} color="#cbd5e1"/>
                <react_native_1.Text className="text-gray-400 font-bold mt-4">Aucun mouvement détecté</react_native_1.Text>
             </react_native_1.View>)}
        </react_native_1.View>
      </react_native_1.ScrollView>
    </react_native_1.View>);
}
