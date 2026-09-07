window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewCalendar = `
<section id="view-calendar" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <p class="text-sm text-gray-600 mb-4">Cliquez sur une séance pour afficher ses documents.</p>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
            <div class="flex flex-wrap items-end gap-3 px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 id="calendar-month-label" class="text-lg font-bold text-gray-800 mb-1"></h2>
                <div class="flex flex-wrap items-end gap-3 ml-auto">
                    <div class="w-48">
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Entité</label>
                    <div id="cal-entity" class="multi-select" data-placeholder="Toutes">
                        <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                            <span class="ms-value">Toutes</span>
                            <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                        <div class="multi-select-panel hidden-view">
                            <label class="ms-option"><input type="checkbox" value="FCW" onchange="msUpdate(this); onCalendarFilterChange()"> Fondation Chimay-Wartoise (FCW)</label>
                            <label class="ms-option"><input type="checkbox" value="CGE" onchange="msUpdate(this); onCalendarFilterChange()"> Chimay-Gestion (CGE)</label>
                            <label class="ms-option"><input type="checkbox" value="CPA" onchange="msUpdate(this); onCalendarFilterChange()"> Chimay-Patrimoine (CPA)</label>
                            <label class="ms-option"><input type="checkbox" value="ADS" onchange="msUpdate(this); onCalendarFilterChange()"> Abbaye Notre-Dame de Scourmont (ADS)</label>
                            <label class="ms-option"><input type="checkbox" value="SOL" onchange="msUpdate(this); onCalendarFilterChange()"> Solidarité Cistercienne (SOL)</label>
                            <label class="ms-option"><input type="checkbox" value="AUB" onchange="msUpdate(this); onCalendarFilterChange()"> Auberge de Poteaupré (AUB)</label>
                            <label class="ms-option"><input type="checkbox" value="ESP" onchange="msUpdate(this); onCalendarFilterChange()"> Espace Chimay (ESP)</label>
                            <label class="ms-option"><input type="checkbox" value="BSM" onchange="msUpdate(this); onCalendarFilterChange()"> Boissons Sambre et Meuse (BSM)</label>
                            <label class="ms-option"><input type="checkbox" value="BDC" onchange="msUpdate(this); onCalendarFilterChange()"> Bières de Chimay (BDC)</label>
                            <label class="ms-option"><input type="checkbox" value="FRO" onchange="msUpdate(this); onCalendarFilterChange()"> Chimay Fromages (FRO)</label>
                            <label class="ms-option"><input type="checkbox" value="PPB" onchange="msUpdate(this); onCalendarFilterChange()"> Les Petits Pas de la Botte (PPB)</label>
                            <label class="ms-option"><input type="checkbox" value="MDC" onchange="msUpdate(this); onCalendarFilterChange()"> La Maison De Casimir (MDC)</label>
                            <label class="ms-option"><input type="checkbox" value="AP" onchange="msUpdate(this); onCalendarFilterChange()"> Albatros Poteaupré (AP)</label>
                        </div>
                    </div>
                </div>
                <div class="w-48">
                    <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Instance</label>
                    <div id="cal-instance" class="multi-select" data-placeholder="Toutes">
                        <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                            <span class="ms-value">Toutes</span>
                            <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                        <div class="multi-select-panel hidden-view">
                            <label class="ms-option"><input type="checkbox" value="OA" onchange="msUpdate(this); onCalendarFilterChange()"> Organe d'administration (OA)</label>
                            <label class="ms-option"><input type="checkbox" value="AG" onchange="msUpdate(this); onCalendarFilterChange()"> Assemblée générale (AG)</label>
                        </div>
                    </div>
                </div>
                <div class="flex gap-2">
                    <button type="button" onclick="calendarPrev()" class="btn btn-outline" title="Mois précédent">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button type="button" onclick="calendarToday()" class="btn btn-outline">Aujourd'hui</button>
                    <button type="button" onclick="calendarNext()" class="btn btn-outline" title="Mois suivant">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                    <button type="button" id="calendar-view-toggle" onclick="toggleCalendarView()" class="btn btn-outline"></button>
                </div>
                </div>
            </div>

            <div id="calendar-month-wrap" class="flex-1 flex flex-col min-h-0">
                <div class="cal-weekdays">
                    <div class="px-4 py-2 text-xs font-semibold uppercase text-gray-500">Lun</div>
                    <div class="px-4 py-2 text-xs font-semibold uppercase text-gray-500">Mar</div>
                    <div class="px-4 py-2 text-xs font-semibold uppercase text-gray-500">Mer</div>
                    <div class="px-4 py-2 text-xs font-semibold uppercase text-gray-500">Jeu</div>
                    <div class="px-4 py-2 text-xs font-semibold uppercase text-gray-500">Ven</div>
                    <div class="px-4 py-2 text-xs font-semibold uppercase text-gray-500">Sam</div>
                    <div class="px-4 py-2 text-xs font-semibold uppercase text-gray-500">Dim</div>
                </div>

                <div id="calendar-grid" class="cal-grid"></div>
            </div>

            <div id="calendar-year-wrap" class="hidden-view flex-1 min-h-0 overflow-y-auto p-4">
                <div id="calendar-year-grid" class="cal-year-grid"></div>
            </div>
        </div>
    </div>
</section>
`;
