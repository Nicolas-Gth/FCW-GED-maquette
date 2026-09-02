window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewUsers = `
<section id="view-users" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <div class="flex items-center justify-between mb-4">
            <div class="search-box w-72">
                <svg class="search-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" /></svg>
                <input id="user-search" type="text" oninput="filterUsers()" placeholder="Rechercher un utilisateur ou une invitation..." class="input input-search w-full">
            </div>
            <button onclick="toggleModal('modal-invite', true)" class="btn btn-primary">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="19" x2="19" y1="8" y2="14" />
  <line x1="22" x2="16" y1="11" y2="11" /></svg>
                Inviter un utilisateur
            </button>
        </div>

        <!-- Onglets -->
        <div class="flex gap-2">
            <button type="button" onclick="switchUsersTab(this, 0)" class="label-tab label-tab-active">Utilisateurs</button>
            <button type="button" onclick="switchUsersTab(this, 1)" class="label-tab label-tab-inactive">Invitations</button>
        </div>

        <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">

            <div class="flex-1 overflow-y-auto min-h-0">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
                <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTabTable(this, 0)">Nom Complet <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTabTable(this, 1)">Email <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTabTable(this, 2)">Rôles <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTabTable(this, 3)">Statut <span class="sort-indicator"></span></th>
                    </tr>
                </thead>
                <tbody id="users-tbody" class="labels-tbody divide-y divide-gray-200">
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
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="denis buchet d.buchet@partenaire.be partenaire externe cge" onclick="openUserPopup('Denis Buchet')" data-sort0="denis buchet" data-sort1="d.buchet@partenaire.be" data-sort2="partenaire externe cge" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Denis Buchet</td>
                        <td class="px-6 py-4 text-gray-500">d.buchet@partenaire.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Administrateur système</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="philippe dumont p.dumont@chimay-gestion.be administrateur" onclick="openUserPopup('Philippe Dumont')" data-sort0="philippe dumont" data-sort1="p.dumont@chimay-gestion.be" data-sort2="administrateur" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Philippe Dumont</td>
                        <td class="px-6 py-4 text-gray-500">p.dumont@chimay-gestion.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Administrateur système</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Actif</span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-search="julie stavrakas j.stavrakas@chimay-gestion.be assistant de direction" onclick="openUserPopup('Julie Stavrakas')" data-sort0="julie stavrakas" data-sort1="j.stavrakas@chimay-gestion.be" data-sort2="assistant de direction" data-sort3="actif">
                        <td class="px-6 py-4 font-medium text-gray-900">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">j.stavrakas@chimay-gestion.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Assistant de direction</span></td>
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
                <tbody id="invites-tbody" class="labels-tbody divide-y divide-gray-200 hidden-view">
                    <tr class="hover:bg-primary-light transition-colors" data-search="lucie fontaine l.fontaine@cge.fr membre de la direction cge en attente" data-sort0="lucie fontaine" data-sort1="l.fontaine@cge.fr" data-sort2="membre de la direction cge" data-sort3="en attente">
                        <td class="px-6 py-4 font-medium text-gray-900">Lucie Fontaine</td>
                        <td class="px-6 py-4 text-gray-500">l.fontaine@cge.fr</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Membre de la direction CGE</span></td>
                        <td class="px-6 py-4"><span class="badge badge-warning">En attente</span></td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-search="antoine girard a.girard@chimay-gestion.be auditeur externe en attente" data-sort0="antoine girard" data-sort1="a.girard@chimay-gestion.be" data-sort2="auditeur externe" data-sort3="en attente">
                        <td class="px-6 py-4 font-medium text-gray-900">Antoine Girard</td>
                        <td class="px-6 py-4 text-gray-500">a.girard@chimay-gestion.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Auditeur externe</span></td>
                        <td class="px-6 py-4"><span class="badge badge-warning">En attente</span></td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-search="claire dubois c.dubois@partenaire.be partenaire externe cge expirée" data-sort0="claire dubois" data-sort1="c.dubois@partenaire.be" data-sort2="partenaire externe cge" data-sort3="expirée">
                        <td class="px-6 py-4 font-medium text-gray-900">Claire Dubois</td>
                        <td class="px-6 py-4 text-gray-500">c.dubois@partenaire.be</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Partenaire externe CGE</span></td>
                        <td class="px-6 py-4"><span class="badge badge-danger">Expirée</span></td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-search="thomas renard t.renard@cge.fr secrétaire de séance en attente" data-sort0="thomas renard" data-sort1="t.renard@cge.fr" data-sort2="secrétaire de séance" data-sort3="en attente">
                        <td class="px-6 py-4 font-medium text-gray-900">Thomas Renard</td>
                        <td class="px-6 py-4 text-gray-500">t.renard@cge.fr</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Secrétaire de séance</span></td>
                        <td class="px-6 py-4"><span class="badge badge-warning">En attente</span></td>
                    </tr>
                    <tr class="hover:bg-primary-light transition-colors" data-search="nadia benali n.benali@cge.fr membre de la direction cge acceptée" data-sort0="nadia benali" data-sort1="n.benali@cge.fr" data-sort2="membre de la direction cge" data-sort3="acceptée">
                        <td class="px-6 py-4 font-medium text-gray-900">Nadia Benali</td>
                        <td class="px-6 py-4 text-gray-500">n.benali@cge.fr</td>
                        <td class="px-6 py-4"><span class="badge badge-neutral">Membre de la direction CGE</span></td>
                        <td class="px-6 py-4"><span class="badge badge-success">Acceptée</span></td>
                    </tr>
                    <tr id="invites-empty" class="empty-row hidden-view">
                        <td colspan="4" class="px-6 py-10 text-center text-gray-500">Aucune invitation ne correspond à votre recherche.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</section>
`;
