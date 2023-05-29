document.querySelector('.main_6_btn_link').addEventListener('click', async (event) => {
    event.preventDefault()
    const response = await fetch('/post-data', {
        method: 'POST'
    })
})

