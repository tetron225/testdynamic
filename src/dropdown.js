const dropdown = (someid) => {
    //checks to see if visibility is either visible or hidden and appropriately 
    //places the opposite of that value
    if(someid.style.visibility === 'visible') {
        someid.style.visibility = 'hidden';
    } else {
        someid.style.visibility = 'visible';
    }
        
}

export { dropdown };