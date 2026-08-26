window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewLabels = `
<section id="view-labels" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">

        <div class="flex items-center justify-between mb-6">
            <div class="relative w-72">
                <svg class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input id="label-search" type="text" oninput="filterLabels()" placeholder="Rechercher un libellé..." class="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none bg-white">
            </div>
            <button onclick="toggleModal('modal-label', true)" class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded shadow-sm font-medium flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                Créer un libellé
            </button>
        </div>

        <div class="space-y-6">

            <div class="label-category bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div class="px-6 py-3 bg-primary flex items-center">
                    <h3 class="text-sm font-bold text-white">Entité</h3>
                </div>
                <table class="w-full text-left text-sm whitespace-nowrap">
                    <thead class="bg-white text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                        <tr>
                            <th class="sortable px-6 py-3" onclick="sortTable(this, 0)">Nom <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-3" onclick="sortTable(this, 1)">Code Unique <span class="sort-indicator"></span></th>
                            <th class="px-6 py-3 w-36">Ordre d'affichage</th>
                            <th class="px-6 py-3 w-24"></th>
                        </tr>
                    </thead>
                    <tbody class="labels-tbody divide-y divide-gray-200">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="chimay gestion" data-sort1="cge" data-search="chimay gestion cge">
                            <td class="px-6 py-3 font-medium text-gray-900">Chimay gestion</td>
                            <td class="px-6 py-3 font-mono text-gray-500">CGE</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">1</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Chimay gestion')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Chimay gestion')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="chimay patrimoine" data-sort1="cpa" data-search="chimay patrimoine cpa">
                            <td class="px-6 py-3 font-medium text-gray-900">Chimay patrimoine</td>
                            <td class="px-6 py-3 font-mono text-gray-500">CPA</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">2</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Chimay patrimoine')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Chimay patrimoine')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="abbaye notre-dame de scourmont" data-sort1="ads" data-search="abbaye notre-dame de scourmont ads">
                            <td class="px-6 py-3 font-medium text-gray-900">Abbaye Notre-Dame de Scourmont</td>
                            <td class="px-6 py-3 font-mono text-gray-500">ADS</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">3</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Abbaye Notre-Dame de Scourmont')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Abbaye Notre-Dame de Scourmont')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="solidarité cistercienne" data-sort1="sol" data-search="solidarité cistercienne sol">
                            <td class="px-6 py-3 font-medium text-gray-900">Solidarité cistercienne</td>
                            <td class="px-6 py-3 font-mono text-gray-500">SOL</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">4</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Solidarité cistercienne')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Solidarité cistercienne')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="poteaupré" data-sort1="aub" data-search="poteaupré aub">
                            <td class="px-6 py-3 font-medium text-gray-900">Poteaupré</td>
                            <td class="px-6 py-3 font-mono text-gray-500">AUB</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">5</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Poteaupré')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Poteaupré')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="espace chimay" data-sort1="esp" data-search="espace chimay esp">
                            <td class="px-6 py-3 font-medium text-gray-900">Espace Chimay</td>
                            <td class="px-6 py-3 font-mono text-gray-500">ESP</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">6</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Espace Chimay')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Espace Chimay')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="boissons sambre et meuse" data-sort1="bsm" data-search="boissons sambre et meuse bsm">
                            <td class="px-6 py-3 font-medium text-gray-900">Boissons Sambre et Meuse</td>
                            <td class="px-6 py-3 font-mono text-gray-500">BSM</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">7</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Boissons Sambre et Meuse')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Boissons Sambre et Meuse')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="bières de chimay" data-sort1="bdc" data-search="bières de chimay bdc">
                            <td class="px-6 py-3 font-medium text-gray-900">Bières de Chimay</td>
                            <td class="px-6 py-3 font-mono text-gray-500">BDC</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">8</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Bières de Chimay')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Bières de Chimay')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="chimay fromages" data-sort1="fro" data-search="chimay fromages fro">
                            <td class="px-6 py-3 font-medium text-gray-900">Chimay fromages</td>
                            <td class="px-6 py-3 font-mono text-gray-500">FRO</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">9</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Chimay fromages')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Chimay fromages')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="les petits pas de la botte" data-sort1="ppb" data-search="les petits pas de la botte ppb">
                            <td class="px-6 py-3 font-medium text-gray-900">Les Petits Pas de la Botte</td>
                            <td class="px-6 py-3 font-mono text-gray-500">PPB</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">10</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Les Petits Pas de la Botte')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Les Petits Pas de la Botte')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="la maison de casimir" data-sort1="mdc" data-search="la maison de casimir mdc">
                            <td class="px-6 py-3 font-medium text-gray-900">La Maison De Casimir</td>
                            <td class="px-6 py-3 font-mono text-gray-500">MDC</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">11</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : La Maison De Casimir')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : La Maison De Casimir')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="albatros poteaupré" data-sort1="ap" data-search="albatros poteaupré ap">
                            <td class="px-6 py-3 font-medium text-gray-900">Albatros Poteaupré</td>
                            <td class="px-6 py-3 font-mono text-gray-500">AP</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">12</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Albatros Poteaupré')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Albatros Poteaupré')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="label-category bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div class="px-6 py-3 bg-violet-600 flex items-center">
                    <h3 class="text-sm font-bold text-white">Organe</h3>
                </div>
                <table class="w-full text-left text-sm whitespace-nowrap">
                    <thead class="bg-white text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                        <tr>
                            <th class="sortable px-6 py-3" onclick="sortTable(this, 0)">Nom <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-3" onclick="sortTable(this, 1)">Code Unique <span class="sort-indicator"></span></th>
                            <th class="px-6 py-3 w-36">Ordre d'affichage</th>
                            <th class="px-6 py-3 w-24"></th>
                        </tr>
                    </thead>
                    <tbody class="labels-tbody divide-y divide-gray-200">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="organe d'administration" data-sort1="oa" data-search="organe d'administration oa">
                            <td class="px-6 py-3 font-medium text-gray-900">Organe d'administration</td>
                            <td class="px-6 py-3 font-mono text-gray-500">OA</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">1</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Organe d administration')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Organe d administration')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="assemblée générale" data-sort1="ag" data-search="assemblée générale ag">
                            <td class="px-6 py-3 font-medium text-gray-900">Assemblée générale</td>
                            <td class="px-6 py-3 font-mono text-gray-500">AG</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">2</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Assemblée générale')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Assemblée générale')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="label-category bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div class="px-6 py-3 bg-emerald-600 flex items-center">
                    <h3 class="text-sm font-bold text-white">Audience</h3>
                </div>
                <table class="w-full text-left text-sm whitespace-nowrap">
                    <thead class="bg-white text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                        <tr>
                            <th class="sortable px-6 py-3" onclick="sortTable(this, 0)">Nom <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-3" onclick="sortTable(this, 1)">Code Unique <span class="sort-indicator"></span></th>
                            <th class="px-6 py-3 w-36">Ordre d'affichage</th>
                            <th class="px-6 py-3 w-24"></th>
                        </tr>
                    </thead>
                    <tbody class="labels-tbody divide-y divide-gray-200">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="interne" data-sort1="int" data-search="interne int">
                            <td class="px-6 py-3 font-medium text-gray-900">Interne</td>
                            <td class="px-6 py-3 font-mono text-gray-500">INT</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">1</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Interne')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Interne')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="externe" data-sort1="ext" data-search="externe ext">
                            <td class="px-6 py-3 font-medium text-gray-900">Externe</td>
                            <td class="px-6 py-3 font-mono text-gray-500">EXT</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">2</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Externe')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Externe')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="label-category bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div class="px-6 py-3 bg-amber-600 flex items-center">
                    <h3 class="text-sm font-bold text-white">Type de document</h3>
                </div>
                <table class="w-full text-left text-sm whitespace-nowrap">
                    <thead class="bg-white text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                        <tr>
                            <th class="sortable px-6 py-3" onclick="sortTable(this, 0)">Nom <span class="sort-indicator"></span></th>
                            <th class="sortable px-6 py-3" onclick="sortTable(this, 1)">Code Unique <span class="sort-indicator"></span></th>
                            <th class="px-6 py-3 w-36">Ordre d'affichage</th>
                            <th class="px-6 py-3 w-24"></th>
                        </tr>
                    </thead>
                    <tbody class="labels-tbody divide-y divide-gray-200">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="comptes" data-sort1="cpt" data-search="comptes cpt">
                            <td class="px-6 py-3 font-medium text-gray-900">Comptes</td>
                            <td class="px-6 py-3 font-mono text-gray-500">CPT</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">1</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Comptes')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Comptes')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="budget" data-sort1="bdgt" data-search="budget bdgt">
                            <td class="px-6 py-3 font-medium text-gray-900">Budget</td>
                            <td class="px-6 py-3 font-mono text-gray-500">BDGT</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">2</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Budget')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Budget')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="procès verbal" data-sort1="pv" data-search="procès verbal pv">
                            <td class="px-6 py-3 font-medium text-gray-900">Procès verbal</td>
                            <td class="px-6 py-3 font-mono text-gray-500">PV</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">3</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Procès verbal')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Procès verbal')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="convocation" data-sort1="cnvc" data-search="convocation cnvc">
                            <td class="px-6 py-3 font-medium text-gray-900">Convocation</td>
                            <td class="px-6 py-3 font-mono text-gray-500">CNVC</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">4</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Convocation')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Convocation')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="notes" data-sort1="not" data-search="notes not">
                            <td class="px-6 py-3 font-medium text-gray-900">Notes</td>
                            <td class="px-6 py-3 font-mono text-gray-500">NOT</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">5</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Notes')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Notes')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="présentation" data-sort1="pres" data-search="présentation pres">
                            <td class="px-6 py-3 font-medium text-gray-900">Présentation</td>
                            <td class="px-6 py-3 font-mono text-gray-500">PRES</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">6</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Présentation')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Présentation')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="rapport annuel" data-sort1="ra" data-search="rapport annuel ra">
                            <td class="px-6 py-3 font-medium text-gray-900">Rapport annuel</td>
                            <td class="px-6 py-3 font-mono text-gray-500">RA</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">7</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Rapport annuel')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Rapport annuel')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="bourse d'étude" data-sort1="betu" data-search="bourse d'étude betu">
                            <td class="px-6 py-3 font-medium text-gray-900">Bourse d'étude</td>
                            <td class="px-6 py-3 font-mono text-gray-500">BETU</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">8</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Bourse d étude')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Bourse d étude')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="annexe" data-sort1="anx" data-search="annexe anx">
                            <td class="px-6 py-3 font-medium text-gray-900">Annexe</td>
                            <td class="px-6 py-3 font-mono text-gray-500">ANX</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">9</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Annexe')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Annexe')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="extrait" data-sort1="extr" data-search="extrait extr">
                            <td class="px-6 py-3 font-medium text-gray-900">Extrait</td>
                            <td class="px-6 py-3 font-mono text-gray-500">EXTR</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">10</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Extrait')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Extrait')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

        <div id="labels-none" class="hidden-view bg-white rounded-lg border border-gray-200 p-10 text-center text-gray-500">Aucun libellé ne correspond à votre recherche.</div>
    </div>
</section>
`;
