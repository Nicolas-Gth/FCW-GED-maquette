window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewAudit = `
<section id="view-audit" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
            <div class="px-6 py-4 bg-gray-50 border-b border-gray-200">
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
                                <label class="ms-option"><input type="checkbox" value="REVOKE" onchange="msUpdate(this); applyAuditFilters()"> Révocation</label>
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
                                <label class="ms-option"><input type="checkbox" value="ACCESS_POLICY" onchange="msUpdate(this); applyAuditFilters()"> Politique d'accès</label>
                                <label class="ms-option"><input type="checkbox" value="NOMINATIVE_ACCESS" onchange="msUpdate(this); applyAuditFilters()"> Accès nominatif</label>
                                <label class="ms-option"><input type="checkbox" value="INVITATION" onchange="msUpdate(this); applyAuditFilters()"> Invitation</label>
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
                <tbody id="audit-tbody" class="divide-y divide-gray-200"></tbody>
            </table>
            </div>
        </div>
    </div>
</section>
`;
