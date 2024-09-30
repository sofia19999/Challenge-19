const butInstall = document.getElementById('buttonInstall');






// TODO: Add an event handler to the `beforeinstallprompt` event


window.addEventListener('beforeinstallprompt', (event) => {
    
    event.preventDefault();
  
    deferredPrompt = event;
    
    butInstall.style.display = 'block';
    console.log('👍', 'beforeinstallprompt event fired');
  });
  

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    butInstall.style.display = 'none';
    if (deferredPrompt) {
 
      deferredPrompt.prompt();

      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
 
      deferredPrompt = null;
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled event fired');
  
    deferredPrompt = null;
  });