window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewUsers = `
<section id="view-users" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">

        <div class="flex items-center justify-between mb-4">
            <div class="relative w-72">
                <svg class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input id="user-search" type="text" oninput="filterUsers()" placeholder="Rechercher un utilisateur..." class="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none bg-white">
            </div>
            <button onclick="toggleModal('modal-invite', true)" class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded shadow-sm font-medium flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                Inviter un utilisateur
            </button>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table class="w-full text-left text-sm whitespace-nowrap">
                <thead class="bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Nom Complet <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Email <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Rôles <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Statut <span class="sort-indicator"></span></th>
                    </tr>
                </thead>
                <tbody id="users-tbody" class="divide-y divide-gray-200">
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="marc lemoine m.lemoine@cge.fr membre de la direction cge secrétaire de séance" onclick="openUserPopup('Marc Lemoine')" data-sort0="marc lemoine" data-sort1="m.lemoine@cge.fr" data-sort2="membre de la direction cge · secrétaire de séance" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Marc Lemoine</td>
                        <td class="px-6 py-4 text-gray-500">m.lemoine@cge.fr</td>
                        <td class="px-6 py-4 text-gray-700">Membre de la direction CGE · Secrétaire de séance</td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="sophie durant s.durant@audit-externe.be auditeur externe" onclick="openUserPopup('Sophie Durant')" data-sort0="sophie durant" data-sort1="s.durant@audit-externe.be" data-sort2="auditeur externe" data-sort3="inactif">
                        <td class="px-6 py-4 font-medium text-gray-900">Sophie Durant</td>
                        <td class="px-6 py-4 text-gray-500">s.durant@audit-externe.be</td>
                        <td class="px-6 py-4 text-gray-700">Auditeur externe</td>
                        <td class="px-6 py-4"><span class="bg-danger text-white px-2 py-1 rounded text-xs">Inactif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="jean dupont j.dupont@chimay-wartoise.be administrateur" onclick="openUserPopup('Jean Dupont')" data-sort0="jean dupont" data-sort1="j.dupont@chimay-wartoise.be" data-sort2="administrateur" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Jean Dupont</td>
                        <td class="px-6 py-4 text-gray-500">j.dupont@chimay-wartoise.be</td>
                        <td class="px-6 py-4 text-gray-700">Administrateur</td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="philippe dumont p.dumont@partenaire.be partenaire externe cge" onclick="openUserPopup('Philippe Dumont')" data-sort0="philippe dumont" data-sort1="p.dumont@partenaire.be" data-sort2="partenaire externe cge" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Philippe Dumont</td>
                        <td class="px-6 py-4 text-gray-500">p.dumont@partenaire.be</td>
                        <td class="px-6 py-4 text-gray-700">Partenaire externe CGE</td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="marie bernard m.bernard@chimay-wartoise.be secrétaire de séance" onclick="openUserPopup('Marie Bernard')" data-sort0="marie bernard" data-sort1="m.bernard@chimay-wartoise.be" data-sort2="secrétaire de séance" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Marie Bernard</td>
                        <td class="px-6 py-4 text-gray-500">m.bernard@chimay-wartoise.be</td>
                        <td class="px-6 py-4 text-gray-700">Secrétaire de séance</td>
                        <td class="px-6 py-4"><span class="bg-success text-white px-2 py-1 rounded text-xs">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="laurent petit l.petit@externe.be auditeur externe" onclick="openUserPopup('Laurent Petit')" data-sort0="laurent petit" data-sort1="l.petit@externe.be" data-sort2="auditeur externe" data-sort3="inactif">
                        <td class="px-6 py-4 font-medium text-gray-900">Laurent Petit</td>
                        <td class="px-6 py-4 text-gray-500">l.petit@externe.be</td>
                        <td class="px-6 py-4 text-gray-700">Auditeur externe</td>
                        <td class="px-6 py-4"><span class="bg-danger text-white px-2 py-1 rounded text-xs">Inactif</span></td>
                    </tr>
                    <tr id="users-empty" class="empty-row hidden-view">
                        <td colspan="4" class="px-6 py-10 text-center text-gray-500">Aucun utilisateur ne correspond à votre recherche.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
`;
