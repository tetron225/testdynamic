const previouslist = () => {
    let allclass = document.getElementsByClassName("image");
    let alldot = document.getElementsByClassName('dot');
    let found = false;
    let i = 0;
    while(!found) {
        let element = window.getComputedStyle(allclass[i]).display;
        if(element !== 'none') {
            if(i-1 < 0) {
                allclass[i].style.display = 'none';
                alldot[i].style.backgroundColor = 'lightgray';
                i = allclass.length-1;
                allclass[i].style.display = 'inline';
                alldot[i].style.backgroundColor = 'white';
                
            } else {
                allclass[i].style.display = 'none';
                alldot[i].style.backgroundColor = 'lightgray';
                i--;
                allclass[i].style.display = 'inline';
                alldot[i].style.backgroundColor = 'white';
            }
            found = true;
       } else {
            i++;
       }
    }
       
}

const nextlist = () => {
    let allclass = document.getElementsByClassName("image");
    let alldot = document.getElementsByClassName('dot');
    let found = false;
    let i = 0;
    while(!found) {
        let element = window.getComputedStyle(allclass[i]).display;
        if(element !== 'none') {
            if(i+1 >= allclass.length) {
                allclass[i].style.display = 'none';
                alldot[i].style.backgroundColor = 'lightgray';
                i = 0;
                allclass[i].style.display = 'inline';
                alldot[i].style.backgroundColor = 'white';
            } else {
                allclass[i].style.display = 'none';
                alldot[i].style.backgroundColor = 'lightgray';
                i++;
                allclass[i].style.display = 'inline';
                alldot[i].style.backgroundColor = 'white';
            }
            found = true;
        } else {
            i++;
        }
    }
}

export { previouslist, nextlist };