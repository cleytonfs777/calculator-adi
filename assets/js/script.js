function myFunction(argument1, argument2){
    
    let elem1 = document.getElementById(argument1)
    let ser = elem1.value
    let elem2 = document.getElementById(argument2)
    elem2.innerText = ser
    let notaAdp = document.getElementById('nota-adp')
    let finalAdp = document.getElementById('final-adp')
    let finalAdi = document.getElementById('final-adi')

    let nota1 = parseFloat(document.getElementById('disc-nota').innerText)
    let nota2 = parseFloat(document.getElementById('hab-nota').innerText)
    let nota3 = parseFloat(document.getElementById('aptidao-nota').innerText)
    let nota4 = parseFloat(document.getElementById('disponibilidade-nota').innerText)

    let arri = new Array(nota1, nota2, nota3, nota4)
    
    if(!arri.includes(0)){
        let aadp1 = (arri[0] + arri[1] + arri[2] + arri[3])*0.2
        if(aadp1 >= 9){
            notaAdp.innerText = "50"
            finalAdp.innerText = "50"
        }else if(aadp1 >= 7 && aadp1 < 9){
            notaAdp.innerText = "40"
            finalAdp.innerText = "40"
        }else if(aadp1 >= 6 && aadp1 < 7){
            notaAdp.innerText = "30"
            finalAdp.innerText = "30"
        }else if(aadp1 >= 4 && aadp1 < 6){
            notaAdp.innerText = "20"
            finalAdp.innerText = "20"
        }else if(aadp1 >= 1 && aadp1 < 4){
            notaAdp.innerText = "10"
            finalAdp.innerText = "10"
        }else{
            notaAdp.innerText = "0"
            finalAdp.innerText = "0"
        }
        
    }


    let nota5 = parseFloat(document.getElementById('nota-adp').innerText)
    let nota6 = parseFloat(document.getElementById('conceito-nota').innerText)
    let nota7 = parseFloat(document.getElementById('tpb-nota').innerText)
    let item7 = document.getElementById('tpb').selectedIndex

    let arr2 = new Array(nota5, nota6)

    if(item7 == 0){
        document.getElementById('tpb-nota').innerText = '---'
        document.getElementById('final-adi').innerText = '---'
        return
    }
    if((!arr2.includes(0)) && item7 != 0){
        let arr = (arr2[0] + arr2[1] + nota7)
        finalAdi.innerText = arr

    }


}

function limparAadp(){
    document.getElementById('disciplina').value = '0'
    document.getElementById('habilidades').value = '0'
    document.getElementById('aptidao').value = '0'
    document.getElementById('disponibilidade').value = '0'
    document.getElementById('disc-nota').innerText = '0'
    document.getElementById('hab-nota').innerText = '0'
    document.getElementById('aptidao-nota').innerText = '0'
    document.getElementById('disponibilidade-nota').innerText = '0'
    document.getElementById('nota-adp').innerText = '0'
    document.getElementById('final-adp').innerText = '---'
    document.getElementById('final-adi').innerText = '---'

}

function limparAdi(){
    document.getElementById('tpb').value = '0'
    document.getElementById('conceito').value = '0'
    document.getElementById('final-adi').innerText = '---'
    document.getElementById('conceito-nota').innerText = '0'
    document.getElementById('tpb-nota').innerText = '---'
}

// FUNÇAO DAS MODAIS

const openModalButton = document.querySelectorAll(".button-saiba");
const closeModalButton = document.querySelector("#close-modal");
const modaly = document.querySelector("#modal");
const hiddido = document.querySelector("#fade");

const title = document.querySelector("#modal-title");
const legis = document.querySelector("#modal-legis");
const contentm = document.querySelector(".modal-content");


const modalTitulo = new Array("DISCIPLINA", "HABILIDADES PROFISSIONAIS", "APTIDAO FÍSICA", "DISPONIBILIDADE PARA O TRABALHO", "AADP", "CONCEITO", "TPB")
const modalLegis = new Array("Resolução 808/2018", "Resolução 808/2018", "Resolução 808/2018", "Resolução 808/2018", "Resolução 807/2018", "Resolução 807/2018", "Resolução 807/2018")

const modalConteudo0 = "<p>Art. 9º - Para a avaliação da disciplina será utilizado o conceito disciplinar do militar, conforme CEDM.</p>Art. 10 - O conceito disciplinar será aferido em:<br>I - 10 pontos para o conceito 'A'<br>II - 9 pontos para o conceito 'B' com pontuação superior a 35 pontos positivos;<br>III - 8 pontos para o conceito 'B' com pontuação de 25 pontos positivos até 35 pontos positivos;<br>IV - 7 pontos para o conceito 'B' com pontuação positiva até 24 pontos;<br>V - 6 pontos para o conceito 'B' com pontuação de zero ponto;<br>V - 5 pontos para o conceito 'B' com pontuação negativa superior a 25 pontos;<br>VI - 4 pontos para o conceito 'B' com pontuação negativa de 25 pontos, ou menor;<br>VII - 1 ponto para o conceito 'C';</p><p>§ 1º - Para o militar recém incluído no CBMMG, será utilizada a pontuação máxima até que este alcance o conceito 'A”, salvo se for punido disciplinarmente, situação em que se observará a regra estabelecida no caput.</p><p>§ 2º - Para a realização da AADP, o conceito disciplinar será considerado na data prevista no Art. 5º.</p>"

const modalConteudo1 = "<p>Art. 11 - A aferição das habilidades profissionais terá como referência a ATP, que tem execução disciplinada em resolução específica.</p><p>Parágrafo único - O resultado da ATP será utilizado na AADP da seguinte forma:<br>I - 15 pontos para o militar apto;<br>II - 3 pontos para o militar inapto.</p>"

const modalConteudo2 = "<p>Art. 16 - A aferição da aptidão física terá como referência o TAF, que tem execução disciplinada em resolução específica.</p><p>Parágrafo único - O resultado do TAF será utilizado na AADP da seguinte forma:<br>I - 15 pontos para média final de 9 a 10 pontos;<br>II - 14 pontos para média final de 8 a 8,99 pontos;<br>III - 13 pontos para média final de 7 a 7,99 pontos;<br>IV - 12 pontos para média final de 6 a 6,99 pontos;<br>V - 3 pontos para média final inferior a 6 pontos.</p><p>Art. 17 - Para a realização da AADP, será utilizado o TAF feito no ano anterior.</p>"

const modalConteudo3 = "<p>Art. 19 - A disponibilidade para o trabalho será apurada no período de 12 meses anteriores ao dia 1º de julho de cada ano.</p><p>Parágrafo único - A disponibilidade para o serviço será pontuada da seguinte forma:<br>I - 10 pontos para afastamento inexistente;<br>II - 9 pontos para afastamento de 1 até 30 dias;<br>III - 8 pontos para afastamento de 31 até 45 dias;<br>IV - 7 pontos para afastamento de 46 até 60 dias;<br>V - 5 pontos para afastamento de 61 até 90 dias;<br>VI - 3 pontos para afastamento acima<p>Art. 20 - Os seguintes dias de afastamento serão considerados como efetivamente trabalhados na contagem de disponibilidade para o serviço:<br>I - férias anuais;<br>II - férias prêmio;<br>III - licença maternidade ou paternidade;<br>IV - licença saúde até 30 dias;<br>V - dispensa de serviço: núpcias, luto, Programa de Preparação para a Reserva,doação de sangue, trânsito e instalação e aquelas decorrentes da Lei nº 14.310/2002;VI - licença por motivo de doença em pessoa da família até 30 dias.</p><p>Parágrafo único - Ao militar com licença saúde que estiver amparado em Atestado de Origem (AO) não se aplica o limite de tempo previsto no inciso IV.</p>"

const modalConteudo4 = "<p>Art. 6º - A AADP será regulada em resolução específica e a pontuação nela obtida corresponderá aos seguintes níveis de desempenho:<br>I - pontuação de 9 até 10 pontos, inclusive: nível superior de desempenho;<br>II - pontuação de 7 até 8,99 pontos, inclusive: nível alto de desempenho;<br>III - pontuação de 6,00 até 6,99 pontos, inclusive: nível intermediário de desempenho;<br>IV - pontuação de 4,00 até 5,99 pontos, inclusive: nível baixo de desempenho;<br>V - pontuação de 1,0 até 3,99 pontos, inclusive: nível inferior de desempenho.</p><p>Art. 7º - Os níveis de desempenho, obtidos nos termos do artigo anterior, corresponderão à pontuação a seguir estabelecida, a qual será somada aos demais fatores da ADI, nos termos do Art. 4º:<br>I - 50 pontos para o nível superior de desempenho;<br>II - 40 pontos para o nível alto de desempenho;<br>III - 30 pontos para o nível intermediário de desempenho;<br>IV - 20 pontos para o nível baixo de desempenho;<br>V - 10 pontos para o nível inferior de desempenho.</p>"

const modalConteudo5 = "<p>Art. 9º - O conceito individual previsto no CEDM será aferido em:<br> I - 30 pontos para os conceitos 'A' ou 'B' com pontuação igual ou superior a 25;<br>II - 25 pontos para o conceito 'B' com pontuação de zero até 24;<br>III - 20 pontos para o conceito 'B' com pontuação de -24 até -1;<br>IV - 15 pontos para o conceito 'B' com pontuação de -50 até -25;<br>V - zero ponto para o conceito 'C'.</p><p>Parágrafo único - O militar que ingressar no CBMMG e atender as condições para a obtenção do ADE terá seu conceito"

const modalConteudo6 = "<p>Art. 10 - O TPB é a atividade que visa à atualização e o aperfeiçoamento do bombeiro militar, com vistas ao cumprimento de suas missões constitucionais.</p><p>Art. 11 - O TPB compreende o TAF, a ATP e o Tiro Prático, todos executados conforme normas em vigor na Corporação.</p><p>Art. 12 - O TPB, para fins de composição da ADI, será aferido em:I - 20 pontos para aptidão nas três provas;<br>II - 15 pontos para aptidão em duas das três provas;<br>III - 10 pontos para aptidão em uma das três provas;<br>IV - zero ponto para inaptidão em todas as provas.</p>"

const toggleModal = () => {
    [modaly, hiddido].forEach((el)=>el.classList.toggle("hide"));
}


[closeModalButton, hiddido].forEach((el) => {
    el.addEventListener("click", ()=>{
        //Primeiro botao saiba mais
        if(el.id == 'modal-disc'){
            title.innerText = modalTitulo[0]
            legis.innerText = modalLegis[0]
            contentm.innerHTML = modalConteudo0
        } else if(el.id == 'modal-hab'){
            title.innerText = modalTitulo[1]
            legis.innerText = modalLegis[1]
            contentm.innerHTML = modalConteudo1
        } else if(el.id == 'modal-apt'){
            title.innerText = modalTitulo[2]
            legis.innerText = modalLegis[2]
            contentm.innerHTML = modalConteudo2
        } else if(el.id == 'modal-disp'){
            title.innerText = modalTitulo[3]
            legis.innerText = modalLegis[3]
            contentm.innerHTML = modalConteudo3
        } else if(el.id == 'modal-aadp'){
            title.innerText = modalTitulo[4]
            legis.innerText = modalLegis[4]
            contentm.innerHTML = modalConteudo4
        } else if(el.id == 'modal-conc'){
            title.innerText = modalTitulo[5]
            legis.innerText = modalLegis[5]
            contentm.innerHTML = modalConteudo5
        } else if(el.id == 'modal-tpb'){
            title.innerText = modalTitulo[6]
            legis.innerText = modalLegis[6]
            contentm.innerHTML = modalConteudo6
        }
        toggleModal()

    });
});

openModalButton.forEach((el) => {
    el.addEventListener("click", ()=>{
        if(el.id == 'modal-disc'){
            title.innerText = modalTitulo[0]
            legis.innerText = modalLegis[0]
            contentm.innerHTML = modalConteudo0
        } else if(el.id == 'modal-hab'){
            title.innerText = modalTitulo[1]
            legis.innerText = modalLegis[1]
            contentm.innerHTML = modalConteudo1
        } else if(el.id == 'modal-apt'){
            title.innerText = modalTitulo[2]
            legis.innerText = modalLegis[2]
            contentm.innerHTML = modalConteudo2
        } else if(el.id == 'modal-disp'){
            title.innerText = modalTitulo[3]
            legis.innerText = modalLegis[3]
            contentm.innerHTML = modalConteudo3
        } else if(el.id == 'modal-aadp'){
            title.innerText = modalTitulo[4]
            legis.innerText = modalLegis[4]
            contentm.innerHTML = modalConteudo4
        } else if(el.id == 'modal-conc'){
            title.innerText = modalTitulo[5]
            legis.innerText = modalLegis[5]
            contentm.innerHTML = modalConteudo5
        } else if(el.id == 'modal-tpb'){
            title.innerText = modalTitulo[6]
            legis.innerText = modalLegis[6]
            contentm.innerHTML = modalConteudo6
        }
        toggleModal()
    });
});
