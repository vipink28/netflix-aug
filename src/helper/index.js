export const truncateText=(str="", limit)=>{
    if(str.length <= limit){
        return str;
    }
    return str.slice(0, limit) + "..."
}

export const getYear = (date)=>{
    return new Date(date).getFullYear();
}

export const navScroll = ()=>{
    window.addEventListener('scroll', function(){
        var top = this.scrollY;
        if(top > 100){
            this.document.querySelector('navbar')?.classList.add('scrolled');
        }else{
            this.document.querySelector('navbar')?.classList.remove('scrolled');
        } 
    })
}


export const  numToTime=(num)=>{ 
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    if (minutes + ''.length < 2) {
      minutes = '0' + minutes; 
    }
    return hours+'h ' + minutes+'m';
}

export const shuffle=(array)=>{
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  export const formatCurrency=(number)=>{
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }