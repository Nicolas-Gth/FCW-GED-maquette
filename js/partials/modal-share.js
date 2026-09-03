window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalShare = `
<div id="modal-share" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md flex flex-col">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg shrink-0">
            <h3 class="text-lg font-bold text-gray-800">Partager le document</h3>
            <button onclick="toggleModal('modal-share', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <div class="px-6 py-5 space-y-4">
            <p id="share-doc-name" class="text-sm text-gray-600 bg-gray-50 rounded-md px-3 py-2 truncate"></p>

            <div>
                <label for="share-link-input" class="block text-sm font-medium text-gray-700 mb-1">Lien de partage</label>
                <div class="flex items-center gap-2">
                    <input id="share-link-input" type="text" readonly onclick="this.select()" class="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 text-gray-600 outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                    <button onclick="copyShareLink()" title="Copier le lien" class="p-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-100 hover:text-primary transition-colors shrink-0">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                    </button>
                </div>
            </div>

            <div class="flex items-center justify-between gap-4">
                <label for="share-link-toggle" class="text-sm font-medium text-gray-800 cursor-pointer">Rendre ce document accessible par quiconque possédant le lien</label>
                <input id="share-link-toggle" type="checkbox" class="toggle-switch" onchange="onShareToggle(this)">
            </div>

            <div id="share-anonymous-warning" class="hidden-view flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-md px-3 py-2.5">
                <svg class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" /></svg>
                <p class="text-xs text-amber-800 leading-relaxed">Si une personne sans compte accède à ce document, les actions qu'elle effectuera dessus seront visibles dans l'historique, mais son identité ne sera pas connue.</p>
            </div>
        </div>
    </div>
</div>
`;
