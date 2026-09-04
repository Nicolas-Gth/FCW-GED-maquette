window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalUpload = `
<div id="modal-upload" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 shrink-0">
            <h3 class="text-lg font-bold text-gray-800">Déposer un nouveau document</h3>
            <button onclick="toggleModal('modal-upload', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <form id="upload-form" class="flex-1 overflow-y-auto min-h-0 p-6 space-y-5" onsubmit="event.preventDefault(); alert('Document envoyé vers SharePoint !'); toggleModal('modal-upload', false);">
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Fichier <span class="text-red-500">*</span></label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 13v8" />
  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="m8 17 4-4 4 4" /></svg>
                    <p class="mt-1 text-sm text-gray-600">Cliquez pour parcourir ou glissez un fichier ici</p>
                    <p class="text-xs text-gray-500 mt-1">PDF, DOCX, XLSX (Max 50MB)</p>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Titre du document <span class="text-red-500">*</span></label>
                    <input type="text" required placeholder="Ex: Compte Rendu Annuel..." class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Date du document <span class="text-red-500">*</span></label>
                    <input type="date" id="upload-doc-date" required class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows="2" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
            </div>

            <hr class="border-gray-200">

            <div>
                <h4 class="text-sm font-bold text-gray-800 mb-3">Libellés</h4>
                
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Entité <span class="text-red-500">*</span></label>
                        <div class="multi-select" data-placeholder="Choisir une entité…">
                            <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                <span class="ms-value">Choisir une entité…</span>
                                <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                            <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="FCW" onchange="msUpdate(this)"> Fondation Chimay-Wartoise (FCW)</label>
                                <label class="ms-option"><input type="checkbox" value="CGE" onchange="msUpdate(this)"> Chimay-Gestion (CGE)</label>
                                <label class="ms-option"><input type="checkbox" value="CPA" onchange="msUpdate(this)"> Chimay-Patrimoine (CPA)</label>
                                <label class="ms-option"><input type="checkbox" value="ADS" onchange="msUpdate(this)"> Abbaye Notre-Dame de Scourmont (ADS)</label>
                                <label class="ms-option"><input type="checkbox" value="SOL" onchange="msUpdate(this)"> Solidarité Cistercienne (SOL)</label>
                                <label class="ms-option"><input type="checkbox" value="AUB" onchange="msUpdate(this)"> Auberge de Poteaupré (AUB)</label>
                                <label class="ms-option"><input type="checkbox" value="ESP" onchange="msUpdate(this)"> Espace Chimay (ESP)</label>
                                <label class="ms-option"><input type="checkbox" value="BSM" onchange="msUpdate(this)"> Boissons Sambre et Meuse (BSM)</label>
                                <label class="ms-option"><input type="checkbox" value="BDC" onchange="msUpdate(this)"> Bières de Chimay (BDC)</label>
                                <label class="ms-option"><input type="checkbox" value="FRO" onchange="msUpdate(this)"> Chimay Fromages (FRO)</label>
                                <label class="ms-option"><input type="checkbox" value="PPB" onchange="msUpdate(this)"> Les Petits Pas de la Botte (PPB)</label>
                                <label class="ms-option"><input type="checkbox" value="MDC" onchange="msUpdate(this)"> La Maison De Casimir (MDC)</label>
                                <label class="ms-option"><input type="checkbox" value="AP" onchange="msUpdate(this)"> Albatros Poteaupré (AP)</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Instance <span class="text-red-500">*</span></label>
                        <div class="multi-select" data-placeholder="Choisir une instance…">
                            <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                <span class="ms-value">Choisir une instance…</span>
                                <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                            <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="OA" onchange="msUpdate(this)"> Organe d'administration (OA)</label>
                                <label class="ms-option"><input type="checkbox" value="AG" onchange="msUpdate(this)"> Assemblée générale (AG)</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Type de document <span class="text-red-500">*</span></label>
                        <div class="multi-select" data-placeholder="Choisir un type…">
                            <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                <span class="ms-value">Choisir un type…</span>
                                <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                            <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="CPT" onchange="msUpdate(this)"> Comptes (CPT)</label>
                                <label class="ms-option"><input type="checkbox" value="BDGT" onchange="msUpdate(this)"> Budget (BDGT)</label>
                                <label class="ms-option"><input type="checkbox" value="PV" onchange="msUpdate(this)"> Procès-verbal (PV)</label>
                                <label class="ms-option"><input type="checkbox" value="CNVC" onchange="msUpdate(this)"> Convocation (CNVC)</label>
                                <label class="ms-option"><input type="checkbox" value="NOT" onchange="msUpdate(this)"> Notes (NOT)</label>
                                <label class="ms-option"><input type="checkbox" value="PRES" onchange="msUpdate(this)"> Présentation (PRES)</label>
                                <label class="ms-option"><input type="checkbox" value="RA" onchange="msUpdate(this)"> Rapport annuel (RA)</label>
                                <label class="ms-option"><input type="checkbox" value="BETU" onchange="msUpdate(this)"> Bourse d'étude (BETU)</label>
                                <label class="ms-option"><input type="checkbox" value="PROC" onchange="msUpdate(this)"> Procuration (PROC)</label>
                                <label class="ms-option"><input type="checkbox" value="EXTR" onchange="msUpdate(this)"> Extrait (EXTR)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="border-gray-200">

            <div>
                <h4 class="text-sm font-bold text-gray-800 mb-3">Séance</h4>
                <div class="flex items-end gap-3">
                    <div class="flex-1">
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Séance existante</label>
                        <select id="upload-event-select" onchange="onUploadEventSelect()" class="select w-full">
                            <option value="">Aucune séance</option>
                        </select>
                    </div>
                    <button type="button" onclick="toggleUploadNewEvent()" class="btn btn-outline">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M8 2v4" />
  <path d="M16 2v4" />
  <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" />
  <path d="M3 10h18" />
  <path d="M16 19h6" />
  <path d="M19 16v6" /></svg>
                        Nouvelle séance
                    </button>
                </div>
                <div id="upload-new-event" class="hidden-view mt-3 grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Date de la séance <span class="text-red-500">*</span></label>
                        <input type="date" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Titre</label>
                        <input type="text" placeholder="Ex: CA de septembre 2026" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                    </div>
                    <p class="col-span-2 text-xs text-gray-500 -mt-2">Si le titre est vide, la séance sera nommée automatiquement « Séance du {date} ».</p>
                </div>
            </div>

            <hr class="border-gray-200">

            <div>
                <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Annexes</label>
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors" onclick="document.getElementById('annexes-input').click()">
                    <svg class="mx-auto h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 5v14" />
  <path d="M5 12h14" /></svg>
                    <p class="mt-1 text-sm text-gray-600">Ajouter des annexes</p>
                    <p class="text-xs text-gray-500">PDF, DOCX, XLSX (Max 50MB)</p>
                </div>
                <input id="annexes-input" type="file" multiple class="hidden-view" onchange="addUploadFiles(this, 'annexes-list')">
                <ul id="annexes-list" class="mt-2 space-y-1"></ul>
            </div>

            <hr class="border-gray-200">

            <div class="flex items-center justify-between gap-4 px-1">
                <div>
                    <label for="upload-mail-alert" class="text-sm font-medium text-gray-800 cursor-pointer">Alerter par mail qu'un nouveau document a été déposé</label>
                    <p class="text-xs text-gray-500 mt-0.5">Les utilisateurs ayant accès à ce document recevront un email de notification.</p>
                </div>
                <input id="upload-mail-alert" type="checkbox" class="toggle-switch">
            </div>

        </form>

        <div class="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-lg">
            <button type="button" onclick="toggleModal('modal-upload', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm font-medium">Annuler</button>
            <button type="submit" form="upload-form" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark text-sm font-medium shadow-sm flex items-center gap-2">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 13v8" />
  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="m8 17 4-4 4 4" /></svg>
                Uploader le document
            </button>
        </div>
    </div>
</div>
`;
