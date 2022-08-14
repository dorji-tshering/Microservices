function myFunc() {
    let items = document.getElementsByClassName("item");
    let itemLength = items.length;
    let rowLength = 1;
    let baseOffsetTop = items[0].offsetTop;
  
    // find length of a single row
    for (let i = 1; i < itemLength; i++) {
      if (baseOffsetTop === items[i].offsetTop) {
        rowLength += 1;
      } else {
        break;
      }
    }
  
    // event handler
    function handleClick(event) {
      for (let j = 0; j < itemLength; j++) {
        let position;
        if (items[j] === event.target && j < rowLength) { 
            // position for first row elements
            position = j + 1;  
            alert(`Position: ${position}`);
            break;
        } else if(items[j] === event.target && j >= rowLength) {
            if((j+1) % rowLength === 0) {
                // position for last elements of each row after first row
                position = rowLength;  
                alert(`Position: ${position}`);
                break;
            }
            // position for rest of the row elements
            alert(`Position: ${(j+1) % rowLength}`);
            break;
        }
      }
    }
  
    // add onlick event
    Array.from(items).forEach((item) => {
      item.addEventListener("click", handleClick);
    });
}
  
myFunc();
  
