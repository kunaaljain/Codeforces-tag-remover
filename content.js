document.addEventListener('DOMContentLoaded', init);

function init()
{
    document.querySelector('#sh').addEventListener('click',show,false);
    document.querySelector('#hd').addEventListener('click',hide,false);
}


function hide()
{
    $("div.roundbox:nth-child(6)").hide();
    console.log('hidden');
}

function show()
{
    $("div.roundbox:nth-child(6)").show();
    console.log('showed');
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
      console.log(request.greeting);
    if (request.greeting == "showit")
      show();
      if (request.greeting == "hideit")
      hide();
      
  });