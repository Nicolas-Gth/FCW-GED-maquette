window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalLabel = `
<div id="modal-label" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Créer un libellé — <span id="modal-label-category">Entités</span></h3>
            <button onclick="toggleModal('modal-label', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <form class="px-6 py-5 space-y-4" onsubmit="event.preventDefault(); alert('Libellé créé !'); toggleModal('modal-label', false);">
            <div>
                <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Nom affiché <span class="text-red-500">*</span></label>
                <input type="text" required placeholder="Ex: Notes internes" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
            </div>

            <div>
                <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Code unique <span class="text-red-500">*</span></label>
                <input type="text" required placeholder="Ex: NOT" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-mono uppercase outline-none focus:border-primary focus:ring-1 focus:ring-primary">
            </div>

            <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onclick="toggleModal('modal-label', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">Annuler</button>
                <button type="submit" class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark text-sm font-medium shadow-sm flex items-center gap-2">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13h6" />
  <path d="m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79" />
  <path d="M19 10v6" />
  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                    Créer le libellé
                </button>
            </div>
        </form>
    </div>
</div>
`;
