window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalInvite = `
<!-- ========================================== -->
<!-- MODALE : INVITATION UTILISATEUR            -->
<!-- ========================================== -->
<div id="modal-invite" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Envoyer une invitation</h3>
            <button onclick="toggleModal('modal-invite', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <!-- FORMULAIRE (Lié à table account et account_role) -->
        <form class="px-6 py-4 space-y-4" onsubmit="event.preventDefault(); alert('Formulaire soumis ! (Factice)'); toggleModal('modal-invite', false);">
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
                <input type="email" required placeholder="nom@entreprise.com" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
            </div>

            <div>
                <div class="flex gap-3 items-end mb-1">
                    <label class="flex-1 min-w-0 block text-sm font-medium text-gray-700">Rôle(s) assigné(s)</label>
                    <label class="w-40 block text-sm font-medium text-gray-700">À partir du</label>
                    <label class="w-40 block text-sm font-medium text-gray-700">Jusqu'au</label>
                </div>
                <div class="flex gap-3">
                    <select class="flex-1 min-w-0 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:ring-primary outline-none">
                        <option>Membre de la direction CGE</option>
                        <option>Secrétaire de séance</option>
                        <option>Auditeur externe</option>
                    </select>
                    <input type="date" class="w-40 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                    <input type="date" class="w-40 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                </div>
                <button type="button" onclick="alert('Ajout d un rôle (prototype)')" class="mt-3 btn btn-outline">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" />
  <path d="M12 5v14" /></svg>
                    Ajouter un rôle
                </button>
            </div>

            <!-- Boutons d'action du formulaire -->
            <div class="pt-4 mt-6 border-t border-gray-100 flex justify-end gap-3">
                <button type="button" onclick="toggleModal('modal-invite', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm font-medium">Annuler</button>
                <button type="submit" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark text-sm font-medium shadow-sm flex items-center gap-2">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" /></svg>
                    Envoyer l'invitation
                </button>
            </div>
        </form>
    </div>
</div>
`;
