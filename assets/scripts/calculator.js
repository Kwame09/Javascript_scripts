class Calculator {
    constructor(){
        this.createContainer()
        this.createElements()
    }

    createContainer(){
        this.container = document.getElementById('calculator')
        this.container.style.width = '300px'
        this.container.style.border = '1px solid grey'
        this.container.style.borderRadius = '5px'
        this.container.style.padding = '10px'
        this.container.style.margin = '10px auto'
    }

    createDisplay(){
        this.display = document.createElement('div')
        this.display.id = 'display'
        this.display.style.width = '100%'
        this.display.style.height = '40px'
        this.display.style.padding = '0 10px'
        this.display.style.border = '1px solid gainsboro'
        this.display.style.borderRadius = '5px'
        this.display.style.textAlign = 'right'
        this.display.style.fontSize = '2rem'

        this.container.appendChild(this.display)
    }

    createBtnsContainer(){
        this.btnsContainer = document.createElement('div')
        this.btnsContainer.id = "btnsContainer"

        this.btnsContainer.style.width = '100%'
        this.btnsContainer.style.height = '300px'
        this.btnsContainer.style.border = '1px solid gainsboro'
        this.btnsContainer.style.borderRadius = '5px'
        this.btnsContainer.style.marginTop = '10px'
        this.btnsContainer.style.display = 'flex'
        this.btnsContainer.style.flexWrap = 'wrap'
        this.btnsContainer.style.alignItems = 'center'
        this.btnsContainer.style.justifyContent = 'center'

        this.container.appendChild(this.btnsContainer)
    }

    createKeys(){
        let keys = [['1','2','3','c'],
                    ['4','5','6','+'],
                    ['7','8','9','-'],
                    ['0','*','/','=']]
        
        for (let k in keys){
            for (let b in keys[k]){
                let btn = document.createElement('button')
                btn.classList.add('btn')
                btn.style.border = '1px solid silver'
                btn.style.padding = '13px'
                btn.style.margin = '5px'
                btn.style.width = '20%'
                btn.style.height = 'max-content'
                btn.style.borderRadius = '5px'
                btn.innerText = keys[k][b]
                
                btn.onclick = (e => {
                    this.onBtnClick(e.target.textContent)
                })

                this.btnsContainer.appendChild(btn)
            }
        }
    }

    createElements(){
        this.createDisplay()
        this.createBtnsContainer()
        this.createKeys()
    }

    onBtnClick(key){
        
        if (key === 'c'){
            this.display.textContent = ''
        }
        else if (key === '='){
            this.display.textContent = eval(this.display.textContent)
        }
        else {
            this.display.innerText = this.display.innerText + key
        }
    }

}

window.onload = (e => {
    app = new Calculator()
})
