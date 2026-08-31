window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalDeleteView = `
<div id="modal-delete-view" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">

        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Supprimer la vue</h3>
            <button onclick="toggleModal('modal-delete-view', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>

        <div class="px-6 py-5 space-y-4">
            <p class="text-sm text-gray-600">Voulez-vous vraiment supprimer la vue «&nbsp;<span id="delete-view-name" class="font-semibold text-gray-800"></span>&nbsp;»&nbsp;?</p>
            <p class="text-xs text-gray-500">Cette action est irréversible.</p>

            <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onclick="toggleModal('modal-delete-view', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm font-medium">Annuler</button>
                <button type="button" onclick="confirmDeleteView()" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium shadow-sm flex items-center gap-2">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  <path d="m14.5 9.5-5 5" />
  <path d="m9.5 9.5 5 5" /></svg>
                    Supprimer
                </button>
            </div>
        </div>
    </div>
</div>
`;
