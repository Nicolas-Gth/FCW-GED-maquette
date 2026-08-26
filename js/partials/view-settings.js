window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewSettings = `
<section id="view-settings" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">
        <div class="max-w-3xl mx-auto w-full">

            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold text-gray-800">Paramètres du compte</h2>
                <button onclick="navigateTo('view-documents')" class="flex items-center gap-2 text-sm text-primary hover:underline font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    Retour
                </button>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 class="text-sm font-semibold text-gray-700 uppercase mb-4">Profil</h3>
                <div class="flex items-start gap-4">
                    <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shrink-0">JD</div>
                    <div class="flex-1 grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Prénom</label>
                            <input type="text" value="Jean" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Nom</label>
                            <input type="text" value="Dupont" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
                            <input type="email" value="j.dupont@chimay-wartoise.be" disabled class="w-full border border-gray-200 bg-gray-50 rounded-md px-3 py-2 text-sm text-gray-500 outline-none">
                            <p class="text-xs text-gray-500 mt-1">Géré par Microsoft Entra ID (B2B) - non modifiable</p>
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex justify-end">
                    <button onclick="alert('Profil enregistré (prototype)')" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark text-sm font-medium shadow-sm">Enregistrer</button>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 class="text-sm font-semibold text-gray-700 uppercase mb-4">Préférences</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Vue par défaut</label>
                        <select class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none focus:border-primary">
                            <option>Récemment consultés</option>
                            <option selected>Documents</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Langue</label>
                        <select class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none focus:border-primary">
                            <option selected>Français</option>
                            <option>Nederlands</option>
                        </select>
                    </div>
                </div>
                <label class="flex items-center gap-2 text-sm text-gray-700 mt-4">
                    <input type="checkbox" checked class="rounded border-gray-300 text-primary"> Recevoir les notifications par email
                </label>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 class="text-sm font-semibold text-gray-700 uppercase mb-4">Sécurité</h3>
                <p class="text-sm text-gray-600 mb-4">Compte lié au Microsoft Entra ID de la Fondation Chimay-Wartoise. La connexion passe par l'authentification Microsoft (MFA).</p>
                <button onclick="alert('Déconnexion (prototype)')" class="flex items-center gap-2 px-4 py-2 border border-danger text-danger rounded hover:bg-light text-sm font-medium transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    Se déconnecter
                </button>
            </div>

        </div>
    </div>
</section>
`;
