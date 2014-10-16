document.addEventListener('DOMContentLoaded', init);

function init()
{
    document.querySelector('#sh').addEventListener('click',callshow,false);
    document.querySelector('#hd').addEventListener('click',callhide,false);
}

function callshow()
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "showit"}, function(response) {
    console.log(response.farewell);
  });
});
}

function callhide()
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hideit"}, function(response) {
    console.log(response.farewell);
  });
});
}