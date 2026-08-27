window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewUsers = `
<section id="view-users" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">

        <div class="flex items-center justify-between mb-4">
            <div class="search-box w-72">
                <svg class="search-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" /></svg>
                <input id="user-search" type="text" oninput="filterUsers()" placeholder="Rechercher un utilisateur..." class="input input-search w-full">
            </div>
            <button onclick="toggleModal('modal-invite', true)" class="btn btn-primary">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="19" x2="19" y1="8" y2="14" />
  <line x1="22" x2="16" y1="11" y2="11" /></svg>
                Inviter un utilisateur
            </button>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
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
                        <td class="px-6 py-4"><span class="badge badge-neutral">Membre de la direction CGE</span> <span class="badge badge-neutral">Secrétaire de séance</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="sophie durant s.durant@audit-externe.be auditeur externe" onclick="openUserPopup('Sophie Durant')" data-sort0="sophie durant" data-sort1="s.durant@audit-externe.be" data-sort2="auditeur externe" data-sort3="inactif">
                        <td class="px-6 py-4 font-medium text-gray-900">Sophie Durant</td>
                        <td class="px-6 py-4 text-gray-500">s.durant@audit-externe.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Auditeur externe</span></td>
                        <td class="px-6 py-4"><span class="badge badge-danger">Inactif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="jean dupont j.dupont@chimay-gestion.be administrateur" onclick="openUserPopup('Jean Dupont')" data-sort0="jean dupont" data-sort1="j.dupont@chimay-gestion.be" data-sort2="administrateur" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Jean Dupont</td>
                        <td class="px-6 py-4 text-gray-500">j.dupont@chimay-gestion.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Administrateur</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="philippe dumont p.dumont@partenaire.be partenaire externe cge" onclick="openUserPopup('Philippe Dumont')" data-sort0="philippe dumont" data-sort1="p.dumont@partenaire.be" data-sort2="partenaire externe cge" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Philippe Dumont</td>
                        <td class="px-6 py-4 text-gray-500">p.dumont@partenaire.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Partenaire externe CGE</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="marie bernard m.bernard@chimay-gestion.be secrétaire de séance" onclick="openUserPopup('Marie Bernard')" data-sort0="marie bernard" data-sort1="m.bernard@chimay-gestion.be" data-sort2="secrétaire de séance" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Marie Bernard</td>
                        <td class="px-6 py-4 text-gray-500">m.bernard@chimay-gestion.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Secrétaire de séance</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="laurent petit l.petit@externe.be auditeur externe" onclick="openUserPopup('Laurent Petit')" data-sort0="laurent petit" data-sort1="l.petit@externe.be" data-sort2="auditeur externe" data-sort3="inactif">
                        <td class="px-6 py-4 font-medium text-gray-900">Laurent Petit</td>
                        <td class="px-6 py-4 text-gray-500">l.petit@externe.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Auditeur externe</span></td>
                        <td class="px-6 py-4"><span class="badge badge-danger">Inactif</span></td>
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
