window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewDocuments = `
<section id="view-documents" class="app-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">

        <!-- ZONE DE FILTRES -->
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
            <div class="flex flex-wrap gap-3 items-end">
                <div class="flex-1 min-w-[220px]">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Recherche texte</label>
                    <input id="f-search" type="text" oninput="filterDocuments()" placeholder="Titre, description..." class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                </div>

                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Entité</label>
                    <select id="f-entity" onchange="filterDocuments()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                        <option value="ALL">Toutes</option>
                        <option value="CGE">Chimay gestion (CGE)</option>
                        <option value="CPA">Chimay patrimoine (CPA)</option>
                        <option value="ADS">Abbaye de Scourmont (ADS)</option>
                        <option value="SOL">Solidarité cistercienne (SOL)</option>
                        <option value="AUB">Poteaupré (AUB)</option>
                        <option value="ESP">Espace Chimay (ESP)</option>
                        <option value="BSM">Boissons Sambre &amp; Meuse (BSM)</option>
                        <option value="BDC">Bières de Chimay (BDC)</option>
                        <option value="FRO">Chimay fromages (FRO)</option>
                        <option value="PPB">Les Petits Pas de la Botte (PPB)</option>
                        <option value="MDC">La Maison De Casimir (MDC)</option>
                        <option value="AP">Albatros Poteaupré (AP)</option>
                    </select>
                </div>

                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Organe</label>
                    <select id="f-organ" onchange="filterDocuments()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                        <option value="ALL">Tous</option>
                        <option value="OA">Organe d'administration (OA)</option>
                        <option value="AG">Assemblée générale (AG)</option>
                    </select>
                </div>

                <div class="w-40">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Audience</label>
                    <select id="f-audience" onchange="filterDocuments()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                        <option value="ALL">Toutes</option>
                        <option value="INT">Interne (INT)</option>
                        <option value="EXT">Externe (EXT)</option>
                    </select>
                </div>

                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Type de document</label>
                    <select id="f-type" onchange="filterDocuments()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                        <option value="ALL">Tous</option>
                        <option value="CPT">Comptes (CPT)</option>
                        <option value="BDGT">Budget (BDGT)</option>
                        <option value="PV">Procès verbal (PV)</option>
                        <option value="CNVC">Convocation (CNVC)</option>
                        <option value="NOT">Notes (NOT)</option>
                        <option value="PRES">Présentation (PRES)</option>
                        <option value="RA">Rapport annuel (RA)</option>
                        <option value="BETU">Bourse d'étude (BETU)</option>
                        <option value="ANX">Annexe (ANX)</option>
                        <option value="EXTR">Extrait (EXTR)</option>
                    </select>
                </div>

                <div class="w-40">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Date (du)</label>
                    <input id="f-date-from" type="date" onchange="filterDocuments()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                </div>

                <div class="w-40">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Date (au)</label>
                    <input id="f-date-to" type="date" onchange="filterDocuments()" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                </div>

                <button onclick="filterDocuments()" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded border border-gray-300 text-sm font-medium">
                    Appliquer
                </button>
                <button onclick="toggleModal('modal-save-view', true)" class="flex items-center gap-2 bg-primary-light hover:bg-light text-primary border border-primary-light px-4 py-2 rounded text-sm font-medium transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                    Enregistrer la vue
                </button>
                <button onclick="resetDocumentFilters()" class="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 px-4 py-2 rounded text-sm font-medium transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    Réinitialiser
                </button>
            </div>
        </div>

        <!-- BARRE D'OUTILS -->
        <div class="flex items-center justify-between mb-4">
            <p id="docs-count" class="text-sm text-gray-600">6 documents</p>
            <button onclick="toggleModal('modal-upload', true)" class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded shadow-sm font-medium flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                Déposer un document
            </button>
        </div>

        <!-- TABLEAU DES DOCUMENTS -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table class="w-full text-left text-sm whitespace-nowrap">
                <thead class="bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Titre du document <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Date de l'événement <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Libellés <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Déposé par <span class="sort-indicator"></span></th>
                        <th class="px-6 py-4 w-32"></th>
                    </tr>
                </thead>
                <tbody id="docs-tbody" class="divide-y divide-gray-200">
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-03-15" data-search="compte rendu ca mars 2026 pv cge oa int marie bernard" onclick="openPreview('Compte Rendu CA Mars 2026.pdf')" data-sort0="compte rendu ca mars 2026.pdf" data-sort1="2026-03-15" data-sort2="cge oa int pv" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Compte Rendu CA Mars 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">15 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">CGE</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 mr-1">OA</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 mr-1">INT</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Compte Rendu CA Mars 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Compte Rendu CA Mars 2026.pdf')" title="Historique" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Compte Rendu CA Mars 2026.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="CPT" data-date="2025-12-31" data-search="bilan financier annuel xlsx cpt cge oa int marc lemoine" onclick="openPreview('Bilan Financier Annuel.xlsx')" data-sort0="bilan financier annuel.xlsx" data-sort1="2025-12-31" data-sort2="cge oa cpt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                                Bilan Financier Annuel.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">31 Déc 2025</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">CGE</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 mr-1">OA</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">CPT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Bilan Financier Annuel.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Bilan Financier Annuel.xlsx')" title="Historique" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Bilan Financier Annuel.xlsx')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CPA" data-organ="AG" data-audience="EXT" data-type="RA" data-date="2026-02-12" data-search="rapport annuel 2025 pdf ra cpa ag ext jean dupont" onclick="openPreview('Rapport Annuel 2025.pdf')" data-sort0="rapport annuel 2025.pdf" data-sort1="2026-02-12" data-sort2="cpa ag ext ra" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Rapport Annuel 2025.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">12 Fév 2026</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">CPA</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 mr-1">AG</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 mr-1">EXT</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">RA</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Rapport Annuel 2025.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Rapport Annuel 2025.pdf')" title="Historique" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Rapport Annuel 2025.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="ADS" data-organ="AG" data-audience="INT" data-type="CNVC" data-date="2026-06-01" data-search="convocation ag 18 06 2026 pdf cnvc ads int marie bernard" onclick="openPreview('Convocation AG du 18.06.2026.pdf')" data-sort0="convocation ag du 18.06.2026.pdf" data-sort1="2026-06-01" data-sort2="ads ag cnvc" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Convocation AG du 18.06.2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">1 Juin 2026</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">ADS</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 mr-1">AG</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">CNVC</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Convocation AG du 18.06.2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Convocation AG du 18.06.2026.pdf')" title="Historique" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Convocation AG du 18.06.2026.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="BDC" data-organ="OA" data-audience="INT" data-type="BDGT" data-date="2026-09-30" data-search="budget prévisionnel 2027 xlsx bdgt bdc oa int marc lemoine" onclick="openPreview('Budget Prévisionnel 2027.xlsx')" data-sort0="budget prévisionnel 2027.xlsx" data-sort1="2026-09-30" data-sort2="bdc oa bdgt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                                Budget Prévisionnel 2027.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">30 Sep 2026</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">BDC</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 mr-1">OA</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">BDGT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Budget Prévisionnel 2027.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Budget Prévisionnel 2027.xlsx')" title="Historique" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Budget Prévisionnel 2027.xlsx')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="SOL" data-organ="OA" data-audience="EXT" data-type="BETU" data-date="2026-01-10" data-search="bourse d'étude 2026 présentation pdf betu sol oa ext jean dupont" onclick="openPreview('Bourse étude 2026 - Présentation.pdf')" data-sort0="bourse étude 2026 - présentation.pdf" data-sort1="2026-01-10" data-sort2="sol oa ext betu" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Bourse d'étude 2026 - Présentation.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">10 Jan 2026</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">SOL</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 mr-1">OA</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 mr-1">EXT</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">BETU</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Bourse étude 2026 - Présentation.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Bourse étude 2026 - Présentation.pdf')" title="Historique" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Bourse étude 2026 - Présentation.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr id="docs-empty" class="empty-row hidden-view">
                        <td colspan="5" class="px-6 py-10 text-center text-gray-500">Aucun document ne correspond à vos filtres.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
`;
