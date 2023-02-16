AFRAME.registerComponent("cursos-listener", {
    init:function(){
        this.handleMouseEnterEvents();

    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter", ()=>{
            const id=this.el.getAttribute("id")
            const posterId = ["Superman", "Spiderman", "Captain-Aero", "Outer-Space"]
            if(posterId.includes(id)){
                const posterContainer=document.querySelector("#posters-container")
                posterContainer.setAttribute("cursor-listener", {
                    selectedItemsId:id,
                })
                this.el.setAttribute("material", {color:"#1565c0"})
            }

        })

    },

    handleMouseClickEvent:function(){
        this.el.addEventListener("click", evt=>{
            const posterContainer = document.querySelector("#poster-container")
            const {state} = posterContainer.getAttribute("poster")
            if(state==="")
        })
       

    },
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
})