const Main = {
    init: function(){
        this.cacheSelectors()
        this.bindEvents()

    },

    cacheSelectors: function(){ /* Seleciona e armazena elementos do HTML. */
        this.$checkButtons = document.querySelectorAll('.check')
    },

    bindEvents: function(){ 
        const self = this

        this.$checkButtons.forEach(function(button){
            button.onclick = self.Events.checkButtons_click
        })
    },


    Events: {
        checkButtons_click: function(e){
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')

            if(!isDone){
                return li.classList.add('done')
            }
            
            li.classList.remove('done')
            
        }

    }


}


Main.init()