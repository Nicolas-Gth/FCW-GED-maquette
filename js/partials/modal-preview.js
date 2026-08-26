window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalPreview = `
<div id="modal-preview" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-60 z-50 flex items-center justify-center p-6">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[88vh] flex flex-col overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <div class="flex items-center gap-3 min-w-0">
                <svg class="w-6 h-6 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                <div class="min-w-0">
                    <h3 id="preview-title" class="text-base font-bold text-gray-800 truncate">Compte Rendu CA Mars 2026.pdf</h3>
                    <p class="text-xs text-gray-500">Version 3 · Déposé par Marie Bernard le 18/03/2026</p>
                </div>
            </div>
            <button onclick="toggleModal('modal-preview', false)" class="text-gray-400 hover:text-gray-600 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        
        <div class="flex-1 flex overflow-hidden">
            <div class="flex-1 bg-gray-100 flex items-center justify-center">
                <div class="text-center text-gray-400">
                    <svg class="mx-auto h-20 w-20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                    <p class="mt-3 text-sm font-medium text-gray-500">Aperçu du fichier</p>
                    <p class="text-xs">Visionneuse SharePoint Embedded intégrée (iframe à blanc dans le prototype)</p>
                </div>
            </div>
            
            <aside class="w-80 border-l border-gray-200 bg-white overflow-y-auto shrink-0">
                <div class="p-5 space-y-6">
                    <div>
                        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Libellés</h4>
                        <div class="flex flex-wrap gap-1">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-light text-primary">CGE</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">OA</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">INT</span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">PV</span>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Informations</h4>
                        <dl class="space-y-2 text-sm">
                            <div class="flex justify-between"><dt class="text-gray-500">Date du document</dt><dd class="font-medium text-gray-800">15 Mars 2026</dd></div>
                            <div class="flex justify-between"><dt class="text-gray-500">Déposé par</dt><dd class="font-medium text-gray-800">Marie Bernard</dd></div>
                            <div class="flex justify-between"><dt class="text-gray-500">Version</dt><dd class="font-medium text-gray-800">3</dd></div>
                        </dl>
                        <p class="text-sm text-gray-600 mt-3">Compte rendu de la séance du conseil d'administration du mois de mars 2026.</p>
                    </div>

                    <div class="space-y-2 pt-4 border-t border-gray-100">
                        <button onclick="alert('Téléchargement du document (simulation)')" class="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded text-sm font-medium shadow-sm flex items-center justify-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            Télécharger
                        </button>
                        <button onclick="alert('Gestion des accès nominatifs (simulation)')" class="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            Accès nominatifs
                        </button>
                        <button onclick="alert('Historique du document (simulation)')" class="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Historique du document
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</div>
`;
