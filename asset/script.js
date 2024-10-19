

function checkPhishing() {
    const url = document.getElementById('urlInput').value;
    const resultElement = document.getElementById('result');
    const historyElement = document.getElementById('history');

    function containsPhishingKeyword(url, keywords) {
        return keywords.some(keyword => url.includes(keyword));
    }

    const phishingKeywords = ["login", "verify", "bank", "secure", "update"];
    const isPhishing = (url.startsWith("http://") || url.length > 2000 || containsPhishingKeyword(url, phishingKeywords));
    const isInvalid = (!url.startsWith("http") || !url.startsWith("https"));
    let pishingImg;
    
    
    if (isPhishing) {
        resultElement.textContent = "This URL might be phishing!";
        resultElement.style.color = "red";
    } 
    if (isInvalid) {
        resultElement.textContent = "Enter URL with starting with HTTP or HTTPS";
        resultElement.style.color = "pink";
    }
    else {
        resultElement.textContent = "This URL is likely safe.";
        resultElement.style.color = "green";
    }

    // Add URL and result to history
    const historyItem = document.createElement('li');
    historyItem.textContent = `${url} - ${resultElement.textContent}`;
    historyElement.appendChild(historyItem);

    // Prepare for next input
    document.getElementById('urlInput').value = '';
    document.getElementById('checkButton').textContent = 'Check Another URL';
}


