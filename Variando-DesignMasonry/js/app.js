const $container = document.querySelector('.container');
const $childs = document.querySelectorAll('.item');
function masonry(){
    const data_cols = window.getComputedStyle($container).gridTemplateColumns;
    const num_col = data_cols.split(' ').length;

    //Borramos a todos los hijos
    $container.innerHTML = '';

    //Creamos a los divs de cada columna
    for(let i=1 ; i<=num_col ; i++){
        let div = document.createElement('div');
        $container.append(div);
    }

    //Insertamos a los hijos
    for(let i=0 ; i< Math.ceil($childs.length/num_col); i++){
        for(let j=0 ; j<num_col ; j++){
            const $item = $childs[i*num_col+j];
            if($item!=null)
                $container.children[j].append($item);
        }
    }
};
window.addEventListener('load',()=>{
    masonry();
})
window.addEventListener('resize',()=>{
    masonry();
})