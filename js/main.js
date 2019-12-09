
// Background PArallax Effect Vanilla JS
document.addEventListener('DOMContentLoaded', (event) => {

    const sectionsWithDataType = document.getElementsByTagName('section');
    window.addEventListener('scroll', (e) => {
            for (element of sectionsWithDataType) {
                if (element.getAttribute("data-type") === 'background') {
                    const test = element.getAttribute('data-speed');
                    let yPos = -(window.pageYOffset / parseInt(test));
                    // Put together our final background position
                    let coords = `50% ${yPos}px`;
                    // Move the background
                    element.setAttribute("style", `background-position: ${coords};`);

                }
            }
    });
});

// Background JQUERY PARALLAX VARIANT=======
// let $window = $(window)
// $(document).ready(function(){
//     $('section[data-type="background"]').each(function(){
//         var $bgobj = $(this); // assigning the object

//         $(window).scroll(function() {
//             var yPos = -($window.scrollTop() / $bgobj.data('speed')); 

//             // Put together our final background position
//             var coords = '50% '+ yPos + 'px';

//             // Move the background
//             $bgobj.css({ backgroundPosition: coords });
//         }); 
//     });    
// });