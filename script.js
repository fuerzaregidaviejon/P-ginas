const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true

btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true
    btnCloseElement.disabled = false
    const coverElement = document.querySelector('.cover')
    coverElement.classList.add('open-cover')

    setTimeout(() => {
        coverElement.style.zIndex = -1

        const paperElement = document.querySelector('.paper')
        paperElement.classList.remove('close-paper')
        paperElement.classList.add('open-paper')

        //animacion del corazon 8/4/2025 8:39 mañana (copia de seguridad)
        const corazonElement = document.querySelector('.corazon')
        corazonElement.style.display = 'block'
    }, 500)

   
})

btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false
    btnCloseElement.disabled = true
    
    
    
   
    const coverElement = document.querySelector('.cover')
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('open-paper')
    paperElement.classList.add('close-paper')
    
    setTimeout(() => {
        coverElement.style.zIndex = 0
        coverElement.classList.remove('open-cover')

                //animacion del corazon 9/4/2025 7:44 tarde (8vo intento)
                const corazonElement = document.querySelector('.corazon')
                corazonElement.style.display = 'none'
    }, 500)
})