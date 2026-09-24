window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalInvite = `
<!-- ========================================== -->
<!-- MODALE : INVITATION UTILISATEUR            -->
<!-- ========================================== -->
<div id="modal-invite" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Ajouter un utilisateur</h3>
            <button onclick="toggleModal('modal-invite', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <!-- FORMULAIRE (Lié à table account et account_role) -->
        <form class="px-6 py-4 space-y-4" onsubmit="event.preventDefault(); alert('Formulaire soumis ! (Factice)'); toggleModal('modal-invite', false);">
            
            <div class="flex gap-3">
                <div class="flex-1">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Prénom <span class="text-red-500">*</span></label>
                    <input type="text" placeholder="Prénom de l'utilisateur" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                </div>
                <div class="flex-1">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Nom <span class="text-red-500">*</span></label>
                    <input type="text" placeholder="Nom de l'utilisateur" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                </div>
            </div>

            <div>
                <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Adresse email <span class="text-red-500">*</span></label>
                <input type="email" required placeholder="nom@entreprise.com" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
            </div>

            <div>
                <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Message personnalisé</label>
                <textarea rows="4" placeholder="Message facultatif ajouté à l'email d'invitation..." class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none resize-none"></textarea>
            </div>

            <!-- Boutons d'action du formulaire -->
            <div class="pt-4 mt-6 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onclick="toggleModal('modal-invite', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">Annuler</button>
                <button type="submit" class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark text-sm font-medium shadow-sm flex items-center gap-2">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" /></svg>
                    Envoyer l'invitation
                </button>
            </div>
        </form>
    </div>
</div>
`;
