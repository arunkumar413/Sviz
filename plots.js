function bar(x,y){
box_w=600;
box_h=320;
rw=50; //rect width
gap=5;
data =y;
labels = x;
box = s.rect(0,0,box_w,box_h).attr({"fill":'none','stroke':'gray','strokeWidth':2});
  
x_start=10;
y_start=20;  
  
r=[];  // bars
t=[]; //labels
u=[]; //data number

for (var i=0;i<data.length;i++){
r[i]= s.rect(i*(rw+gap)+x_start,box_h-y_start-data[i],rw,data[i]).attr({'fill':'green'});
t[i]= s.text(i*(rw+gap)+x_start+5,box_h-gap,labels[i]);
u[i]= s.text(i*(rw+gap)+x_start+5,box_h-y_start-2-data[i],data[i]).attr({'fill':'blue'})
}
}
