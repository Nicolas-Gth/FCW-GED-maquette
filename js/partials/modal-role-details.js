window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalRoleDetails = `
<div id="modal-role-details" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg shrink-0">
            <h3 class="text-lg font-bold text-gray-800">Détails du rôle</h3>
            <button onclick="toggleModal('modal-role-details', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <div class="flex-1 overflow-y-auto min-h-0 px-6 py-5 space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nom du rôle</label>
                <input id="role-details-name" type="text" readonly class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 outline-none">
                <p class="text-xs text-gray-500 mt-1">Attribué à <span id="role-details-users">—</span> utilisateur(s).</p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Privilèges généraux</label>
                <div id="role-details-general"></div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Règles d'accès aux documents</label>
                <div id="role-details-rules" class="space-y-3"></div>
            </div>
        </div>

        <div class="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-lg">
            <button type="button" onclick="alert('Modification du rôle (simulation)')" class="btn btn-outline">Modifier</button>
            <button type="button" onclick="toggleModal('modal-role-details', false)" class="btn btn-primary">Fermer</button>
        </div>
    </div>
</div>
`;
