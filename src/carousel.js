const previouslist = () => {
    let allclass = document.getElementsByClassName("image");
    let found = false;
    let i = 0;
    while(!found) {
        console.log(allclass[i])
        console.log(window.getComputedStyle(allclass[i]).display);
        let element = window.getComputedStyle(allclass[i]).display
        console.log(element);
       if(element !== 'none') {
            if(i-- < 0) {
                allclass[i].style.display = 'none';
                i = allclass.length-1
                console.log('hit')
                allclass[i].style.display = 'inline';
            } else {
                allclass[i].style.display = 'none';
                i--;
                allclass[i].style.display = 'inline';
            }
            found = true;
       } else {
            i++;
       }
    }
}

const nextlist = () => {

}

export { previouslist, nextlist };