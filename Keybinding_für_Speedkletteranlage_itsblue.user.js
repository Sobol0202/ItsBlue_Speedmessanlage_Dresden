// ==UserScript==
// @name         Keybinding für Speedkletteranlage "itsblue"
// @version      1.1
// @description  Legt Hotkeybindings auf Ready und At-Your-Marks in der Weboberfläche der Zeitmessanlage Itsblue
// @author       Sobol
// @match        http://10.4.99.1/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('keydown', function (e) {
        // Leertaste -> READY Button
        if (e.code === 'Space') {
            const readyButton = Array.from(document.querySelectorAll('button'))
                .find(btn => btn.textContent.trim() === 'READY');
            if (readyButton) {
                readyButton.click();
                console.log('READY-Button geklickt');
            } else {
                console.warn('READY-Button nicht gefunden');
            }
            e.preventDefault(); // Verhindert Scrollen der Seite mit Leertaste
        }

        // Taste R -> Reset Button
        if (e.key.toLowerCase() === 'r') {
            const marksButton = Array.from(document.querySelectorAll('button'))
                .find(btn => btn.textContent.trim() === 'RESET');
            if (marksButton) {
                marksButton.click();
                console.log('"Reset"-Button geklickt');
            } else {
                console.warn('"Reset"-Button nicht gefunden');
            }
        }

        // Taste 5 -> At your Marks! Button
        if (e.key.toLowerCase() === '5') {
            const marksButton = Array.from(document.querySelectorAll('button'))
                .find(btn => btn.textContent.trim() === 'At your Marks!');
            if (marksButton) {
                marksButton.click();
                console.log('"At your Marks!"-Button geklickt');
            } else {
                console.warn('"At your Marks!"-Button nicht gefunden');
            }
        }
    });
})();
