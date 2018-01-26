

function getFhotos(){
    let tags = document.getElementById('input').value;
    let scriptEle =  document.createElement('script');
    scriptEle.src = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${tags}&format=json&jsoncallback=getImgLinks`;
    document.body.appendChild(scriptEle);
}

const getImgLinks = (data) => {
    let links = [];
    data.items.forEach(item => {
        links.push(item.media.m)
    });
    return displayOnHtml(links)
};

const displayOnHtml = (imgLinks) => {
    imgLinks.forEach(link => {
        let ele = document.createElement('img');
        ele.src = link;
        document.body.appendChild(ele)
    })
};

