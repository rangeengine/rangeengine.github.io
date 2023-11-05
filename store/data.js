// Database URLs
const pdtUrls = {
    '001': '/store/templates/first_person_character.html',
    '002': '/store/templates/third_person_character.html',
    '003': '/store/templates/vehicle_controller.html',
    '004': '/store/addons/bge_post_processing_filters.html',
    '005': '/store/addons/inputs_helper.html',
};

//Store URL
const storeUrl = window.location.href;

// Item Click Event
for (let pdtItem in pdtUrls) {
    const elements = document.querySelectorAll(`[pdt-id="${pdtItem}"]`);
    elements.forEach(function(element) {
        element.addEventListener('click', function() {
            // Iframe Overlay
            const iframeOverlay = document.createElement('iframeOverlay');

            // Overlay Style
            Object.assign(iframeOverlay.style, {position:'fixed',top:'0',left:'0',width:'100%',height:'100%',backgroundColor:'rgba(0, 0, 0, 0.5)',backdropFilter:'blur(10px)'});

            // Overlay
            document.body.appendChild(iframeOverlay);

            const pdtIframe = document.createElement('iframe');
            pdtIframe.src = pdtUrls[pdtItem];

            // Iframe Style
            Object.assign(pdtIframe.style, {borderRadius:'10px',width:'90%',height:'80%',top:'14%',left:'5%',position:'fixed',zIndex:'10000',boxShadow:'0px 0px 20px 5px black'});
            pdtIframe.frameBorder = '0';

            document.body.insertBefore(pdtIframe, document.body.firstChild);

            // Change the page URL to the Iframe URL
            history.pushState({}, '', pdtUrls[pdtItem]);

            // Close IFrame Button
            const closeButton = document.createElement('closeButton');
            closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            
            // Button Style
            Object.assign(closeButton.style,{position:'fixed',top:'12%',right:'1%',width:'4%',zIndex:'10001',border:'none',background:'transparent',borderRadius:'100%',fontSize:'20px',cursor:'pointer'});
            Object.assign(closeButton.querySelector('svg').style,{backgroundColor:'rgba(255, 255, 255, 0.18)',borderRadius:'100%',padding:'5px'})
            closeButton.addEventListener('mouseover', function() {
                closeButton.querySelector('svg').style.stroke = 'white';
            });
            closeButton.addEventListener('mouseout', function() {
                closeButton.querySelector('svg').style.stroke = '#ccc';
            });

            // Close Click Event
            closeButton.addEventListener('click', function() {
                if (pdtIframe) {
                    pdtIframe.parentNode.removeChild(pdtIframe);
                    iframeOverlay.parentNode.removeChild(iframeOverlay);
                    closeButton.parentNode.removeChild(closeButton);

                    // Restore the Store URL
                    history.pushState({}, '', storeUrl);
                }
            });

            // Appends the Close Button to the body
            document.body.appendChild(closeButton);
        });
    });
}