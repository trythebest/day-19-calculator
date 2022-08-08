
var divtitle=document.createElement('div');
divtitle.className="titletag"
var h1=createtag("h1","title","Calculator");
var p=createtag("p","description","Calculator Description");

var div = document.createElement("div");
div.setAttribute("class","parent");

var div1 = document.createElement("div");
div1.setAttribute("class","child");

var inputScreen = document.createElement("input");
inputScreen.setAttribute("type","text");
inputScreen.setAttribute("id","result");
inputScreen.setAttribute("placeholder","0");


var button1=createbutton('button','button','c','clear',"btn btn-secondary","C")
var button2=createbutton('button','button','delete' ,'delete','btn btn-info',"←")
var button3=createbutton('button','button','.' ,'dot','btn btn-info',".")
var button4=createbutton('button','button','*' ,'mult','btn btn-info',"X")

var button5=createbutton('button','button','7' ,"7","btn btn-light waves-effect",'7')
var button6=createbutton('button','button','8',"8","btn btn-light waves-effect",'8')
var button7=createbutton('button','button','9','9',"btn btn-light waves-effect",'9')
var button8=createbutton('button','button','/' ,'divi','btn btn-info','/')

var button9=createbutton('button','button','4','4',"btn btn-light waves-effect",'4')
var button10=createbutton('button','button','5','5',"btn btn-light waves-effect",'5')
var button11=createbutton('button','button','6','6',"btn btn-light waves-effect",'6')
var button12=createbutton('button','button','-','subtract','btn btn-info','-')


var button13=createbutton('button','button','1','1',"btn btn-light waves-effect",'1')
var button14=createbutton('button','button','2','2',"btn btn-light waves-effect",'2')
var button15=createbutton('button','button','3','3',"btn btn-light waves-effect",'3')
var button16=createbutton('button','button','+','add','btn btn-info','+')


var button17=createbutton('button','button','0','0',"btn btn-light waves-effect",'0')
var button18=createbutton('button','button','00','00',"btn btn-light waves-effect",'00')
var button19=createbutton('button','button','=' ,'equal','equal-button  btn btn-primary','Ans')



divtitle.append(h1,p);
div1.append(inputScreen,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16,button17,button18,button19);
div.append(div1);
document.body.append(divtitle,div);


function createtag(tagname,idname,data){
    var tag=document.createElement(tagname);
    tag.setAttribute("id",idname)
    tag.innerHTML=data
    return tag;
}




function createbutton(buttag,buttype,butvalue,butid,butclassname,name) {
    var button= document.createElement(buttag)
    button.setAttribute('type',buttype);
    button.setAttribute('value',butvalue);
    button.setAttribute('id',butid);
    button.className=butclassname;
    button.innerHTML=name
    button.addEventListener('click', (val)=>{
        var data=val.target.value
        if(data=="=")
        {
         equal( );
        }
        else if(data=='delete')
        {
            del();
        }
        else{
           display(data)
        }
        if(data=="c")
        {
           Clear();
        }
        if(data=="delete")
        {
           del();
        }
    
           })
  return button;
}

var outputView = document.getElementById("result");

function display(num)
{
    outputView.value+=num;
   
}

function equal(val){
    try{
        outputView.value = eval(outputView.value);
    }
    catch(eror){
        alert("Only numbers are allowed")
    }
 
   

}
function del(){
    outputView.value = outputView.value.slice(0,-1);

}

function Clear()
{
    outputView.value = ""
}