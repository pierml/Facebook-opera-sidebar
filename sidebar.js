document.addEventListener("DOMContentLoaded", function(event) {
   document.title = chrome.i18n.getMessage("extName");
   iframe = document.createElement("iframe");
   iframe.src = chrome.i18n.getMessage("extPanelURL");
   iframe.id = "frm";
   iframe.target = '_top';
   document.body.appendChild(iframe);
   iframe.contentWindow.focus();
});
