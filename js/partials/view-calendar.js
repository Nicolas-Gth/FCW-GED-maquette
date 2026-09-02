window.PARTIALS = window.PARTIALS || {};
PARTIALS.viewCalendar = `
<section id="view-calendar" class="app-view hidden-view absolute inset-0 flex flex-col bg-gray-50 h-full">
    <div class="flex-1 flex flex-col px-8 py-4 overflow-hidden min-h-0">

        <p class="text-sm text-gray-600 mb-4">Cliquez sur une séance pour afficher ses documents.</p>

        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0">
            <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 id="calendar-month-label" class="text-lg font-bold text-gray-800"></h2>
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
