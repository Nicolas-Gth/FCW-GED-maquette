window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewAudit = `
<section id="view-audit" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <!-- FILTRES -->
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
            <div class="flex flex-wrap gap-3 items-end">
                <div class="flex-1 min-w-[220px]">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Recherche</label>
                    <div class="search-box">
                        <svg class="search-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" /></svg>
                        <input id="audit-search" type="text" oninput="applyAuditFilters()" placeholder="Utilisateur, action, description..." class="input input-search w-full">
                    </div>
                </div>
                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Action</label>
                                        <div id="audit-filter-action" class="multi-select" data-placeholder="Toutes">
                        <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                            <span class="ms-value">Toutes</span>
                            <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                        <div class="multi-select-panel hidden-view">
                            <label class="ms-option"><input type="checkbox" value="VIEW" onchange="msUpdate(this); applyAuditFilters()"> Consultation</label>
                            <label class="ms-option"><input type="checkbox" value="CREATE" onchange="msUpdate(this); applyAuditFilters()"> Création</label>
                            <label class="ms-option"><input type="checkbox" value="UPDATE" onchange="msUpdate(this); applyAuditFilters()"> Mise à jour</label>
                            <label class="ms-option"><input type="checkbox" value="DELETE" onchange="msUpdate(this); applyAuditFilters()"> Suppression</label>
                            <label class="ms-option"><input type="checkbox" value="DOWNLOAD" onchange="msUpdate(this); applyAuditFilters()"> Téléchargement</label>
                            <label class="ms-option"><input type="checkbox" value="LOGIN" onchange="msUpdate(this); applyAuditFilters()"> Connexion</label>
                        </div>
                    </div>
                </div>
                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Cible</label>
                                        <div id="audit-filter-type" class="multi-select" data-placeholder="Toutes">
                        <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                            <span class="ms-value">Toutes</span>
                            <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                        <div class="multi-select-panel hidden-view">
                            <label class="ms-option"><input type="checkbox" value="DOCUMENT" onchange="msUpdate(this); applyAuditFilters()"> Document</label>
                            <label class="ms-option"><input type="checkbox" value="ACCOUNT" onchange="msUpdate(this); applyAuditFilters()"> Compte</label>
                            <label class="ms-option"><input type="checkbox" value="ROLE" onchange="msUpdate(this); applyAuditFilters()"> Rôle</label>
                            <label class="ms-option"><input type="checkbox" value="LABEL" onchange="msUpdate(this); applyAuditFilters()"> Libellé</label>
                        </div>
                    </div>
                </div>
                <div class="w-40">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">À partir du</label>
                    <input id="audit-date-from" type="date" onchange="applyAuditFilters()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-white">
                </div>
                <div class="w-40">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Jusqu'au</label>
                    <input id="audit-date-to" type="date" onchange="applyAuditFilters()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none bg-white">
                </div>
                <button onclick="resetAuditFilters()" class="btn btn-outline-danger">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" />
  <path d="m16.5 3.5 5 5" />
  <path d="m21.5 3.5-5 5" /></svg>
                    Réinitialiser les filtres
                </button>
            </div>
        </div>

        <p id="audit-count" class="text-sm text-gray-600 mb-4">8 actions</p>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
            
            <div class="flex-1 overflow-y-auto min-h-0">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
                <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Date / Heure <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Utilisateur <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Action <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Cible <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 4)">Description <span class="sort-indicator"></span></th>
                    </tr>
                </thead>
                <tbody id="audit-tbody" class="divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260824164212" data-sort1="philippe dumont" data-sort2="consultation" data-sort3="document" data-sort4="a consulté compte rendu ca mars 2026" data-action="VIEW" data-type="DOCUMENT" data-date="20260824" data-text="24/08/2026 16:42:12 philippe dumont consultation document a consulté compte rendu ca mars 2026">
                        <td class="px-6 py-4 text-gray-500">24/08/2026 - 16:42:12</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Philippe Dumont');" class="font-medium text-primary hover:underline">Philippe Dumont</button></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Consultation</span></td>
                        <td class="px-6 py-4 text-gray-500">Document</td>
                        <td class="px-6 py-4 text-gray-600">A consulté « Compte Rendu CA Mars 2026 »</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260824151005" data-sort1="marc lemoine" data-sort2="création" data-sort3="account" data-sort4="a invité sophie durant avec le rôle auditeur externe" data-action="CREATE" data-type="ACCOUNT" data-date="20260824" data-text="24/08/2026 15:10:05 marc lemoine création account a invité sophie durant avec le rôle auditeur externe">
                        <td class="px-6 py-4 text-gray-500">24/08/2026 - 15:10:05</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Marc Lemoine');" class="font-medium text-primary hover:underline">Marc Lemoine</button></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Création</span></td>
                        <td class="px-6 py-4 text-gray-500">Compte</td>
                        <td class="px-6 py-4 text-gray-600">A invité « Sophie Durant » avec le rôle Auditeur externe</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260824090347" data-sort1="sophie durant" data-sort2="téléchargement" data-sort3="document" data-sort4="a téléchargé bilan financier annuel 2025" data-action="DOWNLOAD" data-type="DOCUMENT" data-date="20260824" data-text="24/08/2026 09:03:47 sophie durant téléchargement document a téléchargé bilan financier annuel 2025">
                        <td class="px-6 py-4 text-gray-500">24/08/2026 - 09:03:47</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Sophie Durant');" class="font-medium text-primary hover:underline">Sophie Durant</button></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Téléchargement</span></td>
                        <td class="px-6 py-4 text-gray-500">Document</td>
                        <td class="px-6 py-4 text-gray-600">A téléchargé « Bilan Financier Annuel 2025 »</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260823172533" data-sort1="philippe dumont" data-sort2="mise à jour" data-sort3="label" data-sort4="a modifié le libellé pv ordre d affichage 20 vers 30" data-action="UPDATE" data-type="LABEL" data-date="20260823" data-text="23/08/2026 17:25:33 philippe dumont mise à jour label a modifié le libellé pv ordre d affichage 20 vers 30">
                        <td class="px-6 py-4 text-gray-500">23/08/2026 - 17:25:33</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Philippe Dumont');" class="font-medium text-primary hover:underline">Philippe Dumont</button></td>
                        <td class="px-6 py-4"><span class="badge badge-orange">Mise à jour</span></td>
                        <td class="px-6 py-4 text-gray-500">Libellé</td>
                        <td class="px-6 py-4 text-gray-600">A modifié le libellé « PV » (ordre d'affichage: 20 → 30)</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260823091200" data-sort1="système sso" data-sort2="connexion" data-sort3="account" data-sort4="connexion réussie via microsoft entra id ip 192 168 1 10" data-action="LOGIN" data-type="ACCOUNT" data-date="20260823" data-text="23/08/2026 09:12:00 système sso connexion account connexion réussie via microsoft entra id ip 192 168 1 10">
                        <td class="px-6 py-4 text-gray-500">23/08/2026 - 09:12:00</td>
                        <td class="px-6 py-4 font-medium text-gray-900">Système (SSO)</td>
                        <td class="px-6 py-4"><span class="badge badge-success">Connexion</span></td>
                        <td class="px-6 py-4 text-gray-500">Compte</td>
                        <td class="px-6 py-4 text-gray-600">Connexion réussie via Microsoft Entra ID (IP: 192.168.1.10)</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260822144011" data-sort1="jean dupont" data-sort2="consultation" data-sort3="document" data-sort4="a consulté rapport annuel 2025" data-action="VIEW" data-type="DOCUMENT" data-date="20260822" data-text="22/08/2026 14:40:11 jean dupont consultation document a consulté rapport annuel 2025">
                        <td class="px-6 py-4 text-gray-500">22/08/2026 - 14:40:11</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Jean Dupont');" class="font-medium text-primary hover:underline">Jean Dupont</button></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Consultation</span></td>
                        <td class="px-6 py-4 text-gray-500">Document</td>
                        <td class="px-6 py-4 text-gray-600">A consulté « Rapport Annuel 2025 »</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260822110552" data-sort1="philippe dumont" data-sort2="création" data-sort3="role" data-sort4="a créé le rôle partenaire externe cge" data-action="CREATE" data-type="ROLE" data-date="20260822" data-text="22/08/2026 11:05:52 philippe dumont création role a créé le rôle partenaire externe cge">
                        <td class="px-6 py-4 text-gray-500">22/08/2026 - 11:05:52</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Philippe Dumont');" class="font-medium text-primary hover:underline">Philippe Dumont</button></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Création</span></td>
                        <td class="px-6 py-4 text-gray-500">Rôle</td>
                        <td class="px-6 py-4 text-gray-600">A créé le rôle « Partenaire externe CGE »</td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors" data-sort0="20260821163308" data-sort1="marie bernard" data-sort2="suppression" data-sort3="document" data-sort4="a supprimé note interne v1 soft delete" data-action="DELETE" data-type="DOCUMENT" data-date="20260821" data-text="21/08/2026 16:33:08 marie bernard suppression document a supprimé note interne v1 soft delete">
                        <td class="px-6 py-4 text-gray-500">21/08/2026 - 16:33:08</td>
                        <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Marie Bernard');" class="font-medium text-primary hover:underline">Marie Bernard</button></td>
                        <td class="px-6 py-4"><span class="badge badge-danger">Suppression</span></td>
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
    </div>
</section>
`;
