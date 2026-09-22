window.PARTIALS = window.PARTIALS || {};
PARTIALS.modalShare = `
<div id="modal-share" class="hidden-view fixed inset-0 bg-slate-900 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col max-h-[90vh]">

        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg shrink-0">
            <div class="min-w-0">
                <h3 class="text-lg font-bold text-gray-800">Créer un lien vers le document</h3>
                <p id="share-doc-name" class="text-xs text-gray-500 truncate"></p>
            </div>
            <button onclick="toggleModal('modal-share', false)" class="text-gray-400 hover:text-gray-600 shrink-0 ms-4">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 6 6 18" />
  <path d="m6 6 12 12" /></svg>
            </button>
        </div>

        <div class="flex-1 overflow-y-auto min-h-0 px-6 py-5 space-y-6">

            <div>
                <h4 class="text-sm font-semibold text-gray-800 mb-1">Utilisateurs ayant déjà accès</h4>
                <p class="text-xs text-gray-500 mb-3">Ces utilisateurs peuvent déjà voir ce document via leurs permissions actuelles.</p>
                <div class="border border-gray-200 rounded-md overflow-hidden">
                    <div class="max-h-52 overflow-y-auto">
                        <table class="w-full text-left text-sm">
                            <thead class="bg-gray-50 text-gray-600 uppercase text-xs font-semibold sticky top-0">
                                <tr>
                                    <th class="px-4 py-2.5">Utilisateur</th>
                                    <th class="px-4 py-2.5">E-mail</th>
                                    <th class="px-4 py-2.5">Période</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr>
                                    <td class="px-4 py-2.5 font-medium text-gray-900">Philippe Dumont</td>
                                    <td class="px-4 py-2.5 text-gray-500">p.dumont@chimay-gestion.be</td>
                                    <td class="px-4 py-2.5 text-gray-500">—</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2.5 font-medium text-gray-900">Julie Stavrakas</td>
                                    <td class="px-4 py-2.5 text-gray-500">j.stavrakas@chimay-gestion.be</td>
                                    <td class="px-4 py-2.5 text-gray-500">—</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2.5 font-medium text-gray-900">Marc Lemoine</td>
                                    <td class="px-4 py-2.5 text-gray-500">m.lemoine@cge.fr</td>
                                    <td class="px-4 py-2.5 text-gray-500">—</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2.5 font-medium text-gray-900">Denis Buchet</td>
                                    <td class="px-4 py-2.5 text-gray-500">d.buchet@chimay-gestion.be</td>
                                    <td class="px-4 py-2.5 text-gray-500">15/09/2026 – 31/12/2026</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="pt-4">
                <h4 class="text-sm font-semibold text-gray-800 mb-1">Ajouter des accès nominatifs</h4>
                <p class="text-xs text-gray-500 mb-4">Un accès nominatif prime sur les règles d'accès générales : il donne à une personne précise l'accès à ce document pour la période indiquée, puis est révoqué automatiquement à l'échéance.</p>

                <div class="space-y-4">
                    <div class="bg-gray-50 rounded-md p-4">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Privilèges accordés</label>
                        <div id="share-privileges" class="multi-select" data-placeholder="Sélectionner des privilèges…">
                            <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                <span class="ms-value">Sélectionner des privilèges…</span>
                                <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                            <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="Consulter" onchange="msUpdate(this)"><span class="ms-name">Consulter</span><span class="ms-desc">Afficher le contenu du document.</span></label>
                                <label class="ms-option"><input type="checkbox" value="Télécharger" onchange="msUpdate(this)"><span class="ms-name">Télécharger</span><span class="ms-desc">Enregistrer une copie du document sur son ordinateur.</span></label>
                                <label class="ms-option"><input type="checkbox" value="Modifier" onchange="msUpdate(this)"><span class="ms-name">Modifier</span><span class="ms-desc">Mettre à jour les métadonnées ou publier une nouvelle version.</span></label>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 rounded-md p-4">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Utilisateurs de l'application</label>
                        <div id="share-users" class="multi-select" data-placeholder="Sélectionner des utilisateurs…">
                            <div class="multi-select-toggle" onclick="toggleMultiSelect(this)" role="button" tabindex="0">
                                <span class="ms-value">Sélectionner des utilisateurs…</span>
                                <svg class="w-4 h-4 text-gray-400 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                            <div class="multi-select-panel hidden-view">
                                <label class="ms-option"><input type="checkbox" value="Denis Buchet" onchange="msUpdate(this)"><span class="ms-name">Denis Buchet</span><span class="ms-desc">d.buchet@chimay-gestion.be</span></label>
                                <label class="ms-option"><input type="checkbox" value="Philippe Dumont" onchange="msUpdate(this)"><span class="ms-name">Philippe Dumont</span><span class="ms-desc">p.dumont@chimay-gestion.be</span></label>
                                <label class="ms-option"><input type="checkbox" value="Sophie Durant" onchange="msUpdate(this)"><span class="ms-name">Sophie Durant</span><span class="ms-desc">s.durant@audit-externe.be</span></label>
                                <label class="ms-option"><input type="checkbox" value="Marc Lemoine" onchange="msUpdate(this)"><span class="ms-name">Marc Lemoine</span><span class="ms-desc">m.lemoine@cge.fr</span></label>
                                <label class="ms-option"><input type="checkbox" value="Laurent Petit" onchange="msUpdate(this)"><span class="ms-name">Laurent Petit</span><span class="ms-desc">l.petit@externe.be</span></label>
                                <label class="ms-option"><input type="checkbox" value="Julie Stavrakas" onchange="msUpdate(this)"><span class="ms-name">Julie Stavrakas</span><span class="ms-desc">j.stavrakas@chimay-gestion.be</span></label>
                            </div>
                        </div>
                        <div class="flex gap-3 mt-3">
                            <div class="flex-1">
                                <label class="block text-xs font-medium text-gray-700 mb-1">À partir du</label>
                                <input id="share-users-from" type="date" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                            </div>
                            <div class="flex-1">
                                <label class="block text-xs font-medium text-gray-700 mb-1">Jusqu'au</label>
                                <input id="share-users-to" type="date" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 rounded-md p-4">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Invités (Microsoft Entra B2B)</label>
                        <div class="flex items-center gap-2">
                            <input id="share-invite-input" type="text" placeholder="adresse@exemple.be" class="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                            <button type="button" onclick="addShareGuests()" class="btn btn-outline shrink-0">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" />
  <path d="M12 5v14" /></svg>
                                Ajouter
                            </button>
                        </div>
                        <p class="text-xs text-gray-400 mt-1">Séparez plusieurs adresses par une virgule ou un espace.</p>
                        <div id="share-invite-list" class="flex flex-wrap gap-2 mt-2"></div>
                        <p class="text-xs text-gray-500 mt-2 flex items-start gap-1.5">
                            <svg class="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.2a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                            Chaque invité reçoit un e-mail contenant un lien unique. S'il n'a pas de compte Microsoft, un code à usage unique lui est envoyé pour prouver son identité.
                        </p>
                        <div class="flex gap-3 mt-3">
                            <div class="flex-1">
                                <label class="block text-xs font-medium text-gray-700 mb-1">À partir du</label>
                                <input id="share-invite-from" type="date" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                            </div>
                            <div class="flex-1">
                                <label class="block text-xs font-medium text-gray-700 mb-1">Jusqu'au</label>
                                <input id="share-invite-to" type="date" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="px-6 py-4 border-t border-gray-100 shrink-0 bg-white rounded-b-lg space-y-2">
            <label for="share-link-input" class="block text-sm font-medium text-gray-700">Lien de partage</label>
            <div class="flex items-center gap-2">
                <input id="share-link-input" type="text" readonly onclick="this.select()" class="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 text-gray-600 outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                <button onclick="copyShareLink()" title="Copier le lien" class="btn btn-outline shrink-0">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                    Copier
                </button>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed">Ce lien contient un jeton (token) sécurisé. Il est envoyé par e-mail à la personne concernée. Un invité sans compte Microsoft est vérifié via un code à usage unique (Entra B2B) avant d'accéder au document.</p>
        </div>

    </div>
</div>
`;
