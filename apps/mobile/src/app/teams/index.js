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
exports.default = TeamsScreen;
var react_native_1 = require("react-native");
var react_1 = require("react");
var teamsApi_1 = require("../../services/teamsApi");
var lucide_react_native_1 = require("lucide-react-native");
var expo_router_1 = require("expo-router");
function TeamsScreen() {
    var _this = this;
    var _a = (0, react_1.useState)([]), teams = _a[0], setTeams = _a[1];
    var _b = (0, react_1.useState)([]), invitations = _b[0], setInvitations = _b[1];
    var _c = (0, react_1.useState)(true), loading = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)(false), modalVisible = _d[0], setModalVisible = _d[1];
    var _e = (0, react_1.useState)(''), newTeamName = _e[0], setNewTeamName = _e[1];
    var _f = (0, react_1.useState)(false), creating = _f[0], setCreating = _f[1];
    (0, react_1.useEffect)(function () {
        refreshData();
    }, []);
    var refreshData = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, teamsData, invitationsData, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, Promise.all([
                            teamsApi_1.teamsService.getMyTeams(),
                            teamsApi_1.teamsService.getInvitations().catch(function () { return []; })
                        ])];
                case 2:
                    _a = _b.sent(), teamsData = _a[0], invitationsData = _a[1];
                    setTeams(teamsData);
                    setInvitations(invitationsData);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _b.sent();
                    console.error("Failed to refresh teams data", error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var createTeam = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!newTeamName.trim())
                        return [2 /*return*/];
                    setCreating(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, teamsApi_1.teamsService.createTeam({ name: newTeamName })];
                case 2:
                    _a.sent();
                    setModalVisible(false);
                    setNewTeamName('');
                    return [4 /*yield*/, refreshData()];
                case 3:
                    _a.sent();
                    react_native_1.Alert.alert('Succès', 'Équipe créée avec succès !');
                    return [3 /*break*/, 6];
                case 4:
                    error_2 = _a.sent();
                    react_native_1.Alert.alert('Erreur', 'Impossible de créer l\'équipe.');
                    return [3 /*break*/, 6];
                case 5:
                    setCreating(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var getRoleIcon = function (role) {
        switch (role) {
            case 'OWNER': return <lucide_react_native_1.Crown size={14} color="#f59e0b" fill="#f59e0b"/>;
            case 'ADMIN': return <lucide_react_native_1.Shield size={14} color="#4f46e5"/>;
            default: return <lucide_react_native_1.User size={14} color="#94a3b8"/>;
        }
    };
    return (<react_native_1.View className="flex-1 bg-gray-50">
      <react_native_1.View className="bg-white px-6 pt-6 pb-6 shadow-sm z-10 rounded-b-3xl">
        <react_native_1.View className="flex-row justify-between items-center">
          <react_native_1.View>
            <react_native_1.Text className="text-2xl font-extrabold text-gray-900 tracking-tight">Mes Équipes</react_native_1.Text>
            <react_native_1.Text className="text-gray-400 text-xs font-bold uppercase mt-1 tracking-widest">Espace Collaboratif</react_native_1.Text>
          </react_native_1.View>
          <react_native_1.TouchableOpacity onPress={function () { return setModalVisible(true); }} className="bg-indigo-600 w-12 h-12 rounded-2xl items-center justify-center shadow-lg shadow-indigo-100">
            <lucide_react_native_1.Plus size={24} color="white"/>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
      </react_native_1.View>

      <react_native_1.ScrollView className="flex-1" contentContainerStyle={{ padding: 24 }} showsVerticalScrollIndicator={false}>
        {/* Invitations Section */}
        {invitations.length > 0 && (<react_native_1.View className="mb-10">
            <react_native_1.Text className="text-gray-900 font-extrabold text-lg mb-4">Invitations en attente ({invitations.length})</react_native_1.Text>
            {invitations.map(function (inv) { return (<react_native_1.View key={inv.id} className="bg-white rounded-3xl p-6 mb-4 border border-indigo-100 shadow-sm">
                <react_native_1.View className="flex-row items-center gap-4 mb-4">
                   <react_native_1.View className="bg-indigo-50 w-12 h-12 rounded-2xl items-center justify-center">
                      <lucide_react_native_1.Users size={24} color="#4f46e5"/>
                   </react_native_1.View>
                   <react_native_1.View className="flex-1">
                      <react_native_1.Text className="font-extrabold text-gray-900 text-base">{inv.team.name}</react_native_1.Text>
                      <react_native_1.Text className="text-gray-400 text-xs font-medium">Invité par {inv.inviter.email}</react_native_1.Text>
                   </react_native_1.View>
                </react_native_1.View>
                <react_native_1.View className="flex-row gap-3">
                  <react_native_1.TouchableOpacity onPress={function () { return teamsApi_1.teamsService.acceptInvitation(inv.token).then(refreshData); }} className="flex-1 bg-indigo-600 py-3.5 rounded-2xl shadow-sm shadow-indigo-100">
                    <react_native_1.Text className="text-white text-center font-bold">Accepter</react_native_1.Text>
                  </react_native_1.TouchableOpacity>
                  <react_native_1.TouchableOpacity className="flex-1 bg-gray-50 py-3.5 rounded-2xl border border-gray-100">
                    <react_native_1.Text className="text-gray-500 text-center font-bold">Ignorer</react_native_1.Text>
                  </react_native_1.TouchableOpacity>
                </react_native_1.View>
              </react_native_1.View>); })}
          </react_native_1.View>)}
        
        {/* Teams List */}
        <react_native_1.Text className="text-gray-900 font-extrabold text-lg mb-6">Équipes Rejointes</react_native_1.Text>
        
        {loading ? (<react_native_1.ActivityIndicator color="#4f46e5" size="large" className="mt-10"/>) : teams.length === 0 ? (<react_native_1.View className="bg-white rounded-[40px] p-12 items-center border border-dashed border-gray-200">
            <react_native_1.View className="bg-gray-50 w-20 h-20 rounded-full items-center justify-center mb-6">
               <lucide_react_native_1.Users size={32} color="#cbd5e1"/>
            </react_native_1.View>
            <react_native_1.Text className="text-gray-900 font-bold text-lg">Aucune équipe</react_native_1.Text>
            <react_native_1.Text className="text-gray-400 text-center mt-2 text-sm leading-5">Créez votre propre équipe pour collaborer sur des projets IA avec vos collègues.</react_native_1.Text>
            <react_native_1.TouchableOpacity onPress={function () { return setModalVisible(true); }} className="mt-8 bg-gray-900 px-8 py-4 rounded-2xl">
               <react_native_1.Text className="text-white font-extrabold text-sm uppercase tracking-widest">Créer une équipe</react_native_1.Text>
            </react_native_1.TouchableOpacity>
          </react_native_1.View>) : (teams.map(function (team) {
            var _a;
            return (<react_native_1.TouchableOpacity key={team.id} onPress={function () { return expo_router_1.router.push("/teams/".concat(team.id)); }} className="bg-white rounded-3xl p-5 mb-4 shadow-sm border border-gray-100 flex-row justify-between items-center group active:scale-[0.98] transition-all">
              <react_native_1.View className="flex-row items-center gap-4 flex-1">
                <react_native_1.View className="w-14 h-14 bg-gray-50 rounded-2xl items-center justify-center">
                   {team.avatar ? (<Image source={{ uri: team.avatar }} className="w-full h-full rounded-2xl"/>) : (<react_native_1.Text className="text-xl font-black text-indigo-200">{team.name.charAt(0).toUpperCase()}</react_native_1.Text>)}
                </react_native_1.View>
                <react_native_1.View className="flex-1">
                  <react_native_1.View className="flex-row items-center gap-2">
                    <react_native_1.Text className="font-extrabold text-gray-900 text-lg leading-tight">{team.name}</react_native_1.Text>
                    <react_native_1.View className="bg-indigo-50 p-1 rounded-lg">
                       {getRoleIcon((_a = team.members[0]) === null || _a === void 0 ? void 0 : _a.role)}
                    </react_native_1.View>
                  </react_native_1.View>
                  <react_native_1.Text className="text-gray-400 text-xs font-bold mt-1 uppercase tracking-tighter">
                    {team._count.members} Membres • {team._count.projects} Projets
                  </react_native_1.Text>
                </react_native_1.View>
              </react_native_1.View>
              <react_native_1.View className="bg-gray-50 p-2 rounded-xl">
                 <lucide_react_native_1.ChevronRight size={20} color="#cbd5e1"/>
              </react_native_1.View>
            </react_native_1.TouchableOpacity>);
        }))}
      </react_native_1.ScrollView>
      
      {/* Create Team Modal */}
      <react_native_1.Modal visible={modalVisible} animationType="fade" transparent>
        <react_native_1.View className="flex-1 justify-center items-center bg-gray-900/60 p-6">
          <react_native_1.View className="bg-white rounded-[40px] p-8 w-full shadow-2xl">
            <react_native_1.View className="bg-indigo-100 w-16 h-16 rounded-3xl items-center justify-center mb-6">
               <lucide_react_native_1.Users size={32} color="#4f46e5"/>
            </react_native_1.View>
            <react_native_1.Text className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Nouvelle Équipe</react_native_1.Text>
            <react_native_1.Text className="text-gray-500 mb-8 text-sm font-medium">Donnez un nom inspirant à votre nouvel espace de collaboration.</react_native_1.Text>
            
            <react_native_1.TextInput placeholder="Nom de l'organisation" value={newTeamName} onChangeText={setNewTeamName} placeholderTextColor="#94a3b8" className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-8 text-gray-900 font-bold text-lg outline-none" autoFocus/>
            
            <react_native_1.View className="flex-row gap-4">
              <react_native_1.TouchableOpacity onPress={function () { return setModalVisible(false); }} className="flex-1 py-4 rounded-2xl items-center">
                <react_native_1.Text className="text-gray-400 font-bold">Annuler</react_native_1.Text>
              </react_native_1.TouchableOpacity>
              <react_native_1.TouchableOpacity onPress={createTeam} disabled={creating || !newTeamName.trim()} className="flex-[2] py-4 rounded-2xl bg-indigo-600 items-center shadow-lg shadow-indigo-200 disabled:opacity-50">
                {creating ? <react_native_1.ActivityIndicator color="white"/> : <react_native_1.Text className="text-white font-bold text-base">Lancer l'équipe</react_native_1.Text>}
              </react_native_1.TouchableOpacity>
            </react_native_1.View>
          </react_native_1.View>
        </react_native_1.View>
      </react_native_1.Modal>
    </react_native_1.View>);
}
