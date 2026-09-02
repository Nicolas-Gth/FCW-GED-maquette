window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalDocHistory = `
<div id="modal-doc-history" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-7xl overflow-hidden flex flex-col max-h-[85vh]">

        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <div class="min-w-0">
                <h3 class="text-lg font-bold text-gray-800">Historique du document</h3>
                <p id="dh-title" class="text-xs text-gray-500 truncate"></p>
            </div>
            <button onclick="toggleModal('modal-doc-history', false)" class="text-gray-400 hover:text-gray-600 shrink-0 ms-4">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>

        <div class="flex-1 overflow-y-auto min-h-0">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
                <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="px-6 py-3">Date / Heure</th>
                        <th class="px-6 py-3">Utilisateur</th>
                        <th class="px-6 py-3">Action</th>
                        <th class="px-6 py-3">Cible</th>
                        <th class="px-6 py-3">Description</th>
                    </tr>
                </thead>
                <tbody id="dh-tbody" class="divide-y divide-gray-200"></tbody>
            </table>
        </div>

        <div class="px-6 py-3 border-t border-gray-200 flex justify-end bg-gray-50">
            <button type="button" onclick="toggleModal('modal-doc-history', false)" class="btn btn-outline">Fermer</button>
        </div>
    </div>
</div>
`;
