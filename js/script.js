const xicons = document.querySelectorAll('.xicon')

xicons.forEach(xicon => {
    xicon.addEventListener('mouseover', () => {
        xicon.src = "content/xiconhover.png"
    })
    xicon.addEventListener('mouseout', () => {
        xicon.src = "content/xicon.png"
    })
})
