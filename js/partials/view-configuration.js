window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewConfiguration = `
<section id="view-configuration" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">
        <div class="flex-1 overflow-y-auto min-h-0">
        <div class="max-w-3xl mx-auto w-full">

            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold text-gray-800">Configuration globale</h2>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 class="text-sm font-semibold text-gray-700 uppercase mb-4">Vue par défaut</h3>
                <div>
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Écran affiché à la connexion</label>
                    <select id="global-default-view" class="select w-full max-w-sm">
                        <option value="view-documents" selected>Documents</option>
                        <option value="view-recent">Activité récente</option>
                        <option value="view-calendar">Calendrier</option>
                    </select>
                    <p class="text-xs text-gray-500 mt-1">Cette vue s'ouvrira par défaut pour tous les utilisateurs de la plateforme lors de leur connexion.</p>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 class="text-sm font-semibold text-gray-700 uppercase mb-4">Sécurité de session</h3>
                <div>
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Durée de déconnexion automatique</label>
                    <select id="global-auto-logout" class="select w-full max-w-sm">
                        <option value="5">5 minutes</option>
                        <option value="15">15 minutes</option>
                        <option value="30" selected>30 minutes</option>
                        <option value="60">1 heure</option>
                        <option value="120">2 heures</option>
                        <option value="240">4 heures</option>
                        <option value="480">8 heures</option>
                        <option value="0">Jamais</option>
                    </select>
                    <p class="text-xs text-gray-500 mt-1">Après cette période d'inactivité, les utilisateurs seront automatiquement déconnectés de la plateforme.</p>
                </div>
            </div>

            <div class="flex justify-end">
                <button onclick="saveGlobalConfig()" class="btn btn-primary">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
  <path d="M17 21v-8H7v8" />
  <path d="M7 3v5h8" /></svg>
                    Enregistrer les modifications
                </button>
            </div>

        </div>
        </div>
    </div>
</section>
`;
