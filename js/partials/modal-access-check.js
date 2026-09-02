window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalAccessCheck = `
<div id="modal-access-check" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl flex flex-col max-h-[90vh]">

        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg shrink-0">
            <h3 class="text-lg font-bold text-gray-800">Vérifier les accès</h3>
            <button onclick="toggleModal('modal-access-check', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>

        <div class="flex-1 min-h-0 px-6 py-5 space-y-4 flex flex-col">
            <div class="shrink-0">
                <label class="block text-sm font-medium text-gray-700 mb-1">Rôles</label>
                <div id="ac-roles" class="multi-select" data-placeholder="Sélectionner un ou plusieurs rôles">
                    <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                        <span class="ms-value">Sélectionner un ou plusieurs rôles</span>
                        <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                    <div class="multi-select-panel hidden-view">
                        <label class="ms-option"><input type="checkbox" value="Administrateur système" onchange="msUpdate(this); updateAccessCheck()"> Administrateur système</label>
                        <label class="ms-option"><input type="checkbox" value="Membre de la direction CGE" onchange="msUpdate(this); updateAccessCheck()"> Membre de la direction CGE</label>
                        <label class="ms-option"><input type="checkbox" value="Secrétaire de séance" onchange="msUpdate(this); updateAccessCheck()"> Secrétaire de séance</label>
                        <label class="ms-option"><input type="checkbox" value="Assistant de direction" onchange="msUpdate(this); updateAccessCheck()"> Assistant de direction</label>
                        <label class="ms-option"><input type="checkbox" value="Auditeur externe" onchange="msUpdate(this); updateAccessCheck()"> Auditeur externe</label>
                        <label class="ms-option"><input type="checkbox" value="Partenaire externe CGE" onchange="msUpdate(this); updateAccessCheck()"> Partenaire externe CGE</label>
                    </div>
                </div>
            </div>

            <div class="flex-1 min-h-0 flex flex-col">
                <p id="ac-count" class="text-sm text-gray-600 mb-2 shrink-0">Aucun document visible pour la sélection.</p>
                <div class="border border-gray-200 rounded-lg overflow-y-auto flex-1 min-h-0">
                    <table class="data-table w-full text-left text-sm whitespace-nowrap">
                        <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                            <tr>
                                <th class="px-6 py-3">Titre du document</th>
                                <th class="px-6 py-3">Date du document</th>
                                <th class="px-6 py-3">Libellés</th>
                            </tr>
                        </thead>
                        <tbody id="ac-tbody" class="divide-y divide-gray-200">
                            <tr><td colspan="3" class="px-6 py-8 text-center text-gray-500">Sélectionnez un ou plusieurs rôles pour afficher les documents visibles.</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-lg">
            <button type="button" onclick="toggleModal('modal-access-check', false)" class="btn btn-primary">Fermer</button>
        </div>
    </div>
</div>
`;
