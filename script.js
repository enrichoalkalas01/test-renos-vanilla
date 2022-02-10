(function() {
    let Modal = document.querySelector("#modal-box")
    let ModalButton = document.querySelector("#modal-button")
    let ModalWrapper = document.querySelector("#modal-box .wrapper-box")
    let Body = document.querySelector("body")
    let BtnClose = document.querySelector("#btn-close")

    ModalButton.addEventListener('click', (e) => {
        Modal.setAttribute("data-aria", "true")
        Modal.setAttribute('class', 'active')
        Body.setAttribute("class", "active")
    })

    ModalWrapper.addEventListener('click', (e) => {
        if ( e.target !== e.currentTarget ) return false
        else {
            Modal.setAttribute("data-aria", "false")
            Modal.removeAttribute('class')
            Body.removeAttribute("class")
        }
    })

    BtnClose.addEventListener('click', (e) => {
        Modal.setAttribute("data-aria", "false")
        Modal.removeAttribute('class')
        Body.removeAttribute("class")
    })

    document.body.addEventListener('keydown', (e) => {
        if (e.key == "Escape") {
            if ( Modal.getAttribute("data-aria") != "true") false
            else {
                Modal.setAttribute("data-aria", "false")
                Modal.removeAttribute('class')
                Body.removeAttribute("class")
            }
        }
    });
})()