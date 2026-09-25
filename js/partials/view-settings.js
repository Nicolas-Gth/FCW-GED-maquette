window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewSettings = `
<section id="view-settings" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">
        <div class="w-full flex-1 flex flex-col min-h-0">

            <div class="flex gap-2 shrink-0">
                <button type="button" onclick="switchSettingsTab(this, 0)" class="label-tab label-tab-active whitespace-nowrap">Profil</button>
                <button type="button" onclick="switchSettingsTab(this, 1)" class="label-tab label-tab-inactive whitespace-nowrap">Permissions générales</button>
                <button type="button" onclick="switchSettingsTab(this, 2)" class="label-tab label-tab-inactive whitespace-nowrap">Règles d'accès</button>
            </div>

            <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
                <div class="px-6 py-4 border-b border-gray-200 flex items-center gap-3 bg-gray-50 shrink-0">
                    <div class="avatar w-11 h-11 text-base avatar-red">PD</div>
                    <div class="min-w-0">
                        <h3 class="text-lg font-bold text-gray-800 leading-tight truncate">Philippe Dumont</h3>
                        <p class="text-xs text-gray-500 truncate">p.dumont@chimay-gestion.be</p>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto min-h-0">
                    <div class="settings-panel p-6">
                        <div class="border-t border-gray-100 divide-y divide-gray-100">
                            <div class="flex items-center justify-between py-3">
                                <span class="text-sm text-gray-500">Prénom</span>
                                <span class="text-sm font-medium text-gray-900">Philippe</span>
                            </div>
                            <div class="flex items-center justify-between py-3">
                                <span class="text-sm text-gray-500">Nom</span>
                                <span class="text-sm font-medium text-gray-900">Dumont</span>
                            </div>
                            <div class="flex items-center justify-between py-3">
                                <span class="text-sm text-gray-500">Adresse e-mail</span>
                                <span class="text-sm font-medium text-gray-900">p.dumont@chimay-gestion.be</span>
                            </div>
                            <div class="flex items-center justify-between py-3">
                                <span class="text-sm text-gray-500">Type de compte</span>
                                <span id="settings-type" class="badge badge-neutral"></span>
                            </div>
                            <div class="flex items-center justify-between py-3">
                                <span class="text-sm text-gray-500">Date d'ajout</span>
                                <span id="settings-added" class="text-sm font-medium text-gray-900"></span>
                            </div>
                        </div>
                    </div>

                    <div class="settings-panel p-6 hidden-view">
                        <div id="settings-perms"></div>
                    </div>

                    <div class="settings-panel p-6 hidden-view">
                        <div id="settings-access" class="space-y-3"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
`;
