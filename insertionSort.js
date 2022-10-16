async function insertion()
{
    let ele = document.querySelectorAll(".bar") ;
    ele[0].style.background = 'green';
    for(let i = 1 ; i < ele.length ; i++)
    {
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            ele[i].style.background = 'blue';
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }

    ele = document.querySelectorAll(".bar") ;
    for(let i = 0 ; i < ele.length ; i++)
    {
        ele[i].style.background = 'orange' ;
        
        await waitforme(delay) ;
    }
    for(let i = 0 ; i < ele.length ; i++)
    {
        ele[i].style.background = 'cyan' ;
        
        await waitforme(delay) ;
    }
}

const insertionSortBtn = document.querySelector(".insertionSort") ;
insertionSortBtn.addEventListener('click' , async function()
{
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
}) ;