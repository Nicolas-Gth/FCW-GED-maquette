window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewUsers = `
<section id="view-users" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <!-- Onglets -->
        <div class="flex gap-2">
            <button type="button" onclick="switchUsersTab(this, 0)" class="label-tab label-tab-active">Utilisateurs</button>
            <button type="button" onclick="switchUsersTab(this, 1)" class="label-tab label-tab-inactive">Invitations</button>
            <button type="button" onclick="switchUsersTab(this, 2)" class="label-tab label-tab-inactive">Accès nominatifs</button>
        </div>

        <!-- ONGLET UTILISATEURS / INVITATIONS -->
        <div id="users-tab-panel" class="flex-1 flex flex-col min-h-0">
            <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
                <div id="users-topbar" class="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <div class="flex items-end gap-3">
                        <div class="flex-1 min-w-[220px]">
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Recherche</label>
                            <div class="search-box">
                                <svg class="search-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" /></svg>
                                <input id="user-search" type="text" oninput="filterUsers()" placeholder="Nom, prénom, email, permissions..." class="input input-search w-full">
                            </div>
                        </div>
                        <button onclick="toggleModal('modal-invite', true)" class="btn btn-primary">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="19" x2="19" y1="8" y2="14" />
  <line x1="22" x2="16" y1="11" y2="11" /></svg>
                            Ajouter un utilisateur
                        </button>
                    </div>
                </div>
                <div class="flex-1 overflow-y-auto min-h-0">
                <table class="data-table w-full text-left text-sm whitespace-nowrap">
                    <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                        <tr>
                            <th class="sortable px-6 py-4" onclick="sortTabTable(this, 0)">Nom <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTabTable(this, 1)">Prénom <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTabTable(this, 2)">Email <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4 col-users-perm" onclick="sortTabTable(this, 3)">Permissions générales <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4 col-users-access" onclick="sortTabTable(this, 4)">Accès <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4 col-users-type" onclick="sortTabTable(this, 5)">Type de compte <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4 col-invites-date hidden-view" onclick="sortTabTable(this, 6)">Date d'invitation <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTabTable(this, 7)">Statut <span class="sort-indicator"></span></th>
                        </tr>
                    </thead>
                    <tbody id="users-tbody" class="labels-tbody divide-y divide-gray-200"></tbody>
                    <tbody id="invites-tbody" class="labels-tbody divide-y divide-gray-200 hidden-view"></tbody>
                </table>
                </div>
            </div>
        </div>

        <!-- ONGLET ACCÈS NOMINATIFS -->
        <div id="accesses-tab-panel" class="hidden-view flex-1 flex flex-col min-h-0">
            <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
                <div id="na-filters-top" class="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <div class="flex flex-wrap gap-3 items-end">
                        <div class="flex-1 min-w-[220px]">
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Recherche</label>
                            <div class="search-box">
                                <svg class="search-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" /></svg>
                                <input id="na-search" type="text" oninput="filterNominativeAccesses()" placeholder="Document, utilisateur, accordé par..." class="input input-search w-full">
                            </div>
                        </div>
                        <div class="w-44">
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Statut</label>
                            <div id="na-status-filter" class="multi-select" data-placeholder="Tous">
                                <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                    <span class="ms-value">Tous</span>
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                <div class="multi-select-panel hidden-view">
                                    <label class="ms-option"><input type="checkbox" value="Actif" onchange="msUpdate(this); filterNominativeAccesses()"> Actif</label>
                                    <label class="ms-option"><input type="checkbox" value="Planifié" onchange="msUpdate(this); filterNominativeAccesses()"> Planifié</label>
                                    <label class="ms-option"><input type="checkbox" value="Expiré" onchange="msUpdate(this); filterNominativeAccesses()"> Expiré</label>
                                    <label class="ms-option"><input type="checkbox" value="Révoqué" onchange="msUpdate(this); filterNominativeAccesses()"> Révoqué</label>
                                </div>
                            </div>
                        </div>
                        <button onclick="resetNominativeAccessFilters()" class="btn btn-outline-danger">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" />
  <path d="m16.5 3.5 5 5" />
  <path d="m21.5 3.5-5 5" /></svg>
                            Réinitialiser les filtres
                        </button>
                    </div>
                </div>
                <div class="flex-1 overflow-y-auto min-h-0">
                <table class="data-table table-actions w-full text-left text-sm whitespace-nowrap">
                    <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                        <tr>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Document <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Utilisateur <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Privilèges accordés <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Période de validité <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 4)">Statut <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 5)">Accordé par <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 6)">Accordé le <span class="sort-indicator"></span></th>
                            <th class="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody id="na-tbody" class="divide-y divide-gray-200">
                        <tr class="hover:bg-primary-light transition-colors" data-status="Planifié" data-search="compte rendu ca mars 2026 sophie durant philippe dumont" data-sort0="compte rendu ca mars 2026" data-sort1="sophie durant" data-sort2="consulter" data-sort3="20260910" data-sort4="planifié" data-sort5="philippe dumont" data-sort6="20260824">
                            <td class="px-6 py-4 font-medium text-primary hover:underline cursor-pointer" data-role="na-doc" data-file="Compte Rendu CA Mars 2026.pdf" onclick="openNominativeDocument(this)">Compte Rendu CA Mars 2026</td>
                            <td class="px-6 py-4"><button onclick="openUserPopup('Sophie Durant');" class="font-medium text-primary hover:underline" data-role="na-user">Sophie Durant</button></td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Consulter</span></td>
                            <td class="px-6 py-4 text-gray-500">À partir du 10/09/2026</td>
                            <td class="px-6 py-4"><span class="badge badge-warning">Planifié</span></td>
                            <td class="px-6 py-4 text-gray-500">Philippe Dumont</td>
                            <td class="px-6 py-4 text-gray-500">24/08/2026</td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); openRevokeAccess(this)" title="Révoquer l'accès" class="na-revoke p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="17" x2="22" y1="8" y2="13" />
  <line x1="22" x2="17" y1="8" y2="13" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-status="Actif" data-search="rapport annuel 2025 sophie durant marc lemoine" data-sort0="rapport annuel 2025" data-sort1="sophie durant" data-sort2="consulter télécharger" data-sort3="20260101" data-sort4="actif" data-sort5="marc lemoine" data-sort6="20260115">
                            <td class="px-6 py-4 font-medium text-primary hover:underline cursor-pointer" data-role="na-doc" data-file="Rapport Annuel 2025.pdf" onclick="openNominativeDocument(this)">Rapport Annuel 2025</td>
                            <td class="px-6 py-4"><button onclick="openUserPopup('Sophie Durant');" class="font-medium text-primary hover:underline" data-role="na-user">Sophie Durant</button></td>
                            <td class="px-6 py-4">
                                <span class="badge badge-neutral me-1">Consulter</span>
                                <span class="badge badge-neutral">Télécharger</span>
                            </td>
                            <td class="px-6 py-4 text-gray-500">Du 01/01/2026 au 31/12/2026</td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                            <td class="px-6 py-4 text-gray-500">15/01/2026</td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); openRevokeAccess(this)" title="Révoquer l'accès" class="na-revoke p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <line x1="17" x2="22" y1="8" y2="13" />
  <line x1="22" x2="17" y1="8" y2="13" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-status="Actif" data-search="procès verbal ca avril 2026 marc lemoine philippe dumont" data-sort0="procès verbal ca avril 2026" data-sort1="marc lemoine" data-sort2="consulter modifier" data-sort3="permanente" data-sort4="actif" data-sort5="philippe dumont" data-sort6="20260418">
                            <td class="px-6 py-4 font-medium text-primary hover:underline cursor-pointer" data-role="na-doc" data-file="Procès Verbal CA Avril 2026.pdf" onclick="openNominativeDocument(this)">Procès Verbal CA Avril 2026</td>
                            <td class="px-6 py-4"><button onclick="openUserPopup('Marc Lemoine');" class="font-medium text-primary hover:underline" data-role="na-user">Marc Lemoine</button></td>
                            <td class="px-6 py-4">
                                <span class="badge badge-neutral me-1">Consulter</span>
                                <span class="badge badge-neutral">Modifier</span>
                            </td>
                            <td class="px-6 py-4 text-gray-500">Permanente</td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-gray-500">Philippe Dumont</td>
                            <td class="px-6 py-4 text-gray-500">18/04/2026</td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); openRevokeAccess(this)" title="Révoquer l'accès" class="na-revoke p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="17" x2="22" y1="8" y2="13" />
  <line x1="22" x2="17" y1="8" y2="13" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-status="Expiré" data-search="2026fcw024 pv oa fcw 09-04-2026 laurent petit julie stavrakas" data-sort0="2026fcw024 pv oa fcw 09-04-2026" data-sort1="laurent petit" data-sort2="consulter télécharger" data-sort3="20260531" data-sort4="expiré" data-sort5="julie stavrakas" data-sort6="20260502">
                            <td class="px-6 py-4 font-medium text-primary hover:underline cursor-pointer" data-role="na-doc" data-file="2026fcw024 - PV OA FCW du 09-04-2026.doc" onclick="openNominativeDocument(this)">2026fcw024 - PV OA FCW du 09-04-2026</td>
                            <td class="px-6 py-4"><button onclick="openUserPopup('Laurent Petit');" class="font-medium text-primary hover:underline" data-role="na-user">Laurent Petit</button></td>
                            <td class="px-6 py-4">
                                <span class="badge badge-neutral me-1">Consulter</span>
                                <span class="badge badge-neutral">Télécharger</span>
                            </td>
                            <td class="px-6 py-4 text-gray-500">Jusqu'au 31/05/2026</td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Expiré</span></td>
                            <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                            <td class="px-6 py-4 text-gray-500">02/05/2026</td>
                            <td class="px-6 py-4 text-right text-gray-500"></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-status="Révoqué" data-search="rapport annuel 2025 sophie durant philippe dumont" data-sort0="rapport annuel 2025" data-sort1="sophie durant" data-sort2="consulter" data-sort3="permanente" data-sort4="révoqué" data-sort5="philippe dumont" data-sort6="20260220">
                            <td class="px-6 py-4 font-medium text-primary hover:underline cursor-pointer" data-role="na-doc" data-file="Rapport Annuel 2025.pdf" onclick="openNominativeDocument(this)">Rapport Annuel 2025</td>
                            <td class="px-6 py-4"><button onclick="openUserPopup('Sophie Durant');" class="font-medium text-primary hover:underline" data-role="na-user">Sophie Durant</button></td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Consulter</span></td>
                            <td class="px-6 py-4 text-gray-500">Permanente</td>
                            <td class="px-6 py-4"><span class="badge badge-danger">Révoqué</span></td>
                            <td class="px-6 py-4 text-gray-500">Philippe Dumont</td>
                            <td class="px-6 py-4 text-gray-500">20/02/2026</td>
                            <td class="px-6 py-4 text-right text-gray-500"></td>
                        </tr>
                        <tr id="na-empty" class="empty-row hidden-view">
                            <td colspan="8" class="px-6 py-10 text-center text-gray-500">Aucun accès nominatif ne correspond à vos filtres.</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</section>
`;
