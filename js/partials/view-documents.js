window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewDocuments = `
<section id="view-documents" class="app-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <!-- ZONE DE FILTRES -->
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
            <div class="flex flex-wrap gap-3 items-end">
                <div class="flex-1 min-w-[220px]">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Recherche</label>
                    <div class="search-box">
                        <svg class="search-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" /></svg>
                        <input id="f-search" type="text" oninput="filterDocuments()" placeholder="Titre, description, auteur..." class="input input-search w-full">
                    </div>
                </div>

                <div id="filters-dates" class="flex gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Date</label>
                        <div class="flex items-center gap-3">
                            <select id="f-date-type" onchange="onDateFilterTypeChange()" class="select">
                                <option value="event">Date de séance</option>
                                <option value="doc">Date du document</option>
                                <option value="deposit">Date de dépôt</option>
                            </select>
                            <input id="f-date-from" type="date" onchange="filterDocuments()" title="Date précise ou de début" class="input">
                            <button type="button" id="f-date-interval-btn" onclick="toggleDateRange(true)" class="btn btn-outline">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M8 2v4" />
  <path d="M16 2v4" />
  <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
  <path d="M3 10h18" />
  <path d="M16 19h6" />
  <path d="M19 16v6" /></svg>
                                Intervalle
                            </button>
                            <div id="f-date-end-wrap" class="hidden-view items-center gap-3">
                                <span class="text-sm text-gray-500">au</span>
                                <input id="f-date-to" type="date" onchange="filterDocuments()" class="input">
                                <button type="button" onclick="toggleDateRange(false)" title="Passer en date précise" class="btn btn-outline-danger">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M8 2v4" />
  <path d="M16 2v4" />
  <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
  <path d="M3 10h18" />
  <path d="m17 22 5-5" />
  <path d="m17 17 5 5" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="btn-show-filters" onclick="showFiltersPanel()" class="btn btn-outline hidden-view">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    Afficher les filtres
                </button>
            </div>

            <div id="filters-collapsible">
            <div class="flex flex-wrap gap-3 items-end mt-3">
                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Entité</label>
                                        <div id="f-entity" class="multi-select" data-placeholder="Toutes">
                        <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                            <span class="ms-value">Toutes</span>
                            <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                        <div class="multi-select-panel hidden-view">
                            <label class="ms-option"><input type="checkbox" value="FCW" onchange="msUpdate(this); filterDocuments()"> Fondation Chimay-Wartoise (FCW)</label>
                            <label class="ms-option"><input type="checkbox" value="CGE" onchange="msUpdate(this); filterDocuments()"> Chimay-Gestion (CGE)</label>
                            <label class="ms-option"><input type="checkbox" value="CPA" onchange="msUpdate(this); filterDocuments()"> Chimay-Patrimoine (CPA)</label>
                            <label class="ms-option"><input type="checkbox" value="ADS" onchange="msUpdate(this); filterDocuments()"> Abbaye Notre-Dame de Scourmont (ADS)</label>
                            <label class="ms-option"><input type="checkbox" value="SOL" onchange="msUpdate(this); filterDocuments()"> Solidarité Cistercienne (SOL)</label>
                            <label class="ms-option"><input type="checkbox" value="AUB" onchange="msUpdate(this); filterDocuments()"> Auberge de Poteaupré (AUB)</label>
                            <label class="ms-option"><input type="checkbox" value="ESP" onchange="msUpdate(this); filterDocuments()"> Espace Chimay (ESP)</label>
                            <label class="ms-option"><input type="checkbox" value="BSM" onchange="msUpdate(this); filterDocuments()"> Boissons Sambre et Meuse (BSM)</label>
                            <label class="ms-option"><input type="checkbox" value="BDC" onchange="msUpdate(this); filterDocuments()"> Bières de Chimay (BDC)</label>
                            <label class="ms-option"><input type="checkbox" value="FRO" onchange="msUpdate(this); filterDocuments()"> Chimay Fromages (FRO)</label>
                            <label class="ms-option"><input type="checkbox" value="PPB" onchange="msUpdate(this); filterDocuments()"> Les Petits Pas de la Botte (PPB)</label>
                            <label class="ms-option"><input type="checkbox" value="MDC" onchange="msUpdate(this); filterDocuments()"> La Maison De Casimir (MDC)</label>
                            <label class="ms-option"><input type="checkbox" value="AP" onchange="msUpdate(this); filterDocuments()"> Albatros Poteaupré (AP)</label>
                        </div>
                    </div>
                </div>

                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Organe</label>
                                        <div id="f-organ" class="multi-select" data-placeholder="Tous">
                        <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                            <span class="ms-value">Tous</span>
                            <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                        <div class="multi-select-panel hidden-view">
                            <label class="ms-option"><input type="checkbox" value="OA" onchange="msUpdate(this); filterDocuments()"> Organe d'administration (OA)</label>
                            <label class="ms-option"><input type="checkbox" value="AG" onchange="msUpdate(this); filterDocuments()"> Assemblée générale (AG)</label>
                        </div>
                    </div>
                </div>

                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Type de document</label>
                                        <div id="f-type" class="multi-select" data-placeholder="Tous">
                        <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                            <span class="ms-value">Tous</span>
                            <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                        <div class="multi-select-panel hidden-view">
                            <label class="ms-option"><input type="checkbox" value="CPT" onchange="msUpdate(this); filterDocuments()"> Comptes (CPT)</label>
                            <label class="ms-option"><input type="checkbox" value="BDGT" onchange="msUpdate(this); filterDocuments()"> Budget (BDGT)</label>
                            <label class="ms-option"><input type="checkbox" value="PV" onchange="msUpdate(this); filterDocuments()"> Procès-verbal (PV)</label>
                            <label class="ms-option"><input type="checkbox" value="CNVC" onchange="msUpdate(this); filterDocuments()"> Convocation (CNVC)</label>
                            <label class="ms-option"><input type="checkbox" value="NOT" onchange="msUpdate(this); filterDocuments()"> Notes (NOT)</label>
                            <label class="ms-option"><input type="checkbox" value="PRES" onchange="msUpdate(this); filterDocuments()"> Présentation (PRES)</label>
                            <label class="ms-option"><input type="checkbox" value="RA" onchange="msUpdate(this); filterDocuments()"> Rapport annuel (RA)</label>
                            <label class="ms-option"><input type="checkbox" value="BETU" onchange="msUpdate(this); filterDocuments()"> Bourse d'étude (BETU)</label>
                            <label class="ms-option"><input type="checkbox" value="ANX" onchange="msUpdate(this); filterDocuments()"> Annexe (ANX)</label>
                            <label class="ms-option"><input type="checkbox" value="PROC" onchange="msUpdate(this); filterDocuments()"> Procuration (PROC)</label>
                            <label class="ms-option"><input type="checkbox" value="EXTR" onchange="msUpdate(this); filterDocuments()"> Extrait (EXTR)</label>
                        </div>
                    </div>
                </div>

                <div class="w-64">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Regrouper catégories</label>
                    <div id="f-grouping" class="multi-select" data-placeholder="Choisir une catégorie">
                        <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                            <span class="ms-value">Choisir une catégorie</span>
                            <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                        <div id="f-grouping-panel" class="multi-select-panel hidden-view">
                            <label class="ms-option"><input type="checkbox" value="entity" data-name="Entité" onchange="onGroupingChange(this)"><span class="opt-label">Entité</span></label>
                            <label class="ms-option"><input type="checkbox" value="organ" data-name="Organe" onchange="onGroupingChange(this)"><span class="opt-label">Organe</span></label>
                            <label class="ms-option"><input type="checkbox" value="type" data-name="Type de document" onchange="onGroupingChange(this)"><span class="opt-label">Type de document</span></label>
                            <label class="ms-option"><input type="checkbox" value="year" data-name="Année" onchange="onGroupingChange(this)"><span class="opt-label">Année</span></label>
                            <label class="ms-option"><input type="checkbox" value="event" data-name="Séance" onchange="onGroupingChange(this)"><span class="opt-label">Séance</span></label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap gap-3 items-end mt-3">
                <div class="w-64">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Vue courante</label>
                    <select id="saved-view-select" onchange="applySavedView(this)" class="select w-full"></select>
                </div>
                <button id="btn-save-new-view" onclick="toggleModal('modal-save-view', true)" class="btn btn-outline hidden-view">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" /></svg>
                    Enregistrer une nouvelle vue
                </button>
                <button id="btn-delete-view" onclick="openDeleteViewModal()" class="btn btn-outline-danger hidden-view">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  <path d="m14.5 9.5-5 5" />
  <path d="m9.5 9.5 5 5" /></svg>
                    Supprimer la vue
                </button>
                <button onclick="resetDocumentFilters()" class="btn btn-outline-danger">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" />
  <path d="m16.5 3.5 5 5" />
  <path d="m21.5 3.5-5 5" /></svg>
                    Réinitialiser les filtres
                </button>
                <button id="btn-hide-filters" onclick="hideFiltersPanel()" class="btn btn-outline ml-auto">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6" /></svg>
                    Masquer les filtres
                </button>
            </div>
            </div>
        </div>

        <!-- BARRE D'OUTILS -->
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
                <p id="docs-count" class="text-sm text-gray-600">22 documents</p>
            </div>
            <button onclick="toggleModal('modal-upload', true)" class="btn btn-primary">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg>
                Déposer un document
            </button>
        </div>

        <!-- TABLEAU DES DOCUMENTS -->
        <div id="docs-table-card" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
            <div class="flex-1 overflow-y-auto min-h-0">
            <table class="data-table table-actions w-full text-left text-sm whitespace-nowrap">
                <thead class="sticky top-0 z-10 bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Titre du document <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Date du document <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Libellés <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Déposé par <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 4)">Date du dépôt <span class="sort-indicator"></span></th>

                    </tr>
                </thead>
                <tbody id="docs-tbody" class="divide-y divide-gray-200">
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="FCW" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-01-23" data-search="pv oa fcw du 23-01-2026 fcw oa int pv julie stavrakas" data-event="ev7" onclick="openPreview('2026fcw006 - PV OA FCW du 23-01-2026.doc')" data-sort0="2026fcw006 - pv oa fcw du 23-01-2026.doc" data-sort1="2026-01-23" data-sort2="fcw oa int pv seance du 23/01/2026" data-sort4="2026-01-26" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-blue-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                2026fcw006 - PV OA FCW du 23-01-2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">23 Jan 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">FCW</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">PV</span> <span class="badge badge-event me-1">Séance du 23/01/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">26 Jan 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : 2026fcw006 - PV OA FCW du 23-01-2026.doc')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('2026fcw006 - PV OA FCW du 23-01-2026.doc', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('2026fcw006 - PV OA FCW du 23-01-2026.doc', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('2026fcw006 - PV OA FCW du 23-01-2026.doc', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="FCW" data-organ="OA" data-audience="INT" data-type="CNVC" data-date="2026-03-26" data-search="convocation oa fcw du 09-04-2026 fcw oa int cnvc philippe dumont" data-event="ev8" onclick="openPreview('2026fcw016 - Convocation OA FCW du 09-04-2026.pdf')" data-sort0="2026fcw016 - convocation oa fcw du 09-04-2026.pdf" data-sort1="2026-03-26" data-sort2="fcw oa int cnvc seance du 09/04/2026" data-sort4="2026-03-26" data-sort3="philippe dumont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                2026fcw016 - Convocation OA FCW du 09-04-2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">26 Mar 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">FCW</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">CNVC</span> <span class="badge badge-event me-1">Séance du 09/04/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Philippe Dumont</td>
                        <td class="px-6 py-4 text-gray-500">26 Mar 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : 2026fcw016 - Convocation OA FCW du 09-04-2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('2026fcw016 - Convocation OA FCW du 09-04-2026.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('2026fcw016 - Convocation OA FCW du 09-04-2026.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('2026fcw016 - Convocation OA FCW du 09-04-2026.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="FCW" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-04-09" data-search="pv oa fcw du 09-04-2026 fcw oa int pv julie stavrakas" data-event="ev8" onclick="openPreview('2026fcw024 - PV OA FCW du 09-04-2026.doc')" data-sort0="2026fcw024 - pv oa fcw du 09-04-2026.doc" data-sort1="2026-04-09" data-sort2="fcw oa int pv seance du 09/04/2026" data-sort4="2026-04-12" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-blue-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                2026fcw024 - PV OA FCW du 09-04-2026
                                <svg class="w-4 h-4 text-gray-400 shrink-0" title="Contient des annexes" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">9 Avr 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">FCW</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">PV</span> <span class="badge badge-event me-1">Séance du 09/04/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">12 Avr 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : 2026fcw024 - PV OA FCW du 09-04-2026.doc')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('2026fcw024 - PV OA FCW du 09-04-2026.doc', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('2026fcw024 - PV OA FCW du 09-04-2026.doc', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('2026fcw024 - PV OA FCW du 09-04-2026.doc', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="FCW" data-organ="OA" data-audience="INT" data-type="ANX" data-date="2026-04-09" data-search="annexe pv oa fcw du 09-04-2026 presentation csrd 2025 fcw oa int anx philippe dumont" data-event="ev8" onclick="openPreview('2026fcw028 - Annexe PV OA FCW du 09-04-2026 - Présentation CSRD 2025.pptx')" data-sort0="2026fcw028 - annexe pv oa fcw du 09-04-2026 - presentation csrd 2025.pptx" data-sort1="2026-04-09" data-sort2="fcw oa int anx seance du 09/04/2026" data-sort4="2026-04-12" data-sort3="philippe dumont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-orange-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M2 3h20" />
  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
  <path d="m7 21 5-5 5 5" /></svg>
                                2026fcw028 - Annexe PV OA FCW du 09-04-2026 - Présentation CSRD 2025
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">9 Avr 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">FCW</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">ANX</span> <span class="badge badge-event me-1">Séance du 09/04/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Philippe Dumont</td>
                        <td class="px-6 py-4 text-gray-500">12 Avr 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : 2026fcw028 - Annexe PV OA FCW du 09-04-2026 - Présentation CSRD 2025.pptx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('2026fcw028 - Annexe PV OA FCW du 09-04-2026 - Présentation CSRD 2025.pptx', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('2026fcw028 - Annexe PV OA FCW du 09-04-2026 - Présentation CSRD 2025.pptx', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('2026fcw028 - Annexe PV OA FCW du 09-04-2026 - Présentation CSRD 2025.pptx', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="FCW" data-organ="AG" data-audience="EXT" data-type="PV" data-date="2026-06-23" data-search="pv ag fcw du 23-06-2026 fcw ag ext pv julie stavrakas" data-event="ev9" onclick="openPreview('2026fcw038 - PV AG FCW du 23-06-2026.doc')" data-sort0="2026fcw038 - pv ag fcw du 23-06-2026.doc" data-sort1="2026-06-23" data-sort2="fcw ag ext pv seance du 23/06/2026" data-sort4="2026-06-26" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-blue-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                2026fcw038 - PV AG FCW du 23-06-2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">23 Juin 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">FCW</span>
                            <span class="badge badge-emerald me-1">AG</span>
                            <span class="badge badge-violet me-1">PV</span> <span class="badge badge-event me-1">Séance du 23/06/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">26 Juin 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : 2026fcw038 - PV AG FCW du 23-06-2026.doc')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('2026fcw038 - PV AG FCW du 23-06-2026.doc', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('2026fcw038 - PV AG FCW du 23-06-2026.doc', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('2026fcw038 - PV AG FCW du 23-06-2026.doc', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-03-15" data-search="compte rendu ca mars 2026 pv cge oa int julie stavrakas" data-event="ev2" onclick="openPreview('Compte Rendu CA Mars 2026.pdf')" data-sort0="compte rendu ca mars 2026.pdf" data-sort1="2026-03-15" data-sort2="cge oa int pv ca de mars 2026" data-sort4="2026-03-18" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Compte Rendu CA Mars 2026
                                <svg class="w-4 h-4 text-gray-400 shrink-0" title="Contient des annexes" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">15 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">PV</span> <span class="badge badge-event me-1">Séance du 15/03/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">18 Mars 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Compte Rendu CA Mars 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Compte Rendu CA Mars 2026.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Compte Rendu CA Mars 2026.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Compte Rendu CA Mars 2026.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="CPT" data-date="2025-12-31" data-search="bilan financier annuel xlsx cpt cge oa int marc lemoine" onclick="openPreview('Bilan Financier Annuel.xlsx')" data-sort0="bilan financier annuel.xlsx" data-sort1="2025-12-31" data-sort2="cge oa cpt" data-sort4="2026-01-03" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Bilan Financier Annuel
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">31 Déc 2025</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">CPT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-gray-500">3 Jan 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Bilan Financier Annuel.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Bilan Financier Annuel.xlsx', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Bilan Financier Annuel.xlsx', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Bilan Financier Annuel.xlsx', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CPA" data-organ="AG" data-audience="EXT" data-type="RA" data-date="2026-02-12" data-search="rapport annuel 2025 pdf ra cpa ag ext denis buchet" data-event="ev4" onclick="openPreview('Rapport Annuel 2025.pdf')" data-sort0="rapport annuel 2025.pdf" data-sort1="2026-02-12" data-sort2="cpa ag ext ra assemblee generale" data-sort4="2026-02-15" data-sort3="denis buchet">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Rapport Annuel 2025
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">12 Fév 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-emerald me-1">AG</span>
                            <span class="badge badge-violet me-1">RA</span> <span class="badge badge-event me-1">Séance du 01/06/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Denis Buchet</td>
                        <td class="px-6 py-4 text-gray-500">15 Fév 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Rapport Annuel 2025.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Rapport Annuel 2025.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Rapport Annuel 2025.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Rapport Annuel 2025.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="ADS" data-organ="AG" data-audience="INT" data-type="CNVC" data-date="2026-06-01" data-search="convocation ag 18 06 2026 pdf cnvc ads int julie stavrakas" data-event="ev4" onclick="openPreview('Convocation AG du 18.06.2026.pdf')" data-sort0="convocation ag du 18.06.2026.pdf" data-sort1="2026-06-01" data-sort2="ads ag cnvc assemblee generale" data-sort4="2026-06-04" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Convocation AG du 18.06.2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">1 Juin 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">ADS</span>
                            <span class="badge badge-emerald me-1">AG</span>
                            <span class="badge badge-violet me-1">CNVC</span> <span class="badge badge-event me-1">Séance du 01/06/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">4 Juin 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Convocation AG du 18.06.2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Convocation AG du 18.06.2026.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Convocation AG du 18.06.2026.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Convocation AG du 18.06.2026.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="BDC" data-organ="OA" data-audience="INT" data-type="BDGT" data-date="2026-09-30" data-search="budget prévisionnel 2027 xlsx bdgt bdc oa int marc lemoine" onclick="openPreview('Budget Prévisionnel 2027.xlsx')" data-sort0="budget prévisionnel 2027.xlsx" data-sort1="2026-09-30" data-sort2="bdc oa bdgt" data-sort4="2026-10-03" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Budget Prévisionnel 2027
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">30 Sep 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">BDC</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">BDGT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-gray-500">3 Oct 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Budget Prévisionnel 2027.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Budget Prévisionnel 2027.xlsx', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Budget Prévisionnel 2027.xlsx', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Budget Prévisionnel 2027.xlsx', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="SOL" data-organ="OA" data-audience="EXT" data-type="BETU" data-date="2026-01-10" data-search="bourse d'étude 2026 présentation pdf betu sol oa ext denis buchet" onclick="openPreview('Bourse étude 2026 - Présentation.pdf')" data-sort0="bourse étude 2026 - présentation.pdf" data-sort1="2026-01-10" data-sort2="sol oa ext betu" data-sort4="2026-01-13" data-sort3="denis buchet">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Bourse d'étude 2026 - Présentation
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">10 Jan 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">SOL</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">BETU</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Denis Buchet</td>
                        <td class="px-6 py-4 text-gray-500">13 Jan 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Bourse étude 2026 - Présentation.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Bourse étude 2026 - Présentation.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Bourse étude 2026 - Présentation.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Bourse étude 2026 - Présentation.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-01-22" data-search="procès verbal ca janvier 2026 pv cge oa int julie stavrakas" data-event="ev1" onclick="openPreview('Procès Verbal CA Janvier 2026.pdf')" data-sort0="procès verbal ca janvier 2026.pdf" data-sort1="2026-01-22" data-sort2="cge oa int pv seance du 22/01/2026" data-sort4="2026-01-25" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Procès Verbal CA Janvier 2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">22 Janvier 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">PV</span> <span class="badge badge-event me-1">Séance du 22/01/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">25 Jan 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Procès Verbal CA Janvier 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Procès Verbal CA Janvier 2026.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Procès Verbal CA Janvier 2026.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Procès Verbal CA Janvier 2026.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-04-16" data-search="procès verbal ca avril 2026 pv cge oa int julie stavrakas" data-event="ev3" onclick="openPreview('Procès Verbal CA Avril 2026.pdf')" data-sort0="procès verbal ca avril 2026.pdf" data-sort1="2026-04-16" data-sort2="cge oa int pv seance du 16/04/2026" data-sort4="2026-04-19" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Procès Verbal CA Avril 2026
                                <svg class="w-4 h-4 text-gray-400 shrink-0" title="Contient des annexes" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">16 Avril 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">PV</span> <span class="badge badge-event me-1">Séance du 16/04/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">19 Avril 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Procès Verbal CA Avril 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Procès Verbal CA Avril 2026.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Procès Verbal CA Avril 2026.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Procès Verbal CA Avril 2026.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-06-25" data-search="procès verbal ca juin 2026 pv cge oa int julie stavrakas" data-event="ev5" onclick="openPreview('Procès Verbal CA Juin 2026.pdf')" data-sort0="procès verbal ca juin 2026.pdf" data-sort1="2026-06-25" data-sort2="cge oa int pv seance du 25/06/2026" data-sort4="2026-06-28" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Procès Verbal CA Juin 2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">25 Juin 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">PV</span> <span class="badge badge-event me-1">Séance du 25/06/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">28 Juin 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Procès Verbal CA Juin 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Procès Verbal CA Juin 2026.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Procès Verbal CA Juin 2026.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Procès Verbal CA Juin 2026.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-09-17" data-search="procès verbal ca septembre 2026 pv cge oa int julie stavrakas" data-event="ev6" onclick="openPreview('Procès Verbal CA Septembre 2026.pdf')" data-sort0="procès verbal ca septembre 2026.pdf" data-sort1="2026-09-17" data-sort2="cge oa int pv seance du 17/09/2026" data-sort4="2026-09-20" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Procès Verbal CA Septembre 2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">17 Septembre 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">PV</span> <span class="badge badge-event me-1">Séance du 17/09/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">20 Sep 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Procès Verbal CA Septembre 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Procès Verbal CA Septembre 2026.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Procès Verbal CA Septembre 2026.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Procès Verbal CA Septembre 2026.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CPA" data-organ="OA" data-audience="EXT" data-type="PRES" data-date="2026-03-05" data-search="projet rénovation bâtiments étude pdf pres cpa oa ext denis buchet" onclick="openPreview('Projet Rénovation Bâtiments - Étude.pdf')" data-sort0="projet rénovation bâtiments - étude.pdf" data-sort1="2026-03-05" data-sort2="cpa oa ext pres" data-sort4="2026-03-08" data-sort3="denis buchet">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Projet Rénovation Bâtiments - Étude
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">5 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">PRES</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Denis Buchet</td>
                        <td class="px-6 py-4 text-gray-500">8 Mars 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Projet Rénovation Bâtiments - Étude.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Projet Rénovation Bâtiments - Étude.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Projet Rénovation Bâtiments - Étude.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Projet Rénovation Bâtiments - Étude.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="ESP" data-organ="OA" data-audience="EXT" data-type="NOT" data-date="2026-05-14" data-search="partenariat espace chimay note pdf not esp oa ext marc lemoine" onclick="openPreview('Partenariat Espace Chimay - Note.pdf')" data-sort0="partenariat espace chimay - note.pdf" data-sort1="2026-05-14" data-sort2="esp oa ext not" data-sort4="2026-05-17" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Partenariat Espace Chimay - Note
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">14 Mai 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">ESP</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">NOT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-gray-500">17 Mai 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Partenariat Espace Chimay - Note.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Partenariat Espace Chimay - Note.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Partenariat Espace Chimay - Note.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Partenariat Espace Chimay - Note.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="SOL" data-organ="OA" data-audience="EXT" data-type="BETU" data-date="2026-02-20" data-search="résultats bourse d'étude 2025 pdf betu sol oa denis buchet" onclick="openPreview('Résultats Bourse étude 2025.pdf')" data-sort0="résultats bourse étude 2025.pdf" data-sort1="2026-02-20" data-sort2="sol oa betu" data-sort4="2026-02-23" data-sort3="denis buchet">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Résultats Bourse d'étude 2025
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">20 Février 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">SOL</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">BETU</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Denis Buchet</td>
                        <td class="px-6 py-4 text-gray-500">23 Fév 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Résultats Bourse étude 2025.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Résultats Bourse étude 2025.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Résultats Bourse étude 2025.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Résultats Bourse étude 2025.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="BDGT" data-date="2026-02-10" data-search="budget ca 2026 xlsx bdgt cge oa int marc lemoine" data-event="ev1" onclick="openPreview('Budget CA 2026.xlsx')" data-sort0="budget ca 2026.xlsx" data-sort1="2026-02-10" data-sort2="cge oa int bdgt seance du 22/01/2026" data-sort4="2026-02-13" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Budget CA 2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">10 Février 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">BDGT</span> <span class="badge badge-event me-1">Séance du 22/01/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-gray-500">13 Fév 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Budget CA 2026.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Budget CA 2026.xlsx', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Budget CA 2026.xlsx', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Budget CA 2026.xlsx', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="CPT" data-date="2026-03-20" data-search="comptes annuels 2025 xlsx cpt cge oa int marc lemoine" data-event="ev2 ev3" onclick="openPreview('Comptes Annuels 2025.xlsx')" data-sort0="comptes annuels 2025.xlsx" data-sort1="2026-03-20" data-sort2="cge oa int cpt ca de mars 2026 seance du 16/04/2026" data-sort4="2026-03-23" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Comptes Annuels 2025
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">20 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">CPT</span> <span class="badge badge-event me-1">Séance du 15/03/2026</span> <span class="badge badge-event me-1">Séance du 16/04/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-gray-500">23 Mars 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Comptes Annuels 2025.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Comptes Annuels 2025.xlsx', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Comptes Annuels 2025.xlsx', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Comptes Annuels 2025.xlsx', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CPA" data-organ="OA" data-audience="EXT" data-type="BDGT" data-date="2026-04-02" data-search="budget projet rénovation 2026 xlsx bdgt cpa oa ext denis buchet" onclick="openPreview('Budget Projet Rénovation 2026.xlsx')" data-sort0="budget projet rénovation 2026.xlsx" data-sort1="2026-04-02" data-sort2="cpa oa ext bdgt" data-sort4="2026-04-05" data-sort3="denis buchet">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Budget Projet Rénovation 2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">2 Avril 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">BDGT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Denis Buchet</td>
                        <td class="px-6 py-4 text-gray-500">5 Avril 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Budget Projet Rénovation 2026.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Budget Projet Rénovation 2026.xlsx', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Budget Projet Rénovation 2026.xlsx', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Budget Projet Rénovation 2026.xlsx', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="ESP" data-organ="OA" data-audience="EXT" data-type="CPT" data-date="2026-06-10" data-search="suivi financier partenariats 2026 xlsx cpt esp oa ext marc lemoine" onclick="openPreview('Suivi Financier Partenariats 2026.xlsx')" data-sort0="suivi financier partenariats 2026.xlsx" data-sort1="2026-06-10" data-sort2="esp oa ext cpt" data-sort4="2026-06-13" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Suivi Financier Partenariats 2026
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">10 Juin 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">ESP</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet">CPT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-gray-500">13 Juin 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Suivi Financier Partenariats 2026.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Suivi Financier Partenariats 2026.xlsx', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Suivi Financier Partenariats 2026.xlsx', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Suivi Financier Partenariats 2026.xlsx', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="ANX" data-date="2026-03-15" data-search="plan de trésorerie 03-2026 xlsx anx cge oa int julie stavrakas" data-event="ev2" onclick="openPreview('Plan de trésorerie 03-2026.xlsx')" data-sort0="plan de trésorerie 03-2026.xlsx" data-sort1="2026-03-15" data-sort2="cge oa int anx seance du 15/03/2026" data-sort4="2026-03-18" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Plan de trésorerie 03-2026.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">15 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">ANX</span> <span class="badge badge-event me-1">Séance du 15/03/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">18 Mars 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Plan de trésorerie 03-2026.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Plan de trésorerie 03-2026.xlsx', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Plan de trésorerie 03-2026.xlsx', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Plan de trésorerie 03-2026.xlsx', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="ANX" data-date="2026-03-15" data-search="liste de présence 15-03-2026 pdf anx cge oa int julie stavrakas" data-event="ev2" onclick="openPreview('Liste de présence 15-03-2026.pdf')" data-sort0="liste de présence 15-03-2026.pdf" data-sort1="2026-03-15" data-sort2="cge oa int anx seance du 15/03/2026" data-sort4="2026-03-18" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Liste de présence 15-03-2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">15 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">ANX</span> <span class="badge badge-event me-1">Séance du 15/03/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">18 Mars 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Liste de présence 15-03-2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Liste de présence 15-03-2026.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Liste de présence 15-03-2026.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Liste de présence 15-03-2026.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="FCW" data-organ="OA" data-audience="INT" data-type="ANX" data-date="2026-04-09" data-search="annexe 1 rapport d’activité 2025 pdf anx fcw oa int julie stavrakas" data-event="ev8" onclick="openPreview('Annexe 1 - Rapport d’activité 2025.pdf')" data-sort0="annexe 1 - rapport d’activité 2025.pdf" data-sort1="2026-04-09" data-sort2="fcw oa int anx seance du 09/04/2026" data-sort4="2026-04-12" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Annexe 1 - Rapport d’activité 2025.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">9 Avr 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">FCW</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">ANX</span> <span class="badge badge-event me-1">Séance du 09/04/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">12 Avr 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Annexe 1 - Rapport d’activité 2025.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Annexe 1 - Rapport d’activité 2025.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Annexe 1 - Rapport d’activité 2025.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Annexe 1 - Rapport d’activité 2025.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="FCW" data-organ="OA" data-audience="INT" data-type="ANX" data-date="2026-04-09" data-search="annexe 2 liste de présence pdf anx fcw oa int julie stavrakas" data-event="ev8" onclick="openPreview('Annexe 2 - Liste de présence.pdf')" data-sort0="annexe 2 - liste de présence.pdf" data-sort1="2026-04-09" data-sort2="fcw oa int anx seance du 09/04/2026" data-sort4="2026-04-12" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Annexe 2 - Liste de présence.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">9 Avr 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">FCW</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">ANX</span> <span class="badge badge-event me-1">Séance du 09/04/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">12 Avr 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Annexe 2 - Liste de présence.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Annexe 2 - Liste de présence.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Annexe 2 - Liste de présence.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Annexe 2 - Liste de présence.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-type="CNVC PROC" data-date="2026-03-30" data-search="convocation ca cge du 16-04-2026 procuration cge oa cnvc proc julie stavrakas" data-event="ev3" onclick="openPreview('Convocation CA CGE du 16-04-2026 + Procuration.pdf')" data-sort0="convocation ca cge du 16-04-2026 + procuration.pdf" data-sort1="2026-03-30" data-sort2="cge oa cnvc proc seance du 16/04/2026" data-sort4="2026-03-30" data-sort3="julie stavrakas">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Convocation CA CGE du 16-04-2026 + Procuration.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">30 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-violet me-1">CNVC</span>
                            <span class="badge badge-violet me-1">PROC</span> <span class="badge badge-event me-1">Séance du 16/04/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Julie Stavrakas</td>
                        <td class="px-6 py-4 text-gray-500">30 Mars 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Convocation CA CGE du 16-04-2026 + Procuration.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Convocation CA CGE du 16-04-2026 + Procuration.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Convocation CA CGE du 16-04-2026 + Procuration.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Convocation CA CGE du 16-04-2026 + Procuration.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="FCW" data-organ="AG" data-type="CNVC PROC" data-date="2026-06-08" data-search="convocation ag fcw du 23-06-2026 procuration fcw ag cnvc proc philippe dumont" data-event="ev9" onclick="openPreview('Convocation AG FCW du 23-06-2026 + Procuration.pdf')" data-sort0="convocation ag fcw du 23-06-2026 + procuration.pdf" data-sort1="2026-06-08" data-sort2="fcw ag cnvc proc seance du 23/06/2026" data-sort4="2026-06-08" data-sort3="philippe dumont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Convocation AG FCW du 23-06-2026 + Procuration.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">8 Juin 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">FCW</span>
                            <span class="badge badge-emerald me-1">AG</span>
                            <span class="badge badge-violet me-1">CNVC</span>
                            <span class="badge badge-violet me-1">PROC</span> <span class="badge badge-event me-1">Séance du 23/06/2026</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Philippe Dumont</td>
                        <td class="px-6 py-4 text-gray-500">8 Juin 2026<span class="row-actions row-actions-fly">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Convocation AG FCW du 23-06-2026 + Procuration.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocHistory('Convocation AG FCW du 23-06-2026 + Procuration.pdf', this)" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); openDocAccess('Convocation AG FCW du 23-06-2026 + Procuration.pdf', this)" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button><button onclick="event.stopPropagation(); openShareLink('Convocation AG FCW du 23-06-2026 + Procuration.pdf', this)" title="Générer URL de partage" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                                </button>
                            </span></td>
                    </tr>
                    <tr id="docs-empty" class="empty-row hidden-view">
                        <td colspan="5" class="px-6 py-10 text-center text-gray-500">Aucun document ne correspond à vos filtres.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

        <!-- ARBORESCENCE PAR DOSSIERS -->
        <div id="docs-tree-card" class="hidden-view bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
            <div id="tree-breadcrumb" class="tree-breadcrumb hidden-view"></div>
            <div class="flex-1 overflow-y-auto min-h-0">
                <div class="docs-tree-header tree-cols sticky top-0 z-10">
                    <div>Titre du document</div>
                    <div>Date du document</div>
                    <div>Libellés</div>
                    <div>Déposé par</div>
                    <div>Date du dépôt</div>
                    <div></div>
                </div>
                <div id="docs-tree"></div>
            </div>
        </div>
    </div>
</section>
`;
