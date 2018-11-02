window.onload = function(){
    console.log("Hello world");

    //TITLE
  
    var waypoint = new Waypoint({
        element:document.getElementById("TITLE"),
        handler:function(direction){
            this.element.classList.add("slideInRight");
            this.element.classList.add("animated");
            //this.element.classList.add("see");
        },
        offset: "50%" //scroll to 50% for it to be activated
    })

    //SIDELINES
  
    var waypoint = new Waypoint({
        element:document.getElementById("OUTER_LINES"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            //this.element.classList.add("see");
        },
        offset: "50%" //scroll to 50% for it to be activated
    })

    //CRITICALLY ENDANGERED
  
    var waypoint = new Waypoint({
        element:document.getElementById("CRITICALLY_ENDANGERED"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            //this.element.classList.add("see");
        },
        offset: "50%" //scroll to 50% for it to be activated
    })

    //POACHING RATES GRAPH
    
    var waypoint = new Waypoint({
        element:document.getElementById("POACHING_RATES"),
        handler:function(direction){
            this.element.classList.add("shake");
            this.element.classList.add("animated");
            //this.element.classList.add("see");
        },
        offset: "20%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("2012"),
        handler:function(direction){
            this.element.classList.add("flash");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("_x34_48_x2B_"),
        handler:function(direction){
            this.element.classList.add("flash");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "30%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("_x33_33_x2B_"),
        handler:function(direction){
            this.element.classList.add("flash");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("122"),
        handler:function(direction){
            this.element.classList.add("flash");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("Number_of_rhinos_killed_in_South_Africa_1_"),
        handler:function(direction){
            this.element.classList.add("shake");
            this.element.classList.add("animated");
            //this.element.classList.add("see");
        },
        offset: "80%" 
    })
    

    //FIRST LINE OF RHINOS

    var waypoint = new Waypoint({
        element:document.getElementById("INDIAN_1_"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "20%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("SUMATRAN_3_"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "30%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("BLACK_3_"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "40%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("JAVAN_3_"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("WHITE_5_"),
        handler:function(direction){
            this.element.classList.add("fadeIn");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    //LESS THAN 3...ANIMATIONS
    
    var waypoint = new Waypoint({
        element:document.getElementById("rhinos_left_sctn"),
        handler:function(direction){
            this.element.classList.add("fadeOut");
            this.element.classList.add("animated");
            //this.element.classList.add("see");
        },
        offset: "15%" 
    })

    //SPECIFIC NUMBER OF RHINOS LEFT SECTION ANIMATIONS
   
    var waypoint = new Waypoint({
        element:document.getElementById("INDIAN"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })
    
    var waypoint = new Waypoint({
        element:document.getElementById("SUMATRAN_2_"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("BLACK_2_"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("JAVAN_2_"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("WHITE_3_"),
        handler:function(direction){
            this.element.classList.add("slideInLeft");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("LESS_THAN_20_x2C_000"),
        handler:function(direction){
            this.element.classList.add("flash");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("LESS_THAN_44"),
        handler:function(direction){
            this.element.classList.add("flash");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("LESS_THAN_300"),
        handler:function(direction){
            this.element.classList.add("flash");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "50%" 
    })

    //WHERE CAN THEY BE FOUND CONTENT ANIMATION

    //LINES
    var waypoint = new Waypoint({
        element:document.getElementById("indian_line"),
        handler:function(direction){
            this.element.classList.add("pulse");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "59%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("sumatran_line"),
        handler:function(direction){
            this.element.classList.add("pulse");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "57%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("white_line"),
        handler:function(direction){
            this.element.classList.add("pulse");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "55%" 
    })

    var waypoint = new Waypoint({
        element:document.getElementById("black_line"),
        handler:function(direction){
            this.element.classList.add("pulse");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "53%" 
    })


    //FINE PRINT
    var waypoint = new Waypoint({
        element:document.getElementById("FINE_PRINT"),
        handler:function(direction){
            this.element.classList.add("flash");
            this.element.classList.add("animated");
            this.element.classList.add("visible");
        },
        offset: "90%" 
    })

  };