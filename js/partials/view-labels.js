window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewLabels = `
<section id="view-labels" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto px-8 py-4">

        <!-- Onglets de catégories -->
        <div class="flex gap-2">
                <button type="button" onclick="switchLabelCategory(this, 0)" data-tab-color="label-tab-0" class="label-tab label-tab-0">Entités</button>
                <button type="button" onclick="switchLabelCategory(this, 1)" data-tab-color="label-tab-1" class="label-tab label-tab-inactive">Type d'instance</button>
                <button type="button" onclick="switchLabelCategory(this, 2)" data-tab-color="label-tab-3" class="label-tab label-tab-inactive">Type de document</button>
        </div>

        <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 h-[50vh] flex flex-col">
            <div class="label-filter-bar fb-tab-0 px-6 py-4 border-b border-gray-200">
                <div class="flex items-end gap-3">
                    <div class="flex-1 min-w-[220px]">
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Recherche</label>
                        <div class="search-box">
                            <svg class="search-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" /></svg>
                            <input id="label-search" type="text" oninput="filterLabels()" placeholder="Nom, code unique..." class="input input-search w-full">
                        </div>
                    </div>
                    <button onclick="openLabelModal()" class="btn btn-primary">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13h6" />
  <path d="m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79" />
  <path d="M19 10v6" />
  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                        Créer un libellé
                    </button>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto min-h-0">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
                <thead class="thead-tab-0 sticky top-0 z-10 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-3" onclick="sortTabTable(this, 0)">Nom <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-3" onclick="sortTabTable(this, 1)">Code Unique <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-3" onclick="sortTabTable(this, 2)">Ordre d'affichage <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-3" onclick="sortTabTable(this, 3)">Statut <span class="sort-indicator"></span></th>

                    </tr>
                </thead>
                <tbody id="labels-tbody-0" class="labels-tbody divide-y divide-gray-200">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="fondation chimay-wartoise" data-sort1="fcw" data-search="fondation chimay-wartoise fcw" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Fondation Chimay-Wartoise</td>
                            <td class="px-6 py-3 font-mono text-gray-500">FCW</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">1</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="chimay-gestion" data-sort1="cge" data-search="chimay-gestion chimay gestion cge" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Chimay-Gestion</td>
                            <td class="px-6 py-3 font-mono text-gray-500">CGE</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">1</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="chimay-patrimoine" data-sort1="cpa" data-search="chimay-patrimoine chimay patrimoine cpa" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Chimay-Patrimoine</td>
                            <td class="px-6 py-3 font-mono text-gray-500">CPA</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">2</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="abbaye notre-dame de scourmont" data-sort1="ads" data-search="abbaye notre-dame de scourmont ads" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Abbaye Notre-Dame de Scourmont</td>
                            <td class="px-6 py-3 font-mono text-gray-500">ADS</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">3</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="solidarité cistercienne" data-sort1="sol" data-search="solidarité cistercienne sol" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Solidarité Cistercienne</td>
                            <td class="px-6 py-3 font-mono text-gray-500">SOL</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">4</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="auberge de poteaupré" data-sort1="aub" data-search="auberge de poteaupré poteaupré aub" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Auberge de Poteaupré</td>
                            <td class="px-6 py-3 font-mono text-gray-500">AUB</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">5</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="espace chimay" data-sort1="esp" data-search="espace chimay esp" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Espace Chimay</td>
                            <td class="px-6 py-3 font-mono text-gray-500">ESP</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">6</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="boissons sambre et meuse" data-sort1="bsm" data-search="boissons sambre et meuse bsm" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Boissons Sambre et Meuse</td>
                            <td class="px-6 py-3 font-mono text-gray-500">BSM</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">7</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="bières de chimay" data-sort1="bdc" data-search="bières de chimay bdc" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Bières de Chimay</td>
                            <td class="px-6 py-3 font-mono text-gray-500">BDC</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">8</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="chimay fromages" data-sort1="fro" data-search="chimay fromages fro" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Chimay Fromages</td>
                            <td class="px-6 py-3 font-mono text-gray-500">FRO</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">9</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="les petits pas de la botte" data-sort1="ppb" data-search="les petits pas de la botte ppb" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Les Petits Pas de la Botte</td>
                            <td class="px-6 py-3 font-mono text-gray-500">PPB</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">10</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="la maison de casimir" data-sort1="mdc" data-search="la maison de casimir mdc" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">La Maison De Casimir</td>
                            <td class="px-6 py-3 font-mono text-gray-500">MDC</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">11</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="albatros poteaupré" data-sort1="ap" data-search="albatros poteaupré ap" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Albatros Poteaupré</td>
                            <td class="px-6 py-3 font-mono text-gray-500">AP</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">12</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                <tbody id="labels-tbody-1" class="labels-tbody divide-y divide-gray-200 hidden-view">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="organe d'administration" data-sort1="oa" data-search="organe d'administration oa" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Organe d'administration</td>
                            <td class="px-6 py-3 font-mono text-gray-500">OA</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">1</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="assemblée générale" data-sort1="ag" data-search="assemblée générale ag" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Assemblée générale</td>
                            <td class="px-6 py-3 font-mono text-gray-500">AG</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">2</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                <tbody id="labels-tbody-2" class="labels-tbody divide-y divide-gray-200 hidden-view">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="comptes" data-sort1="cpt" data-search="comptes cpt" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Comptes</td>
                            <td class="px-6 py-3 font-mono text-gray-500">CPT</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">1</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="budget" data-sort1="bdgt" data-search="budget bdgt" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Budget</td>
                            <td class="px-6 py-3 font-mono text-gray-500">BDGT</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">2</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="procès-verbal" data-sort1="pv" data-search="procès-verbal procès verbal pv" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Procès-verbal</td>
                            <td class="px-6 py-3 font-mono text-gray-500">PV</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">3</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="convocation" data-sort1="cnvc" data-search="convocation cnvc" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Convocation</td>
                            <td class="px-6 py-3 font-mono text-gray-500">CNVC</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">4</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="procuration" data-sort1="proc" data-search="procuration proc" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Procuration</td>
                            <td class="px-6 py-3 font-mono text-gray-500">PROC</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">5</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="notes" data-sort1="not" data-search="notes not" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Notes</td>
                            <td class="px-6 py-3 font-mono text-gray-500">NOT</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">5</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="présentation" data-sort1="pres" data-search="présentation pres" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Présentation</td>
                            <td class="px-6 py-3 font-mono text-gray-500">PRES</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">6</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="rapport annuel" data-sort1="ra" data-search="rapport annuel ra" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Rapport annuel</td>
                            <td class="px-6 py-3 font-mono text-gray-500">RA</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">7</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="bourse d'étude" data-sort1="betu" data-search="bourse d'étude betu" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Bourse d'étude</td>
                            <td class="px-6 py-3 font-mono text-gray-500">BETU</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">8</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="annexe" data-sort1="anx" data-search="annexe anx" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Annexe</td>
                            <td class="px-6 py-3 font-mono text-gray-500">ANX</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">9</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="extrait" data-sort1="extr" data-search="extrait extr" data-sort3="actif">
                            <td class="px-6 py-3 font-medium text-gray-900">Extrait</td>
                            <td class="px-6 py-3 font-mono text-gray-500">EXTR</td>
                            <td class="px-6 py-3">
                                <span class="flex items-center gap-2">
                                    <span class="label-order w-4 text-center text-gray-600">10</span>
                                    <span class="row-actions inline-flex items-center">
                                        <button onclick="moveLabel(this, -1)" title="Monter" class="order-up p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span></td>
                            <td class="px-6 py-3"><span class="badge badge-success">Actif</span></td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
            </table>
            </div>
        </div>

        <!-- FORMAT DE NOMMAGE DES FICHIERS TÉLÉCHARGÉS -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 mt-4">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 class="uppercase text-xs font-semibold text-gray-600">Format de nommage des fichiers téléchargés</h3>
            </div>

            <div class="px-6 py-5 space-y-5">
                <div>
                    <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Variables disponibles</h4>
                    <div class="columns-2 gap-x-8 text-sm">
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{titre document}</code><span class="text-gray-600">Titre du document</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{version document}</code><span class="text-gray-600">Numéro de version</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{entité}</code><span class="text-gray-600">Libellé complet de l'entité</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{entité code}</code><span class="text-gray-600">Code de l'entité (ex: CGE)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{instance}</code><span class="text-gray-600">Libellé complet de l'instance</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{instance code}</code><span class="text-gray-600">Code de l'instance (ex: OA, AG)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{type document}</code><span class="text-gray-600">Libellé complet du type de document</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{type document code}</code><span class="text-gray-600">Code du type de document (ex: PV)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{séance}</code><span class="text-gray-600">Nom de la séance</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{année document}</code><span class="text-gray-600">Année du document (AAAA)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{mois document}</code><span class="text-gray-600">Mois du document (MM)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{jour document}</code><span class="text-gray-600">Jour du document (JJ)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{année séance}</code><span class="text-gray-600">Année de la séance (AAAA)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{mois séance}</code><span class="text-gray-600">Mois de la séance (MM)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{jour séance}</code><span class="text-gray-600">Jour de la séance (JJ)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{année dépôt}</code><span class="text-gray-600">Année de dépôt (AAAA)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{mois dépôt}</code><span class="text-gray-600">Mois de dépôt (MM)</span></div>
                        <div class="flex items-baseline gap-2 break-inside-avoid mb-1.5"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0 cursor-pointer hover:bg-primary-light hover:text-primary" onclick="insertNamingVariable(this)" title="Insérer la variable">{jour dépôt}</code><span class="text-gray-600">Jour de dépôt (JJ)</span></div>
                    </div>
                </div>

                <div class="flex gap-3 items-end">
                    <div class="flex-1">
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Modèle prédéfini</label>
                        <select id="naming-preset" onchange="applyNamingPreset(this)" class="select w-full">
                            <option value="">Modèle personnalisé</option>
                            <option value="{titre document} - {jour document}-{mois document}-{année document} {entité} {instance} {type document}">{titre document} - {jour document}-{mois document}-{année document} {entité} {instance} {type document}</option>
                            <option value="{jour document}-{mois document}-{année document} - {titre document}">{jour document}-{mois document}-{année document} - {titre document}</option>
                            <option value="{entité code} {instance code} {type document code} - {titre document} v{version document}">{entité code} {instance code} {type document code} - {titre document} v{version document}</option>
                            <option value="{année document} - {titre document}">{année document} - {titre document}</option>
                            <option value="{séance} - {type document} - {titre document}">{séance} - {type document} - {titre document}</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label for="naming-format" class="block text-xs font-semibold text-gray-500 uppercase mb-1">Format</label>
                    <div class="flex items-center border border-gray-300 rounded-md bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary overflow-hidden">
                        <input id="naming-format" type="text" value="{titre document} - {entité code} {instance code} {type document code} {jour document}-{mois document}-{année document}" oninput="updateNamingExample()" class="flex-1 px-3 py-2 text-sm outline-none bg-transparent border-0">
                        <span class="px-3 py-2 text-sm font-mono text-gray-400 bg-gray-50 shrink-0 border-l border-gray-200 select-none">.extension</span>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Exemple de résultat : <span id="naming-example-result" class="font-mono"></span></p>
                    <p class="text-xs text-gray-400 mt-1">Symboles interdits : <span class="font-mono">\ / : * ? " &lt; &gt; |</span></p>
                </div>
            </div>

            <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button id="naming-reset" onclick="resetNamingFormat()" class="btn btn-outline-danger hidden-view">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" /></svg>
                    Réinitialiser
                </button>
                <button onclick="alert('Format de nommage appliqué (prototype)')" class="btn btn-primary">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
                    Appliquer
                </button>
            </div>
        </div>

        <div id="labels-none" class="hidden-view bg-white rounded-lg border border-gray-200 p-10 text-center text-gray-500">Aucun libellé ne correspond à votre recherche.</div>
    </div>
</section>
`;
