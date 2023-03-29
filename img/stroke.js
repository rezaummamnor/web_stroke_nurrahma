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

item.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
});

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
       rule1='laki-laki'
       dicek1.value=rule1
    }  else 
        {
            if (param=='perempuan')
            {
                rule1='perempuan'
                dicek1.value=rule1
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
       rule2='anak-anak'
       dicek2.value=rule2
    }  else 
    {
        if(param=='remaja')
        {
            rule2='remaja'
            dicek2.value=rule2
        } else
        {
            if(param=='dewasa')
            {
                rule2='dewasa'
                dicek2.value=rule2
            } else
            {
                if(param=='pra lanjut usia')
                {
                    rule2='pra lanjut usia'
                    dicek2.value=rule2
                } else
                {
                    if(param=='lanjut usia')
                    {
                        rule2='lanjut usia'
                        dicek2.value=rule2
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
       rule6='ASN'
       dicek6.value=rule6
    }  else 
    {
        if(param=='self-employed')
        {
            rule6='self-employed'
            dicek6.value=rule6
        } else
        {
            if(param=='wiraswasta')
            {
                rule6='wiraswasta'
                dicek6.value=rule6
            } else
            {
                if(param=='belum bekerja')
                {
                    rule6='belum bekerja'
                    dicek6.value=rule6
                } else
                {
                    if(param=='tidak bekerja')
                    {
                        rule6='tidak bekerja'
                        dicek6.value=rule6
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
       rule7='perkotaan'
       dicek7.value=rule7
    }  else 
    {
        if (param=='pedesaan')
        {
            rule7='pedesaan'
            dicek7.value=rule7
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
       rule9='kurus'
       dicek9.value=rule9
    }  else 
    {
        if(param=='normal')
        {
            rule9='normal'
            dicek9.value=rule9
        } else
        {
            if(param=='obesitas')
            {
                rule9='obesitas'
                dicek9.value=rule9
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
       rule10='tidak merokok'
       dicek10.value=rule10
    }  else 
    {
        if(param=='pernah merokok')
        {
            rule10='pernah merokok'
            dicek10.value=rule10
        } else
        {
            if(param=='merokok')
            {
                rule10='merokok'
                dicek10.value=rule10
            } else
            {
                rule10='error'
                dicek10.value=rule10
            }            
        }
    }
}

function predictBest()
{
    if (rule2=='bayi'||rule2=='balita'||rule2=='anak-anak'||rule2=='remaja')
    {
        location.href='nostrokeResult.html'
    } else
    {
        if (rule2=='dewasa')
        {
            if (rule3==1)
            {
                if (rule10=='tidak merokok'||rule10=='pernah merokok')
                {
                    location.href='nostrokeResult.html'
                } else
                {
                    if (rule10=='merokok')
                    {
                        if (rule7=='perkotaan')
                        {
                            location.href='nostrokeResult.html'
                        } else
                        {
                            if (rule7=='pedesaan')
                            {
                                if (rule1=='laki-laki')
                                {
                                    location.href='nostrokeResult.html'
                                } else
                                {
                                    if (rule1=='perempuan')
                                    {
                                        location.href='strokeResult.html'
                                    } else
                                    {
                                        location.href='error.html'
                                    }
                                }
                            }
                        }
                    }
                }
            } else
            {
                if (rule3==0)
                {
                    if (rule1=='laki-laki')
                    {
                        location.href='nostrokeResult.html'
                    } else
                    {
                        if (rule1=='perempuan')
                        {
                            if (rule6=='belum bekerja'||rule6=='tidak bekerja'||rule6=='ASN')
                            {
                                location.href='nostrokeResult.html'
                            } else
                            {
                                if (rule6=='self-employed')
                                {
                                    if (rule7=='pedesaan')
                                    {
                                        location.href='nostrokeResult.html'
                                    } else
                                    {
                                        if (rule7=='perkotaan')
                                        {
                                            if (rule10=='tidak merokok')
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule10=='pernah merokok')
                                                {
                                                    if (rule5==1)
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule5==0)
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            location.href='error.html'
                                                        }
                                                    }
                                                } else
                                                {
                                                    if (rule10=='merokok')
                                                    {
                                                        if (rule9=='kurus')
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule9=='normal')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule9=='obesitas')
                                                                {
                                                                    if (rule8==1)
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule8==0)
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else
                                {
                                    if (rule6=='wiraswasta')
                                    {
                                        if (rule5==0)
                                        {
                                            location.href='nostrokeResult.html'
                                        } else
                                        {
                                            if (rule5==1)
                                            {
                                                if (rule9=='kurus'||rule9=='normal')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule9=='obesitas')
                                                    {
                                                        if (rule8==1)
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule8==0)
                                                            {
                                                                if (rule10=='pernah merokok')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule10=='tidak merokok')
                                                                    {
                                                                        if (rule7=='pedesaan')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                location.href='error.html'
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule10=='merokok')
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule7=='pedesaan')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    location.href='error.html'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else
        {
            if (rule2=='pra lanjut usia')
            {
                if (rule9=='kurus')
                {
                    location.href='nostrokeResult.html'
                } else
                {
                    if (rule9=='normal')
                    {
                        if (rule1=='laki-laki')
                        {
                            location.href='nostrokeResult.html'
                        } else
                        {
                            if (rule1=='perempuan')
                            {
                                if (rule6=='belum bekerja'||rule6=='tidak bekerja'||rule6=='ASN'||rule6=='self-employed')
                                {
                                    location.href='nostrokeResult.html'
                                } else
                                {
                                    if (rule6=='wiraswasta')
                                    {
                                        if (rule5==0)
                                        {
                                            location.href='nostrokeResult.html'
                                        } else
                                        {
                                            if (rule5==1)
                                            {
                                                if (rule3==1)
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule3==0)
                                                    {
                                                        if (rule4==1)
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule4==0)
                                                            {
                                                                if (rule10=='pernah merokok')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule10=='tidak merokok')
                                                                    {
                                                                        if (rule7=='pedesaan')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                location.href='error.html'
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule10=='merokok')
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule7=='pedesaan')
                                                                                {
                                                                                    if (rule8==1)
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule8==0)
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else
                    {
                        if (rule9=='obesitas')
                        {
                            if (rule3==1)
                            {
                                if (rule5==0)
                                {
                                    location.href='nostrokeResult.html'
                                } else
                                {
                                    if (rule5==1)
                                    {
                                        if (rule1=='laki-laki')
                                        {
                                            if (rule4==1)
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule4==0)
                                                {
                                                    if (rule6=='belum bekerja'||rule6=='tidak bekerja')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='self-employed')
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule6=='ASN')
                                                            {
                                                                if (rule7=='pedesaan')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule7=='perkotaan')
                                                                    {
                                                                        if (rule8==1)
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule8==0)
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                location.href='error.html'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule6=='wiraswasta')
                                                                {
                                                                    if (rule8==1)
                                                                    {
                                                                        if (rule10=='pernah merokok')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule10=='merokok')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule10=='tidak merokok')
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule8==0)
                                                                        {
                                                                            if (rule10=='tidak merokok'||rule10=='merokok')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule10=='pernah merokok')
                                                                                {
                                                                                    if (rule7=='pedesaan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule1=='perempuan')
                                            {
                                                if (rule4==1)
                                                {
                                                    location.href='strokeResult.html'
                                                } else
                                                {
                                                    if (rule4==0)
                                                    {
                                                        if (rule10=='merokok')
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule10=='tidak merokok')
                                                            {
                                                                if (rule6=='belum bekerja'||rule6=='tidak bekerja'||rule6=='self-employed')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='ASN')
                                                                    {
                                                                        if (rule8==1)
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule8==0)
                                                                            {
                                                                                if (rule7=='perkotaan')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule7=='pedesaan')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        location.href='error.html'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule6=='wiraswasta')
                                                                        {
                                                                            if (rule7=='pedesaan')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule7=='perkotaan')
                                                                                {
                                                                                    if (rule8==1)
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule8==0)
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule10=='pernah merokok')
                                                                {
                                                                    if (rule7=='perkotaan')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule7=='pedesaan')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else
                            {
                                if (rule3==0)
                                {
                                    if (rule6=='belum bekerja'||rule6=='tidak bekerja')
                                    {
                                        location.href='nostrokeResult.html'
                                    } else
                                    {
                                        if (rule6=='ASN')
                                        {
                                            if (rule8==1)
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule8==0)
                                                {
                                                    if (rule4==1)
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule4==0)
                                                        {
                                                            if (rule5==1)
                                                            {
                                                                if (rule7=='perkotaan')
                                                                {
                                                                    if (rule10=='pernah merokok'||rule10=='merokok')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule10=='tidak merokok')
                                                                        {
                                                                            if (rule1=='laki-laki')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule1=='perempuan')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    location.href='error.html'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule7=='pedesaan')
                                                                    {
                                                                        if (rule10=='tidak merokok')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule10=='pernah merokok')
                                                                            {
                                                                                if (rule1=='laki-laki')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        location.href='error.html'
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule5==0)
                                                                {
                                                                    if (rule7=='pedesaan')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule7=='perkotaan')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule6=='self-employed')
                                            {
                                                if (rule8==1)
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule8==0)
                                                    {
                                                        if (rule4==1)
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule4==0)
                                                            {
                                                                if (rule10=='pernah merokok')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule10=='tidak merokok')
                                                                    {
                                                                        if (rule1=='laki-laki')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule1=='perempuan')
                                                                            {
                                                                                if (rule5==1)
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule5==0)
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule10=='merokok')
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule7=='pedesaan')
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if (rule6=='wiraswasta')
                                                {
                                                    if (rule8==1)
                                                    {
                                                        if (rule5==0)
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule5==1)
                                                            {
                                                                if (rule4==1)
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule4==0)
                                                                    {
                                                                        if (rule7=='perkotaan')
                                                                        {
                                                                            if (rule10=='tidak merokok')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='pernah merokok')
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule7=='pedesaan')
                                                                            {
                                                                                if (rule1=='laki-laki')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        if (rule10=='tidak merokok')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule10=='pernah merokok'||rule10=='merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if (rule8==0)
                                                        {
                                                            if (rule4==1)
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule4==0)
                                                                {
                                                                    if (rule10=='tidak merokok')
                                                                    {
                                                                        if (rule5==0)
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule5==1)
                                                                            {
                                                                                if (rule7=='perkotaan')
                                                                                {
                                                                                    if (rule1=='laki-laki')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule7=='pedesaan')
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule10=='pernah merokok')
                                                                        {
                                                                            if (rule5==0)
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule5==1)
                                                                                {
                                                                                    if (rule1=='laki-laki')
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule7=='pedesaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule10=='merokok')
                                                                            {
                                                                                if (rule5==1)
                                                                                {
                                                                                    if (rule1=='laki-laki')
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule7=='perkotaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule5==0)
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                if (rule7=='perkotaan')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule7=='pedesaan')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else
            {
                if (rule2=='lanjut usia')
                {
                    if (rule4==1)
                    {
                        if (rule6=='belum bekerja'||rule6=='tidak bekerja')
                        {
                            location.href='strokeResult.html'
                        } else
                        {
                            if (rule6=='ASN')
                            {
                                if (rule8==1)
                                {
                                    location.href='strokeResult.html'
                                } else
                                {
                                    if (rule8==0)
                                    {
                                        if (rule7=='perkotaan')
                                        {
                                            location.href='nostrokeResult.html'
                                        } else
                                        {
                                            if (rule7=='pedesaan')
                                            {
                                                if (rule10=='pernah merokok')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule10=='merokok')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        if (rule10=='tidak merokok')
                                                        {
                                                            if (rule9=='kurus'||rule9=='normal')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule9=='obesitas')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    location.href='error.html'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else
                            {
                                if (rule6=='self-employed')
                                {
                                    if (rule7=='perkotaan')
                                    {
                                        if (rule9=='kurus')
                                        {
                                            location.href='strokeResult.html'
                                        } else
                                        {
                                            if (rule9=='normal')
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule9=='obesitas')
                                                {
                                                    if (rule10=='tidak merokok')
                                                    {
                                                        if (rule5==1)
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule5==0)
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                location.href='error.html'
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if (rule10=='pernah merokok')
                                                        {
                                                            if (rule8==1)
                                                            {
                                                                if (rule1=='perempuan')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule1=='laki-laki')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        location.href='error.html'
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule8==0)
                                                                {
                                                                    if (rule3==1)
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule3==0)
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule10=='merokok')
                                                            {
                                                                if (rule3==1)
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule3==0)
                                                                    {
                                                                        if (rule1=='perempuan')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule1=='laki-laki')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                location.href='error.html'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else
                                    {
                                        if (rule7=='pedesaan')
                                        {
                                            if (rule9=='kurus'||rule9=='normal')
                                            {
                                                location.href='strokeResult.html'
                                            } else
                                            {
                                                if (rule9=='obesitas')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    location.href='error.html'
                                                }
                                            }
                                        }
                                    }
                                } else
                                {
                                    if (rule6=='wiraswasta')
                                    {
                                        if (rule10=='tidak merokok')
                                        {
                                            if (rule9=='kurus')
                                            {
                                                location.href='strokeResult.html'
                                            } else
                                            {
                                                if (rule9=='normal')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule9=='obesitas')
                                                    {
                                                        if (rule3==1)
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule3==0)
                                                            {
                                                                if (rule8==1)
                                                                {
                                                                    if (rule7=='perkotaan')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule7=='pedesaan')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule8==0)
                                                                    {
                                                                        if (rule7=='perkotaan')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule7=='pedesaan')
                                                                            {
                                                                                if (rule1=='laki-laki')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        location.href='error.html'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule10=='pernah merokok')
                                            {
                                                if (rule8==1)
                                                {
                                                    if (rule7=='pedesaan')
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule7=='perkotaan')
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            location.href='error.html'
                                                        }
                                                    }
                                                } else
                                                {
                                                    if (rule8==0)
                                                    {
                                                        if (rule7=='perkotaan')
                                                        {
                                                            if (rule3==0)
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule3==1)
                                                                {
                                                                    if (rule1=='perempuan')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule1=='laki-laki')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule7=='pedesaan')
                                                            {
                                                                if (rule9=='kurus'||rule9=='normal')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule9=='obesitas')
                                                                    {
                                                                        if (rule1=='perempuan')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule1=='laki-laki')
                                                                            {
                                                                                if (rule3==1)
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule3==0)
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        location.href='error.html'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if (rule10=='merokok')
                                                {
                                                    if (rule1=='perempuan')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        if (rule1=='laki-laki')
                                                        {
                                                            if (rule7=='perkotaan')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule7=='pedesaan')
                                                                {
                                                                    if (rule9=='kurus'||rule9=='obesitas')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule9=='normal')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else
                    {
                        if (rule4==0)
                            {
                                if (rule3==1)
                                {
                                    if (rule9=='kurus')
                                    {
                                        location.href='nostrokeResult.html'
                                    } else
                                    {
                                        if (rule9=='normal')
                                        {
                                            if (rule1=='laki-laki')
                                            {
                                                location.href='strokeResult.html'
                                            } else
                                            {
                                                if (rule1=='perempuan')
                                                {
                                                    if (rule8==1)
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule8==0)
                                                        {
                                                            if (rule6=='belum bekerja')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='tidak bekerja')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='ASN')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='self-employed')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='wiraswasta')
                                                                            {
                                                                                if (rule5==1)
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        if (rule10=='tidak merokok')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule10=='pernah merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='merokok')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            if (rule10=='tidak merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='pernah merokok')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule5==0)
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule9=='obesitas')
                                            {
                                                if (rule6=='belum bekerja')
                                                {
                                                    location.href='strokeResult.html'
                                                } else
                                                {
                                                    if (rule6=='tidak bekerja')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='ASN')
                                                        {
                                                            if (rule10=='tidak merokok')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule10=='pernah merokok')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule10=='merokok')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        location.href='error.html'
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule6=='self-employed')
                                                            {
                                                                if (rule8==1)
                                                                {
                                                                    if (rule1=='laki-laki')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule1=='perempuan')
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule7=='pedesaan')
                                                                                {
                                                                                    if (rule10=='tidak merokok')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule10=='pernah merokok')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule8==0)
                                                                    {
                                                                        if (rule10=='tidak merokok')
                                                                        {
                                                                            if (rule5==1)
                                                                            {
                                                                                if (rule1=='laki-laki')
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule10=='pernah merokok')
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule5==1)
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule1=='perempuan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                if (rule1=='laki-laki')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule1=='perempuan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule6=='wiraswasta')
                                                                {
                                                                    if (rule5==1)
                                                                    {
                                                                        if (rule8==1)
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                if (rule10=='pernah merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='merokok')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule10=='tidak merokok')
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule1=='perempuan')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule7=='pedesaan')
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            if (rule10=='tidak merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='pernah merokok')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule8==0)
                                                                            {
                                                                                if (rule7=='perkotaan')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule7=='pedesaan')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule10=='merokok')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule5==0)
                                                                        {
                                                                            if (rule10=='pernah merokok')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='tidak merokok')
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                if (rule7=='perkotaan')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule7=='pedesaan')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else
                                {
                                    if (rule3==0)
                                    {
                                        if (rule9=='kurus')
                                        {
                                            if (rule6=='belum bekerja')
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule6=='tidak bekerja')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule6=='ASN')
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='self-employed')
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule6=='wiraswasta')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                location.href='error.html'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule9=='normal')
                                            {
                                                if (rule8==1)
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule8==0)
                                                    {
                                                        if (rule5==0)
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule5==1)
                                                            {
                                                                if (rule6=='belum bekerja')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='tidak bekerja')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='ASN')
                                                                        {
                                                                            if (rule10=='tidak merokok')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule10=='pernah merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='merokok')
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule6=='self-employed')
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='tidak merokok')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule7=='pedesaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule7=='perkotaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule7=='pedesaan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule10=='pernah merokok')
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                if (rule7=='perkotaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule7=='pedesaan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            } else
                                                                                            {
                                                                                                if (rule1=='perempuan')
                                                                                                {
                                                                                                    if (rule7=='perkotaan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule7=='pedesaan')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule6=='wiraswasta')
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule10=='merokok')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    } 
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule1=='laki-laki')
                                                                                                            {
                                                                                                                location.href='strokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                location.href='error.html'
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if (rule9=='obesitas')
                                                {
                                                    if (rule7=='perkotaan')
                                                    {
                                                        if (rule10=='tidak merokok')
                                                        {
                                                            if (rule6=='belum bekerja')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='tidak bekerja')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='ASN')
                                                                    {
                                                                        if (rule1=='laki-laki')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule1=='perempuan')
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule5==1)
                                                                                    {
                                                                                        if (rule8==1)
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule8==0)
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule6=='self-employed')
                                                                        {
                                                                            if (rule5==1)
                                                                            {
                                                                                if (rule8==1)
                                                                                {
                                                                                    if (rule1=='laki-laki')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule6=='wiraswasta')
                                                                            {
                                                                                if (rule8==1)
                                                                                {
                                                                                    if (rule1=='laki-laki')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            if (rule5==1)
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule5==0)
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule5==1)
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule5==0)
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule10=='pernah merokok')
                                                            {
                                                                if (rule5==0)
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule5==1)
                                                                    {
                                                                        if (rule6=='belum bekerja')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='tidak bekerja')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='ASN')
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule8==1)
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule6=='self-employed')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule8==1)
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule8==0)
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='wiraswasta')
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                if (rule8==1)
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule8==0)
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            } else
                                                                                            {
                                                                                                if (rule1=='perempuan')
                                                                                                {
                                                                                                    if (rule8==1)
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule8==0)
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule10=='merokok')
                                                                {
                                                                    if (rule8==1)
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule8==0)
                                                                        {
                                                                            if (rule5==1)
                                                                            {
                                                                                if (rule6=='belum bekerja')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='tidak bekerja')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='ASN')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule6=='self-employed')
                                                                                            {
                                                                                                if (rule1=='laki-laki')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule1=='perempuan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            } else
                                                                                            {
                                                                                                if (rule6=='wiraswasta')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    if (rule6=='belum bekerja')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='tidak bekerja')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule6=='ASN')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule6=='self-employed')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule6=='wiraswasta')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if (rule7=='pedesaan')
                                                        {
                                                            if (rule5==0)
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule5==1)
                                                                {
                                                                    if (rule8==1)
                                                                    {
                                                                        if (rule6=='belum bekerja')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='tidak bekerja')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='self-employed')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='ASN')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule10=='merokok')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='wiraswasta')
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        if (rule1=='laki-laki')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule1=='perempuan')
                                                                                                            {
                                                                                                                location.href='strokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                location.href='error.html'
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule8==0)
                                                                        {
                                                                            if (rule6=='belum bekerja')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='tidak bekerja')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='ASN')
                                                                                    {
                                                                                        if (rule10=='pernah merokok')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='self-employed')
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        if (rule1=='laki-laki')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule1=='perempuan')
                                                                                                            {
                                                                                                                location.href='nostrokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                location.href='error.html'
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if (rule6=='wiraswasta')
                                                                                            {
                                                                                                if (rule1=='laki-laki')
                                                                                                {
                                                                                                    if (rule10=='tidak merokok')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule10=='pernah merokok')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule10=='merokok')
                                                                                                            {
                                                                                                                location.href='nostrokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                location.href='error.html'
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                } else
                                                                                                {
                                                                                                    if (rule1=='perempuan')
                                                                                                    {
                                                                                                        if (rule10=='tidak merokok')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule10=='pernah merokok')
                                                                                                            {
                                                                                                                location.href='nostrokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                if (rule10=='merokok')
                                                                                                                {
                                                                                                                    location.href='strokeResult.html'
                                                                                                                } else
                                                                                                                {
                                                                                                                    location.href='error.html'
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            } 
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


function predictRUS()
{
    if (rule2=='anak-anak')
    {
        location.href='nostrokeResult.html'
    } else
    {
    if (rule2=='remaja')
    {
        location.href='nostrokeResult.html'
    } else
    {
        if (rule2=='dewasa')
        {
            location.href='nostrokeResult.html'
        } else
        {
            if (rule2=='pra lanjut usia')
            {
                if (rule4==1)
                {
                    location.href='nostrokeResult.html'
                } else
                {
                    if (rule4==0)
                    {
                        if (rule3==1)
                        {
                            if (rule8==0)
                            {
                                location.href='strokeResult.html'
                            } else
                            {
                                if (rule8==1)
                                {
                                    if (rule1=='laki-laki')
                                    {
                                        location.href='strokeResult.html'
                                    } else
                                    {
                                        if (rule1=='perempuan')
                                        {
                                            location.href='nostrokeResult.html'
                                        } else
                                        {
                                            location.href='error.html'
                                        }
                                    }
                                }
                            }
                        } else
                        {
                            if (rule3==0)
                            {
                                if (rule5==0)
                                {
                                    if (rule9=='kurus')
                                    {
                                        location.href='strokeResult.html'
                                    } else
                                    {
                                        if (rule9=='normal')
                                        {
                                            location.href='nostrokeResult.html'
                                        } else
                                        {
                                            if (rule9=='obesitas')
                                            {
                                                location.href='strokeResult.html'
                                            } else
                                            {
                                                location.href='error.html'
                                            }
                                        }
                                    }
                                } else
                                {
                                    if (rule5==1)
                                    {
                                        if (rule7=='perkotaan')
                                        {
                                            if (rule6=='belum bekerja')
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule6=='tidak bekerja')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule6=='self-employed')
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='ASN')
                                                        {
                                                            if (rule1=='laki-laki')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule1=='perempuan')
                                                                {
                                                                    if (rule10=='tidak merokok')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule10=='pernah merokok')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule10=='merokok')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                location.href='error.html'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule6=='wiraswasta')
                                                            {
                                                                if (rule10=='tidak merokok')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule10=='pernah merokok')
                                                                    {
                                                                        if (rule1=='laki-laki')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule1=='perempuan')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                location.href='error.html'
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule10=='merokok')
                                                                        {
                                                                            if (rule1=='laki-laki')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule1=='perempuan')
                                                                                {
                                                                                    if (rule8==1)
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule8==0)
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            
                                        } else
                                        {
                                            if (rule7=='pedesaan')
                                            {
                                                if (rule10=='pernah merokok')
                                                {
                                                    location.href='strokeResult.html'
                                                } else
                                                {
                                                    if (rule10=='tidak merokok')
                                                    {
                                                        if (rule6=='belum bekerja')
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule6=='tidak bekerja')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='ASN')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='self-employed')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='wiraswasta')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if (rule10=='merokok')
                                                        {
                                                            if (rule9=='kurus')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule9=='normal')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule9=='obesitas')
                                                                    {
                                                                        if (rule6=='belum bekerja')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='tidak bekerja')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='ASN')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='self-employed')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='wiraswasta')
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule1=='perempuan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else
            {
                if (rule2=='lanjut usia')
                {
                    if (rule4==1)
                    {
                        if (rule8==1)
                        {
                            location.href='strokeResult.html'
                        } else
                        {
                            if (rule8==0)
                            {
                                if (rule3==1)
                                {
                                    location.href='strokeResult.html'
                                } else
                                {
                                    if (rule3==0)
                                    {
                                        if (rule5==0)
                                        {
                                            location.href='nostrokeResult.html'
                                        } else
                                        {
                                            if (rule5==1)
                                            {
                                                if (rule9=='kurus')
                                                {
                                                    location.href='strokeResult.html'
                                                } else
                                                {
                                                    if (rule9=='normal')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        if (rule9=='obesitas')
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            location.href='error.html'
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else
                    {
                        if (rule4==0)
                        {
                            if (rule3==1)
                            {
                                if (rule9=='kurus')
                                {
                                    location.href='strokeResult.html'
                                } else
                                {
                                    if (rule9=='normal')
                                    {
                                        location.href='strokeResult.html'
                                    } else
                                    {
                                        if (rule9=='obesitas')
                                        {
                                            if (rule6=='belum bekerja')
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule6=='tidak bekerja')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule6=='ASN')
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='self-employed')
                                                        {
                                                            if (rule8==1)
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule8==0)
                                                                {
                                                                    if (rule7=='perkotaan')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule7=='pedesaan')
                                                                        {
                                                                            if (rule10=='pernah merokok')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='tidak merokok')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule6=='wiraswasta')
                                                            {
                                                                if (rule10=='tidak merokok')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule10=='pernah merokok')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule10=='merokok')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else
                            {
                                if (rule3==0)
                                {
                                    if (rule5==0)
                                    {
                                        if (rule1=='perempuan')
                                        {
                                            location.href='nostrokeResult.html'
                                        } else
                                        {
                                            if (rule1=='laki-laki')
                                            {
                                                if (rule6=='belum bekerja')
                                                {
                                                    location.href='strokeResult.html'
                                                } else
                                                {
                                                    if (rule6=='tidak bekerja')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='ASN')
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule6=='self-employed')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='wiraswasta')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    location.href='error.html'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else
                                    {
                                        if (rule5==1)
                                        {
                                            if (rule10=='tidak merokok')
                                            {
                                                if (rule7=='perkotaan')
                                                {
                                                    if (rule6=='belum bekerja')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='tidak bekerja')
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule6=='ASN')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='self-employed')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='wiraswasta')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        location.href='error.html'
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else
                                                {
                                                    if (rule7=='pedesaan')
                                                    {
                                                        if (rule1=='laki-laki')
                                                        {
                                                            if (rule6=='belum bekerja')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='tidak bekerja')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='ASN')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='self-employed')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='wiraswasta')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                location.href='error.html'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule1=='perempuan')
                                                            {
                                                                if (rule8==1)
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule8==0)
                                                                    {
                                                                        if (rule6=='belum bekerja')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='tidak bekerja')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='ASN')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='self-employed')
                                                                                    {
                                                                                        if (rule9=='kurus')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule9=='normal')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule9=='obesitas')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='wiraswasta')
                                                                                        {
                                                                                            if (rule9=='kurus')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule9=='normal')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule9=='obesitas')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if (rule10=='pernah merokok')
                                                {
                                                    if (rule6=='belum bekerja')
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='tidak bekerja')
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule6=='ASN')
                                                            {
                                                                if (rule8==1)
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule8==0)
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        location.href='error.html'
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule6=='self-employed')
                                                                {
                                                                    if (rule8==1)
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule8==0)
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule6=='wiraswasta')
                                                                    {
                                                                        if (rule1=='laki-laki')
                                                                        {
                                                                            if (rule8==0)
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule8==1)
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    location.href='error.html'
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule1=='perempuan')
                                                                            {
                                                                                if (rule8==1)
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        location.href='error.html'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else
                                                {
                                                    if (rule10=='merokok')
                                                    {
                                                        if (rule8==1)
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule8==0)
                                                            {
                                                                if (rule7=='perkotaan')
                                                                {
                                                                    if (rule9=='kurus')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule9=='normal')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule9=='obesitas')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                location.href='error.html'
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule7=='pedesaan')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        location.href='error.html'
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    }
}

function predictROS()
{
    if (rule2=='bayi' ||  rule2=='balita' || rule2=='anak-anak' )
    {
        location.href='nostrokeResult.html'
    } else
    {
        if (rule2=='remaja')
        {
            location.href='nostrokeResult.html'
        } else
        {
            if (rule2=='dewasa')
            {
                if (rule3==1)
                {
                    if (rule10=='tidak merokok')
                    {
                        location.href='nostrokeResult.html'
                    } else
                    {
                        if (rule10=='pernah merokok')
                        {
                            location.href='nostrokeResult.html'
                        } else 
                        {
                            if (rule10=='merokok')
                            {
                                if (rule7=='perkotaan')
                                {
                                    location.href='nostrokeResult.html'
                                } else
                                {
                                    if (rule7=='pedesaan')
                                    {
                                        if (rule1=='laki-laki')
                                        {
                                            location.href='nostrokeResult.html'
                                        } else
                                        {
                                          if (rule1=='perempuan')
                                          {
                                                location.href='strokeResult.html'
                                          } else
                                          {
                                                location.href='error.html'
                                          }
                                        }
                                    }
                                    
                                }
                            }
                        }
                    }
                } else
                {
                    if (rule3==0)
                    {
                        if (rule6=='belum bekerja')
                        {
                            location.href='nostrokeResult.html'
                        } else
                        {
                            if (rule6=='tidak bekerja')
                            {
                                location.href='nostrokeResult.html'
                            } else
                            {
                                if (rule6=='ASN')
                                {
                                    location.href='nostrokeResult.html'
                                } else
                                {
                                    if (rule6=='self-employed')
                                    {
                                        if (rule7=='pedesaan')
                                        {
                                            location.href='nostrokeResult.html'
                                        } else
                                        {
                                            if (rule7=='perkotaan')
                                            {
                                                if (rule1=='laki-laki')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule1=='perempuan')
                                                    {
                                                        if (rule10=='tidak merokok')
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule10=='pernah merokok')
                                                            {
                                                                if (rule5==1)
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule5==0)
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        location.href='error.html'
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule10=='merokok')
                                                                {
                                                                    if (rule9=='kurus')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule9=='normal')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule9=='obesitas')
                                                                            {
                                                                                if (rule8==1)
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        location.href='error.html'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else
                                    {
                                        if (rule6=='wiraswasta')
                                        {
                                            if (rule5==0)
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule5==1)
                                                {
                                                    if (rule1=='laki-laki')
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule1=='perempuan')
                                                        {
                                                            if (rule9=='kurus')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule9=='normal')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule9=='obesitas')
                                                                    {
                                                                        if (rule8==1)
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule8==0)
                                                                            {
                                                                                if (rule10=='pernah merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='tidak merokok')
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule10=='merokok')
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule7=='pedesaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else
            {
                if (rule2=='pra lanjut usia')
                {
                    if (rule9=='kurus')
                    {
                        location.href='nostrokeResult.html'
                    } else
                    {
                        if (rule9=='normal')
                        {
                            if (rule1=='laki-laki')
                            {
                                location.href='nostrokeResult.html'
                            } else
                            {
                                if (rule1=='perempuan')
                                {
                                    if (rule6=='belum bekerja')
                                    {
                                        location.href='strokeResult.html'
                                    } else
                                    {
                                        if (rule6=='tidak bekerja')
                                        {
                                            location.href='strokeResult.html'
                                        } else
                                        {
                                            if (rule6=='ASN')
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule6=='self-employed')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule6=='wiraswasta')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        location.href='error.html'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else
                        {
                            if (rule9=='obesitas')
                            {
                                if (rule3==1)
                                {
                                    if (rule5==0)
                                    {
                                        location.href='nostrokeResult.html'
                                    } else
                                    {
                                        if (rule5==1)
                                        {
                                            if (rule1=='laki-laki')
                                            {
                                                if (rule4==1)
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule4==0)
                                                    {
                                                        if (rule6=='belum bekerja')
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule6=='tidak bekerja')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='self-employed')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='ASN')
                                                                    {
                                                                        if (rule7=='pedesaan')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                if (rule8==1)
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        location.href='error.html'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule6=='wiraswasta')
                                                                        {
                                                                            if (rule8==1)
                                                                            {
                                                                                if (rule10=='pernah merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='merokok')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule10=='tidak merokok')
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule7=='pedesaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule8==0)
                                                                                {
                                                                                    if (rule10=='tidak merokok')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule10=='merokok')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule10=='pernah merokok')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if (rule1=='perempuan')
                                                {
                                                    if (rule4==1)
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        if (rule4==0)
                                                        {
                                                            if (rule10=='merokok')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule10=='tidak merokok')
                                                                {
                                                                    if (rule7=='perkotaan')
                                                                    {
                                                                        if (rule6=='belum bekerja')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='tidak bekerja')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='self-employed')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='ASN')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='wiraswasta')
                                                                                        {
                                                                                            if (rule8==1)
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule8==0)
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule7=='pedesaan')
                                                                        {
                                                                            if (rule8==1)
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule8==0)
                                                                                {
                                                                                    if (rule6=='belum bekerja')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='tidak bekerja')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule6=='ASN')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule6=='self-employed')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule6=='wiraswasta')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule10=='pernah merokok')
                                                                    {
                                                                        if (rule7=='perkotaan')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule7=='pedesaan')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                location.href='error.html'
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else
                                {
                                    if (rule3==0)
                                    {
                                        if (rule10=='tidak merokok')
                                        {
                                            if (rule3==1)
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule3==0)
                                                {
                                                    if (rule5==1)
                                                    {
                                                        if (rule1=='laki-laki')
                                                        {
                                                            if (rule6=='belum bekerja')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='tidak bekerja')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='ASN')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='self-employed')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='wiraswasta')
                                                                            {
                                                                                if (rule8==1)
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule1=='perempuan')
                                                            {
                                                                if (rule6=='belum bekerja')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='tidak bekerja')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='ASN')
                                                                        {
                                                                            if (rule7=='pedesaan')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule7=='perkotaan')
                                                                                {
                                                                                    if (rule8==1)
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule8==0)
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule6=='self-employed')
                                                                            {
                                                                                if (rule7=='perkotaan')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule7=='pedesaan')
                                                                                    {
                                                                                        if (rule8==1)
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule8==0)
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule6=='wiraswasta')
                                                                                {
                                                                                    if (rule8==1)
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule8==0)
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule7=='perkotaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if (rule5==0)
                                                        {
                                                            if (rule7=='pedesaan')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule7=='perkotaan')
                                                                {
                                                                    if (rule6=='belum bekerja')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='tidak bekerja')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='ASN')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='self-employed')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='wiraswasta')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule10=='pernah merokok')
                                            {
                                                if (rule5==0)
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule5==1)
                                                    {
                                                        if (rule4==1)
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule4==0)
                                                            {
                                                                if (rule6=='belum bekerja')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='tidak bekerja')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='self-employed')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='ASN')
                                                                            {
                                                                                if (rule7=='perkotaan')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule7=='pedesaan')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule6=='wiraswasta')
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            if (rule8==0)
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule8==1)
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule8==1)
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule8==0)
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            if (rule8==1)
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule8==0)
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if (rule10=='merokok')
                                                {
                                                    if (rule7=='perkotaan')
                                                    {
                                                        if (rule1=='laki-laki')
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule1=='perempuan')
                                                            {
                                                                if (rule6=='belum bekerja')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='tidak bekerja')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='ASN')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='self-employed')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='wiraswasta')
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule8==1)
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if (rule7=='pedesaan')
                                                        {
                                                            if (rule1=='laki-laki')
                                                            {
                                                                if (rule4==1)
                                                                {
                                                                    if (rule8==0)
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule8==1)
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule4==0)
                                                                    {
                                                                        if (rule8==1)
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule8==0)
                                                                            {
                                                                                if (rule5==1)
                                                                                {
                                                                                    if (rule6=='belum bekerja')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='tidak bekerja')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule6=='ASN')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule6=='self-employed')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule6=='wiraswasta')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule5==0)
                                                                                    {
                                                                                        if (rule6=='belum bekerja')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule6=='tidak bekerja')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule6=='ASN')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule6=='self-employed')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule6=='wiraswasta')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule1=='perempuan')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    location.href='error.html'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else
                {
                    if (rule2=='lanjut usia')
                    {
                        if (rule4==1)
                        {
                            if (rule6=='belum bekerja')
                            {
                                location.href='strokeResult.html'
                            } else
                            {
                                if (rule6=='tidak bekerja')
                                {
                                    location.href='strokeResult.html'
                                } else
                                {
                                    if (rule6=='ASN')
                                    {
                                        if (rule8==1)
                                        {
                                            if (rule9=='kurus')
                                            {
                                                location.href='strokeResult.html'
                                            } else
                                            {
                                                if (rule9=='normal')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule9=='obesitas')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        location.href='error.html'
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule8==0)
                                            {
                                                if (rule7=='perkotaan')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule7=='pedesaan')
                                                    {
                                                        if (rule3==1)
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule3==0)
                                                            {
                                                                if (rule10=='tidak merokok')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule10=='pernah merokok')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule10=='merokok')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else
                                    {
                                        if (rule6=='self-employed')
                                        {
                                            if (rule7=='perkotaan')
                                            {
                                                if (rule9=='kurus')
                                                {
                                                    location.href='strokeResult.html'
                                                } else
                                                {
                                                    if (rule9=='normal')
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule9=='obesitas')
                                                        {
                                                            if (rule3==1)
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule3==0)
                                                                {
                                                                    if (rule1=='perempuan')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule1=='laki-laki')
                                                                        {
                                                                            if (rule10=='tidak merokok')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='pernah merokok')
                                                                                    {
                                                                                        if (rule8==1)
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule8==0)
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if (rule7=='pedesaan')
                                                {
                                                    if (rule9=='kurus')
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule9=='obesitas')
                                                        {
                                                            location.href='nostrokeResult.html'
                                                        } else
                                                        {
                                                            if (rule9=='normal')
                                                            {
                                                                if (rule10=='tidak merokok')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule10=='merokok')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule10=='pernah merokok')
                                                                        {
                                                                            if (rule5==0)
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule5==1)
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    location.href='error.html'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule6=='wiraswasta')
                                            {
                                                if (rule10=='tidak merokok')
                                                {
                                                    location.href='strokeResult.html'
                                                } else
                                                {
                                                    if (rule10=='pernah merokok')
                                                    {
                                                        if (rule8==1)
                                                        {
                                                            if (rule7=='pedesaan')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule7=='perkotaan')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    location.href='error.html'
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule8==0)
                                                            {
                                                                if (rule7=='perkotaan')
                                                                {
                                                                    if (rule3==0)
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule3==1)
                                                                        {
                                                                            if (rule1=='perempuan')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule1=='laki-laki')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    location.href='error.html'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule7=='pedesaan')
                                                                    {
                                                                        if (rule9=='kurus')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule9=='normal')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule9=='obesitas')
                                                                                {
                                                                                    if (rule1=='laki-laki')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if (rule10=='merokok')
                                                        {
                                                            if (rule1=='laki-laki')
                                                            {
                                                                if (rule7=='perkotaan')
                                                                {
                                                                    if (rule8==0)
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule8==1)
                                                                        {
                                                                            if (rule3==0)
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule3==1)
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    location.href='error.html'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule7=='pedesaan')
                                                                    {
                                                                        if (rule9=='kurus')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule9=='normal')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule9=='obesitas')
                                                                                {
                                                                                    location.href='strokeResult.html'
                                                                                } else
                                                                                {
                                                                                    location.href='error.html'
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule1=='perempuan')
                                                                {
                                                                    if (rule5==1)
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule5==0)
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            location.href='error.html'
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else
                        {
                            if (rule4==0)
                            {
                                if (rule3==1)
                                {
                                    if (rule9=='kurus')
                                    {
                                        location.href='nostrokeResult.html'
                                    } else
                                    {
                                        if (rule9=='normal')
                                        {
                                            if (rule1=='laki-laki')
                                            {
                                                location.href='strokeResult.html'
                                            } else
                                            {
                                                if (rule1=='perempuan')
                                                {
                                                    if (rule8==1)
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule8==0)
                                                        {
                                                            if (rule6=='belum bekerja')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='tidak bekerja')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='ASN')
                                                                    {
                                                                        location.href='strokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='self-employed')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='wiraswasta')
                                                                            {
                                                                                if (rule5==1)
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        if (rule10=='tidak merokok')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule10=='pernah merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='merokok')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            if (rule10=='tidak merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='pernah merokok')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule5==0)
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule9=='obesitas')
                                            {
                                                if (rule6=='belum bekerja')
                                                {
                                                    location.href='strokeResult.html'
                                                } else
                                                {
                                                    if (rule6=='tidak bekerja')
                                                    {
                                                        location.href='strokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='ASN')
                                                        {
                                                            if (rule10=='tidak merokok')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule10=='pernah merokok')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule10=='merokok')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        location.href='error.html'
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule6=='self-employed')
                                                            {
                                                                if (rule8==1)
                                                                {
                                                                    if (rule1=='laki-laki')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule1=='perempuan')
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule7=='pedesaan')
                                                                                {
                                                                                    if (rule10=='tidak merokok')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule10=='pernah merokok')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if (rule8==0)
                                                                    {
                                                                        if (rule10=='tidak merokok')
                                                                        {
                                                                            if (rule5==1)
                                                                            {
                                                                                if (rule1=='laki-laki')
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule10=='pernah merokok')
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule5==1)
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule1=='perempuan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                if (rule1=='laki-laki')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule1=='perempuan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule6=='wiraswasta')
                                                                {
                                                                    if (rule5==1)
                                                                    {
                                                                        if (rule8==1)
                                                                        {
                                                                            if (rule7=='perkotaan')
                                                                            {
                                                                                if (rule10=='pernah merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='merokok')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule10=='tidak merokok')
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule1=='perempuan')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule7=='pedesaan')
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            if (rule10=='tidak merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='pernah merokok')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule8==0)
                                                                            {
                                                                                if (rule7=='perkotaan')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule7=='pedesaan')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule10=='merokok')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule5==0)
                                                                        {
                                                                            if (rule10=='pernah merokok')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='tidak merokok')
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                if (rule7=='perkotaan')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule7=='pedesaan')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else
                                {
                                    if (rule3==0)
                                    {
                                        if (rule9=='kurus')
                                        {
                                            if (rule6=='belum bekerja')
                                            {
                                                location.href='nostrokeResult.html'
                                            } else
                                            {
                                                if (rule6=='tidak bekerja')
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule6=='ASN')
                                                    {
                                                        location.href='nostrokeResult.html'
                                                    } else
                                                    {
                                                        if (rule6=='self-employed')
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule6=='wiraswasta')
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                location.href='error.html'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if (rule9=='normal')
                                            {
                                                if (rule8==1)
                                                {
                                                    location.href='nostrokeResult.html'
                                                } else
                                                {
                                                    if (rule8==0)
                                                    {
                                                        if (rule5==0)
                                                        {
                                                            location.href='strokeResult.html'
                                                        } else
                                                        {
                                                            if (rule5==1)
                                                            {
                                                                if (rule6=='belum bekerja')
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='tidak bekerja')
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule6=='ASN')
                                                                        {
                                                                            if (rule10=='tidak merokok')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule10=='pernah merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='merokok')
                                                                                    {
                                                                                        if (rule7=='perkotaan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule7=='pedesaan')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule6=='self-employed')
                                                                            {
                                                                                if (rule10=='merokok')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule10=='tidak merokok')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            if (rule7=='perkotaan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule7=='pedesaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule7=='perkotaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule7=='pedesaan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule10=='pernah merokok')
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                if (rule7=='perkotaan')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule7=='pedesaan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            } else
                                                                                            {
                                                                                                if (rule1=='perempuan')
                                                                                                {
                                                                                                    if (rule7=='perkotaan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule7=='pedesaan')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule6=='wiraswasta')
                                                                                {
                                                                                    if (rule7=='perkotaan')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule10=='merokok')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule7=='pedesaan')
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    } 
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule1=='laki-laki')
                                                                                                            {
                                                                                                                location.href='strokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                location.href='error.html'
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if (rule9=='obesitas')
                                                {
                                                    if (rule7=='perkotaan')
                                                    {
                                                        if (rule10=='tidak merokok')
                                                        {
                                                            if (rule6=='belum bekerja')
                                                            {
                                                                location.href='strokeResult.html'
                                                            } else
                                                            {
                                                                if (rule6=='tidak bekerja')
                                                                {
                                                                    location.href='strokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule6=='ASN')
                                                                    {
                                                                        if (rule1=='laki-laki')
                                                                        {
                                                                            location.href='nostrokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule1=='perempuan')
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule5==1)
                                                                                    {
                                                                                        if (rule8==1)
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule8==0)
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule6=='self-employed')
                                                                        {
                                                                            if (rule5==1)
                                                                            {
                                                                                if (rule8==1)
                                                                                {
                                                                                    if (rule1=='laki-laki')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                location.href='error.html'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    if (rule1=='perempuan')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if (rule6=='wiraswasta')
                                                                            {
                                                                                if (rule8==1)
                                                                                {
                                                                                    if (rule1=='laki-laki')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule1=='perempuan')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            if (rule5==1)
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule5==0)
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    location.href='error.html'
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule5==1)
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule5==0)
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if (rule10=='pernah merokok')
                                                            {
                                                                if (rule5==0)
                                                                {
                                                                    location.href='nostrokeResult.html'
                                                                } else
                                                                {
                                                                    if (rule5==1)
                                                                    {
                                                                        if (rule6=='belum bekerja')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='tidak bekerja')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='ASN')
                                                                                {
                                                                                    if (rule8==0)
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule8==1)
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            location.href='error.html'
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if (rule6=='self-employed')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule8==1)
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule8==0)
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='wiraswasta')
                                                                                        {
                                                                                            if (rule1=='laki-laki')
                                                                                            {
                                                                                                if (rule8==1)
                                                                                                {
                                                                                                    location.href='nostrokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule8==0)
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            } else
                                                                                            {
                                                                                                if (rule1=='perempuan')
                                                                                                {
                                                                                                    if (rule8==1)
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule8==0)
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if (rule10=='merokok')
                                                                {
                                                                    if (rule8==1)
                                                                    {
                                                                        location.href='nostrokeResult.html'
                                                                    } else
                                                                    {
                                                                        if (rule8==0)
                                                                        {
                                                                            if (rule5==1)
                                                                            {
                                                                                if (rule6=='belum bekerja')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='tidak bekerja')
                                                                                    {
                                                                                        location.href='nostrokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='ASN')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule6=='self-employed')
                                                                                            {
                                                                                                if (rule1=='laki-laki')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule1=='perempuan')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            } else
                                                                                            {
                                                                                                if (rule6=='wiraswasta')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if (rule5==0)
                                                                                {
                                                                                    if (rule6=='belum bekerja')
                                                                                    {
                                                                                        location.href='strokeResult.html'
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='tidak bekerja')
                                                                                        {
                                                                                            location.href='strokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule6=='ASN')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule6=='self-employed')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule6=='wiraswasta')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        location.href='error.html'
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if (rule7=='pedesaan')
                                                        {
                                                            if (rule5==0)
                                                            {
                                                                location.href='nostrokeResult.html'
                                                            } else
                                                            {
                                                                if (rule5==1)
                                                                {
                                                                    if (rule8==1)
                                                                    {
                                                                        if (rule6=='belum bekerja')
                                                                        {
                                                                            location.href='strokeResult.html'
                                                                        } else
                                                                        {
                                                                            if (rule6=='tidak bekerja')
                                                                            {
                                                                                location.href='strokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='self-employed')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='ASN')
                                                                                    {
                                                                                        if (rule1=='laki-laki')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule1=='perempuan')
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    location.href='strokeResult.html'
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule10=='merokok')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='wiraswasta')
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='strokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        if (rule1=='laki-laki')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule1=='perempuan')
                                                                                                            {
                                                                                                                location.href='strokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                location.href='error.html'
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if (rule8==0)
                                                                        {
                                                                            if (rule6=='belum bekerja')
                                                                            {
                                                                                location.href='nostrokeResult.html'
                                                                            } else
                                                                            {
                                                                                if (rule6=='tidak bekerja')
                                                                                {
                                                                                    location.href='nostrokeResult.html'
                                                                                } else
                                                                                {
                                                                                    if (rule6=='ASN')
                                                                                    {
                                                                                        if (rule10=='pernah merokok')
                                                                                        {
                                                                                            location.href='nostrokeResult.html'
                                                                                        } else
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if (rule6=='self-employed')
                                                                                        {
                                                                                            if (rule10=='merokok')
                                                                                            {
                                                                                                location.href='nostrokeResult.html'
                                                                                            } else
                                                                                            {
                                                                                                if (rule10=='tidak merokok')
                                                                                                {
                                                                                                    if (rule1=='laki-laki')
                                                                                                    {
                                                                                                        location.href='strokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule1=='perempuan')
                                                                                                        {
                                                                                                            location.href='nostrokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            location.href='error.html'
                                                                                                        }
                                                                                                    }
                                                                                                } else
                                                                                                {
                                                                                                    if (rule10=='pernah merokok')
                                                                                                    {
                                                                                                        if (rule1=='laki-laki')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule1=='perempuan')
                                                                                                            {
                                                                                                                location.href='nostrokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                location.href='error.html'
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if (rule6=='wiraswasta')
                                                                                            {
                                                                                                if (rule1=='laki-laki')
                                                                                                {
                                                                                                    if (rule10=='tidak merokok')
                                                                                                    {
                                                                                                        location.href='nostrokeResult.html'
                                                                                                    } else
                                                                                                    {
                                                                                                        if (rule10=='pernah merokok')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule10=='merokok')
                                                                                                            {
                                                                                                                location.href='nostrokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                location.href='error.html'
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                } else
                                                                                                {
                                                                                                    if (rule1=='perempuan')
                                                                                                    {
                                                                                                        if (rule10=='tidak merokok')
                                                                                                        {
                                                                                                            location.href='strokeResult.html'
                                                                                                        } else
                                                                                                        {
                                                                                                            if (rule10=='pernah merokok')
                                                                                                            {
                                                                                                                location.href='nostrokeResult.html'
                                                                                                            } else
                                                                                                            {
                                                                                                                if (rule10=='merokok')
                                                                                                                {
                                                                                                                    location.href='strokeResult.html'
                                                                                                                } else
                                                                                                                {
                                                                                                                    location.href='error.html'
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            } 
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


function predict()
{
    if (rule4==1)
    {
        if (rule2=='dewasa')
        {
            prediksi = 'tidak stroke'
            screen.value = prediksi
            location.href='nostrokeResult.html'
        } else
        {
            if(rule2=='pra lanjut usia')
            {
                if(rule8==1)
                {
                    prediksi = 'stroke'
                    screen.value = prediksi
                    location.href='strokeResult.html'
                } else 
                {
                    if(rule8==0)
                    {
                        prediksi = 'tidak stroke'
                        screen.value = prediksi
                    }
                }
            } else
            {
                if(rule2=='lanjut usia')
                {
                    if(rule6=='ASN')
                    {
                        if(rule7=='perkotaan')
                        {
                            prediksi = 'tidak stroke'
                            screen.value = prediksi
                        } else
                        {
                            if(rule7=='pedesaan')
                            {
                                if(rule5==0)
                                {
                                    prediksi = 'stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule5==1)
                                    {
                                        if(rule3==1)
                                        {
                                            prediksi = 'tidak stroke'
                                            screen.value = prediksi
                                        } else
                                        {
                                            if(rule3==0)
                                            {
                                                if(rule10=='tidak merokok')
                                                {
                                                    prediksi = 'stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule10=='pernah merokok')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule10=='merokok')
                                                        {
                                                            prediksi = 'stroke'
                                                            screen.value = prediksi
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else
                    {
                        if(rule6=='self-employed')
                        {
                            if(rule7=='pedesaan')
                            {
                                if(rule9=='obesitas')
                                {
                                    prediksi = 'tidak stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule9=='normal')
                                    {
                                        if(rule10=='tidak merokok')
                                        {
                                            prediksi = 'tidak stroke'
                                            screen.value = prediksi
                                        } else
                                        {
                                            if(rule10=='merokok')
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule10=='pernah merokok')
                                                {
                                                    if(rule5==1)
                                                    {
                                                        prediksi = 'stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule5==0)
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else
                            {
                                if(rule7=='perkotaan')
                                {
                                    if(rule9=='normal')
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule9=='obesitas')
                                        {
                                            if(rule3==1)
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule3==0)
                                                {
                                                    if(rule10=='tidak merokok')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule10=='merokok')
                                                        {
                                                            prediksi = 'stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule10=='pernah merokok')
                                                            {
                                                                if(rule8==0)
                                                                {
                                                                    prediksi = 'stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule8==1)
                                                                    {
                                                                        if(rule1=='perempuan')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule1=='laki-laki')
                                                                            {
                                                                                prediksi = 'stroke'
                                                                                screen.value = prediksi
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else
                        {
                            if(rule6=='wiraswasta')
                            {
                                if(rule10=='tidak merokok')
                                {
                                    prediksi = 'tidak stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule10=='pernah merokok')
                                    {
                                        if(rule5==0)
                                        {
                                            if(rule1=='perempuan')
                                            {
                                                prediksi = 'stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule1=='laki-laki')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                }
                                            }
                                        } else
                                        {
                                            if(rule5==1)
                                            {
                                                if(rule9=='normal')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule9=='obesitas')
                                                    {
                                                        if(rule8==1)
                                                        {
                                                            if(rule7=='pedesaan')
                                                            {
                                                                prediksi = 'tidak stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule7=='perkotaan')
                                                                {
                                                                    prediksi = 'stroke'
                                                                    screen.value = prediksi
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if(rule8==0)
                                                            {
                                                                if(rule7=='perkotaan')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule7=='pedesaan')
                                                                    {
                                                                        if(rule3==0)
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule3==1)
                                                                            {
                                                                                if(rule1=='perempuan')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule1=='laki-laki')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }            
                                                }
                                            }
                                        }
                                    } else
                                    {
                                        if(rule10=='merokok')
                                        {
                                            if(rule7=='pedesaan')
                                            {
                                                if(rule1=='perempuan')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule1=='laki-laki')
                                                    {
                                                        if(rule9=='normal')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule9=='obesitas')
                                                            {
                                                                prediksi = 'stroke'
                                                                screen.value = prediksi
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if(rule7=='perkotaan')
                                                {
                                                    if(rule8==0)
                                                    {
                                                        prediksi = 'stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule8==1)
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else
    {
        if (rule4==0)
        {
            if(rule3==1)
            {
                if(rule2=='remaja')
                {
                    prediksi = 'tidak stroke'
                    screen.value = prediksi
                } else
                {
                    if(rule2=='dewasa')
                    {
                        if(rule10=='tidak merokok')
                        {
                            prediksi = 'tidak stroke'
                            screen.value = prediksi
                        } else
                        {
                            if(rule10=='pernah merokok')
                            {
                                prediksi = 'tidak stroke'
                                screen.value = prediksi
                            } else 
                            {
                                if(rule10=='merokok')
                                {
                                    if(rule7=='perkotaan')
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule7=='pedesaan')
                                        {
                                            if(rule1=='laki-laki')
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule1=='perempuan')
                                                {
                                                    prediksi = 'stroke'
                                                    screen.value = prediksi
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else
                    {
                        if(rule2=='pra lanjut usia')
                        {
                            if(rule9=='normal')
                            {
                                prediksi = 'tidak stroke'
                                screen.value = prediksi
                            } else
                            {
                                if(rule9=='obesitas')
                                {
                                    if(rule5==0)
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule5==1)
                                        {
                                            if(rule10=='tidak merokok')
                                            {
                                                if(rule6=='ASN')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule6=='self-employed')
                                                    {
                                                        if(rule1=='laki-laki')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule1=='perempuan')
                                                            {
                                                                prediksi = 'stroke'
                                                                screen.value = prediksi
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if(rule6=='wiraswasta')
                                                        {
                                                            if(rule8==1)
                                                            {
                                                                if(rule1=='laki-laki')
                                                                {
                                                                    prediksi = 'stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule1=='perempuan')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } 
                                                                }
                                                            } else
                                                            {
                                                                if(rule8==0)
                                                                {
                                                                    if(rule1=='laki-laki')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule1=='perempuan')
                                                                        {
                                                                            if(rule7=='perkotaan')
                                                                            {
                                                                                prediksi = 'stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule7=='pedesaan')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if(rule10=='pernah merokok')
                                                {
                                                    if(rule8==1)
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule8==0)
                                                        {
                                                            if(rule6=='ASN')
                                                            {
                                                                prediksi = 'stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule6=='self-employed')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule6=='wiraswasta')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else
                                                {
                                                    if(rule10=='merokok')
                                                    {
                                                        if(rule8==0)
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else 
                                                        {
                                                            if(rule8==1)
                                                            {
                                                                if(rule1=='perempuan')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule1=='laki-laki')
                                                                    {
                                                                        if(rule6=='ASN')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule6=='wiraswasta')
                                                                            {
                                                                                prediksi = 'stroke'
                                                                                screen.value = prediksi
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else
                        {
                            if(rule2=='lanjut usia')
                            {
                                if(rule9=='kurus')
                                {
                                    prediksi = 'tidak stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule9=='normal')
                                    {
                                        if(rule1=='laki-laki')
                                        {
                                            prediksi = 'stroke'
                                            screen.value = prediksi
                                        } else
                                        {
                                            if(rule1=='perempuan')
                                            {
                                                if(rule10=='pernah merokok')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule10=='tidak merokok')
                                                    {
                                                        if(rule8==1)
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule8==0)
                                                            {
                                                                if(rule6=='self-employed')
                                                                {
                                                                    if(rule7=='perkotaan')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule7=='pedesaan')
                                                                        {
                                                                            prediksi = 'stroke'
                                                                            screen.value = prediksi
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if(rule6=='wiraswasta')
                                                                    {
                                                                        if(rule5==1)
                                                                        {
                                                                            if(rule7=='perkotaan')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule7=='pedesaan')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if(rule5==0)
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule7=='pedesaan')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if(rule10=='merokok')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else
                                    {
                                        if(rule9=='obesitas')
                                        {
                                            if(rule5==0)
                                            {
                                                if(rule8==1)
                                                {
                                                    prediksi = 'stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule8==0)
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    }
                                                }
                                            } else
                                            {
                                                if(rule5==1)
                                                {
                                                    if(rule7=='perkotaan')
                                                    {
                                                        if(rule6=='ASN')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule6=='self-employed')
                                                            {
                                                                if(rule8==1)
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule8==0)
                                                                    {
                                                                        if(rule10=='merokok')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule10=='tidak merokok')
                                                                            {
                                                                                if(rule1=='laki-laki')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule1=='perempuan')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule10=='pernah merokok')
                                                                                {
                                                                                    if(rule1=='laki-laki')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule1=='perempuan')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if(rule6=='wiraswasta')
                                                                {
                                                                    if(rule8==0)
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule8==1)
                                                                        {
                                                                            if(rule10=='pernah merokok')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule10=='merokok')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule10=='tidak merokok')
                                                                                    {
                                                                                        if(rule1=='laki-laki')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule1=='perempuan')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if(rule7=='pedesaan')
                                                        {
                                                            if(rule6=='ASN')
                                                            {
                                                                if(rule10=='tidak merokok')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule10=='pernah merokok')
                                                                    {
                                                                        prediksi = 'stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule10=='merokok')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if(rule6=='self-employed')
                                                                {
                                                                    if(rule10=='merokok')
                                                                    {
                                                                        prediksi = 'stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule10=='tidak merokok')
                                                                        {
                                                                            if(rule1=='laki-laki')
                                                                            {
                                                                                if(rule8==1)
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule8==0)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule1=='perempuan')
                                                                                {
                                                                                    if(rule8==1)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule8==0)
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if(rule10=='pernah merokok')
                                                                            {
                                                                                if(rule8==1)
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule8==0)
                                                                                    {
                                                                                        if(rule1=='laki-laki')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule1=='perempuan')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if(rule6=='wiraswasta')
                                                                    {
                                                                        if(rule10=='merokok')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule10=='tidak merokok')
                                                                            {
                                                                                if(rule1=='laki-laki')
                                                                                {
                                                                                    if(rule8==1)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule8==0)
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if(rule1=='perempuan')
                                                                                    {
                                                                                        if(rule8==1)
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule8==0)
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule10=='pernah merokok')
                                                                                {
                                                                                    if(rule8==1)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule8==0)
                                                                                        {
                                                                                            if(rule1=='laki-laki')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule1=='perempuan')
                                                                                                {
                                                                                                    prediksi = 'stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } 
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else
            {
                if(rule3==0)
                {
                    if(rule2=='anak-anak')
                    {
                        prediksi = 'tidak stroke'
                        screen.value = prediksi
                    } else
                    {
                        if(rule2=='remaja')
                        {
                            prediksi = 'tidak stroke'
                            screen.value = prediksi
                        } else
                        {
                            if(rule2=='dewasa')
                            {
                                if(rule6=='tidak bekerja')
                                {
                                    prediksi = 'tidak stroke'
                                    screen.value = prediksi
                                } else
                                {
                                    if(rule6=='ASN')
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule6=='self-employed')
                                        {
                                            if(rule7=='pedesaan')
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule7=='perkotaan')
                                                {
                                                    if(rule10=='tidak merokok')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule10=='pernah merokok')
                                                        {
                                                            if(rule5==1)
                                                            {
                                                                prediksi = 'tidak stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule5==0)
                                                                {
                                                                    prediksi = 'stroke'
                                                                    screen.value = prediksi
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if(rule10=='merokok')
                                                            {
                                                                if(rule1=='laki-laki')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule1=='perempuan')
                                                                    {
                                                                        if(rule9=='normal')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule9=='obesitas')
                                                                            {
                                                                                if(rule8==1)
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule8==0)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if(rule6=='wiraswasta')
                                            {
                                                if(rule7=='pedesaan')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule7=='perkotaan')
                                                    {
                                                        if(rule5==0)
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule5==1)
                                                            {
                                                                if(rule1=='laki-laki')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule1=='perempuan')
                                                                    {
                                                                        if(rule10=='pernah merokok')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule10=='merokok')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule10=='tidak merokok')
                                                                                {
                                                                                    if(rule9=='normal')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule9=='obesitas')
                                                                                        {
                                                                                            if(rule8==1)
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule8==0)
                                                                                                {
                                                                                                    prediksi = 'stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } else
                            {
                                if(rule2=='pra lanjut usia')
                                {
                                    if(rule9=='kurus')
                                    {
                                        prediksi = 'tidak stroke'
                                        screen.value = prediksi
                                    } else
                                    {
                                        if(rule9=='normal')
                                        {
                                            if(rule1=='laki-laki')
                                            {
                                                prediksi = 'tidak stroke'
                                                screen.value = prediksi
                                            } else
                                            {
                                                if(rule1=='perempuan')
                                                {
                                                    if(rule6=='ASN')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule6=='self-employed')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule6=='wiraswasta')
                                                            {
                                                                if(rule10=='pernah merokok')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule10=='merokok')
                                                                    {
                                                                        if(rule7=='perkotaan')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule7=='pedesaan')
                                                                            {
                                                                                prediksi = 'stroke'
                                                                                screen.value = prediksi
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if(rule10=='tidak merokok')
                                                                        {
                                                                            if(rule7=='pedesaan')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    if(rule5==1)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule5==0)
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else
                                        {
                                            if(rule9=='obesitas')
                                            {
                                                if(rule8==1)
                                                {
                                                    if(rule7=='perkotaan')
                                                    {
                                                        prediksi = 'tidak stroke'
                                                        screen.value = prediksi
                                                    } else
                                                    {
                                                        if(rule7=='pedesaan')
                                                        {
                                                            if(rule1=='laki-laki')
                                                            {
                                                                prediksi = 'tidak stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule1=='perempuan')
                                                                {
                                                                    if(rule10=='pernah merokok')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule10=='merokok')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule10=='tidak merokok')
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                } else
                                                {
                                                    if(rule8==0)
                                                    {
                                                        if(rule10=='tidak merokok')
                                                        {
                                                            if(rule5==0)
                                                            {
                                                                if(rule7=='pedesaan')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule7=='perkotaan')
                                                                    {
                                                                        if(rule6=='self-employed')
                                                                        {
                                                                            prediksi = 'stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule6=='wiraswasta')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule6=='ASN' || 'belum bekerja'|| 'tidak bekerja')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                }
                                                                            } 
                                                                        }
                                                                    } 
                                                                }
                                                            } else
                                                            {
                                                                if(rule5==1)
                                                                {
                                                                    if(rule6=='self-employed')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule6=='ASN')
                                                                        {
                                                                            if(rule7=='pedesaan')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    if(rule1=='laki-laki')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule1=='perempuan')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } if(rule6=='wiraswasta')
                                                                        {
                                                                            if(rule1=='laki-laki')
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule7=='pedesaan')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule1=='perempuan')
                                                                                {
                                                                                    if(rule7=='pedesaan')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule7=='perkotaan')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if(rule10=='pernah merokok')
                                                            {
                                                                if(rule5==0)
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule5==1)
                                                                    {
                                                                        if(rule6=='self-employed')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule6=='ASN')
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule7=='pedesaan')
                                                                                    {
                                                                                        if(rule1=='laki-laki')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule1=='perempuan')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule6=='wiraswasta')
                                                                                {
                                                                                    if(rule7=='perkotaan')
                                                                                    {
                                                                                        if(rule1=='perempuan')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule1=='laki-laki')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if(rule7=='pedesaan')
                                                                                        {
                                                                                            if(rule1=='laki-laki')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule1=='perempuan')
                                                                                                {
                                                                                                    prediksi = 'stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if(rule10=='merokok')
                                                                {
                                                                    if(rule7=='perkotaan')
                                                                    {
                                                                        if(rule1=='laki-laki')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule1=='perempuan')
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if(rule7=='pedesaan')
                                                                        {
                                                                            if(rule1=='laki-laki')
                                                                            {
                                                                                if(rule5==0)
                                                                                {
                                                                                    if(rule6=='ASN')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if(rule5==1)
                                                                                    {
                                                                                        if(rule6=='ASN')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='self-employed')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule6=='wiraswasta')
                                                                                                {
                                                                                                    prediksi = 'tidak stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule1=='perempuan')
                                                                                {
                                                                                    if(rule6=='ASN')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='self-employed')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='wiraswasta')
                                                                                            {
                                                                                                if(rule5==0)
                                                                                                {
                                                                                                    prediksi = 'tidak stroke'
                                                                                                    screen.value = prediksi
                                                                                                } else
                                                                                                {
                                                                                                    if(rule5==1)
                                                                                                    {
                                                                                                        prediksi = 'stroke'
                                                                                                        screen.value = prediksi
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else
                                {
                                    if(rule2=='lanjut usia')
                                    {
                                        if(rule9=='kurus')
                                        {
                                            prediksi = 'tidak stroke'
                                            screen.value = prediksi
                                        } else
                                        {
                                            if(rule9=='normal')
                                            {
                                                if(rule8=='1')
                                                {
                                                    prediksi = 'tidak stroke'
                                                    screen.value = prediksi
                                                } else
                                                {
                                                    if(rule8=='0')
                                                    {
                                                        if(rule6=='ASN')
                                                        {
                                                            prediksi = 'tidak stroke'
                                                            screen.value = prediksi
                                                        } else
                                                        {
                                                            if(rule6=='self-employed')
                                                            {
                                                                if(rule1=='laki-laki')
                                                                {
                                                                    if(rule5==0)
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule5==1)
                                                                        {
                                                                            if(rule10=='tidak merokok')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule10=='pernah merokok')
                                                                                {
                                                                                    if(rule7=='pedesaan')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule7=='perkotaan')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if(rule10=='merokok')
                                                                                    {
                                                                                        if(rule7=='perkotaan')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule7=='pedesaan')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if(rule1=='perempuan')
                                                                    {
                                                                        if(rule10=='tidak merokok')
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule10=='merokok')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule10=='pernah merokok')
                                                                                {
                                                                                    if(rule7=='perkotaan')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule7=='pedesaan')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if(rule6=='wiraswasta')
                                                                {
                                                                    if(rule5==0)
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule5==1)
                                                                        {
                                                                            if(rule7=='perkotaan')
                                                                            {
                                                                                if(rule1=='laki-laki')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule1=='perempuan')
                                                                                    {
                                                                                        if(rule10=='tidak merokok')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule10=='pernah merokok')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule10=='merokok')
                                                                                                {
                                                                                                    prediksi = 'stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule7=='pedesaan')
                                                                                {
                                                                                    if(rule10=='merokok')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule10=='tidak merokok')
                                                                                        {
                                                                                            if(rule1=='laki-laki')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule1=='perempuan')
                                                                                                {
                                                                                                    prediksi = 'stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        } else
                                                                                        {
                                                                                            if(rule10=='pernah merokok')
                                                                                            {
                                                                                                if(rule1=='perempuan')
                                                                                                {
                                                                                                    prediksi = 'tidak stroke'
                                                                                                    screen.value = prediksi
                                                                                                } else
                                                                                                {
                                                                                                    if(rule1=='laki-laki')
                                                                                                    {
                                                                                                        prediksi = 'stroke'
                                                                                                        screen.value = prediksi
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            } else
                                            {
                                                if(rule9=='obesitas')
                                                {
                                                    if(rule10=='tidak merokok')
                                                    {
                                                        if(rule7=='perkotaan')
                                                        {
                                                            if(rule1=='laki-laki')
                                                            {
                                                                if(rule6=='ASN')
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule6=='self-employed')
                                                                    {
                                                                        if(rule5==0)
                                                                        {
                                                                            prediksi = 'stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule5==1)
                                                                            {
                                                                                if(rule8==1)
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule8==0)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if(rule6=='wiraswasta')
                                                                        {
                                                                            if(rule5==0)
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule5==1)
                                                                                {
                                                                                    if(rule8==1)
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule8==0)
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            } else
                                                            {
                                                                if(rule1=='perempuan')
                                                                {
                                                                    if(rule8==1)
                                                                    {
                                                                        if(rule5==0)
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule5==1)
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if(rule8==0)
                                                                        {
                                                                            if(rule6=='ASN')
                                                                            {
                                                                                if(rule5==1)
                                                                                {
                                                                                    prediksi = 'stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule5==0)
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule6=='self-employed')
                                                                                {
                                                                                    if(rule5==1)
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule5==0)
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if(rule6=='wiraswasta')
                                                                                    {
                                                                                        if(rule5==1)
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule5==0)
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if(rule7=='pedesaan')
                                                            {
                                                                if(rule5==0)
                                                                {
                                                                    prediksi = 'tidak stroke'
                                                                    screen.value = prediksi
                                                                } else
                                                                {
                                                                    if(rule5==1)
                                                                    {
                                                                        if(rule8==1)
                                                                        {
                                                                            if(rule6=='ASN')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule6=='self-employed')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='wiraswasta')
                                                                                    {
                                                                                        if(rule1=='laki-laki')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule1=='perempuan')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if(rule8==0)
                                                                            {
                                                                                if(rule1=='laki-laki')
                                                                                {
                                                                                    if(rule6=='ASN')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='self-employed')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='wiraswasta')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                } else
                                                                                {
                                                                                    if(rule1=='perempuan')
                                                                                    {
                                                                                        if(rule6=='ASN')
                                                                                        {
                                                                                            prediksi = 'stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='self-employed')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule6=='wiraswasta')
                                                                                                {
                                                                                                    prediksi = 'tidak stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    } else
                                                    {
                                                        if(rule10=='pernah merokok')
                                                        {
                                                            if(rule5==0)
                                                            {
                                                                prediksi = 'tidak stroke'
                                                                screen.value = prediksi
                                                            } else
                                                            {
                                                                if(rule5==1)
                                                                {
                                                                    if(rule1=='laki-laki')
                                                                    {
                                                                        if(rule8==1)
                                                                        {
                                                                            if(rule7=='pedesaan')
                                                                            {
                                                                                prediksi = 'tidak stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    if(rule6=='ASN')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='self-employed')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule6=='wiraswasta')
                                                                                            {
                                                                                                rediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } else
                                                                        {
                                                                            if(rule8==0)
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        if(rule7=='perkotaan')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        } else
                                                                                        {
                                                                                            if(rule7=='pedesaan')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            }
                                                                                        }
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            if(rule7=='perkotaan')
                                                                                            {
                                                                                                prediksi = 'stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule7=='pedesaan')
                                                                                                {
                                                                                                    prediksi = 'tidak stroke'
                                                                                                    screen.value = prediksi
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    } else
                                                                    {
                                                                        if(rule1=='perempuan')
                                                                        {
                                                                            if(rule8==1)
                                                                            {
                                                                                if(rule7=='perkotaan')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule7=='pedesaan')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    }
                                                                                }
                                                                            } else
                                                                            {
                                                                                if(rule8==0)
                                                                                {
                                                                                    if(rule7=='perkotaan')
                                                                                    {
                                                                                        prediksi = 'tidak stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule7=='pedesaan')
                                                                                        {
                                                                                            if(rule6=='ASN')
                                                                                            {
                                                                                                prediksi = 'tidak stroke'
                                                                                                screen.value = prediksi
                                                                                            } else
                                                                                            {
                                                                                                if(rule6=='self-employed')
                                                                                                {
                                                                                                    prediksi = 'stroke'
                                                                                                    screen.value = prediksi
                                                                                                } else
                                                                                                {
                                                                                                    if(rule6=='wiraswasta')
                                                                                                    {
                                                                                                        prediksi = 'tidak stroke'
                                                                                                        screen.value = prediksi
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        } else
                                                        {
                                                            if(rule10=='merokok')
                                                            {
                                                                if(rule5==0)
                                                                {
                                                                    if(rule7=='pedesaan')
                                                                    {
                                                                        prediksi = 'tidak stroke'
                                                                        screen.value = prediksi
                                                                    } else
                                                                    {
                                                                        if(rule7=='perkotaan')
                                                                        {
                                                                            if(rule6=='ASN')
                                                                            {
                                                                                prediksi = 'stroke'
                                                                                screen.value = prediksi
                                                                            } else
                                                                            {
                                                                                if(rule6=='wiraswasta')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                } else
                                                                {
                                                                    if(rule5==1)
                                                                    {
                                                                        if(rule8==1)
                                                                        {
                                                                            prediksi = 'tidak stroke'
                                                                            screen.value = prediksi
                                                                        } else
                                                                        {
                                                                            if(rule8==0)
                                                                            {
                                                                                if(rule6=='ASN')
                                                                                {
                                                                                    prediksi = 'tidak stroke'
                                                                                    screen.value = prediksi
                                                                                } else
                                                                                {
                                                                                    if(rule6=='self-employed')
                                                                                    {
                                                                                        prediksi = 'stroke'
                                                                                        screen.value = prediksi
                                                                                    } else
                                                                                    {
                                                                                        if(rule6=='wiraswasta')
                                                                                        {
                                                                                            prediksi = 'tidak stroke'
                                                                                            screen.value = prediksi
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                                
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
            
}