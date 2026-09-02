window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalPreview = `
<div id="modal-preview" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-60 z-50 flex items-center justify-center p-6">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[88vh] flex flex-col overflow-hidden">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <div class="flex items-center gap-3 min-w-0">
                <svg id="preview-icon-header" class="w-6 h-6 text-red-500 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                    <div class="min-w-0">
                        <h3 id="preview-title" class="text-base font-bold text-gray-800 truncate">Compte Rendu CA Mars 2026</h3>
                        <p id="preview-meta-line" class="text-xs text-gray-500">Version 3 · Déposé par Julie Stavrakas le 18/03/2026</p>
                    </div>
            </div>
            <button onclick="toggleModal('modal-preview', false)" class="text-gray-400 hover:text-gray-600 shrink-0">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <div class="flex-1 flex overflow-hidden">
            <div class="flex-1 bg-gray-100 flex items-center justify-center">
                <div class="text-center text-gray-400">
                    <svg id="preview-icon-body" class="mx-auto h-20 w-20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
  <path d="M10 9H8" />
  <path d="M16 13H8" />
  <path d="M16 17H8" /></svg>
                    <p class="mt-3 text-sm font-medium text-gray-500">Aperçu du fichier</p>
                    <p class="text-xs">Visionneuse SharePoint Embedded intégrée (iframe à blanc dans le prototype)</p>
                </div>
            </div>
            
            <aside class="w-80 border-l border-gray-200 bg-white overflow-y-auto shrink-0">
                <div class="p-5 space-y-6">
                    <div>
                        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Libellés</h4>
                        <div id="preview-labels" class="flex flex-wrap gap-1">
                            <span class="badge badge-primary">CGE</span>
                            <span class="badge badge-emerald">OA</span>
                            <span class="badge badge-violet">PV</span>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Séances</h4>
                        <div id="preview-events" class="flex flex-wrap gap-1">
                            <span class="badge badge-event">Séance du 15/03/2026</span>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Informations</h4>
                        <dl class="space-y-2 text-sm">
                            <div class="flex justify-between"><dt class="text-gray-500">Date du document</dt><dd id="preview-info-date" class="font-medium text-gray-800">15 Mars 2026</dd></div>
                            <div class="flex justify-between"><dt class="text-gray-500">Déposé par</dt><dd id="preview-info-by" class="font-medium text-gray-800">Julie Stavrakas</dd></div>
                            <div class="flex justify-between"><dt class="text-gray-500">Version</dt><dd id="preview-info-version" class="font-medium text-gray-800">3</dd></div>
                        </dl>
                        <p id="preview-info-desc" class="text-sm text-gray-600 mt-3">Compte rendu de la séance du conseil d'administration du mois de mars 2026.</p>
                    </div>

                    <div id="preview-parent-section" class="hidden-view">
                        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Document parent</h4>
                        <ul id="preview-parent-list" class="space-y-1 text-sm"></ul>
                    </div>

                    <div id="preview-annexes-section" class="hidden-view">
                        <h4 class="text-xs font-semibold text-gray-500 uppercase mb-2">Annexes</h4>
                        <ul id="preview-annexes-list" class="space-y-1 text-sm"></ul>
                    </div>

                    <div class="pt-4 border-t border-gray-100 space-y-2">
                        <button onclick="alert('Téléchargement du document (simulation)')" class="btn btn-primary btn-block">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" /></svg>
                            Télécharger
                        </button>
                        <button onclick="alert('Modification du document (simulation)')" class="btn btn-outline btn-block">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /></svg>
                            Modifier
                        </button>
                        <button onclick="alert('Nouvelle version publiée (simulation)')" class="btn btn-outline btn-block">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m17 8-5-5-5 5" />
  <path d="M12 3v12" /></svg>
                            Publier une nouvelle version
                        </button>
                        <button onclick="openDocAccess(PREVIEW_FILE, this)" class="btn btn-outline btn-block">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" /></svg>
                            Accès nominatifs
                        </button>
                        <button onclick="openDocHistory(PREVIEW_FILE, this)" class="btn btn-outline btn-block">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 13v2.2l1.6 1" />
  <path d="M3 12h3.458" />
  <path d="M3 19h3.832" />
  <path d="M3 5h18" />
  <circle cx="16" cy="15" r="6" /></svg>
                            Historique du document
                        </button>
                        <button onclick="alert('Suppression du document (simulation)')" class="btn btn-outline-danger btn-block">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 6h18" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  <line x1="10" x2="10" y1="11" y2="17" />
  <line x1="14" x2="14" y1="11" y2="17" /></svg>
                            Supprimer
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</div>
`;
