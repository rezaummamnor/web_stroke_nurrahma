var screen=document.querySelector('#screen');
var umur=document.querySelector('#inputan');
var bb=document.querySelector('#inputan2');
var tb=document.querySelector('#inputan3');

var dicek1=document.querySelector('#cek1');
var dicek2=document.querySelector('#cek2');
var dicek3=document.querySelector('#cek3');
var dicek4=document.querySelector('#cek4');
var dicek5=document.querySelector('#cek5');
var dicek6=document.querySelector('#cek6');
var dicek7=document.querySelector('#cek7');
var dicek8=document.querySelector('#cek8');
var dicek9=document.querySelector('#cek9');
var dicek10=document.querySelector('#cek10');

var btn=document.querySelectorAll('.btn');
var rule1 = 0
var rule2 = 0

//item.addEventListener('click',(e)=>{
//    btntext=e.target.innerText;
//});

function BMI()
{
    document.getElementById('question9').style.backgroundColor = '#c2d40080'
    tinggi = tb.value/100
    bmi_value = bb.value/(tinggi*tinggi)
    if(bmi_value<=18.4)
    {
        rule9 = 'kurus'
        dicek9.value = bmi_value.toFixed(2) + ' - ' + rule9
    } else
    {
        if(bmi_value<=25)
        {
            rule9 = 'normal'
            dicek9.value = bmi_value.toFixed(2) + ' - ' + rule9
        } else
        {
            if(bmi_value>25)
            {
                rule9 = 'obesitas'
                dicek9.value = bmi_value.toFixed(2) + ' - ' + rule9
            } else
            {
                rule9 = 'error'
                dicek9.value = rule9
            }
        }
    }
}

function kategoriUmur(a)
{
    document.getElementById('question2').style.backgroundColor = '#c2d40080'
    if (a <= 1)
    {
        rule2 = 'bayi'
        dicek2.value = rule2
    } else
    {
        if (a<6)
        {
            rule2 = 'balita'
            dicek2.value = rule2
        } else
        {
            if (a <= 10)
            {
                rule2 = 'anak-anak'
                dicek2.value = rule2
            } else
            {
                if (a<=19)
                {
                    rule2 = 'remaja'
                    dicek2.value = rule2
                } else
                {
                    if (a<=44)
                    {
                    rule2 = 'dewasa'
                    dicek2.value = rule2
                    } else
                    {
                        if (a<=59)
                        {
                            rule2 = 'pra lanjut usia'
                            dicek2.value = rule2
                        } else
                        {
                            if (a>59)
                            {
                                rule2 = 'lanjut usia'
                                dicek2.value = rule2
                            } else
                            {
                                rule2 = 'error'
                                dicek2.value = rule2
                            }
                        }
                    }
                }
        
            }
        }
    }  
}

//jenis kelamin
function input1(param)
{
    document.getElementById('question1').style.backgroundColor = '#c2d40080'
    if (param=='laki-laki') 
    {
       rule1=1
       dicek1.value='laki-laki'
    }  else 
        {
            if (param=='perempuan')
            {
                rule1=2
                dicek1.value='perempuan'
            } else
            {
                rule1='error'
                dicek1.value=rule1
            }        
        }
}

//kategori umur
function input2(param)
{
    document.getElementById('question2').style.backgroundColor = '#c2d40080'
    if (param=='anak-anak') 
    {
       rule2=1
       dicek2.value='anak-anak'
    }  else 
    {
        if(param=='remaja')
        {
            rule2=2
            dicek2.value='remaja'
        } else
        {
            if(param=='dewasa')
            {
                rule2=3
                dicek2.value='dewasa'
            } else
            {
                if(param=='pra lanjut usia')
                {
                    rule2=4
                    dicek2.value='pra lanjut usia'
                } else
                {
                    if(param=='lanjut usia')
                    {
                        rule2=5
                        dicek2.value='lanjut usia'
                    } else
                    {
                        rule2='error'
                        dicek2.value=rule2
                    }                    
                }
            }
        } 

    }
}

//riwayat hipertensi
function input3(param)
{
    document.getElementById('question3').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule3=1
       dicek3.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule3=0
            dicek3.value='Tidak'
        }   else
        {
            rule3='error'
            dicek3.value='error'
        }           
    }
}

//riwayat penyakit jantung
function input4(param)
{
    document.getElementById('question4').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule4=1
       dicek4.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule4=0
            dicek4.value='Tidak'
        }   else
        {
            rule4='error'
            dicek4.value='error'
        }           
    }
}

//status pernikahan
function input5(param)
{
    document.getElementById('question5').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule5=1
       dicek5.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule5=0
            dicek5.value='Tidak'
        }   else
        {
            rule5='error'
            dicek5.value='error'
        }           
    }
}

//tipe pekerjaan
function input6(param)
{
    document.getElementById('question6').style.backgroundColor = '#c2d40080'
    if (param=='ASN') 
    {
       rule6=1
       dicek6.value='ASN'
    }  else 
    {
        if(param=='self-employed')
        {
            rule6=2
            dicek6.value='self-employed'
        } else
        {
            if(param=='wiraswasta')
            {
                rule6=3
                dicek6.value='wiraswasta'
            } else
            {
                if(param=='belum bekerja')
                {
                    rule6=4
                    dicek6.value='belum bekerja'
                } else
                {
                    if(param=='tidak bekerja')
                    {
                        rule6=5
                        dicek6.value='tidak bekerja'
                    } else
                    {
                        rule6='error'
                        dicek6.value=rule6
                    }
                }
            }
        } 

    }
}

//area tempat tinggal
function input7(param)
{
    document.getElementById('question7').style.backgroundColor = '#c2d40080'
    if (param=='perkotaan') 
    {
       rule7=1
       dicek7.value='perkotaan'
    }  else 
    {
        if (param=='pedesaan')
        {
            rule7=2
            dicek7.value='pedesaan'
        } else
        {
            rule7='error'
            dicek7.value=rule7
        }        
    }
}

//riwayat diabetes
function input8(param)
{
    document.getElementById('question8').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule8=1
       dicek8.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule8=0
            dicek8.value='Tidak'
        }   else
        {
            rule8='error'
            dicek8.value='error'
        }           
    }
}

//kategori obesitas
function input9(param)
{
    if (param=='kurus') 
    {
       rule9=1
       dicek9.value='kurus'
    }  else 
    {
        if(param=='normal')
        {
            rule9=2
            dicek9.value='normal'
        } else
        {
            if(param=='obesitas')
            {
                rule9=3
                dicek9.value='obesitas'
            } else
            {
                rule9='error'
                dicek9.value=rule9
            }            
        }
    }
}

//status merokok
function input10(param)
{
    document.getElementById('question10').style.backgroundColor = '#c2d40080'
    if (param=='tidak merokok') 
    {
       rule10=1
       dicek10.value='tidak merokok'
    }  else 
    {
        if(param=='pernah merokok')
        {
            rule10=2
            dicek10.value='pernah merokok'
        } else
        {
            if(param=='merokok')
            {
                rule10=3
                dicek10.value='merokok'
            } else
            {
                rule10='error'
                dicek10.value=rule10
            }            
        }
    }
}

function finalx()
{
    var d = 2;        // the dimension of input data
    var nclass = 2;   // the number of classes 
    var L = 15;        // the number of hidden nodes
    var X = [[0,0],[0,1],[1,0],[1,1]];
    var T = [[0],[1],[1],[0]];
    var elm = new ELM(d, L, nclass, ELMType.Classification);

    ELM.train(X);
    data=(document.getElementById([rule1],[rule2],[rule3],[rule4],[rule5],[rule6],[rule7],[rule8],[rule9],[rule10]).value);
    var Y = ELM.predict(data);
    result=Math.round(Y);

    if (result==0){
        screen.value = prediksi
        location.href='nostrokeResult.html'
    }
    else {
        screen.value = prediksi
        location.href='strokeResult.html'
    }
}
