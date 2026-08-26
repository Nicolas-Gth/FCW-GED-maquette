window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalInvite = `
<!-- ========================================== -->
<!-- MODALE : INVITATION UTILISATEUR            -->
<!-- ========================================== -->
<div id="modal-invite" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Envoyer une invitation</h3>
            <button onclick="toggleModal('modal-invite', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        
        <!-- FORMULAIRE (Lié à table account et account_role) -->
        <form class="px-6 py-4 space-y-4" onsubmit="event.preventDefault(); alert('Formulaire soumis ! (Factice)'); toggleModal('modal-invite', false);">
            
            <div class="flex gap-4">
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input type="text" required class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                </div>
                <div class="flex-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input type="text" required class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Adresse Email professionnelle</label>
                <input type="email" required placeholder="nom@entreprise.com" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Rôle initial assigné</label>
                <select class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:ring-primary outline-none">
                    <option>Membre de la direction CGE</option>
                    <option>Secrétaire de séance</option>
                    <option>Auditeur externe</option>
                </select>
                <p class="text-xs text-gray-500 mt-1">Le rôle détermine les privilèges initiaux de cet utilisateur.</p>
            </div>

            <!-- Boutons d'action du formulaire -->
            <div class="pt-4 mt-6 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onclick="toggleModal('modal-invite', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm font-medium">Annuler</button>
                <button type="submit" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark text-sm font-medium shadow-sm">Envoyer l'invitation</button>
            </div>
        </form>
    </div>
</div>
`;
