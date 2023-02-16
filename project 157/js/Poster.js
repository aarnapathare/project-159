AFRAME.registerComponent("poster", {
    init: function(){
        this.posterContainer=this.el
        this.createPosters
    },
    

    createPosters:function(item){
        const entityEl =document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "plane", 
            width: 20, 
            height:28
        })

        entityEl.setAttribute("position", {x:0, y:5, z:0.1})
        entityEl.setAttribute("material", {src:item.url})

    }, 
    createBorders: function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter:10
        })

        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {
            color:"#0077CC",
            opacity:1
        })

        return entityEl
    }, 

    createThumbNail: function(position, id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radiusInner: 9
        })
        entityEl.setAttribute("material", {src:item, url})

        return entityEl
    }, 

    createTitleEL:function(position, id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("text", {
            font:"exo2bold", 
            align: "center", 
            width:70, 
            color:"#e65100", 
            value:item.title
        })
        const elPosition=position
        elPosition.y=-30
        entityEl.setAttribute("position", elPosition)
        entityEl.setAttribute("visible", true)
        return entityEl
    },

    
})