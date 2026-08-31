window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewRecent = `
<section id="view-recent" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <!-- Onglets -->
        <div class="flex gap-2">
            <button type="button" onclick="switchRecentCategory(this, 0)" class="label-tab label-tab-active">Consultés récemment</button>
            <button type="button" onclick="switchRecentCategory(this, 1)" class="label-tab label-tab-inactive">Ajoutés récemment</button>
            <button type="button" onclick="switchRecentCategory(this, 2)" class="label-tab label-tab-inactive">Partagés récemment</button>
        </div>

        <div class="bg-white rounded-lg rounded-tl-none shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
            <div class="flex-1 overflow-y-auto min-h-0">
            <table class="data-table table-actions w-full text-left text-sm whitespace-nowrap">
                <thead class="bg-gray-50 text-gray-600 sticky top-0 z-10 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTabTable(this, 0)">Titre du document <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTabTable(this, 1)">Dernière activité <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTabTable(this, 2)">Libellés <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTabTable(this, 3)">Déposé par <span class="sort-indicator"></span></th>

                    </tr>
                </thead>
                <tbody id="recent-tbody-0" class="labels-tbody divide-y divide-gray-200">
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Compte Rendu CA Mars 2026.pdf')" data-sort0="compte rendu ca mars 2026.pdf" data-sort1="20260824-1642" data-sort2="cge pv" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Compte Rendu CA Mars 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Aujourd'hui - 16:42</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-violet">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Compte Rendu CA Mars 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Compte Rendu CA Mars 2026.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Compte Rendu CA Mars 2026.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Rapport Annuel 2025.pdf')" data-sort0="rapport annuel 2025.pdf" data-sort1="20260823-1440" data-sort2="cpa ext ra" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Rapport Annuel 2025.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Hier - 14:40</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">RA</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Rapport Annuel 2025.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Rapport Annuel 2025.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Rapport Annuel 2025.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Bilan Financier Annuel.xlsx')" data-sort0="bilan financier annuel.xlsx" data-sort1="20260821-0912" data-sort2="cge cpt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Bilan Financier Annuel.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">21/08/2026 - 09:12</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-violet">CPT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Bilan Financier Annuel.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Bilan Financier Annuel.xlsx')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Bilan Financier Annuel.xlsx')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Convocation AG du 18.06.2026.pdf')" data-sort0="convocation ag du 18.06.2026.pdf" data-sort1="20260819-1103" data-sort2="ads cnvc" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Convocation AG du 18.06.2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">19/08/2026 - 11:03</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">ADS</span>
                            <span class="badge badge-violet">CNVC</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Convocation AG du 18.06.2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Convocation AG du 18.06.2026.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Convocation AG du 18.06.2026.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Budget Prévisionnel 2027.xlsx')" data-sort0="budget prévisionnel 2027.xlsx" data-sort1="20260818-1527" data-sort2="bdc bdgt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Budget Prévisionnel 2027.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">18/08/2026 - 15:27</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">BDC</span>
                            <span class="badge badge-violet">BDGT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Budget Prévisionnel 2027.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Budget Prévisionnel 2027.xlsx')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Budget Prévisionnel 2027.xlsx')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Bourse détude 2026 - Présentation.pdf')" data-sort0="bourse détude 2026 - présentation.pdf" data-sort1="20260815-1045" data-sort2="sol ext betu" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Bourse d'étude 2026 - Présentation.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">15/08/2026 - 10:45</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">SOL</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">BETU</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Bourse détude 2026 - Présentation.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Bourse détude 2026 - Présentation.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Bourse détude 2026 - Présentation.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Procès Verbal CA Avril 2026.pdf')" data-sort0="procès verbal ca avril 2026.pdf" data-sort1="20260812-0930" data-sort2="cge pv" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Procès Verbal CA Avril 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">12/08/2026 - 09:30</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-violet">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Procès Verbal CA Avril 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Procès Verbal CA Avril 2026.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Procès Verbal CA Avril 2026.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Extrait CA - Direction Financière.pdf')" data-sort0="extrait ca - direction financière.pdf" data-sort1="20260808-1720" data-sort2="cge oa extr" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Extrait CA - Direction Financière.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">08/08/2026 - 17:20</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">EXTR</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Extrait CA - Direction Financière.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Extrait CA - Direction Financière.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Extrait CA - Direction Financière.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                </tbody>
                <tbody id="recent-tbody-1" class="labels-tbody divide-y divide-gray-200 hidden-view">
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Budget Prévisionnel 2027.xlsx')" data-sort0="budget prévisionnel 2027.xlsx" data-sort1="20260824-1530" data-sort2="bdc oa bdgt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Budget Prévisionnel 2027.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Ajouté le 24/08/2026 - 15:30</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">BDC</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">BDGT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Budget Prévisionnel 2027.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Budget Prévisionnel 2027.xlsx')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Budget Prévisionnel 2027.xlsx')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Compte Rendu CA Mars 2026.pdf')" data-sort0="compte rendu ca mars 2026.pdf" data-sort1="20260824-1405" data-sort2="cge oa int pv" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Compte Rendu CA Mars 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Ajouté le 24/08/2026 - 14:05</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">INT</span>
                            <span class="badge badge-violet">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Compte Rendu CA Mars 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Compte Rendu CA Mars 2026.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Compte Rendu CA Mars 2026.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Procès Verbal CA Septembre 2026.pdf')" data-sort0="procès verbal ca septembre 2026.pdf" data-sort1="20260823-1745" data-sort2="cge oa pv" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Procès Verbal CA Septembre 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Ajouté le 23/08/2026 - 17:45</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Procès Verbal CA Septembre 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Procès Verbal CA Septembre 2026.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Procès Verbal CA Septembre 2026.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Suivi Financier Partenariats 2026.xlsx')" data-sort0="suivi financier partenariats 2026.xlsx" data-sort1="20260823-1120" data-sort2="esp oa ext cpt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Suivi Financier Partenariats 2026.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Ajouté le 23/08/2026 - 11:20</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">ESP</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">CPT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Suivi Financier Partenariats 2026.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Suivi Financier Partenariats 2026.xlsx')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Suivi Financier Partenariats 2026.xlsx')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Projet Rénovation Bâtiments - Étude.pdf')" data-sort0="projet rénovation bâtiments - étude.pdf" data-sort1="20260822-1610" data-sort2="cpa oa ext pres" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Projet Rénovation Bâtiments - Étude.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Ajouté le 22/08/2026 - 16:10</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">PRES</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Projet Rénovation Bâtiments - Étude.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Projet Rénovation Bâtiments - Étude.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Projet Rénovation Bâtiments - Étude.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                </tbody>
                <tbody id="recent-tbody-2" class="labels-tbody divide-y divide-gray-200 hidden-view">
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Rapport Annuel 2025.pdf')" data-sort0="rapport annuel 2025.pdf" data-sort1="20260824-0912" data-sort2="cpa ag ext ra" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Rapport Annuel 2025.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Partagé avec Philippe Dumont le 24/08/2026 - 09:12</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-emerald me-1">AG</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">RA</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Rapport Annuel 2025.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Rapport Annuel 2025.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Rapport Annuel 2025.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Bourse détude 2026 - Présentation.pdf')" data-sort0="bourse détude 2026 - présentation.pdf" data-sort1="20260823-1440" data-sort2="sol oa ext betu" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Bourse d'étude 2026 - Présentation.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Partagé avec Sophie Durant le 23/08/2026 - 14:40</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">SOL</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">BETU</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Bourse détude 2026 - Présentation.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Bourse détude 2026 - Présentation.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Bourse détude 2026 - Présentation.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Partenariat Espace Chimay - Note.pdf')" data-sort0="partenariat espace chimay - note.pdf" data-sort1="20260823-1030" data-sort2="esp oa ext not" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Partenariat Espace Chimay - Note.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Partagé avec Laurent Petit le 23/08/2026 - 10:30</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">ESP</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">NOT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Partenariat Espace Chimay - Note.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Partenariat Espace Chimay - Note.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Partenariat Espace Chimay - Note.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Comptes Annuels 2025.xlsx')" data-sort0="comptes annuels 2025.xlsx" data-sort1="20260822-1615" data-sort2="cge oa int cpt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Comptes Annuels 2025.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Partagé avec Philippe Dumont le 22/08/2026 - 16:15</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">INT</span>
                            <span class="badge badge-violet">CPT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Comptes Annuels 2025.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Comptes Annuels 2025.xlsx')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Comptes Annuels 2025.xlsx')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Projet Rénovation Bâtiments - Étude.pdf')" data-sort0="projet rénovation bâtiments - étude.pdf" data-sort1="20260821-1105" data-sort2="cpa oa ext pres" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Projet Rénovation Bâtiments - Étude.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Partagé avec Auditeurs externes le 21/08/2026 - 11:05</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">PRES</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Projet Rénovation Bâtiments - Étude.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Projet Rénovation Bâtiments - Étude.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Projet Rénovation Bâtiments - Étude.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span></td>

                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</section>
`;
