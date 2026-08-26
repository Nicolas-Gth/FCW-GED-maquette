window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewAudit = `
<section id="view-audit" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">

        <!-- FILTRES -->
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
            <div class="flex flex-wrap gap-3 items-end">
                <div class="flex-1 min-w-[220px]">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Recherche</label>
                    <input id="audit-search" type="text" oninput="applyAuditFilters()" placeholder="Utilisateur, action, description..." class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                </div>
                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Action</label>
                    <select id="audit-filter-action" onchange="applyAuditFilters()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                        <option value="ALL">Toutes</option>
                        <option value="VIEW">Consultation</option>
                        <option value="CREATE">Création</option>
                        <option value="UPDATE">Mise à jour</option>
                        <option value="DELETE">Suppression</option>
                        <option value="DOWNLOAD">Téléchargement</option>
                        <option value="LOGIN">Connexion</option>
                    </select>
                </div>
                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Cible</label>
                    <select id="audit-filter-type" onchange="applyAuditFilters()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                        <option value="ALL">Tous</option>
                        <option value="DOCUMENT">Document</option>
                        <option value="ACCOUNT">Compte</option>
                        <option value="ROLE">Rôle</option>
                        <option value="LABEL">Libellé</option>
                    </select>
                </div>
                <div class="w-40">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Du</label>
                    <input id="audit-date-from" type="date" onchange="applyAuditFilters()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-white">
                </div>
                <div class="w-40">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Au</label>
                    <input id="audit-date-to" type="date" onchange="applyAuditFilters()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-white">
                </div>
                <button onclick="resetAuditFilters()" class="text-gray-500 hover:underline text-sm font-medium">
                    Réinitialiser
                </button>
            </div>
        </div>

        <p id="audit-count" class="text-sm text-gray-600 mb-4">8 actions</p>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table class="w-full text-left text-sm whitespace-nowrap">
                <thead class="bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Date / Heure <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Utilisateur <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Action <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Cible <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 4)">Description <span class="sort-indicator"></span></th>
                    </tr>
                </thead>
                <tbody id="audit-tbody" class="divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260824164212" data-sort1="jean dupont" data-sort2="consultation" data-sort3="document" data-sort4="a consulté compte rendu ca mars 2026" data-action="VIEW" data-type="DOCUMENT" data-date="20260824" data-text="24/08/2026 16:42:12 jean dupont consultation document a consulté compte rendu ca mars 2026">
                        <td class="px-6 py-4 text-gray-500">24/08/2026 - 16:42:12</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Jean Dupont');" class="font-medium text-primary hover:underline">Jean Dupont</button></td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs font-bold">Consultation</span></td>
                        <td class="px-6 py-4 text-gray-500">Document</td>
                        <td class="px-6 py-4 text-gray-600">A consulté « Compte Rendu CA Mars 2026 »</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260824151005" data-sort1="marc lemoine" data-sort2="création" data-sort3="account" data-sort4="a invité sophie durant avec le rôle auditeur externe" data-action="CREATE" data-type="ACCOUNT" data-date="20260824" data-text="24/08/2026 15:10:05 marc lemoine création account a invité sophie durant avec le rôle auditeur externe">
                        <td class="px-6 py-4 text-gray-500">24/08/2026 - 15:10:05</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Marc Lemoine');" class="font-medium text-primary hover:underline">Marc Lemoine</button></td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs font-bold">Création</span></td>
                        <td class="px-6 py-4 text-gray-500">Compte</td>
                        <td class="px-6 py-4 text-gray-600">A invité « Sophie Durant » avec le rôle Auditeur externe</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260824090347" data-sort1="sophie durant" data-sort2="téléchargement" data-sort3="document" data-sort4="a téléchargé bilan financier annuel 2025" data-action="DOWNLOAD" data-type="DOCUMENT" data-date="20260824" data-text="24/08/2026 09:03:47 sophie durant téléchargement document a téléchargé bilan financier annuel 2025">
                        <td class="px-6 py-4 text-gray-500">24/08/2026 - 09:03:47</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Sophie Durant');" class="font-medium text-primary hover:underline">Sophie Durant</button></td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs font-bold">Téléchargement</span></td>
                        <td class="px-6 py-4 text-gray-500">Document</td>
                        <td class="px-6 py-4 text-gray-600">A téléchargé « Bilan Financier Annuel 2025 »</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260823172533" data-sort1="jean dupont" data-sort2="mise à jour" data-sort3="label" data-sort4="a modifié le libellé pv ordre d affichage 20 vers 30" data-action="UPDATE" data-type="LABEL" data-date="20260823" data-text="23/08/2026 17:25:33 jean dupont mise à jour label a modifié le libellé pv ordre d affichage 20 vers 30">
                        <td class="px-6 py-4 text-gray-500">23/08/2026 - 17:25:33</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Jean Dupont');" class="font-medium text-primary hover:underline">Jean Dupont</button></td>
                        <td class="px-6 py-4"><span class="bg-warning text-dark px-2 py-1 rounded text-xs font-bold">Mise à jour</span></td>
                        <td class="px-6 py-4 text-gray-500">Libellé</td>
                        <td class="px-6 py-4 text-gray-600">A modifié le libellé « PV » (ordre d'affichage: 20 → 30)</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260823091200" data-sort1="système sso" data-sort2="connexion" data-sort3="account" data-sort4="connexion réussie via microsoft entra id ip 192 168 1 10" data-action="LOGIN" data-type="ACCOUNT" data-date="20260823" data-text="23/08/2026 09:12:00 système sso connexion account connexion réussie via microsoft entra id ip 192 168 1 10">
                        <td class="px-6 py-4 text-gray-500">23/08/2026 - 09:12:00</td>
                        <td class="px-6 py-4 font-medium text-gray-900">Système (SSO)</td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs font-bold">Connexion</span></td>
                        <td class="px-6 py-4 text-gray-500">Compte</td>
                        <td class="px-6 py-4 text-gray-600">Connexion réussie via Microsoft Entra ID (IP: 192.168.1.10)</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260822144011" data-sort1="philippe dumont" data-sort2="consultation" data-sort3="document" data-sort4="a consulté rapport annuel 2025" data-action="VIEW" data-type="DOCUMENT" data-date="20260822" data-text="22/08/2026 14:40:11 philippe dumont consultation document a consulté rapport annuel 2025">
                        <td class="px-6 py-4 text-gray-500">22/08/2026 - 14:40:11</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Philippe Dumont');" class="font-medium text-primary hover:underline">Philippe Dumont</button></td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs font-bold">Consultation</span></td>
                        <td class="px-6 py-4 text-gray-500">Document</td>
                        <td class="px-6 py-4 text-gray-600">A consulté « Rapport Annuel 2025 »</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260822110552" data-sort1="jean dupont" data-sort2="création" data-sort3="role" data-sort4="a créé le rôle partenaire externe cge" data-action="CREATE" data-type="ROLE" data-date="20260822" data-text="22/08/2026 11:05:52 jean dupont création role a créé le rôle partenaire externe cge">
                        <td class="px-6 py-4 text-gray-500">22/08/2026 - 11:05:52</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Jean Dupont');" class="font-medium text-primary hover:underline">Jean Dupont</button></td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs font-bold">Création</span></td>
                        <td class="px-6 py-4 text-gray-500">Rôle</td>
                        <td class="px-6 py-4 text-gray-600">A créé le rôle « Partenaire externe CGE »</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260821163308" data-sort1="marie bernard" data-sort2="suppression" data-sort3="document" data-sort4="a supprimé note interne v1 soft delete" data-action="DELETE" data-type="DOCUMENT" data-date="20260821" data-text="21/08/2026 16:33:08 marie bernard suppression document a supprimé note interne v1 soft delete">
                        <td class="px-6 py-4 text-gray-500">21/08/2026 - 16:33:08</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Marie Bernard');" class="font-medium text-primary hover:underline">Marie Bernard</button></td>
                        <td class="px-6 py-4"><span class="bg-danger text-white px-2 py-1 rounded text-xs font-bold">Suppression</span></td>
                        <td class="px-6 py-4 text-gray-500">Document</td>
                        <td class="px-6 py-4 text-gray-600">A supprimé « Note interne v1 » (soft delete)</td>
                    </tr>
                    <tr id="audit-empty" class="empty-row hidden-view">
                        <td colspan="5" class="px-6 py-10 text-center text-gray-500">Aucune action ne correspond à vos filtres.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
`;
