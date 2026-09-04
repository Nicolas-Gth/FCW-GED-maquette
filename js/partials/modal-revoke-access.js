window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalRevokeAccess = `
<div id="modal-revoke-access" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">

        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Révoquer l'accès</h3>
            <button onclick="toggleModal('modal-revoke-access', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>

        <div class="px-6 py-5 space-y-4">
            <p class="text-sm text-gray-600">Voulez-vous vraiment révoquer l'accès de <span id="revoke-user-name" class="font-semibold text-gray-800"></span> au document «&nbsp;<span id="revoke-doc-name" class="font-semibold text-gray-800"></span>&nbsp;»&nbsp;?</p>
            <p class="text-xs text-gray-500">L'utilisateur ne pourra plus consulter ce document. Cette action sera consignée dans l'historique.</p>

            <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onclick="toggleModal('modal-revoke-access', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm font-medium">Annuler</button>
                <button type="button" onclick="confirmRevokeAccess()" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium shadow-sm flex items-center gap-2">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <line x1="17" x2="22" y1="8" y2="13" />
  <line x1="22" x2="17" y1="8" y2="13" /></svg>
                    Révoquer l'accès
                </button>
            </div>
        </div>
    </div>
</div>
`;
