class Barplot {
  constructor(x,y){    
    
this.box_w=600;  //container box width
this.box_h=320;  //container box height
this.rw=50; //rect width
this.gap=5;  //gap between each bar
this.data =y;
this.labels = x;
this.x_start=10; //start drawing bar from this position.
this.y_start=20;  
this.r=[];  // holds all bars
this.t=[]; // holds all labels
this.u=[]; //data number

this.box = Snap(this.box_w,this.box_h);
this.box.addClass("box");
  
for (var i=0;i<this.data.length;i++){

this.barx= i*(this.rw+this.gap)+this.x_start;
this.bary= this.box_h-this.y_start-this.data[i];
this.barw= this.rw ;
this.barh= this.data[i];

this.r[i]=this.box.rect(this.barx,this.bary,this.barw,this.barh).attr({'fill':'green'});
  
this.t[i]= this.box.text(this.barx+5,this.box_h-this.gap,this.labels[i]).attr({'fill':'blue'});
  
this.u[i]= this.box.text(i*(this.rw+this.gap)+this.x_start+5,this.box_h-this.y_start-2-this.data[i],this.data[i]).attr({'fill':'blue'});


}
    
  }
}
