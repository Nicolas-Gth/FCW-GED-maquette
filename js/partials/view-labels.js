window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewLabels = `
<section id="view-labels" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto px-8 py-4">

        <div class="flex items-center justify-between mb-6">
            <div class="search-box w-72">
                <svg class="search-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" /></svg>
                <input id="label-search" type="text" oninput="filterLabels()" placeholder="Rechercher un libellé..." class="input input-search w-full">
            </div>
            <button onclick="toggleModal('modal-label', true)" class="btn btn-primary">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13h6" />
  <path d="m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79" />
  <path d="M19 10v6" />
  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                Créer un libellé
            </button>
        </div>

        <!-- Onglets de catégories -->
        <div class="flex gap-2">
                <button type="button" onclick="switchLabelCategory(this, 0)" data-tab-color="label-tab-0" class="label-tab label-tab-0">Entités</button>
                <button type="button" onclick="switchLabelCategory(this, 1)" data-tab-color="label-tab-1" class="label-tab label-tab-inactive">Type d'instance</button>
                <button type="button" onclick="switchLabelCategory(this, 2)" data-tab-color="label-tab-3" class="label-tab label-tab-inactive">Type de document</button>
        </div>

        <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 overflow-hidden">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
                <thead class="thead-tab-0 border-b border-gray-200 uppercase text-xs font-semibold">
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

        <!-- FORMAT DE NOMMAGE DES FICHIERS TÉLÉCHARGÉS -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 mt-4">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h3 class="text-sm font-semibold text-gray-800">Format de nommage des fichiers téléchargés</h3>
            </div>

            <div class="px-6 py-5 space-y-5">
                <div>
                    <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Variables disponibles</h4>
                    <div class="grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{titre document}</code><span class="text-gray-600">Titre du document</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{version}</code><span class="text-gray-600">Numéro de version</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{entité}</code><span class="text-gray-600">Entité (libellé complet)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{entité code}</code><span class="text-gray-600">Entité (code, ex. CGE)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{instance}</code><span class="text-gray-600">Instance (libellé complet)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{instance code}</code><span class="text-gray-600">Instance (code, ex. OA / AG)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{type document}</code><span class="text-gray-600">Type de document (libellé complet)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{type document code}</code><span class="text-gray-600">Type de document (code, ex. PV)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{séance}</code><span class="text-gray-600">Nom de la séance</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{date document}</code><span class="text-gray-600">Date du document (JJ/MM/AAAA)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{date document iso}</code><span class="text-gray-600">Date du document (AAAA-MM-JJ)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{date document court}</code><span class="text-gray-600">Date du document (JJ/MM/AA)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{année document}</code><span class="text-gray-600">Année du document (AAAA)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{mois document}</code><span class="text-gray-600">Mois du document (MM)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{jour document}</code><span class="text-gray-600">Jour du document (JJ)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{date séance}</code><span class="text-gray-600">Date de la séance (JJ/MM/AAAA)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{date séance iso}</code><span class="text-gray-600">Date de la séance (AAAA-MM-JJ)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{année séance}</code><span class="text-gray-600">Année de la séance (AAAA)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{date dépôt}</code><span class="text-gray-600">Date de dépôt (JJ/MM/AAAA)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{année dépôt}</code><span class="text-gray-600">Année de dépôt (AAAA)</span></div>
                        <div class="flex items-baseline gap-2"><code class="font-mono text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded shrink-0">{date du jour}</code><span class="text-gray-600">Date du jour (JJ/MM/AAAA)</span></div>
                    </div>
                </div>

                <div class="flex gap-3 items-end">
                    <div class="flex-1">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Modèle prédéfini</label>
                        <select id="naming-preset" onchange="applyNamingPreset(this)" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-mono outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                            <option value="">Modèle personnalisé</option>
                            <option value="{titre document} - {date document} {entité} {instance} {type document}">{titre document} - {date document} {entité} {instance} {type document}</option>
                            <option value="{date document iso} - {titre document}">{date document iso} - {titre document}</option>
                            <option value="{entité code} {instance code} {type document code} - {titre document} v{version}">{entité code} {instance code} {type document code} - {titre document} v{version}</option>
                            <option value="{année document} - {titre document}">{année document} - {titre document}</option>
                            <option value="{séance} - {type document} - {titre document}">{séance} - {type document} - {titre document}</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label for="naming-format" class="block text-sm font-medium text-gray-700 mb-1">Format</label>
                    <div class="flex items-center gap-1">
                        <input id="naming-format" type="text" value="{titre document} - {date document} {entité} {instance} {type document}" oninput="updateNamingExample()" class="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm font-mono outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                        <span class="text-sm font-mono text-gray-600 shrink-0">.extension</span>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Exemple de résultat : <span id="naming-example-result" class="font-mono"></span></p>
                </div>
            </div>

            <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3">
                <button id="naming-reset" onclick="resetNamingFormat()" class="btn btn-outline-danger hidden-view">Réinitialiser</button>
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
