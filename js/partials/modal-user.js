window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalUser = `
<div id="modal-user" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Fiche utilisateur</h3>
            <button onclick="toggleModal('modal-user', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <div class="px-6 py-5 space-y-5">
            <div class="flex items-center gap-4">
                <div id="user-popup-avatar" class="avatar w-16 h-16 text-xl avatar-red">PD</div>
                <div class="min-w-0">
                    <p id="user-popup-name" class="text-lg font-bold text-gray-900">Philippe Dumont</p>
                    <p id="user-popup-email" class="text-sm text-gray-500 truncate">p.dumont@chimay-gestion.be</p>
                    <span id="user-popup-status" class="badge badge-success mt-1">Actif</span>
                </div>
            </div>

            <div>
                <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Rôles</h4>
                <ul id="user-popup-roles" class="space-y-2"></ul>
            </div>

            <div class="bg-gray-50 rounded-md px-4 py-3 text-sm text-gray-600 flex items-center gap-2">
                <svg class="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M12 7v5l4 2" /></svg>
                Dernière connexion : <span id="user-popup-lastlogin" class="font-medium">24/08/2026 - 16:42</span>
            </div>

            <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button onclick="alert('Liste des documents accessibles pour cet utilisateur (simulation)')" class="text-sm text-primary hover:underline font-medium">Voir les accès documents</button>
                <div class="flex gap-3">
                    <button onclick="alert('Gestion des rôles (simulation)')" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark text-sm font-medium shadow-sm">Gérer les rôles</button>
                    <button onclick="toggleModal('modal-user', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm font-medium">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;
