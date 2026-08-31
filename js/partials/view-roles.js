window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewRoles = `
<section id="view-roles" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <div class="flex items-center justify-between mb-4">
            <p class="text-sm text-gray-600">5 rôles · <span class="text-gray-400">Un rôle ne peut être attribué que par un compte disposant de tous ses privilèges et de tous ses libellés.</span></p>
            <div class="flex gap-3">
                <button onclick="alert('Simulation d accès : liste des documents visibles pour la sélection.')" class="btn btn-outline">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
  <circle cx="12" cy="12" r="3" /></svg>
                    Vérifier les accès
                </button>
                <button onclick="toggleModal('modal-role', true)" class="btn btn-primary">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" />
  <path d="M12 5v14" /></svg>
                    Créer un rôle
                </button>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
            
            <div class="flex-1 overflow-y-auto min-h-0">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
                <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Rôle <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Utilisateurs <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Règles d'accès <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Statut <span class="sort-indicator"></span></th>
                        <th class="px-6 py-4 w-24"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="administrateur" data-sort1="2" data-sort2="tous les privilèges" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Administrateur</td>
                        <td class="px-6 py-4 text-gray-500">2</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Tous les privilèges</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Administrateur')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Administrateur (2 utilisateurs impactés)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="membre de la direction cge" data-sort1="4" data-sort2="consulter cge ext déposer cge consulter ag" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Membre de la direction CGE</td>
                        <td class="px-6 py-4 text-gray-500">4</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-neutral me-1">Consulter · CGE + EXT</span>
                            <span class="badge badge-neutral me-1">Déposer · CGE</span>
                            <span class="badge badge-neutral">Consulter · AG</span>
                        </td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Membre de la direction CGE')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Membre de la direction CGE (4 utilisateurs impactés)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="secrétaire de séance" data-sort1="3" data-sort2="déposer cge consulter cge oa" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Secrétaire de séance</td>
                        <td class="px-6 py-4 text-gray-500">3</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-neutral me-1">Déposer · CGE</span>
                            <span class="badge badge-neutral">Consulter · CGE + OA</span>
                        </td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Secrétaire de séance')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Secrétaire de séance (3 utilisateurs impactés)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="auditeur externe" data-sort1="5" data-sort2="consulter ext" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Auditeur externe</td>
                        <td class="px-6 py-4 text-gray-500">5</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Consulter · EXT</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Auditeur externe')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Auditeur externe (5 utilisateurs impactés)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="partenaire externe cge" data-sort1="1" data-sort2="consulter cge ext sauf oa" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Partenaire externe CGE</td>
                        <td class="px-6 py-4 text-gray-500">1</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Consulter · CGE + EXT sauf OA</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Partenaire externe CGE')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Partenaire externe CGE (1 utilisateur impacté)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</section>
`;
