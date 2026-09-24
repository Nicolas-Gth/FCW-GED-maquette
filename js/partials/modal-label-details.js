window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalLabelDetails = `
<div id="modal-label-details" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Détails du libellé</h3>
            <button onclick="toggleModal('modal-label-details', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <div class="px-6 py-5 space-y-5">
            <div class="border-t border-gray-100 divide-y divide-gray-100">
                <div class="flex items-center justify-between py-2.5">
                    <span class="text-sm text-gray-500">Nom affiché</span>
                    <span id="label-details-name" class="text-sm font-medium text-gray-900"></span>
                </div>
                <div class="flex items-center justify-between py-2.5">
                    <span class="text-sm text-gray-500">Code unique</span>
                    <span id="label-details-code" class="text-sm font-mono text-gray-500"></span>
                </div>
                <div class="flex items-center justify-between py-2.5">
                    <span class="text-sm text-gray-500">Catégorie</span>
                    <span id="label-details-category" class="text-sm font-medium text-gray-900"></span>
                </div>
                <div class="flex items-center justify-between py-2.5">
                    <span class="text-sm text-gray-500">Ordre d'affichage</span>
                    <span id="label-details-order" class="text-sm font-medium text-gray-900"></span>
                </div>
                <div class="flex items-center justify-between py-2.5">
                    <span class="text-sm text-gray-500">Statut</span>
                    <span id="label-details-status" class="badge badge-success">Actif</span>
                </div>
                <div class="flex items-center justify-between py-2.5">
                    <span class="text-sm text-gray-500">Documents liés</span>
                    <span id="label-details-count" class="text-sm font-medium text-gray-900"></span>
                </div>
            </div>

            <div class="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button onclick="alert('Modification du libellé (simulation)')" class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark text-sm font-medium shadow-sm">Modifier</button>
            </div>
        </div>
    </div>
</div>
`;
