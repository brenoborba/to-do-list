const Main = {
    init: function(){
        this.cacheSelectors()
        this.bindEvents()

    },

    cacheSelectors: function(){ /* Seleciona e armazena elementos do HTML. */
        this.checkButtons = document.querySelectorAll('.check')
    },

    bindEvents: function(){ 
        const self = this

        this.checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButtons_click
        })
    },


    Events: {
        checkButtons_click: function(){
            alert('ok')
        }

    }


}


Main.init()