window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewRecent = `
<section id="view-recent" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 overflow-auto p-8">

        <div class="flex items-center justify-between mb-4">
            <p class="text-sm text-gray-600">8 documents récemment consultés</p>
            <button onclick="navigateTo('view-documents')" class="text-sm text-primary hover:underline font-medium">Tous les documents →</button>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table class="w-full text-left text-sm whitespace-nowrap">
                <thead class="bg-gray-50 text-gray-600 border-b border-gray-200 uppercase text-xs font-semibold">
                    <tr>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 0)">Titre du document <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 1)">Dernière consultation <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 2)">Libellés <span class="sort-indicator"></span></th>
                        <th class="sortable px-6 py-4" onclick="sortTable(this, 3)">Déposé par <span class="sort-indicator"></span></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Compte Rendu CA Mars 2026.pdf')" data-sort0="compte rendu ca mars 2026.pdf" data-sort1="20260824-1642" data-sort2="cge pv" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Compte Rendu CA Mars 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Aujourd'hui - 16:42</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">CGE</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Rapport Annuel 2025.pdf')" data-sort0="rapport annuel 2025.pdf" data-sort1="20260823-1440" data-sort2="cpa ext ra" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Rapport Annuel 2025.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Hier - 14:40</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">CPA</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 mr-1">EXT</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">RA</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Bilan Financier Annuel.xlsx')" data-sort0="bilan financier annuel.xlsx" data-sort1="20260821-0912" data-sort2="cge cpt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                                Bilan Financier Annuel.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">21/08/2026 - 09:12</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">CGE</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">CPT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Convocation AG du 18.06.2026.pdf')" data-sort0="convocation ag du 18.06.2026.pdf" data-sort1="20260819-1103" data-sort2="ads cnvc" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Convocation AG du 18.06.2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">19/08/2026 - 11:03</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">ADS</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">CNVC</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Budget Prévisionnel 2027.xlsx')" data-sort0="budget prévisionnel 2027.xlsx" data-sort1="20260818-1527" data-sort2="bdc bdgt" data-sort3="marc lemoine">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                                Budget Prévisionnel 2027.xlsx
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">18/08/2026 - 15:27</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">BDC</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">BDGT</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marc Lemoine</td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Bourse étude 2026 - Présentation.pdf')" data-sort0="bourse étude 2026 - présentation.pdf" data-sort1="20260815-1045" data-sort2="sol ext betu" data-sort3="jean dupont">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Bourse d'étude 2026 - Présentation.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">15/08/2026 - 10:45</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">SOL</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 mr-1">EXT</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">BETU</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Jean Dupont</td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Procès Verbal CA Avril 2026.pdf')" data-sort0="procès verbal ca avril 2026.pdf" data-sort1="20260812-0930" data-sort2="cge pv" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Procès Verbal CA Avril 2026.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">12/08/2026 - 09:30</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">CGE</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">PV</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                    </tr>
                    <tr class="clickable-row hover:bg-primary-light transition-colors" onclick="openPreview('Extrait CA - Direction Financière.pdf')" data-sort0="extrait ca - direction financière.pdf" data-sort1="20260808-1720" data-sort2="cge oa extr" data-sort3="marie bernard">
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3 font-medium text-gray-900">
                                <svg class="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                                Extrait CA - Direction Financière.pdf
                            </div>
                        </td>
                        <td class="px-6 py-4 text-gray-500">08/08/2026 - 17:20</td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary mr-1">CGE</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 mr-1">OA</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">EXTR</span>
                        </td>
                        <td class="px-6 py-4 text-gray-500">Marie Bernard</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
`;
