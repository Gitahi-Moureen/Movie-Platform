// Check if service workers are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch((error) => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}
// Handle the install button
let deferredPrompt;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBtn.style.display = 'block';
    installBtn.addEventListener('click', () => {
        installBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});
window.addEventListener('appinstalled', (event) => {
     console.log('PWA was installed');
});if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('/service-worker.js') .then((registration) => { console.log('ServiceWorker registration successful with scope: ', registration.scope); }) .catch((error) => { console.log('ServiceWorker registration failed: ', error); }); }); }

if ('serviceWorker' in navigator) 
{ window.addEventListener('load', () => { 
    navigator.serviceWorker.register('/service-worker.js') 
    .then((registration) => { console.log('ServiceWorker registration successful with scope: ', registration.scope); 
}) .catch((error) => { console.log('ServiceWorker registration failed: ', error); }); }); }





