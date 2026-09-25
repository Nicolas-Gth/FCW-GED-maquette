window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalUser = `
<div id="modal-user" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="w-full max-w-5xl flex flex-col">

        <div class="flex gap-2 self-start">
            <button id="sheet-tab-0" type="button" onclick="switchUserSheetTab(this, 0)" class="label-tab label-tab-active whitespace-nowrap">Informations</button>
            <button id="sheet-tab-1" type="button" onclick="switchUserSheetTab(this, 1)" class="label-tab label-tab-inactive whitespace-nowrap">Permissions générales</button>
            <button id="sheet-tab-2" type="button" onclick="switchUserSheetTab(this, 2)" class="label-tab label-tab-inactive whitespace-nowrap">Règles d'accès</button>
            <button id="sheet-tab-3" type="button" onclick="switchUserSheetTab(this, 3)" class="label-tab label-tab-inactive whitespace-nowrap">Documents accessibles</button>
        </div>

        <div class="bg-white rounded-lg rounded-tl-none shadow-xl flex flex-col h-[85vh] overflow-hidden border-t border-gray-200">

        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 shrink-0">
            <div class="flex items-center gap-3 min-w-0">
                <div id="user-sheet-avatar" class="avatar w-11 h-11 text-base avatar-blue shrink-0"></div>
                <div class="min-w-0">
                    <h3 id="user-sheet-name" class="text-lg font-bold text-gray-800 leading-tight truncate">Fiche utilisateur</h3>
                    <p id="user-sheet-email" class="text-xs text-gray-500 truncate"></p>
                </div>
            </div>
            <button onclick="toggleModal('modal-user', false)" class="text-gray-400 hover:text-gray-600 shrink-0 ms-4">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>

        <div class="flex-1 overflow-y-auto min-h-0">

            <!-- Onglet 1 : Informations -->
            <div id="sheet-panel-0" class="sheet-panel p-6">
                <div class="border-t border-gray-100 divide-y divide-gray-100">
                    <div class="flex items-center justify-between py-3">
                        <span class="text-sm text-gray-500">Prénom</span>
                        <span id="user-sheet-prenom" class="text-sm font-medium text-gray-900"></span>
                    </div>
                    <div class="flex items-center justify-between py-3">
                        <span class="text-sm text-gray-500">Nom</span>
                        <span id="user-sheet-nom" class="text-sm font-medium text-gray-900"></span>
                    </div>
                    <div class="flex items-center justify-between py-3">
                        <span class="text-sm text-gray-500">Adresse e-mail</span>
                        <span id="user-sheet-email-field" class="text-sm font-medium text-gray-900"></span>
                    </div>
                    <div class="flex items-center justify-between py-3">
                        <span class="text-sm text-gray-500">Type de compte</span>
                        <span id="user-sheet-type-field" class="badge badge-neutral"></span>
                    </div>
                    <div class="flex items-center justify-between py-3">
                        <span class="text-sm text-gray-500">Statut</span>
                        <span id="user-sheet-status-field" class="badge badge-success"></span>
                    </div>
                    <div class="flex items-center justify-between py-3">
                        <span class="text-sm text-gray-500">Date d'ajout</span>
                        <span id="user-sheet-added" class="text-sm font-medium text-gray-900"></span>
                    </div>
                    <div class="flex items-center justify-between py-3">
                        <span class="text-sm text-gray-500">Dernière connexion</span>
                        <span id="user-sheet-lastlogin" class="text-sm font-medium text-gray-900"></span>
                    </div>
                </div>
            </div>

            <!-- Onglet 2 : Permissions générales -->
            <div id="sheet-panel-1" class="sheet-panel hidden-view p-6">
                <div id="usheet-general">
                    <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Actions sur les utilisateurs</div>
                    <div class="space-y-3">
                        <label class="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" value="Créer des invitations" class="sheet-check">
                            <span>
                                <span class="block text-sm font-medium text-gray-800">Créer des invitations</span>
                                <span class="block text-xs text-gray-500">Envoyer un mail contenant un lien d'invitation à rejoindre la plateforme.</span>
                            </span>
                        </label>
                        <label class="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" value="Gérer les utilisateurs" class="sheet-check">
                            <span>
                                <span class="block text-sm font-medium text-gray-800">Gérer les utilisateurs</span>
                                <span class="block text-xs text-gray-500">Choisir les attributs et permissions d'un utilisateur. On ne peut attribuer que les permissions et accès qu'on possède soi-même.</span>
                            </span>
                        </label>
                        <label class="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" value="Créer des accès nominatifs" class="sheet-check">
                            <span>
                                <span class="block text-sm font-medium text-gray-800">Créer des accès nominatifs</span>
                                <span class="block text-xs text-gray-500">Octroyer un accès exceptionnel vers un document à un utilisateur via un lien.</span>
                            </span>
                        </label>
                    </div>

                    <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-6">Paramétrage et suivi</div>
                    <div class="space-y-3">
                        <label class="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" value="Gérer les libellés" class="sheet-check">
                            <span>
                                <span class="block text-sm font-medium text-gray-800">Gérer les libellés</span>
                                <span class="block text-xs text-gray-500">Créer, modifier ou supprimer des libellés par catégorie.</span>
                            </span>
                        </label>
                        <label class="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" value="Consulter l'historique" class="sheet-check">
                            <span>
                                <span class="block text-sm font-medium text-gray-800">Consulter l'historique</span>
                                <span class="block text-xs text-gray-500">Accéder à l'historique recensant les actions effectuées par les utilisateurs sur l'ensemble de la plateforme.</span>
                            </span>
                        </label>
                        <label class="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" value="Gérer les documents" class="sheet-check">
                            <span>
                                <span class="block text-sm font-medium text-gray-800">Gérer les documents</span>
                                <span class="block text-xs text-gray-500">Ajouter, modifier des métadonnées/libellés, téléverser des nouvelles versions et supprimer des documents.</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Onglet 3 : Règles d'accès -->
            <div id="sheet-panel-2" class="sheet-panel hidden-view p-6">
                <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Sélection des entités</label>
                <div id="usheet-entities" class="multi-select" data-placeholder="Sélectionner…">
                    <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                        <span class="ms-value">Sélectionner…</span>
                        <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                    <div class="multi-select-panel hidden-view"></div>
                </div>

                <div id="usheet-funnel" class="mt-4 space-y-3"></div>
            </div>

            <!-- Onglet 4 : Documents accessibles -->
            <div id="sheet-panel-3" class="sheet-panel hidden-view">
                <table class="data-table table-actions w-full text-left text-sm whitespace-nowrap">
                    <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                        <tr>
                            <th class="px-6 py-3">Titre du document</th>
                            <th class="px-6 py-3">Date du document</th>
                            <th class="px-6 py-3">Libellés</th>
                            <th class="px-6 py-3">Déposé par</th>
                            <th class="px-6 py-3">Date du dépôt</th>
                        </tr>
                    </thead>
                    <tbody id="usheet-docs-tbody" class="divide-y divide-gray-200"></tbody>
                </table>
            </div>

        </div>

        <div id="usheet-footer" class="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white hidden-view">
            <button id="usheet-reset" type="button" onclick="usheetReset()" class="btn btn-outline-danger hidden-view">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" /></svg>
                Réinitialiser
            </button>
            <button id="usheet-save" type="button" onclick="usheetSave()" class="btn btn-primary hidden-view">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
  <path d="M7 3v4a1 1 0 0 0 1 1h7" /></svg>
                Enregistrer les modifications
            </button>
            <button id="usheet-convert" type="button" onclick="convertUserToPermanent()" class="btn btn-primary hidden-view">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <path d="m16 11 2 2 4-4" /></svg>
                Transformer en compte permanent
            </button>
        </div>
    </div>
    </div>
</div>
`;
