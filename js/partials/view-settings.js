window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewSettings = `
<section id="view-settings" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">
        <div class="flex-1 overflow-y-auto min-h-0">
        <div class="max-w-3xl mx-auto w-full">

            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold text-gray-800">Paramètres du compte</h2>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                <h3 class="text-sm font-semibold text-gray-700 uppercase mb-4">Profil</h3>
                <div class="flex items-start gap-4">
                    <div class="avatar w-16 h-16 text-xl avatar-red">PD</div>
                    <div class="flex-1 grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Prénom</label>
                            <input type="text" value="Philippe" disabled class="w-full border border-gray-200 bg-gray-50 rounded-md px-3 py-2 text-sm text-gray-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Nom</label>
                            <input type="text" value="Dumont" disabled class="w-full border border-gray-200 bg-gray-50 rounded-md px-3 py-2 text-sm text-gray-500 outline-none">
                        </div>
                        <div class="col-span-2">
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
                            <input type="email" value="p.dumont@chimay-gestion.be" disabled class="w-full border border-gray-200 bg-gray-50 rounded-md px-3 py-2 text-sm text-gray-500 outline-none">
                            <p class="text-xs text-gray-500 mt-1">Identité (prénom, nom, email) gérée par Microsoft Entra ID (B2B) - non modifiable</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 class="text-sm font-semibold text-gray-700 uppercase mb-4">Rôles</h3>
                <ul class="space-y-2">
                    <li class="flex items-center justify-between bg-gray-50 rounded-md px-4 py-2.5">
                        <span class="font-medium text-gray-800 text-sm">Administrateur système</span>
                        <span class="text-xs text-gray-500">Depuis le 01/02/2024</span>
                    </li>
                </ul>
                <p class="text-xs text-gray-500 mt-3">Les rôles et privilèges sont attribués par un administrateur de la plateforme.</p>
            </div>

        </div>
        </div>
    </div>
</section>
`;
