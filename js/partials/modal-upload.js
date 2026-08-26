window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalUpload = `
<div id="modal-upload" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 class="text-lg font-bold text-gray-800">Déposer un nouveau document</h3>
            <button onclick="toggleModal('modal-upload', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        
        <div class="overflow-y-auto p-6">
            <form class="space-y-5" onsubmit="event.preventDefault(); alert('Document envoyé vers SharePoint !'); toggleModal('modal-upload', false);">
                
                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        Uploader le document
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
`;
