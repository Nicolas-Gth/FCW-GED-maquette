window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalUpload = `
<div id="modal-upload" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Déposer un nouveau document</h3>
            <button onclick="toggleModal('modal-upload', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <div class="overflow-y-auto p-6">
            <form class="space-y-5" onsubmit="event.preventDefault(); alert('Document envoyé vers SharePoint !'); toggleModal('modal-upload', false);">
                
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 13v8" />
  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="m8 17 4-4 4 4" /></svg>
                    <p class="mt-1 text-sm text-gray-600">Cliquez pour parcourir ou glissez un fichier ici</p>
                    <p class="text-xs text-gray-500 mt-1">PDF, DOCX, XLSX (Max 50MB)</p>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-2">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Titre du document</label>
                        <input type="text" required placeholder="Ex: Compte Rendu Annuel..." class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Date de l'événement / création</label>
                        <input type="date" required class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                        <p class="text-xs text-gray-500 mt-1">Sert pour le tri chrono (document_date)</p>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Description (Optionnel)</label>
                    <textarea rows="2" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
                </div>

                <hr class="border-gray-200">

                <div>
                    <h4 class="text-sm font-bold text-gray-800 mb-3">Classification (Libellés)</h4>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Entité <span class="text-red-500">*</span></label>
                            <select class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                                <option disabled selected>Choisir une entité...</option>
                                <option>Chimay gestion (CGE)</option>
                                <option>Chimay patrimoine (CPA)</option>
                                <option>Abbaye Notre-Dame de Scourmont (ADS)</option>
                                <option>Solidarité cistercienne (SOL)</option>
                                <option>Poteaupré (AUB)</option>
                                <option>Espace Chimay (ESP)</option>
                                <option>Boissons Sambre et Meuse (BSM)</option>
                                <option>Bières de Chimay (BDC)</option>
                                <option>Chimay fromages (FRO)</option>
                                <option>Les Petits Pas de la Botte (PPB)</option>
                                <option>La Maison De Casimir (MDC)</option>
                                <option>Albatros Poteaupré (AP)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Organe <span class="text-red-500">*</span></label>
                            <select class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                                <option disabled selected>Choisir un organe...</option>
                                <option>Organe d'administration (OA)</option>
                                <option>Assemblée générale (AG)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Audience <span class="text-red-500">*</span></label>
                            <select class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                                <option disabled selected>Choisir une audience...</option>
                                <option>Interne (INT)</option>
                                <option>Externe (EXT)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase mb-1">Type de document <span class="text-red-500">*</span></label>
                            <select class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white outline-none">
                                <option disabled selected>Choisir un type...</option>
                                <option>Comptes (CPT)</option>
                                <option>Budget (BDGT)</option>
                                <option>Procès verbal (PV)</option>
                                <option>Convocation (CNVC)</option>
                                <option>Notes (NOT)</option>
                                <option>Présentation (PRES)</option>
                                <option>Rapport annuel (RA)</option>
                                <option>Bourse d'étude (BETU)</option>
                                <option>Annexe (ANX)</option>
                                <option>Extrait (EXTR)</option>
                            </select>
                        </div>
                    </div>
                    <p class="text-xs text-gray-500 mt-2">Le nom final du fichier est généré automatiquement selon la nomenclature de la Fondation.</p>
                </div>

                <div class="pt-4 mt-2 flex justify-end gap-3">
                    <button type="button" onclick="toggleModal('modal-upload', false)" class="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm font-medium">Annuler</button>
                    <button type="submit" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark text-sm font-medium shadow-sm flex items-center gap-2">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 13v8" />
  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="m8 17 4-4 4 4" /></svg>
                        Uploader le document
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
`;
