const imagesToLoad = document.querySelectorAll("[data-src]");

const imgOptions =  {
    threshold: .3
    //rootMargin: "0px 0px 300px 0px"
};


const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


//check if intersection observer is supported
if('IntersectionObserver' in window){
    const imgOberserver = new IntersectionObserver((items, imgOberserver) => {
        items.forEach((item) => {
            if(item.isIntersecting){
                loadImages(item.target);
                imgOberserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    //loop through each img and check status and load if necessary

    imagesToLoad.forEach((img) => {
        imgOberserver.observe(img);

    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
