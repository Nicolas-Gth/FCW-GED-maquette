window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalLabel = `
<div id="modal-label" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Créer un libellé</h3>
            <button onclick="toggleModal('modal-label', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <form class="px-6 py-5 space-y-4" onsubmit="event.preventDefault(); alert('Libellé créé !'); toggleModal('modal-label', false);">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nom affiché</label>
                <input type="text" required placeholder="Ex: Notes internes" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Code unique</label>
                <input type="text" required placeholder="Ex: NOT" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-mono uppercase outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                <p class="text-xs text-gray-500 mt-1">Obligatoire et unique. Sert au nommage automatique des fichiers.</p>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                <select class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none focus:border-primary">
                    <option>Entité (ENTITY)</option>
                    <option>Organe (ORGAN)</option>
                    <option>Audience (AUDIENCE)</option>
                    <option>Type de document (TYPE)</option>
                </select>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Ordre d'affichage</label>
                    <input type="number" min="1" value="10" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                </div>
                <div class="flex items-end pb-2">
                    <label class="flex items-center gap-2 text-sm text-gray-700">
                        <input type="checkbox" checked class="rounded border-gray-300 text-primary"> Libellé actif
                    </label>
                </div>
            </div>

            <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onclick="toggleModal('modal-label', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm font-medium">Annuler</button>
                <button type="submit" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark text-sm font-medium shadow-sm">Créer le libellé</button>
            </div>
        </form>
    </div>
</div>
`;
