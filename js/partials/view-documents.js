window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewDocuments = `
<section id="view-documents" class="app-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">

        <!-- ZONE DE FILTRES -->
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
            <div class="flex flex-wrap gap-3 items-end">
                <div class="flex-1 min-w-[220px]">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Recherche texte</label>
                    <div class="search-box">
                        <svg class="search-icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" /></svg>
                        <input id="f-search" type="text" oninput="filterDocuments()" placeholder="Titre, description..." class="input input-search w-full">
                    </div>
                </div>

                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Entité</label>
                    <select id="f-entity" onchange="filterDocuments()" class="select w-full">
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
                    <select id="f-organ" onchange="filterDocuments()" class="select w-full">
                        <option value="ALL">Tous</option>
                        <option value="OA">Organe d'administration (OA)</option>
                        <option value="AG">Assemblée générale (AG)</option>
                    </select>
                </div>

                <div class="w-40">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Audience</label>
                    <select id="f-audience" onchange="filterDocuments()" class="select w-full">
                        <option value="ALL">Toutes</option>
                        <option value="INT">Interne (INT)</option>
                        <option value="EXT">Externe (EXT)</option>
                    </select>
                </div>

                <div class="w-44">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Type de document</label>
                    <select id="f-type" onchange="filterDocuments()" class="select w-full">
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
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">À partir du</label>
                    <input id="f-date-from" type="date" onchange="filterDocuments()" class="input w-full">
                </div>

                <div class="w-40">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Jusqu'au</label>
                    <input id="f-date-to" type="date" onchange="filterDocuments()" class="input w-full">
                </div>

                <button onclick="toggleModal('modal-save-view', true)" class="btn btn-outline">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" /></svg>
                    Enregistrer la vue
                </button>
                <button onclick="resetDocumentFilters()" class="btn btn-outline-danger">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" />
  <path d="m16.5 3.5 5 5" />
  <path d="m21.5 3.5-5 5" /></svg>
                    Réinitialiser les filtres
                </button>
            </div>
        </div>

        <!-- BARRE D'OUTILS -->
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
                <select id="saved-view-select" onchange="applySavedView(this)" class="select">
                    <option value="CA 2026">CA 2026</option>
                    <option value="Projets Externes">Projets Externes</option>
                </select>
                <p id="docs-count" class="text-sm text-gray-600">17 documents</p>
            </div>
            <button onclick="toggleModal('modal-upload', true)" class="btn btn-primary">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /></svg>
                Déposer un document
            </button>
        </div>

        <!-- TABLEAU DES DOCUMENTS -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table class="data-table w-full text-left text-sm whitespace-nowrap">
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
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Compte Rendu CA Mars 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">15 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">INT</span>
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
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="CPT" data-date="2025-12-31" data-search="bilan financier annuel xlsx cpt cge oa int marc lemoine" onclick="openPreview('Bilan Financier Annuel.xlsx')" data-sort0="bilan financier annuel.xlsx" data-sort1="2025-12-31" data-sort2="cge oa cpt" data-sort3="marc lemoine">
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
                        <td class="px-6 py-4 text-gray-500">31 Déc 2025</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
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
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CPA" data-organ="AG" data-audience="EXT" data-type="RA" data-date="2026-02-12" data-search="rapport annuel 2025 pdf ra cpa ag ext jean dupont" onclick="openPreview('Rapport Annuel 2025.pdf')" data-sort0="rapport annuel 2025.pdf" data-sort1="2026-02-12" data-sort2="cpa ag ext ra" data-sort3="jean dupont">
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
                        <td class="px-6 py-4 text-gray-500">12 Fév 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-emerald me-1">AG</span>
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
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="ADS" data-organ="AG" data-audience="INT" data-type="CNVC" data-date="2026-06-01" data-search="convocation ag 18 06 2026 pdf cnvc ads int marie bernard" onclick="openPreview('Convocation AG du 18.06.2026.pdf')" data-sort0="convocation ag du 18.06.2026.pdf" data-sort1="2026-06-01" data-sort2="ads ag cnvc" data-sort3="marie bernard">
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
                        <td class="px-6 py-4 text-gray-500">1 Juin 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">ADS</span>
                            <span class="badge badge-emerald me-1">AG</span>
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
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="BDC" data-organ="OA" data-audience="INT" data-type="BDGT" data-date="2026-09-30" data-search="budget prévisionnel 2027 xlsx bdgt bdc oa int marc lemoine" onclick="openPreview('Budget Prévisionnel 2027.xlsx')" data-sort0="budget prévisionnel 2027.xlsx" data-sort1="2026-09-30" data-sort2="bdc oa bdgt" data-sort3="marc lemoine">
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
                        <td class="px-6 py-4 text-gray-500">30 Sep 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">BDC</span>
                            <span class="badge badge-emerald me-1">OA</span>
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
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="SOL" data-organ="OA" data-audience="EXT" data-type="BETU" data-date="2026-01-10" data-search="bourse d'étude 2026 présentation pdf betu sol oa ext jean dupont" onclick="openPreview('Bourse étude 2026 - Présentation.pdf')" data-sort0="bourse étude 2026 - présentation.pdf" data-sort1="2026-01-10" data-sort2="sol oa ext betu" data-sort3="jean dupont">
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
                        <td class="px-6 py-4 text-gray-500">10 Jan 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">SOL</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">BETU</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Bourse étude 2026 - Présentation.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Bourse étude 2026 - Présentation.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Bourse étude 2026 - Présentation.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-01-22" data-search="procès verbal ca janvier 2026 pv cge oa int marie bernard" onclick="openPreview('Procès Verbal CA Janvier 2026.pdf')" data-sort0="procès verbal ca janvier 2026.pdf" data-sort1="2026-01-22" data-sort2="cge oa int pv" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Procès Verbal CA Janvier 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">22 Janvier 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">INT</span>
                            <span class="badge badge-violet">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Procès Verbal CA Janvier 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Procès Verbal CA Janvier 2026.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Procès Verbal CA Janvier 2026.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-04-16" data-search="procès verbal ca avril 2026 pv cge oa int marie bernard" onclick="openPreview('Procès Verbal CA Avril 2026.pdf')" data-sort0="procès verbal ca avril 2026.pdf" data-sort1="2026-04-16" data-sort2="cge oa int pv" data-sort3="marie bernard">
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
                        <td class="px-6 py-4 text-gray-500">16 Avril 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">INT</span>
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
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-06-25" data-search="procès verbal ca juin 2026 pv cge oa int marie bernard" onclick="openPreview('Procès Verbal CA Juin 2026.pdf')" data-sort0="procès verbal ca juin 2026.pdf" data-sort1="2026-06-25" data-sort2="cge oa int pv" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Procès Verbal CA Juin 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">25 Juin 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">INT</span>
                            <span class="badge badge-violet">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Procès Verbal CA Juin 2026.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Procès Verbal CA Juin 2026.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Procès Verbal CA Juin 2026.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="PV" data-date="2026-09-17" data-search="procès verbal ca septembre 2026 pv cge oa int marie bernard" onclick="openPreview('Procès Verbal CA Septembre 2026.pdf')" data-sort0="procès verbal ca septembre 2026.pdf" data-sort1="2026-09-17" data-sort2="cge oa int pv" data-sort3="marie bernard">
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
                        <td class="px-6 py-4 text-gray-500">17 Septembre 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">INT</span>
                            <span class="badge badge-violet">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CPA" data-organ="OA" data-audience="EXT" data-type="PRES" data-date="2026-03-05" data-search="projet rénovation bâtiments étude pdf pres cpa oa ext jean dupont" onclick="openPreview('Projet Rénovation Bâtiments - Étude.pdf')" data-sort0="projet rénovation bâtiments - étude.pdf" data-sort1="2026-03-05" data-sort2="cpa oa ext pres" data-sort3="jean dupont">
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
                        <td class="px-6 py-4 text-gray-500">5 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">PRES</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="ESP" data-organ="OA" data-audience="EXT" data-type="NOT" data-date="2026-05-14" data-search="partenariat espace chimay note pdf not esp oa ext marc lemoine" onclick="openPreview('Partenariat Espace Chimay - Note.pdf')" data-sort0="partenariat espace chimay - note.pdf" data-sort1="2026-05-14" data-sort2="esp oa ext not" data-sort3="marc lemoine">
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
                        <td class="px-6 py-4 text-gray-500">14 Mai 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">ESP</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">NOT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="SOL" data-organ="OA" data-audience="EXT" data-type="BETU" data-date="2026-02-20" data-search="résultats bourse d'étude 2025 pdf betu sol oa ext jean dupont" onclick="openPreview('Résultats Bourse étude 2025.pdf')" data-sort0="résultats bourse d'étude 2025.pdf" data-sort1="2026-02-20" data-sort2="sol oa ext betu" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                                Résultats Bourse d'étude 2025.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">20 Février 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">SOL</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">BETU</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Résultats Bourse étude 2025.pdf')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Résultats Bourse étude 2025.pdf')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Résultats Bourse étude 2025.pdf')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="BDGT" data-date="2026-02-10" data-search="budget ca 2026 xlsx bdgt cge oa int marc lemoine" onclick="openPreview('Budget CA 2026.xlsx')" data-sort0="budget ca 2026.xlsx" data-sort1="2026-02-10" data-sort2="cge oa int bdgt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Budget CA 2026.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">10 Février 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">INT</span>
                            <span class="badge badge-violet">BDGT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Budget CA 2026.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Budget CA 2026.xlsx')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Budget CA 2026.xlsx')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CGE" data-organ="OA" data-audience="INT" data-type="CPT" data-date="2026-03-20" data-search="comptes annuels 2025 xlsx cpt cge oa int marc lemoine" onclick="openPreview('Comptes Annuels 2025.xlsx')" data-sort0="comptes annuels 2025.xlsx" data-sort1="2026-03-20" data-sort2="cge oa int cpt" data-sort3="marc lemoine">
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
                        <td class="px-6 py-4 text-gray-500">20 Mars 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CGE</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">INT</span>
                            <span class="badge badge-violet">CPT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="CPA" data-organ="OA" data-audience="EXT" data-type="BDGT" data-date="2026-04-02" data-search="budget projet rénovation 2026 xlsx bdgt cpa oa ext jean dupont" onclick="openPreview('Budget Projet Rénovation 2026.xlsx')" data-sort0="budget projet rénovation 2026.xlsx" data-sort1="2026-04-02" data-sort2="cpa oa ext bdgt" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h2" />
  <path d="M14 13h2" />
  <path d="M8 17h2" />
  <path d="M14 17h2" /></svg>
                                Budget Projet Rénovation 2026.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">2 Avril 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">CPA</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">BDGT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
                                <button onclick="event.stopPropagation(); alert('Téléchargement simulé : Budget Projet Rénovation 2026.xlsx')" title="Télécharger" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Historique du document : Budget Projet Rénovation 2026.xlsx')" title="Historique des actions" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                                </button>
                                <button onclick="event.stopPropagation(); alert('Gestion des accès nominatifs : Budget Projet Rénovation 2026.xlsx')" title="Accès nominatifs" class="p-1.5 rounded hover:bg-gray-100 hover:text-primary transition-colors">
                                    <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                                </button>
                            </span>
                        </td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" data-entity="ESP" data-organ="OA" data-audience="EXT" data-type="CPT" data-date="2026-06-10" data-search="suivi financier partenariats 2026 xlsx cpt esp oa ext marc lemoine" onclick="openPreview('Suivi Financier Partenariats 2026.xlsx')" data-sort0="suivi financier partenariats 2026.xlsx" data-sort1="2026-06-10" data-sort2="esp oa ext cpt" data-sort3="marc lemoine">
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
                        <td class="px-6 py-4 text-gray-500">10 Juin 2026</td>
                        <td class="px-6 py-4">
                            <span class="badge badge-primary me-1">ESP</span>
                            <span class="badge badge-emerald me-1">OA</span>
                            <span class="badge badge-warning me-1">EXT</span>
                            <span class="badge badge-violet">CPT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                        <td class="px-6 py-4 text-right">
                            <span class="row-actions inline-flex items-center gap-1">
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
