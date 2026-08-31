window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalRole = `
<div id="modal-role" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]">
        
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg shrink-0">
            <h3 class="text-lg font-bold text-gray-800">Créer un rôle</h3>
            <button onclick="toggleModal('modal-role', false)" class="text-gray-400 hover:text-gray-600">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>
        
        <form id="role-create-form" class="flex-1 overflow-y-auto min-h-0 px-6 py-5 space-y-4" onsubmit="event.preventDefault(); alert('Rôle créé !'); toggleModal('modal-role', false);">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nom du rôle</label>
                <input type="text" required placeholder="Ex: Rédacteur CGE" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary">
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Privilèges généraux</label>
                <div class="multi-select">
                    <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                        <span class="ms-value">Sélectionner…</span>
                        <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                    <div class="multi-select-panel hidden-view">
                                        <div class="ms-group">Actions sur les utilisateurs</div>
                                        <label class="ms-option"><input type="checkbox" value="Créer des invitations" onchange="msUpdate(this)"><span class="ms-name">Créer des invitations</span><span class="ms-desc">Envoyer un mail contenant un lien d'invitation à rejoindre la plateforme.</span></label>
                                        <label class="ms-option"><input type="checkbox" value="Gérer les comptes" onchange="msUpdate(this)"><span class="ms-name">Gérer les comptes</span><span class="ms-desc">Supprimer le compte d'un utilisateur existant.</span></label>
                                        <label class="ms-option"><input type="checkbox" value="Gérer les rôles" onchange="msUpdate(this)"><span class="ms-name">Gérer les rôles</span><span class="ms-desc">Définir de nouveaux profils métiers (ex : « Membre Chimay Gestion », « Comptable »), choisir leurs privilèges et définir les libellés auxquels ils ont accès.</span></label>
                                        <div class="ms-group">Paramétrage et suivi</div>
                                        <label class="ms-option"><input type="checkbox" value="Gérer les libellés" onchange="msUpdate(this)"><span class="ms-name">Gérer les libellés</span><span class="ms-desc">Créer, modifier ou supprimer des libellés.</span></label>
                                        <label class="ms-option"><input type="checkbox" value="Consulter l'historique" onchange="msUpdate(this)"><span class="ms-name">Consulter l'historique</span><span class="ms-desc">Avoir accès à l'historique recensant toutes les actions effectuées par les utilisateurs sur l'ensemble de la plateforme.</span></label>
                    </div>
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Règles d'accès aux documents</label>
                <div id="role-rules" class="space-y-3">
                    <div class="role-rule border border-gray-200 rounded-md p-3">
                        <div class="flex items-center justify-between mb-2">
                            <span class="rule-num text-xs font-semibold text-gray-500 uppercase">Règle n°1</span>
                            <button type="button" onclick="removeRoleRule(this)" title="Supprimer la règle" class="p-1.5 rounded hover:bg-gray-100 hover:text-danger transition-colors shrink-0">
                                <svg class="w-5 h-5 inline" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 6h18" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  <line x1="10" x2="10" y1="11" y2="17" />
  <line x1="14" x2="14" y1="11" y2="17" /></svg>
                            </button>
                        </div>
                        <div class="mb-2">
                            <label class="block text-sm font-medium text-gray-700 mb-1">Privilège(s)</label>
                            <div class="multi-select">
                                <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                    <span class="ms-value">Sélectionner…</span>
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                <div class="multi-select-panel hidden-view">
                                    <label class="ms-option"><input type="checkbox" value="Consulter" onchange="msUpdate(this)"><span class="ms-name">Consulter</span><span class="ms-desc">Rechercher et lire des documents.</span></label>
                                    <label class="ms-option"><input type="checkbox" value="Télécharger" onchange="msUpdate(this)"><span class="ms-name">Télécharger</span><span class="ms-desc">Enregistrer une copie des documents sur son ordinateur.</span></label>
                                    <label class="ms-option"><input type="checkbox" value="Déposer" onchange="msUpdate(this)"><span class="ms-name">Déposer</span><span class="ms-desc">Ajouter de nouveaux documents sur la plateforme.</span></label>
                                    <label class="ms-option"><input type="checkbox" value="Modifier" onchange="msUpdate(this)"><span class="ms-name">Modifier</span><span class="ms-desc">Mettre à jour les étiquettes d'un document existant ou publier une nouvelle version.</span></label>
                                    <label class="ms-option"><input type="checkbox" value="Gérer les accès nominatifs" onchange="msUpdate(this)"><span class="ms-name">Gérer les accès nominatifs</span><span class="ms-desc">Rendre un document strictement confidentiel en limitant sa lecture à des personnes nommées explicitement (accès nominatif).</span></label>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-3">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Entité</label>
                            <div class="multi-select" data-placeholder="Tous les libellés">
                                <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                    <span class="ms-value">Tous les libellés</span>
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="CGE" onchange="msUpdate(this)"> Chimay gestion (CGE)</label>
                                <label class="ms-option"><input type="checkbox" value="CPA" onchange="msUpdate(this)"> Chimay patrimoine (CPA)</label>
                                <label class="ms-option"><input type="checkbox" value="ADS" onchange="msUpdate(this)"> Abbaye de Scourmont (ADS)</label>
                                <label class="ms-option"><input type="checkbox" value="SOL" onchange="msUpdate(this)"> Solidarité cistercienne (SOL)</label>
                                <label class="ms-option"><input type="checkbox" value="AUB" onchange="msUpdate(this)"> Poteaupré (AUB)</label>
                                <label class="ms-option"><input type="checkbox" value="ESP" onchange="msUpdate(this)"> Espace Chimay (ESP)</label>
                                <label class="ms-option"><input type="checkbox" value="BSM" onchange="msUpdate(this)"> Boissons Sambre & Meuse (BSM)</label>
                                <label class="ms-option"><input type="checkbox" value="BDC" onchange="msUpdate(this)"> Bières de Chimay (BDC)</label>
                                <label class="ms-option"><input type="checkbox" value="FRO" onchange="msUpdate(this)"> Chimay fromages (FRO)</label>
                                <label class="ms-option"><input type="checkbox" value="PPB" onchange="msUpdate(this)"> Les Petits Pas de la Botte (PPB)</label>
                                <label class="ms-option"><input type="checkbox" value="MDC" onchange="msUpdate(this)"> La Maison De Casimir (MDC)</label>
                                <label class="ms-option"><input type="checkbox" value="AP" onchange="msUpdate(this)"> Albatros Poteaupré (AP)</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Organe</label>
                            <div class="multi-select" data-placeholder="Tous les libellés">
                                <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                    <span class="ms-value">Tous les libellés</span>
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="OA" onchange="msUpdate(this)"> Organe d'administration (OA)</label>
                                <label class="ms-option"><input type="checkbox" value="AG" onchange="msUpdate(this)"> Assemblée générale (AG)</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Audience</label>
                            <div class="multi-select" data-placeholder="Tous les libellés">
                                <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                    <span class="ms-value">Tous les libellés</span>
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="INT" onchange="msUpdate(this)"> Interne (INT)</label>
                                <label class="ms-option"><input type="checkbox" value="EXT" onchange="msUpdate(this)"> Externe (EXT)</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Type de document</label>
                            <div class="multi-select" data-placeholder="Tous les libellés">
                                <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                    <span class="ms-value">Tous les libellés</span>
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="CPT" onchange="msUpdate(this)"> Comptes (CPT)</label>
                                <label class="ms-option"><input type="checkbox" value="BDGT" onchange="msUpdate(this)"> Budget (BDGT)</label>
                                <label class="ms-option"><input type="checkbox" value="PV" onchange="msUpdate(this)"> Procès verbal (PV)</label>
                                <label class="ms-option"><input type="checkbox" value="CNVC" onchange="msUpdate(this)"> Convocation (CNVC)</label>
                                <label class="ms-option"><input type="checkbox" value="NOT" onchange="msUpdate(this)"> Notes (NOT)</label>
                                <label class="ms-option"><input type="checkbox" value="PRES" onchange="msUpdate(this)"> Présentation (PRES)</label>
                                <label class="ms-option"><input type="checkbox" value="RA" onchange="msUpdate(this)"> Rapport annuel (RA)</label>
                                <label class="ms-option"><input type="checkbox" value="BETU" onchange="msUpdate(this)"> Bourse d'étude (BETU)</label>
                                <label class="ms-option"><input type="checkbox" value="ANX" onchange="msUpdate(this)"> Annexe (ANX)</label>
                                <label class="ms-option"><input type="checkbox" value="EXTR" onchange="msUpdate(this)"> Extrait (EXTR)</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Année</label>
                            <div class="multi-select" data-placeholder="Tous les libellés">
                                <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                    <span class="ms-value">Tous les libellés</span>
                                    <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="2026" onchange="msUpdate(this)"> 2026</label>
                                <label class="ms-option"><input type="checkbox" value="2025" onchange="msUpdate(this)"> 2025</label>
                                <label class="ms-option"><input type="checkbox" value="2024" onchange="msUpdate(this)"> 2024</label>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <button type="button" onclick="addRoleRule()" class="btn btn-outline mt-3">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" />
  <path d="M12 5v14" /></svg>
                    Ajouter une règle
                </button>
            </div>

        </form>

        <div class="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 shrink-0 bg-white rounded-b-lg">
            <button type="button" onclick="toggleModal('modal-role', false)" class="btn btn-outline">Annuler</button>
            <button type="submit" form="role-create-form" class="btn btn-primary">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" />
  <path d="M12 5v14" /></svg>
                Créer le rôle
            </button>
        </div>
    </div>
</div>
`;
