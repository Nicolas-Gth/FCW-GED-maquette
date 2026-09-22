window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalUserAccess = `
<div id="modal-user-access" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col max-h-[90vh]">

        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg shrink-0">
            <div class="min-w-0">
                <h3 class="text-lg font-bold text-gray-800">Gérer les accès</h3>
                <p class="text-xs text-gray-500 truncate"><span id="ua-name"></span> · <span id="ua-email"></span></p>
            </div>
            <button onclick="toggleModal('modal-user-access', false)" class="text-gray-400 hover:text-gray-600 shrink-0 ms-4">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>

        <form id="user-access-form" class="flex-1 overflow-y-auto min-h-0 px-6 py-5 space-y-6" onsubmit="event.preventDefault(); alert('Accès enregistrés (prototype)'); toggleModal('modal-user-access', false);">

            <div>
                <h4 class="text-sm font-semibold text-gray-800 mb-1">1. Permissions générales</h4>
                <p class="text-xs text-gray-500 mb-2">Droits transverses, indépendants d'une entité spécifique.</p>
                <div id="ua-general" class="multi-select" data-placeholder="Sélectionner…">
                    <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                        <span class="ms-value">Sélectionner…</span>
                        <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                    <div class="multi-select-panel hidden-view">
                        <div class="ms-group">Actions sur les utilisateurs</div>
                        <label class="ms-option"><input type="checkbox" value="Créer des invitations" onchange="msUpdate(this)"><span class="ms-name">Créer des invitations</span><span class="ms-desc">Envoyer un mail contenant un lien d'invitation à rejoindre la plateforme.</span></label>
                        <label class="ms-option"><input type="checkbox" value="Gérer les utilisateurs" onchange="msUpdate(this)"><span class="ms-name">Gérer les utilisateurs</span><span class="ms-desc">Choisir les attributs et permissions d'un utilisateur. On ne peut attribuer que les permissions et accès qu'on possède soi-même.</span></label>
                        <label class="ms-option"><input type="checkbox" value="Créer des accès nominatifs" onchange="msUpdate(this)"><span class="ms-name">Créer des accès nominatifs</span><span class="ms-desc">Octroyer un accès exceptionnel vers un document à un utilisateur via un lien.</span></label>
                        <div class="ms-group">Paramétrage et suivi</div>
                        <label class="ms-option"><input type="checkbox" value="Gérer les libellés" onchange="msUpdate(this)"><span class="ms-name">Gérer les libellés</span><span class="ms-desc">Créer, modifier ou supprimer des libellés par catégorie.</span></label>
                        <label class="ms-option"><input type="checkbox" value="Consulter l'historique" onchange="msUpdate(this)"><span class="ms-name">Consulter l'historique</span><span class="ms-desc">Accéder à l'historique recensant les actions effectuées par les utilisateurs sur l'ensemble de la plateforme.</span></label>
                        <label class="ms-option"><input type="checkbox" value="Gérer les documents" onchange="msUpdate(this)"><span class="ms-name">Gérer les documents</span><span class="ms-desc">Ajouter, modifier des métadonnées/libellés, téléverser des nouvelles versions et supprimer des documents.</span></label>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="text-sm font-semibold text-gray-800 mb-1">2. Entités</h4>
                <p class="text-xs text-gray-500 mb-2">Structures auxquelles l'utilisateur a accès.</p>
                <div id="ua-entities" class="multi-select" data-placeholder="Sélectionner…">
                    <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                        <span class="ms-value">Sélectionner…</span>
                        <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                    <div class="multi-select-panel hidden-view"></div>
                </div>
                <label class="flex items-center gap-2 text-sm text-gray-700 mt-2">
                    <input id="ua-all-entities" type="checkbox" class="toggle-switch" onchange="uaAllEntitiesToggle(this)">
                    Accès à toutes les entités (actuelles et futures)
                </label>
            </div>

            <div>
                <h4 class="text-sm font-semibold text-gray-800 mb-1">3. Accès par entité et instance</h4>
                <p class="text-xs text-gray-500 mb-3">Pour chaque entité, choisissez les instances, puis pour chaque instance la période, la typologie documentaire, les privilèges et la période d'éligibilité.</p>
                <div id="ua-funnel" class="space-y-3"></div>
            </div>

        </form>

        <div class="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-lg">
            <button type="button" onclick="toggleModal('modal-user-access', false)" class="btn btn-outline">Annuler</button>
            <button type="submit" form="user-access-form" class="btn btn-primary">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                Enregistrer les accès
            </button>
        </div>
    </div>
</div>
`;
