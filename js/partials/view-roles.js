window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewRoles = `
<section id="view-roles" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <!-- Onglets -->
        <div class="flex gap-2">
            <button type="button" onclick="switchRolesTab(this, 0)" class="label-tab label-tab-active">Rôles</button>
            <button type="button" onclick="switchRolesTab(this, 1)" class="label-tab label-tab-inactive">Accès nominatifs</button>
        </div>

        <!-- ONGLET RÔLES -->
        <div id="roles-tab-panel" class="flex-1 flex flex-col min-h-0">

            <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">

                <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <p class="text-sm text-gray-600">5 rôles · <span class="text-gray-400">Un rôle ne peut être attribué que par un compte disposant de tous ses privilèges et de tous ses libellés.</span></p>
                    <div class="flex gap-3">
                        <button onclick="openAccessCheck()" class="btn btn-outline">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" /></svg>
                            Vérifier les accès
                        </button>
                        <button onclick="openRoleCreate()" class="btn btn-primary">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" />
  <path d="M12 5v14" /></svg>
                            Créer un rôle
                        </button>
                    </div>
                </div>                
                <div class="flex-1 overflow-y-auto min-h-0">
                <table class="data-table w-full text-left text-sm whitespace-nowrap">
                    <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                        <tr>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Rôle <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Utilisateurs <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Règles d'accès <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Statut <span class="sort-indicator"></span></th>
                            <th class="px-6 py-4"></th>

                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="administrateur système" data-sort1="2" data-sort2="tous les privilèges" data-sort3="actif">
                            <td class="px-6 py-4 font-medium text-gray-900">Administrateur système</td>
                            <td class="px-6 py-4 text-gray-500">2</td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Tous les privilèges</span></td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions inline-flex items-center">
                                <button onclick="duplicateRole('Administrateur système')" title="Dupliquer le rôle" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="membre de la direction cge" data-sort1="4" data-sort2="consulter cge déposer cge consulter ag" data-sort3="actif">
                            <td class="px-6 py-4 font-medium text-gray-900">Membre de la direction CGE</td>
                            <td class="px-6 py-4 text-gray-500">4</td>
                            <td class="px-6 py-4">
                                <span class="badge badge-neutral me-1">Consulter · CGE</span>
                                <span class="badge badge-neutral me-1">Déposer · CGE</span>
                                <span class="badge badge-neutral">Consulter · AG</span>
                            </td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions inline-flex items-center">
                                <button onclick="duplicateRole('Membre de la direction CGE')" title="Dupliquer le rôle" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="secrétaire de séance" data-sort1="2" data-sort2="déposer cge consulter cge oa" data-sort3="actif">
                            <td class="px-6 py-4 font-medium text-gray-900">Secrétaire de séance</td>
                            <td class="px-6 py-4 text-gray-500">2</td>
                            <td class="px-6 py-4">
                                <span class="badge badge-neutral me-1">Déposer · CGE</span>
                                <span class="badge badge-neutral">Consulter · CGE + OA</span>
                            </td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions inline-flex items-center">
                                <button onclick="duplicateRole('Secrétaire de séance')" title="Dupliquer le rôle" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="assistant de direction" data-sort1="1" data-sort2="déposer cge consulter cge oa" data-sort3="actif">
                            <td class="px-6 py-4 font-medium text-gray-900">Assistant de direction</td>
                            <td class="px-6 py-4 text-gray-500">1</td>
                            <td class="px-6 py-4">
                                <span class="badge badge-neutral me-1">Déposer · CGE</span>
                                <span class="badge badge-neutral">Consulter · CGE + OA</span>
                            </td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions inline-flex items-center">
                                <button onclick="duplicateRole('Assistant de direction')" title="Dupliquer le rôle" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="auditeur externe" data-sort1="5" data-sort2="consulter ag" data-sort3="actif">
                            <td class="px-6 py-4 font-medium text-gray-900">Auditeur externe</td>
                            <td class="px-6 py-4 text-gray-500">5</td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Consulter · AG</span></td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions inline-flex items-center">
                                <button onclick="duplicateRole('Auditeur externe')" title="Dupliquer le rôle" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="partenaire externe cge" data-sort1="1" data-sort2="consulter cge sauf oa" data-sort3="actif">
                            <td class="px-6 py-4 font-medium text-gray-900">Partenaire externe CGE</td>
                            <td class="px-6 py-4 text-gray-500">1</td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Consulter · CGE sauf OA</span></td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions inline-flex items-center">
                                <button onclick="duplicateRole('Partenaire externe CGE')" title="Dupliquer le rôle" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                </button>
                            </span></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>

        <!-- ONGLET ACCÈS NOMINATIFS -->
        <div id="accesses-tab-panel" class="hidden-view flex-1 flex flex-col min-h-0">

            <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">

                <!-- FILTRES -->
                <div class="px-6 py-4 border-b border-gray-200">
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
                    <p id="na-count" class="text-sm text-gray-600 mt-3">6 accès nominatifs</p>
                </div>

                <div class="flex-1 overflow-y-auto min-h-0">
                <table class="data-table w-full text-left text-sm whitespace-nowrap">
                    <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                        <tr>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Document <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Utilisateur <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Privilèges accordés <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Période de validité <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 4)">Accordé par <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-4" onclick="sortTable(this, 5)">Statut <span class="sort-indicator"></span></th>
                            <th class="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody id="na-tbody" class="divide-y divide-gray-200">
                        <tr class="hover:bg-primary-light transition-colors" data-status="Planifié" data-search="compte rendu ca mars 2026 sophie durant philippe dumont" data-sort0="compte rendu ca mars 2026" data-sort1="sophie durant" data-sort2="consulter" data-sort3="20260910" data-sort4="philippe dumont" data-sort5="planifié">
                            <td class="px-6 py-4 font-medium text-gray-900" data-role="na-doc">Compte Rendu CA Mars 2026</td>
                            <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Sophie Durant');" class="font-medium text-primary hover:underline" data-role="na-user">Sophie Durant</button></td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Consulter</span></td>
                            <td class="px-6 py-4 text-gray-500">Débute le 10/09/2026</td>
                            <td class="px-6 py-4 text-gray-500">Philippe Dumont · 24/08/2026</td>
                            <td class="px-6 py-4"><span class="badge badge-warning">Planifié</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions inline-flex items-center">
                                <button onclick="openRevokeAccess(this)" title="Révoquer l'accès" class="na-revoke p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="17" x2="22" y1="8" y2="13" />
  <line x1="22" x2="17" y1="8" y2="13" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-status="Actif" data-search="rapport annuel 2025 denis buchet marc lemoine" data-sort0="rapport annuel 2025" data-sort1="denis buchet" data-sort2="consulter télécharger" data-sort3="20260101" data-sort4="marc lemoine" data-sort5="actif">
                            <td class="px-6 py-4 font-medium text-gray-900" data-role="na-doc">Rapport Annuel 2025</td>
                            <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Denis Buchet');" class="font-medium text-primary hover:underline" data-role="na-user">Denis Buchet</button></td>
                            <td class="px-6 py-4">
                                <span class="badge badge-neutral me-1">Consulter</span>
                                <span class="badge badge-neutral">Télécharger</span>
                            </td>
                            <td class="px-6 py-4 text-gray-500">01/01/2026 → 31/12/2026</td>
                            <td class="px-6 py-4 text-gray-500">Marc Lemoine · 15/01/2026</td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions inline-flex items-center">
                                <button onclick="openRevokeAccess(this)" title="Révoquer l'accès" class="na-revoke p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <line x1="17" x2="22" y1="8" y2="13" />
  <line x1="22" x2="17" y1="8" y2="13" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-status="Actif" data-search="procès verbal ca avril 2026 julie stavrakas philippe dumont" data-sort0="procès verbal ca avril 2026" data-sort1="julie stavrakas" data-sort2="consulter modifier" data-sort3="permanent" data-sort4="philippe dumont" data-sort5="actif">
                            <td class="px-6 py-4 font-medium text-gray-900" data-role="na-doc">Procès Verbal CA Avril 2026</td>
                            <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Julie Stavrakas');" class="font-medium text-primary hover:underline" data-role="na-user">Julie Stavrakas</button></td>
                            <td class="px-6 py-4">
                                <span class="badge badge-neutral me-1">Consulter</span>
                                <span class="badge badge-neutral">Modifier</span>
                            </td>
                            <td class="px-6 py-4 text-gray-500">Permanent</td>
                            <td class="px-6 py-4 text-gray-500">Philippe Dumont · 18/04/2026</td>
                            <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"><span class="row-actions inline-flex items-center">
                                <button onclick="openRevokeAccess(this)" title="Révoquer l'accès" class="na-revoke p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="17" x2="22" y1="8" y2="13" />
  <line x1="22" x2="17" y1="8" y2="13" /></svg>
                                </button>
                            </span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-status="Expiré" data-search="bilan financier annuel 2025 d.buchet@chimay-gestion.be philippe dumont" data-sort0="bilan financier annuel 2025" data-sort1="d.buchet@chimay-gestion.be" data-sort2="consulter" data-sort3="20260630" data-sort4="philippe dumont" data-sort5="expiré">
                            <td class="px-6 py-4 font-medium text-gray-900" data-role="na-doc">Bilan Financier Annuel 2025</td>
                            <td class="px-6 py-4 text-gray-600" data-role="na-user">d.buchet@chimay-gestion.be <span class="text-xs text-gray-400">(invité)</span></td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Consulter</span></td>
                            <td class="px-6 py-4 text-gray-500">Jusqu'au 30/06/2026</td>
                            <td class="px-6 py-4 text-gray-500">Philippe Dumont · 02/03/2026</td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Expiré</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-status="Expiré" data-search="2026fcw024 pv oa fcw 09-04-2026 laurent petit julie stavrakas" data-sort0="2026fcw024 pv oa fcw 09-04-2026" data-sort1="laurent petit" data-sort2="consulter télécharger" data-sort3="20260531" data-sort4="julie stavrakas" data-sort5="expiré">
                            <td class="px-6 py-4 font-medium text-gray-900" data-role="na-doc">2026fcw024 - PV OA FCW du 09-04-2026</td>
                            <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Laurent Petit');" class="font-medium text-primary hover:underline" data-role="na-user">Laurent Petit</button></td>
                            <td class="px-6 py-4">
                                <span class="badge badge-neutral me-1">Consulter</span>
                                <span class="badge badge-neutral">Télécharger</span>
                            </td>
                            <td class="px-6 py-4 text-gray-500">Jusqu'au 31/05/2026</td>
                            <td class="px-6 py-4 text-gray-500">Julie Stavrakas · 02/05/2026</td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Expiré</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-status="Révoqué" data-search="rapport annuel 2025 sophie durant philippe dumont" data-sort0="rapport annuel 2025" data-sort1="sophie durant" data-sort2="consulter" data-sort3="permanent" data-sort4="philippe dumont" data-sort5="révoqué">
                            <td class="px-6 py-4 font-medium text-gray-900" data-role="na-doc">Rapport Annuel 2025</td>
                            <td class="px-6 py-4"><button onclick="navigateTo('view-users'); openUserPopup('Sophie Durant');" class="font-medium text-primary hover:underline" data-role="na-user">Sophie Durant</button></td>
                            <td class="px-6 py-4"><span class="badge badge-neutral">Consulter</span></td>
                            <td class="px-6 py-4 text-gray-500">Permanent</td>
                            <td class="px-6 py-4 text-gray-500">Philippe Dumont · 20/02/2026</td>
                            <td class="px-6 py-4"><span class="badge badge-danger">Révoqué</span></td>
                            <td class="px-6 py-4 text-right text-gray-500"></td>
                        </tr>
                        <tr id="na-empty" class="empty-row hidden-view">
                            <td colspan="7" class="px-6 py-10 text-center text-gray-500">Aucun accès nominatif ne correspond à vos filtres.</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</section>
`;
