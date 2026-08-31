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
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" />
  <path d="M12 5v14" /></svg>
                Créer un libellé
            </button>
        </div>

        <!-- Onglets de catégories -->
        <div class="flex gap-2">
                <button type="button" onclick="switchLabelCategory(this, 0)" class="label-tab label-tab-0">Entité</button>
                <button type="button" onclick="switchLabelCategory(this, 1)" class="label-tab label-tab-inactive">Organe</button>
                <button type="button" onclick="switchLabelCategory(this, 2)" class="label-tab label-tab-inactive">Audience</button>
                <button type="button" onclick="switchLabelCategory(this, 3)" class="label-tab label-tab-inactive">Type de document</button>
                <button type="button" onclick="switchLabelCategory(this, 4)" class="label-tab label-tab-inactive">Année</button>
        </div>

        <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 overflow-hidden">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
                <thead class="thead-tab-0 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-3" onclick="sortTabTable(this, 0)">Nom <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-3" onclick="sortTabTable(this, 1)">Code Unique <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-3" onclick="sortTabTable(this, 2)">Ordre d'affichage <span class="sort-indicator"></span></th>
                        <th class="px-6 py-3 w-24"></th>
                    </tr>
                </thead>
                <tbody id="labels-tbody-0" class="labels-tbody divide-y divide-gray-200">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="chimay gestion" data-sort1="cge" data-search="chimay gestion cge">
                            <td class="px-6 py-3 font-medium text-gray-900">Chimay gestion</td>
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
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Chimay gestion')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Chimay gestion')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Chimay patrimoine')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Chimay patrimoine')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Abbaye Notre-Dame de Scourmont')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Abbaye Notre-Dame de Scourmont')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Solidarité cistercienne')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Solidarité cistercienne')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Poteaupré')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Poteaupré')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Espace Chimay')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Espace Chimay')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Boissons Sambre et Meuse')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Boissons Sambre et Meuse')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Bières de Chimay')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Bières de Chimay')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Chimay fromages')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Chimay fromages')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Les Petits Pas de la Botte')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Les Petits Pas de la Botte')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : La Maison De Casimir')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : La Maison De Casimir')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Albatros Poteaupré')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Albatros Poteaupré')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                <tbody id="labels-tbody-1" class="labels-tbody divide-y divide-gray-200 hidden-view">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="organe d'administration" data-sort1="oa" data-search="organe d'administration oa">
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
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Organe d administration')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Organe d administration')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Assemblée générale')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Assemblée générale')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                <tbody id="labels-tbody-2" class="labels-tbody divide-y divide-gray-200 hidden-view">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="interne" data-sort1="int" data-search="interne int">
                            <td class="px-6 py-3 font-medium text-gray-900">Interne</td>
                            <td class="px-6 py-3 font-mono text-gray-500">INT</td>
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
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Interne')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Interne')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Externe')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Externe')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                <tbody id="labels-tbody-3" class="labels-tbody divide-y divide-gray-200 hidden-view">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="comptes" data-sort1="cpt" data-search="comptes cpt">
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
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Comptes')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Comptes')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Budget')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Budget')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Procès verbal')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Procès verbal')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Convocation')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Convocation')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Notes')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Notes')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Présentation')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Présentation')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Rapport annuel')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Rapport annuel')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Bourse d étude')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Bourse d étude')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Annexe')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Annexe')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                                        </button>
                                        <button onclick="moveLabel(this, 1)" title="Descendre" class="order-down p-1 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                            <svg class="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                        </button>
                                    </span>
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : Extrait')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : Extrait')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="empty-row hidden-view">
                            <td colspan="4" class="px-6 py-6 text-center text-gray-500">Aucun libellé dans cette catégorie.</td>
                        </tr>
                    </tbody>
                <tbody id="labels-tbody-4" class="labels-tbody divide-y divide-gray-200 hidden-view">
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="2026" data-sort1="2026" data-search="2026">
                            <td class="px-6 py-3 font-medium text-gray-900">2026</td>
                            <td class="px-6 py-3 font-mono text-gray-500">2026</td>
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
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : 2026')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : 2026')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="2025" data-sort1="2025" data-search="2025">
                            <td class="px-6 py-3 font-medium text-gray-900">2025</td>
                            <td class="px-6 py-3 font-mono text-gray-500">2025</td>
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
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : 2025')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : 2025')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr class="hover:bg-primary-light transition-colors" data-sort0="2024" data-sort1="2024" data-search="2024">
                            <td class="px-6 py-3 font-medium text-gray-900">2024</td>
                            <td class="px-6 py-3 font-mono text-gray-500">2024</td>
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
                                </span>
                            </td>
                            <td class="px-6 py-3 text-right">
                                <span class="row-actions inline-flex items-center gap-1">
                                    <button onclick="alert('Modification du libellé : 2024')" title="Modifier" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" /></svg>
                                    </button>
                                    <button onclick="alert('Désactivation du libellé : 2024')" title="Désactiver" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors">
                                        <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
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

        <div id="labels-none" class="hidden-view bg-white rounded-lg border border-gray-200 p-10 text-center text-gray-500">Aucun libellé ne correspond à votre recherche.</div>
    </div>
</section>
`;
