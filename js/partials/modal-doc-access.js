window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalDocAccess = `
<div id="modal-doc-access" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]">

        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg shrink-0">
            <div class="min-w-0">
                <h3 class="text-lg font-bold text-gray-800">Accès nominatifs</h3>
                <p id="da-title" class="text-xs text-gray-500 truncate"></p>
            </div>
            <button onclick="toggleModal('modal-doc-access', false)" class="text-gray-400 hover:text-gray-600 shrink-0 ms-4">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>

        <form id="doc-access-form" class="flex-1 overflow-y-auto min-h-0 px-6 py-5 space-y-4" onsubmit="event.preventDefault(); alert('Accès nominatif accordé (prototype)'); toggleModal('modal-doc-access', false);">

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Utilisateur</label>
                <select id="da-user" onchange="daToggleInvite()" required class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                    <option value="__invite">Inviter un utilisateur</option>
                    <option>Denis Buchet</option>
                    <option>Philippe Dumont</option>
                    <option>Sophie Durant</option>
                    <option>Marc Lemoine</option>
                    <option>Laurent Petit</option>
                    <option>Julie Stavrakas</option>
                </select>
                <div id="da-invite-wrap" class="hidden-view mt-3">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Adresse e-mail de l'invité</label>
                    <input id="da-invite-email" type="email" placeholder="adresse@exemple.be" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Privilèges d'accès aux documents</label>
                <div id="da-privileges" class="multi-select" data-placeholder="Sélectionner…">
                    <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                        <span class="ms-value">Sélectionner…</span>
                        <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                    <div class="multi-select-panel hidden-view">
                        <label class="ms-option"><input type="checkbox" value="Consulter" onchange="msUpdate(this)"><span class="ms-name">Consulter</span><span class="ms-desc">Rechercher et lire des documents.</span></label>
                        <label class="ms-option"><input type="checkbox" value="Télécharger" onchange="msUpdate(this)"><span class="ms-name">Télécharger</span><span class="ms-desc">Enregistrer une copie des documents sur son ordinateur.</span></label>
                        <label class="ms-option"><input type="checkbox" value="Déposer" onchange="msUpdate(this)"><span class="ms-name">Déposer</span><span class="ms-desc">Ajouter de nouveaux documents sur la plateforme.</span></label>
                        <label class="ms-option"><input type="checkbox" value="Modifier" onchange="msUpdate(this)"><span class="ms-name">Modifier</span><span class="ms-desc">Mettre à jour les étiquettes d'un document existant ou publier une nouvelle version.</span></label>
                    </div>
                </div>
            </div>

            <div class="flex gap-3">
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">À partir du</label>
                    <input id="da-from" type="date" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                </div>
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Jusqu'au</label>
                    <input id="da-to" type="date" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                </div>
            </div>

        </form>

        <div class="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-lg">
            <button type="button" onclick="toggleModal('modal-doc-access', false)" class="btn btn-outline">Annuler</button>
            <button type="submit" form="doc-access-form" class="btn btn-primary">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                Accorder l'accès
            </button>
        </div>
    </div>
</div>
`;
