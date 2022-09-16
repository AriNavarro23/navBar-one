addEventListener('DOMContentLoaded',() => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
} )


// corregir porque no me haace las media query ( mal puesto el codigo )y porque el menu hambruguesa no hace nada , mal intalado ? cdn ? o mal el link de la class


// ACORDARME DE PONER EN EL README FOTO Y VIDEO Y HACERLO CON IMAGEN 