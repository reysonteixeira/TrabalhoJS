function foto(op)
{
	var branco = " ";

	document.getElementById('fotoBolsonaro').style.border='0px';
	document.getElementById('fotoMarina').style.border='0px';
	document.getElementById('fotoCiro').style.border='0px';
	
	document.getElementById('nome1').innerHTML=branco;
	document.getElementById('nome2').innerHTML=branco;
	document.getElementById('nome3').innerHTML=branco;
	switch(op)
	{
	case 1:
			document.getElementById('fotoEvidencia').src='_img/bolsonaro.png';
			document.getElementById('fotoBolsonaro').src='';
			document.getElementById('fotoMarina').src='';
			document.getElementById('fotoCiro').src='';
			document.getElementById('nomeCompleto').innerHTML="Jair Messias Bolsonaro";
			preVotoCookie(1,"sim");
			break;
	case 2:
			document.getElementById('fotoEvidencia').src='_img/marina.png';
			document.getElementById('fotoBolsonaro').src='';
			document.getElementById('fotoMarina').src='';
			document.getElementById('fotoCiro').src='';
			document.getElementById('nomeCompleto').innerHTML="Maria Osmarina Marina Silva Vaz de Lima";
			preVotoCookie(2,"sim");
			break;
	case 3:
			document.getElementById('fotoEvidencia').src='_img/cirogomes.png';
			document.getElementById('fotoBolsonaro').src='';
			document.getElementById('fotoMarina').src='';
			document.getElementById('fotoCiro').src='';
			document.getElementById('nomeCompleto').innerHTML="Ciro Gomes";
			preVotoCookie(3,"sim");
			break;
	case 4:
			var vetorCookie = document.cookie.split("; ");
	
			for (var i=0; i<vetorCookie.length; i++)
			{
				var situacao = vetorCookie[i].split("=");
				if (situacao[0] == "selecao")
				{
					if(situacao[1]!="sim")
					{
						preVotoCookie(4,"sim");
						insereVoto();
						break;
					}
					else
					{
						alert("Há uma candidato selecionado!");
						break;
					}
				}
	}

			
	}
}

function preVotoCookie(n, checa) 
{

		document.cookie="prev="+n;
		document.cookie="selecao="+checa;
}


function iniciaEleicao()
{
	var iniciada = "sim";
	var voto1 = 0;
	var voto2 = 0;
	var voto3=0;
	var voto4 =0;

	var situacao = "iniciada";
	var candidato1 = "voto1";
	var candidato2 = "voto2";
	var candidato3 = "voto3";
	var candidato4 = "voto4";
	
	document.cookie = situacao + "=" + iniciada ;
	document.cookie = candidato1 + "=" + voto1 ;
	document.cookie = candidato2 + "=" + voto2 ;
	document.cookie = candidato3 + "=" + voto3 ;
	document.cookie = candidato4 + "=" + voto4 ;
	document.cookie = "selecao=" + "nao";
	alert("Eleição Iniciada!");
	window.location.href="index.html";
}

function resultado()
{
	var totalVotos;
	var voto1percent;
	var voto2percent;
	var voto3percent;
	var voto4percent;

	var vetorCookie = document.cookie;

	if(vetorCookie != undefined && vetorCookie.length > 0)
	{

		var vetorCookie = document.cookie.split("; ");

		for (var i=0; i<vetorCookie.length; i++)
		{
			var situacao = vetorCookie[i].split("=");
			if (situacao[0] == "voto1")
			{
				var voto1 = situacao[1];
				break;
			}
		}

		for (var i=0; i<vetorCookie.length; i++)
		{
			var situacao = vetorCookie[i].split("=");
			if (situacao[0] == "voto2")
			{
				var voto2 = situacao[1];
				break;
			}
		}

		for (var i=0; i<vetorCookie.length; i++)
		{
			var situacao = vetorCookie[i].split("=");
			if (situacao[0] == "voto3")
			{
				var voto3 = situacao[1];
				break;
			}
		}

		for (var i=0; i<vetorCookie.length; i++)
		{
			var situacao = vetorCookie[i].split("=");
			if (situacao[0] == "voto4")
			{
				var voto4 = situacao[1];
				break;
			}
		}
	
		totalVotos = parseInt(voto1)+parseInt(voto2)+parseInt(voto3)+parseInt(voto4);

		voto1percent = ((voto1 *100)/totalVotos);
		voto2percent = ((voto2 *100)/totalVotos);
		voto3percent = ((voto3 *100)/totalVotos);
		voto4percent = ((voto4 *100)/totalVotos);

	
		if (voto4percent >50 || voto3percent >50 || voto2percent>50 || voto1percent>50)
		{
			if (voto4percent>50)
			{
				document.getElementById('result2').innerHTML="Deve haver uma nova eleição!";
			}

			else if (voto3percent>50)
			{
				document.getElementById('result2').innerHTML="Eleição finalizada em 1º turno!";
				document.getElementById('txtVencedor').innerHTML="NOVO PRESIDENTE = CIRO GOMES";
				document.getElementById('imgGanhador').src='_img/cirogomes.png';
			}

			if (voto2percent >50)
			{
				document.getElementById('result2').innerHTML="Eleição finalizada em 1º turno!";
				document.getElementById('txtVencedor').innerHTML="NOVO PRESIDENTE = MARINA SILVA";
				document.getElementById('imgGanhador').src='_img/marina.png';
			}

			if (voto1percent > 50)
			{
				document.getElementById('result2').innerHTML="Eleição finalizada em 1º turno!";
				document.getElementById('txtVencedor').innerHTML="NOVO PRESIDENTE = BOLSONARO";
				document.getElementById('imgGanhador').src='_img/bolsonaro.png';
			}
		}
		else if(voto1 == voto2 && voto1 == voto3)
		{
			document.getElementById('result2').innerHTML="Todos candidatos estão empatados!";
			document.getElementById('imgGanhador').src='_img/empatetodos.png';
		}

		else
		{ 
			document.getElementById('result2').innerHTML="Eleição terá segundo turno!<br/>Candidatos:";	
			if(voto1>=voto2 && voto1>=voto3)
			{
				document.getElementById('imgSegundo1').src='_img/bolsonarorosto.png';
				document.getElementById('txtSegundo1').innerHTML="BOLSONARO";
				if (voto2>voto3)
				{
					document.getElementById('imgSegundo2').src='_img/marinarosto.png';
					document.getElementById('txtSegundo2').innerHTML="MARINA SILVA";
				}
				else if(voto3>voto2)
				{
					document.getElementById('imgSegundo2').src='_img/cirogomesrosto.png';
					document.getElementById('txtSegundo2').innerHTML="CIRO GOMES";
				}
				else
				{
					document.getElementById('imgSegundo2').src='_img/empate2.png';
					document.getElementById('txtSegundo2').innerHTML="EMPATE";
				}
		}
		else if(voto2>=voto1 && voto2>=voto3)
		{
			document.getElementById('imgSegundo1').src='_img/marinarosto.png';
			document.getElementById('txtSegundo1').innerHTML="MARINA SILVA";
			if (voto1>voto3)
			{
				document.getElementById('imgSegundo2').src='_img/bolsonarorosto.png';
				document.getElementById('txtSegundo2').innerHTML="BOLSONARO";
			}
			else if(voto3>voto1)
			{
				document.getElementById('imgSegundo2').src='_img/cirogomesrosto.png';
				document.getElementById('txtSegundo2').innerHTML="CIRO GOMES";
			}
			else
			{
				document.getElementById('imgSegundo2').src='_img/empate2.png';
				document.getElementById('txtSegundo2').innerHTML="EMPATE";
			}
		}
		else 
		{
			document.getElementById('imgSegundo1').src='_img/cirogomesrosto.png';
			document.getElementById('txtSegundo1').innerHTML="CIRO GOMES";
			if (voto1>voto2)
			{
				document.getElementById('imgSegundo2').src='_img/bolsonarorosto.png';
				document.getElementById('txtSegundo2').innerHTML="BOLSONARO";
			}
			else if(voto2>voto1)
			{
				document.getElementById('imgSegundo2').src='_img/marinarosto.png';
				document.getElementById('txtSegundo2').innerHTML="MARINA SILVA";
			}
			else
			{
				document.getElementById('imgSegundo2').src='_img/empate2.png';
				document.getElementById('txtSegundo2').innerHTML="EMPATE";
			}
		}
	

		}


		voto1percent=voto1percent.toFixed(2);
		voto2percent = voto2percent.toFixed(2);
		voto3percent = voto3percent.toFixed(2);
		voto4percent = voto4percent.toFixed(2);

		document.getElementById("voto1").style.width=voto1percent+"%";
		document.getElementById("voto2").style.width=voto2percent+"%";
		document.getElementById("voto3").style.width=voto3percent+"%";
		document.getElementById("voto4").style.width=voto4percent+"%";


		document.getElementById("spbranco").innerHTML = voto4percent+"%";
		document.getElementById("spmarina").innerHTML = voto2percent+"%";
		document.getElementById("spcirogomes").innerHTML = voto3percent+"%";
		document.getElementById("spbolsonaro").innerHTML = voto1percent+"%";

		document.getElementById("quantvotos1").innerHTML = "Total de votos: "+voto1; 
		document.getElementById("quantvotos2").innerHTML = "Total de votos: "+voto2; 
		document.getElementById("quantvotos3").innerHTML = "Total de votos: "+voto3; 
		document.getElementById("quantvotos4").innerHTML = "Total de votos: "+voto4;
	}
	else
	{
		alert("Não há eleições em Andamento!");
		window.location.href="index.html";
	}

}

function alteraVoto()
{

	var checa = false;
	var vetorCookie = document.cookie.split("; ");
	
	for (var i=0; i<vetorCookie.length; i++)
	{
			var situacao = vetorCookie[i].split("=");
			if (situacao[0] == "selecao")
			{
				if(situacao[1]=="sim")
				checa=true;
				break;
			}
	}
	if(checa)
	{
		preVotoCookie(0,"nao");

		document.getElementById('fotoEvidencia').src='';
		document.getElementById('fotoBolsonaro').src='_img/bolsonaro.png';
		document.getElementById('fotoMarina').src='_img/marina.png';
		document.getElementById('fotoCiro').src='_img/cirogomes.png';
		document.getElementById('nomeCompleto').innerHTML="";

		document.getElementById('fotoBolsonaro').style.border='5px solid #0903ff';

		document.getElementById('fotoMarina').style.border='5px solid #1eff00';
		document.getElementById('fotoCiro').style.border='5px solid #ff0000';
	
		document.getElementById('nome1').innerHTML="Bolsonaro";
		document.getElementById('nome2').innerHTML="Marina Silva";
		document.getElementById('nome3').innerHTML="Ciro Gomes";
	}
	else
	{
		alert("Nenhum candidato selecionado!");
	}
}


function migraResultado()
{
	
	var vetorCookie = document.cookie;

	if(vetorCookie != undefined && vetorCookie.length > 0)
	{
		var vetorCookie = document.cookie.split("; ");
		var checa = true;

		for (var i=0; i<vetorCookie.length; i++)
		{
			var situacao = vetorCookie[i].split("=");
			if (situacao[0] == "iniciada")
			{
				if(situacao[1]=="sim")
					{
						checa = false;
						break;
					}
			}
		}
		if (checa)
		{
			window.location.href="resultado.html";
		}
		else 
		{
			alert("Impossível Votar! Eleição em Andamento!");
		}
	}
	else 
	{
		alert("Não existe nenhuma eleição computada!");
	}

}



function retornaPrev()
{
	var vetorCookie = document.cookie.split("; ");


	for (var i=0; i<vetorCookie.length; i++)
	{
		var situacao = vetorCookie[i].split("=");
		if (situacao[0] == "prev")
		{
		    var op=situacao[1];
			break;
		}
	}
	
	return (op);
}


function insereVoto()
{
	var checa = false;
	var vetorCookie = document.cookie.split("; ");
	
	for (var i=0; i<vetorCookie.length; i++)
	{
			var situacao = vetorCookie[i].split("=");
			if (situacao[0] == "selecao")
			{
				if(situacao[1]=="sim")
				checa=true;
				break;
			}
	}

	if (checa)
	{
	var op= retornaPrev();

		if (op ==1)
		{
			for (var i=0; i<vetorCookie.length; i++)
			{
				var situacao = vetorCookie[i].split("=");
				if (situacao[0] == "voto1")
				{
					var voto1 = situacao[1];
					voto1++;
					document.cookie="voto1="+voto1;
					document.cookie="selecao="+"nao";
					break;
				}
			}
		}
		if (op==2)
		{
			for (var i=0; i<vetorCookie.length; i++)
			{
				var situacao = vetorCookie[i].split("=");
				if (situacao[0] == "voto2")
				{
					var voto2 = situacao[1];
					voto2++;
					document.cookie="voto2="+voto2;
					document.cookie="selecao="+"nao";
					break;
				}
			}
		}
		if(op==3)
		{
			for (var i=0; i<vetorCookie.length; i++)
			{
				var situacao = vetorCookie[i].split("=");
				if (situacao[0] == "voto3")
				{
					var voto3 = situacao[1];
					voto3++;
					document.cookie="voto3="+voto3;
					document.cookie="selecao="+"nao";
					break;
				}
			}
		}
		if (op==4)
		{
			for (var i=0; i<vetorCookie.length; i++)
			{
				var situacao = vetorCookie[i].split("=");
				if (situacao[0] == "voto4")
				{
					var voto4 = situacao[1];
					voto4++;
					document.cookie="voto4="+voto4;
					document.cookie="selecao="+"nao";
					break;
				}
			}
		}
		alert("Voto Confirmado!");
		voltaInicio();
	}
	else 
	{
		alert("Nenhum candidato selecionado!");
	}

}

function voltaInicio()
{
	window.location.href="index.html";
}


function janela()
{
	var vetorCookie = document.cookie;

	if(vetorCookie != undefined && vetorCookie.length > 0)
	{
		var vetorCookie = document.cookie.split("; ");
		var checa = false;

		for (var i=0; i<vetorCookie.length; i++)
		{
			var situacao = vetorCookie[i].split("=");
			if (situacao[0] == "iniciada")
			{
				if(situacao[1]=="sim")
					{
						checa = true;
						break;
					}
			}
		}
	}
	if (checa)
	{
		var name = document.getElementById("txtNomeVotante").value;
		if (name.trim() != "")
		{
			document.cookie = "name="+name;
			window.location.href="votacao.html";
		}
		else
		{
			alert("Não foi inserido nenhum nome!");
		}
	}
	else
	{
		alert("Eleição não disponível!");
	}
}

function bemVindo()
{
	
	var vetorCookie = document.cookie;
	var checa = false;

	if(vetorCookie != undefined && vetorCookie.length > 0)
	{
		var vetorCookie = document.cookie.split("; ");
		for (var i=0; i<vetorCookie.length; i++)
			{
				var situacao = vetorCookie[i].split("=");
				if (situacao[0] == "iniciada")
				{
					
					if(situacao[1]=="sim");
					checa = true;
					break;
				}
			}
	}
	
	if (checa==true)
	{
		var vetorCookie = document.cookie.split("; ");
			for (var i=0; i<vetorCookie.length; i++)
			{
				var situacao = vetorCookie[i].split("=");
				if (situacao[0] == "name")
				{
					alert("Bem Vindo " +situacao[1] + "!");
					break;
				}
			}
	}
	else 
	{
		alert("Eleição não disponível");
		window.location.href="index.html"
	}
}


function finalizaEleicao()
{
	var vetorCookie = document.cookie;

	if(vetorCookie != undefined && vetorCookie.length > 0)
	{
		var vetorCookie = document.cookie.split("; ");

		for (var i=0; i<vetorCookie.length; i++)
		{
			var situacao = vetorCookie[i].split("=");
			if (situacao[0] == "iniciada")
			{
				if(situacao[1]=="sim")
					{
						document.cookie="iniciada="+"nao";
						alert("Eleição Finalizada!");
						break;
					}
				else
				{
					alert("Não Existe Eleição Iniciada!");
				}
			}
		}
	}
	else
	{
		alert("Não Existe Eleição Iniciada!");
	}
}



