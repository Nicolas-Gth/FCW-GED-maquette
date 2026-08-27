window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewRecent = `
<section id="view-recent" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">

        <div class="flex items-center justify-between mb-4">
            <p class="text-sm text-gray-600">8 documents récemment consultés</p>
            <button onclick="navigateTo('view-documents')" class="text-sm text-primary hover:underline font-medium">Tous les documents →</button>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
                <thead class="bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Titre du document <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Dernière consultation <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Libellés <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Déposé par <span class="sort-indicator"></span></th>
                        <th class="px-6 py-4 w-32"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
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
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>

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
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>

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
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>

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
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>

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
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>

                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Bourse détude 2026 - Présentation.pdf')" data-sort0="bourse étude 2026 - présentation.pdf" data-sort1="20260815-1045" data-sort2="sol ext betu" data-sort3="jean dupont">
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
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>

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
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>

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
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
`;
