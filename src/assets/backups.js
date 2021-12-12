/* Alternância de visibilidade dos itens do menu da barra de navegação ao clicar */
// import { navbarToggle } from '../scripts/navbar-toggle';
// mounted: function() {
//     this.$nextTick(navbarToggle())
// }

/* Alternância de visibilidade dos itens do menu da barra de navegação */
/* .navbar-dropdown {
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 2px solid #dbdbdb;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
    display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 20;
}

.navbar-item:hover .navbar-dropdown{
    display: block;
}

@media screen and (max-width: 1088px){
    .navbar-dropdown{
        display: none;
    }
} */


// arquivo navbar-toggle.js

// export const navbarToggle = () => {
//     document.addEventListener('DOMContentLoaded', () => {

//         // Get all "navbar-burger" elements
//         const $navbarMenus = Array.prototype.slice.call(document.querySelectorAll('.navbar-menu'), 0);
    
//         // Check if there are any navbar burgers
//         if ($navbarMenus.length > 0) {
    
//             // Add a click event on each of them
//             $navbarMenus.forEach( el => {
//                 el.addEventListener('click', () => {
    
//                     // Get the target from the "data-target" attribute
//                     const target = el.dataset.target;
//                     const $target = document.getElementById(target);
    
//                     // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//                     el.classList.toggle('is-active');
//                     $target.classList.toggle('is-active');
    
//                 });
//             });
//         }
//     });
// }
