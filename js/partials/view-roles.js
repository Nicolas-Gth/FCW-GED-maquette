window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewRoles = `
<section id="view-roles" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">

        <div class="flex items-center justify-between mb-4">
            <p class="text-sm text-gray-600">5 rôles · <span class="text-gray-400">Un rôle ne peut être attribué que par un compte de niveau supérieur ou égal.</span></p>
            <div class="flex gap-3">
                <button onclick="alert('Simulation d accès : liste des documents visibles pour la sélection.')" class="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    Vérifier les accès
                </button>
                <button onclick="alert('Création de rôle (prototype)')" class="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded shadow-sm font-medium transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    Créer un rôle
                </button>
            </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table class="w-full text-left text-sm whitespace-nowrap">
                <thead class="bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Rôle <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Niveau <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Utilisateurs <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Règles d'accès <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 4)">Statut <span class="sort-indicator"></span></th>
                        <th class="px-6 py-4 w-24"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="administrateur" data-sort1="100" data-sort2="2" data-sort3="tous les privilèges" data-sort4="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Administrateur</td>
                        <td class="px-6 py-4 text-gray-500">100</td>
                        <td class="px-6 py-4 text-gray-500">2</td>
                        <td class="px-6 py-4"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium">Tous les privilèges</span></td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Administrateur')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Administrateur (2 utilisateurs impactés)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="membre de la direction cge" data-sort1="80" data-sort2="4" data-sort3="consulter cge ext déposer cge consulter ag" data-sort4="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Membre de la direction CGE</td>
                        <td class="px-6 py-4 text-gray-500">80</td>
                        <td class="px-6 py-4 text-gray-500">4</td>
                        <td class="px-6 py-4">
                            <span class="bg-primary-light text-primary px-2 py-1 rounded text-xs font-medium mr-1">Consulter · CGE + EXT</span>
                            <span class="bg-success text-white px-2 py-1 rounded text-xs font-medium mr-1">Déposer · CGE</span>
                            <span class="bg-primary-light text-primary px-2 py-1 rounded text-xs font-medium">Consulter · AG</span>
                        </td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Membre de la direction CGE')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Membre de la direction CGE (4 utilisateurs impactés)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="secrétaire de séance" data-sort1="60" data-sort2="3" data-sort3="déposer cge consulter cge oa" data-sort4="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Secrétaire de séance</td>
                        <td class="px-6 py-4 text-gray-500">60</td>
                        <td class="px-6 py-4 text-gray-500">3</td>
                        <td class="px-6 py-4">
                            <span class="bg-success text-white px-2 py-1 rounded text-xs font-medium mr-1">Déposer · CGE</span>
                            <span class="bg-primary-light text-primary px-2 py-1 rounded text-xs font-medium">Consulter · CGE + OA</span>
                        </td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Secrétaire de séance')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Secrétaire de séance (3 utilisateurs impactés)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="auditeur externe" data-sort1="40" data-sort2="5" data-sort3="consulter ext" data-sort4="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Auditeur externe</td>
                        <td class="px-6 py-4 text-gray-500">40</td>
                        <td class="px-6 py-4 text-gray-500">5</td>
                        <td class="px-6 py-4"><span class="bg-primary-light text-primary px-2 py-1 rounded text-xs font-medium">Consulter · EXT</span></td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Auditeur externe')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Auditeur externe (5 utilisateurs impactés)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-sort0="partenaire externe cge" data-sort1="20" data-sort2="1" data-sort3="consulter cge ext sauf oa" data-sort4="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Partenaire externe CGE</td>
                        <td class="px-6 py-4 text-gray-500">20</td>
                        <td class="px-6 py-4 text-gray-500">1</td>
                        <td class="px-6 py-4"><span class="bg-primary-light text-primary px-2 py-1 rounded text-xs font-medium">Consulter · CGE + EXT sauf OA</span></td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs">Actif</span></td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="alert('Modification du rôle : Partenaire externe CGE')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                </button>
                                <button onclick="alert('Suppression du rôle : Partenaire externe CGE (1 utilisateur impacté)')" title="Supprimer" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
`;
