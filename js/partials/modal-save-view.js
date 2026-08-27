window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalSaveView = `
<div id="modal-save-view" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Enregistrer la vue</h3>
            <button onclick="toggleModal('modal-save-view', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <form class="px-6 py-5 space-y-4" onsubmit="event.preventDefault(); saveView();">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nom de la vue</label>
                <input id="save-view-name" type="text" required placeholder="Ex: CA 2026" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                <p class="text-xs text-gray-500 mt-1">La vue conserve les filtres et le tri actuellement appliqués.</p>
            </div>

            <label class="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" class="rounded border-gray-300 text-primary"> Définir comme vue par défaut
            </label>

            <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onclick="toggleModal('modal-save-view', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm font-medium">Annuler</button>
                <button type="submit" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark text-sm font-medium shadow-sm flex items-center gap-2">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" /></svg>
                    Enregistrer
                </button>
            </div>
        </form>
    </div>
</div>
`;
